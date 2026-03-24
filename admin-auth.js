(function () {
  // Frontend-only access gate for the static admin page.
  // Replace these credentials with a backend auth flow for real security.
  const LOGIN_FILE = "index.html";
  const DASHBOARD_FILE = "admin.html";
  const RECOVERY_FILE = "recovery.html";
  const SESSION_KEY = "agt-admin-session";
  const PASSWORD_STORAGE_KEY = "agt-admin-password";
  const RECOVERY_EMAIL_STORAGE_KEY = "agt-admin-recovery-email";
  const PASSWORD_RESET_OTP_KEY = "agt-admin-password-reset-otp";
  const PASSWORD_RESET_LINK_KEY = "agt-admin-password-reset-link";
  const IDLE_TIMEOUT_STORAGE_KEY = "agt-admin-idle-timeout-minutes";
  const DEFAULT_IDLE_TIMEOUT_MINUTES = 15;
  const IDLE_TIMEOUT_OPTIONS = Object.freeze([1, 2, 5, 15, 30]);
  const RESET_OTP_TTL_MS = 10 * 60 * 1000;
  const RESET_LINK_TTL_MS = 15 * 60 * 1000;
  const ACTIVITY_WRITE_THROTTLE_MS = 5000;
  const SESSION_CHECK_INTERVAL_MS = 5000;
  const SESSION_REFRESH_EVENT = "agt-admin-session-refresh";
  const DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = "Admin@2026";
  let sessionMonitorStarted = false;
  let sessionMonitorId = 0;

  function getCurrentPage() {
    const path = String(window.location.pathname || "");
    return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
  }

  function normalizeUsername(value) {
    return String(value ?? "").trim().toLowerCase();
  }

  function normalizeEmail(value) {
    return String(value ?? "").trim().toLowerCase();
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value));
  }

  function readStoredPassword() {
    try {
      const storedValue = window.localStorage.getItem(PASSWORD_STORAGE_KEY);
      return storedValue ? String(storedValue) : DEFAULT_PASSWORD;
    } catch (error) {
      return DEFAULT_PASSWORD;
    }
  }

  function readStoredRecoveryEmail() {
    try {
      return normalizeEmail(window.localStorage.getItem(RECOVERY_EMAIL_STORAGE_KEY));
    } catch (error) {
      return "";
    }
  }

  function readStoredJson(storageKey) {
    try {
      const rawValue = window.localStorage.getItem(storageKey);

      if (!rawValue) {
        return null;
      }

      const parsedValue = JSON.parse(rawValue);
      return parsedValue && typeof parsedValue === "object" ? parsedValue : null;
    } catch (error) {
      return null;
    }
  }

  function writeStoredJson(storageKey, value) {
    window.localStorage.setItem(storageKey, JSON.stringify(value));
  }

  function clearStoredValue(storageKey) {
    window.localStorage.removeItem(storageKey);
  }

  function normalizeIdleTimeoutMinutes(value) {
    const parsedValue = Number.parseInt(value, 10);
    return IDLE_TIMEOUT_OPTIONS.includes(parsedValue) ? parsedValue : DEFAULT_IDLE_TIMEOUT_MINUTES;
  }

  function readIdleTimeoutMinutes() {
    try {
      return normalizeIdleTimeoutMinutes(window.localStorage.getItem(IDLE_TIMEOUT_STORAGE_KEY));
    } catch (error) {
      return DEFAULT_IDLE_TIMEOUT_MINUTES;
    }
  }

  function getIdleTimeoutMinutes() {
    return readIdleTimeoutMinutes();
  }

  function getIdleTimeoutMs() {
    return getIdleTimeoutMinutes() * 60 * 1000;
  }

  function getPassword() {
    return readStoredPassword();
  }

  function getRecoveryEmail() {
    return readStoredRecoveryEmail();
  }

  function createOtpCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function createResetToken() {
    const randomValues = window.crypto?.getRandomValues
      ? window.crypto.getRandomValues(new Uint32Array(4))
      : Uint32Array.from({ length: 4 }, () => Math.floor(Math.random() * 0xffffffff));

    return [...randomValues]
      .map((value) => value.toString(16).padStart(8, "0"))
      .join("");
  }

  function readPasswordResetOtpRequest() {
    const request = readStoredJson(PASSWORD_RESET_OTP_KEY);

    if (!request || Date.now() >= Number(request.expiresAt ?? 0)) {
      clearStoredValue(PASSWORD_RESET_OTP_KEY);
      return null;
    }

    return request;
  }

  function readPasswordResetLinkRequest() {
    const request = readStoredJson(PASSWORD_RESET_LINK_KEY);

    if (!request || Date.now() >= Number(request.expiresAt ?? 0)) {
      clearStoredValue(PASSWORD_RESET_LINK_KEY);
      return null;
    }

    return request;
  }

  function clearPasswordResetRequests() {
    clearStoredValue(PASSWORD_RESET_OTP_KEY);
    clearStoredValue(PASSWORD_RESET_LINK_KEY);
  }

  function validateNewPassword(nextPassword, activePassword = getPassword()) {
    const nextValue = String(nextPassword ?? "");

    if (nextValue.trim().length < 6) {
      return {
        ok: false,
        code: "password_too_short",
        message: "New password must be at least 6 characters.",
      };
    }

    if (nextValue === activePassword) {
      return {
        ok: false,
        code: "password_unchanged",
        message: "New password must be different from the current password.",
      };
    }

    return {
      ok: true,
      password: nextValue,
    };
  }

  function savePasswordValue(nextPassword) {
    try {
      window.localStorage.setItem(PASSWORD_STORAGE_KEY, String(nextPassword ?? ""));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        code: "password_storage_unavailable",
        message: "Unable to save the new password on this browser.",
      };
    }
  }

  function buildResetLink(token, email) {
    const resetUrl = new URL(RECOVERY_FILE, window.location.href);
    resetUrl.searchParams.set("resetToken", token);
    resetUrl.searchParams.set("email", normalizeEmail(email));
    return resetUrl.toString();
  }

  function getResetLinkContext(search = window.location.search) {
    const params = new URLSearchParams(String(search ?? ""));
    const token = String(params.get("resetToken") ?? "").trim();
    const email = normalizeEmail(params.get("email"));
    const request = readPasswordResetLinkRequest();

    if (!token || !email || !request) {
      return null;
    }

    if (request.token !== token || normalizeEmail(request.email) !== email) {
      return null;
    }

    return {
      token,
      email,
      expiresAt: Number(request.expiresAt ?? 0),
    };
  }

  function getOtpRequestContext() {
    const request = readPasswordResetOtpRequest();

    if (!request) {
      return null;
    }

    return {
      email: normalizeEmail(request.email),
      expiresAt: Number(request.expiresAt ?? 0),
    };
  }

  function saveRecoveryEmail(email) {
    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      return {
        ok: false,
        code: "invalid_recovery_email",
        message: "Enter a valid email address.",
      };
    }

    try {
      window.localStorage.setItem(RECOVERY_EMAIL_STORAGE_KEY, normalizedEmail);
      clearPasswordResetRequests();
    } catch (error) {
      return {
        ok: false,
        code: "recovery_email_storage_unavailable",
        message: "Unable to save the recovery email on this browser.",
      };
    }

    return {
      ok: true,
      email: normalizedEmail,
      message: "Recovery email saved.",
    };
  }

  function validateRecoveryEmailMatch(email) {
    const normalizedEmail = normalizeEmail(email);
    const recoveryEmail = getRecoveryEmail();

    if (!recoveryEmail) {
      return {
        ok: false,
        code: "recovery_email_missing",
        message: "No recovery email is saved in Settings.",
      };
    }

    if (!isValidEmail(normalizedEmail)) {
      return {
        ok: false,
        code: "invalid_recovery_email",
        message: "Enter a valid email address.",
      };
    }

    if (normalizedEmail !== recoveryEmail) {
      return {
        ok: false,
        code: "recovery_email_mismatch",
        message: "This email does not match the recovery email saved in Settings.",
      };
    }

    return {
      ok: true,
      email: recoveryEmail,
    };
  }

  function requestPasswordResetOtp(email) {
    const emailResult = validateRecoveryEmailMatch(email);

    if (!emailResult.ok) {
      return emailResult;
    }

    const otp = createOtpCode();
    const issuedAt = Date.now();
    const request = {
      email: emailResult.email,
      otp,
      issuedAt,
      expiresAt: issuedAt + RESET_OTP_TTL_MS,
    };

    try {
      writeStoredJson(PASSWORD_RESET_OTP_KEY, request);
    } catch (error) {
      return {
        ok: false,
        code: "reset_request_storage_unavailable",
        message: "Unable to create the reset OTP on this browser.",
      };
    }

    return {
      ok: true,
      email: emailResult.email,
      otp,
      expiresAt: request.expiresAt,
      message: "Reset OTP created.",
    };
  }

  function requestPasswordResetLink(email) {
    const emailResult = validateRecoveryEmailMatch(email);

    if (!emailResult.ok) {
      return emailResult;
    }

    const token = createResetToken();
    const issuedAt = Date.now();
    const request = {
      email: emailResult.email,
      token,
      issuedAt,
      expiresAt: issuedAt + RESET_LINK_TTL_MS,
    };

    try {
      writeStoredJson(PASSWORD_RESET_LINK_KEY, request);
    } catch (error) {
      return {
        ok: false,
        code: "reset_request_storage_unavailable",
        message: "Unable to create the reset link on this browser.",
      };
    }

    return {
      ok: true,
      email: emailResult.email,
      link: buildResetLink(token, emailResult.email),
      expiresAt: request.expiresAt,
      message: "Reset link created.",
    };
  }

  function verifyPasswordResetOtp(email, otp) {
    const request = readPasswordResetOtpRequest();

    if (!request) {
      return {
        ok: false,
        code: "reset_request_missing",
        message: "No active OTP reset request was found.",
      };
    }

    if (normalizeEmail(email) !== normalizeEmail(request.email)) {
      return {
        ok: false,
        code: "recovery_email_mismatch",
        message: "This email does not match the recovery email saved in Settings.",
      };
    }

    if (String(otp ?? "").trim() !== String(request.otp ?? "").trim()) {
      return {
        ok: false,
        code: "invalid_otp",
        message: "OTP code is incorrect.",
      };
    }

    return {
      ok: true,
      email: request.email,
      expiresAt: Number(request.expiresAt ?? 0),
      message: "OTP verified.",
    };
  }

  function readSession() {
    try {
      const rawValue = window.sessionStorage.getItem(SESSION_KEY);

      if (!rawValue) {
        return null;
      }

      const parsedValue = JSON.parse(rawValue);

      if (!parsedValue || typeof parsedValue !== "object") {
        return null;
      }

      return parsedValue;
    } catch (error) {
      return null;
    }
  }

  function clearSession() {
    window.sessionStorage.removeItem(SESSION_KEY);
  }

  function writeSession(session) {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function dispatchSessionRefresh(session) {
    window.dispatchEvent(
      new CustomEvent(SESSION_REFRESH_EVENT, {
        detail: session ?? null,
      }),
    );
  }

  function isSessionValid(session) {
    if (!session || !session.username || !session.expiresAt) {
      return false;
    }

    if (Date.now() >= Number(session.expiresAt)) {
      clearSession();
      return false;
    }

    return true;
  }

  function getSession() {
    const session = readSession();
    return isSessionValid(session) ? session : null;
  }

  function isAuthenticated() {
    return Boolean(getSession());
  }

  function setSession(username) {
    const now = Date.now();
    const session = {
      username,
      issuedAt: now,
      lastActiveAt: now,
      expiresAt: now + getIdleTimeoutMs(),
    };

    writeSession(session);
    dispatchSessionRefresh(session);
  }

  function refreshSessionActivity(force = false) {
    const session = getSession();

    if (!session) {
      return null;
    }

    const now = Date.now();
    const lastActiveAt = Number(session.lastActiveAt ?? session.issuedAt ?? 0);

    if (!force && now - lastActiveAt < ACTIVITY_WRITE_THROTTLE_MS) {
      return session;
    }

    const nextSession = {
      ...session,
      lastActiveAt: now,
      expiresAt: now + getIdleTimeoutMs(),
    };

    writeSession(nextSession);
    dispatchSessionRefresh(nextSession);
    return nextSession;
  }

  function saveIdleTimeoutMinutes(value) {
    const timeoutMinutes = normalizeIdleTimeoutMinutes(value);

    try {
      window.localStorage.setItem(IDLE_TIMEOUT_STORAGE_KEY, String(timeoutMinutes));
    } catch (error) {
      // Ignore storage issues and keep using the normalized value for this call.
    }

    refreshSessionActivity(true);
    return timeoutMinutes;
  }

  function startSessionMonitor() {
    if (sessionMonitorStarted || getCurrentPage() !== DASHBOARD_FILE.toLowerCase()) {
      return;
    }

    const handleActivity = () => {
      refreshSessionActivity();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        return;
      }

      const session = getSession();

      if (!session) {
        redirectToLogin();
        return;
      }

      refreshSessionActivity(true);
    };
    const activityEvents = ["pointerdown", "keydown", "scroll", "mousemove", "touchstart", "focus"];

    for (const eventName of activityEvents) {
      window.addEventListener(eventName, handleActivity, { passive: true });
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    sessionMonitorId = window.setInterval(() => {
      const session = getSession();

      if (!session) {
        window.clearInterval(sessionMonitorId);
        redirectToLogin();
        return;
      }

      dispatchSessionRefresh(session);
    }, SESSION_CHECK_INTERVAL_MS);

    refreshSessionActivity(true);
    sessionMonitorStarted = true;
  }

  function redirectToLogin() {
    window.location.replace(LOGIN_FILE);
  }

  function redirectToDashboard() {
    window.location.replace(DASHBOARD_FILE);
  }

  function ensureAuthenticated() {
    if (!isAuthenticated()) {
      redirectToLogin();
    }
  }

  function login(username, password) {
    if (
      normalizeUsername(username) !== normalizeUsername(DEFAULT_USERNAME) ||
      String(password ?? "") !== getPassword()
    ) {
      return {
        ok: false,
        message: "Invalid username or password.",
      };
    }

    setSession(DEFAULT_USERNAME);

    return {
      ok: true,
      message: "Signed in.",
    };
  }

  function changePassword(currentPassword, nextPassword) {
    const activePassword = getPassword();
    const currentValue = String(currentPassword ?? "");

    if (currentValue !== activePassword) {
      return {
        ok: false,
        code: "incorrect_current_password",
        message: "Current password is incorrect.",
      };
    }

    const passwordResult = validateNewPassword(nextPassword, activePassword);

    if (!passwordResult.ok) {
      return passwordResult;
    }

    const saveResult = savePasswordValue(passwordResult.password);

    if (!saveResult.ok) {
      return saveResult;
    }

    refreshSessionActivity(true);
    clearPasswordResetRequests();

    return {
      ok: true,
      message: "Password updated.",
    };
  }

  function resetPasswordWithOtp(email, otp, nextPassword) {
    const request = readPasswordResetOtpRequest();

    if (!request) {
      return {
        ok: false,
        code: "reset_request_missing",
        message: "No active OTP reset request was found.",
      };
    }

    if (normalizeEmail(email) !== normalizeEmail(request.email)) {
      return {
        ok: false,
        code: "recovery_email_mismatch",
        message: "This email does not match the recovery email saved in Settings.",
      };
    }

    if (String(otp ?? "").trim() !== String(request.otp ?? "").trim()) {
      return {
        ok: false,
        code: "invalid_otp",
        message: "OTP code is incorrect.",
      };
    }

    const passwordResult = validateNewPassword(nextPassword, getPassword());

    if (!passwordResult.ok) {
      return passwordResult;
    }

    const saveResult = savePasswordValue(passwordResult.password);

    if (!saveResult.ok) {
      return saveResult;
    }

    clearPasswordResetRequests();

    return {
      ok: true,
      message: "Password updated.",
    };
  }

  function resetPasswordWithToken(token, email, nextPassword) {
    const request = readPasswordResetLinkRequest();

    if (!request) {
      return {
        ok: false,
        code: "reset_request_missing",
        message: "No active reset link was found.",
      };
    }

    if (
      String(token ?? "").trim() !== String(request.token ?? "").trim()
      || normalizeEmail(email) !== normalizeEmail(request.email)
    ) {
      return {
        ok: false,
        code: "invalid_reset_link",
        message: "Reset link is invalid or expired.",
      };
    }

    const passwordResult = validateNewPassword(nextPassword, getPassword());

    if (!passwordResult.ok) {
      return passwordResult;
    }

    const saveResult = savePasswordValue(passwordResult.password);

    if (!saveResult.ok) {
      return saveResult;
    }

    clearPasswordResetRequests();

    return {
      ok: true,
      message: "Password updated.",
    };
  }

  function logout() {
    clearSession();
    redirectToLogin();
  }

  window.adminAuth = {
    defaultUsername: DEFAULT_USERNAME,
    dashboardFile: DASHBOARD_FILE,
    idleTimeoutOptions: [...IDLE_TIMEOUT_OPTIONS],
    getSession,
    getIdleTimeoutMinutes,
    getRecoveryEmail,
    getOtpRequestContext,
    getResetLinkContext,
    isAuthenticated,
    ensureAuthenticated,
    login,
    changePassword,
    requestPasswordResetOtp,
    requestPasswordResetLink,
    verifyPasswordResetOtp,
    resetPasswordWithOtp,
    resetPasswordWithToken,
    saveRecoveryEmail,
    logout,
    refreshSessionActivity,
    saveIdleTimeoutMinutes,
  };

  const currentPage = getCurrentPage();

  if (currentPage === DASHBOARD_FILE.toLowerCase()) {
    ensureAuthenticated();
    startSessionMonitor();
  } else if (currentPage === LOGIN_FILE.toLowerCase() && isAuthenticated()) {
    redirectToDashboard();
  }
})();
