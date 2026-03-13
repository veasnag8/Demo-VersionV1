(function () {
  // Frontend-only access gate for the static admin page.
  // Replace these credentials with a backend auth flow for real security.
  const LOGIN_FILE = "admin-login.html";
  const DASHBOARD_FILE = "admin.html";
  const SESSION_KEY = "agt-admin-session";
  const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
  const DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = "Admin@2026";

  function getCurrentPage() {
    const path = String(window.location.pathname || "");
    return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
  }

  function normalizeUsername(value) {
    return String(value ?? "").trim().toLowerCase();
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

    window.sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        username,
        issuedAt: now,
        expiresAt: now + SESSION_TTL_MS,
      }),
    );
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
      String(password ?? "") !== DEFAULT_PASSWORD
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

  function logout() {
    clearSession();
    redirectToLogin();
  }

  window.adminAuth = {
    defaultUsername: DEFAULT_USERNAME,
    dashboardFile: DASHBOARD_FILE,
    getSession,
    isAuthenticated,
    ensureAuthenticated,
    login,
    logout,
  };

  const currentPage = getCurrentPage();

  if (currentPage === DASHBOARD_FILE.toLowerCase()) {
    ensureAuthenticated();
  } else if (currentPage === LOGIN_FILE.toLowerCase() && isAuthenticated()) {
    redirectToDashboard();
  }
})();
