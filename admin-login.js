const adminLoginForm = document.querySelector("#adminLoginForm");
const adminLoginUsername = document.querySelector("#adminLoginUsername");
const adminLoginPassword = document.querySelector("#adminLoginPassword");
const adminLoginStatus = document.querySelector("#adminLoginStatus");
const adminLoginBrand = document.querySelector("#adminLoginBrand");
const adminLoginBrandTitle = document.querySelector("#adminLoginBrandTitle");
const adminLoginBrandSubtitle = document.querySelector("#adminLoginBrandSubtitle");
const adminLoginUsernameLabel = document.querySelector("#adminLoginUsernameLabel");
const adminLoginPasswordLabel = document.querySelector("#adminLoginPasswordLabel");
const adminLoginForgotPasswordLink = document.querySelector("#adminLoginForgotPasswordLink");
const adminLoginBackLink = document.querySelector("#adminLoginBackLink");
const adminLoginMeta = document.querySelector("#adminLoginMeta");
const adminLoginSubmitButton = document.querySelector("#adminLoginSubmitButton");
const adminLoginShowcaseEyebrow = document.querySelector("#adminLoginShowcaseEyebrow");
const adminLoginShowcaseTitle = document.querySelector("#adminLoginShowcaseTitle");
const adminLoginShowcaseText = document.querySelector("#adminLoginShowcaseText");
const adminLoginCardOneTitle = document.querySelector("#adminLoginCardOneTitle");
const adminLoginCardOneText = document.querySelector("#adminLoginCardOneText");
const adminLoginCardTwoTitle = document.querySelector("#adminLoginCardTwoTitle");
const adminLoginCardTwoText = document.querySelector("#adminLoginCardTwoText");
const adminLoginCardThreeTitle = document.querySelector("#adminLoginCardThreeTitle");
const adminLoginCardThreeText = document.querySelector("#adminLoginCardThreeText");
const adminLoginRecoveryEyebrow = document.querySelector("#adminLoginRecoveryEyebrow");
const adminLoginRecoveryTitle = document.querySelector("#adminLoginRecoveryTitle");
const adminLoginRecoveryCopy = document.querySelector("#adminLoginRecoveryCopy");
const adminLoginRecoverySection = document.querySelector("#adminLoginRecoverySection");
const adminLoginRecoveryRequestForm = document.querySelector("#adminLoginRecoveryRequestForm");
const adminLoginRecoveryRequestStep = document.querySelector("#adminLoginRecoveryRequestStep");
const adminLoginRecoveryRequestTitle = document.querySelector("#adminLoginRecoveryRequestTitle");
const adminLoginRecoveryEmailLabel = document.querySelector("#adminLoginRecoveryEmailLabel");
const adminLoginRecoveryEmail = document.querySelector("#adminLoginRecoveryEmail");
const adminLoginSendOtpButton = document.querySelector("#adminLoginSendOtpButton");
const adminLoginSendResetLinkButton = document.querySelector("#adminLoginSendResetLinkButton");
const adminLoginOtpResetForm = document.querySelector("#adminLoginOtpResetForm");
const adminLoginOtpStepLabel = document.querySelector("#adminLoginOtpStepLabel");
const adminLoginOtpResetTitle = document.querySelector("#adminLoginOtpResetTitle");
const adminLoginOtpStepCopy = document.querySelector("#adminLoginOtpStepCopy");
const adminLoginOtpEmailLabel = document.querySelector("#adminLoginOtpEmailLabel");
const adminLoginOtpEmail = document.querySelector("#adminLoginOtpEmail");
const adminLoginOtpCodeLabel = document.querySelector("#adminLoginOtpCodeLabel");
const adminLoginOtpCode = document.querySelector("#adminLoginOtpCode");
const adminLoginOtpVerifyButton = document.querySelector("#adminLoginOtpVerifyButton");
const adminLoginOtpPasswordFields = document.querySelector("#adminLoginOtpPasswordFields");
const adminLoginOtpNewPasswordLabel = document.querySelector("#adminLoginOtpNewPasswordLabel");
const adminLoginOtpNewPassword = document.querySelector("#adminLoginOtpNewPassword");
const adminLoginOtpConfirmPasswordLabel = document.querySelector("#adminLoginOtpConfirmPasswordLabel");
const adminLoginOtpConfirmPassword = document.querySelector("#adminLoginOtpConfirmPassword");
const adminLoginOtpSubmitButton = document.querySelector("#adminLoginOtpSubmitButton");
const adminLoginLinkResetForm = document.querySelector("#adminLoginLinkResetForm");
const adminLoginLinkResetTitle = document.querySelector("#adminLoginLinkResetTitle");
const adminLoginLinkResetCopy = document.querySelector("#adminLoginLinkResetCopy");
const adminLoginLinkEmailLabel = document.querySelector("#adminLoginLinkEmailLabel");
const adminLoginLinkEmail = document.querySelector("#adminLoginLinkEmail");
const adminLoginLinkNewPasswordLabel = document.querySelector("#adminLoginLinkNewPasswordLabel");
const adminLoginLinkNewPassword = document.querySelector("#adminLoginLinkNewPassword");
const adminLoginLinkConfirmPasswordLabel = document.querySelector("#adminLoginLinkConfirmPasswordLabel");
const adminLoginLinkConfirmPassword = document.querySelector("#adminLoginLinkConfirmPassword");
const adminLoginLinkSubmitButton = document.querySelector("#adminLoginLinkSubmitButton");
const adminLoginRecoveryOutputWrap = document.querySelector("#adminLoginRecoveryOutputWrap");
const adminLoginRecoveryOutputLabel = document.querySelector("#adminLoginRecoveryOutputLabel");
const adminLoginRecoveryOutput = document.querySelector("#adminLoginRecoveryOutput");
const adminLoginLanguageButtons = [...document.querySelectorAll("[data-admin-login-language-option]")];

const LOGIN_STORAGE_KEY = "agt-admin-language";
const LOGIN_COPY = {
  en: {
    locale: "en-US",
    pageTitle: "Admin Login | Angkor Garden Tools",
    brandAria: "Open user catalog",
    brandTitle: "Angkor Garden Tools",
    brandSubtitle: "Admin sign in",
    recoveryBrandSubtitle: "Password recovery",
    recoveryPageTitle: "Password Recovery | Angkor Garden Tools",
    username: "Username",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    forgotPasswordLink: "Forgot Password?",
    backToLogin: "Back to Sign In",
    meta: 'Default username: <strong>admin</strong>.',
    submit: "Sign In",
    showcaseEyebrow: "Admin Features",
    showcaseTitle: "Standard dashboard flow for catalog control.",
    showcaseText: "Sign in, search records, and update item data.",
    cardOneTitle: "Manage product data",
    cardOneText: "Create, edit, or delete catalog items.",
    cardTwoTitle: "Protected browser session",
    cardTwoText: "Sign in before opening the dashboard.",
    cardThreeTitle: "Shared catalog store",
    cardThreeText: "Updates sync with the user catalog.",
    invalidLogin: "Invalid username or password.",
    signedIn: "Signed in.",
    signInError: "Unable to sign in.",
    recoveryEyebrow: "Forgot Password",
    recoveryTitle: "Recovery",
    recoveryCopy: "Use the recovery email saved in Settings to create an OTP or reset link.",
    recoveryRequestStep: "Step 1",
    recoveryRequestTitle: "Send OTP / Send Reset Link",
    recoveryEmailLabel: "Email",
    recoveryEmailPlaceholder: "Enter recovery email",
    sendOtp: "Send OTP",
    sendResetLink: "Send Reset Link",
    otpStepLabel: "Step 2",
    otpResetTitle: "Enter OTP Code",
    otpStepCopy: "Enter the OTP code first. If it is correct, you can set a new password.",
    otpEmailLabel: "Email",
    otpCodeLabel: "OTP Code",
    otpCodePlaceholder: "Enter OTP code",
    otpVerify: "Verify OTP",
    otpVerified: "OTP verified. Set a new password now.",
    otpVerifyFirst: "Verify the OTP code first.",
    newPasswordLabel: "New Password",
    confirmPasswordLabel: "Confirm Password",
    newPasswordPlaceholder: "Enter new password",
    confirmPasswordPlaceholder: "Confirm new password",
    otpSubmit: "Save New Password",
    linkResetTitle: "Reset Password With Link",
    linkResetCopy: "Open the reset link, then set a new password here.",
    linkSubmit: "Submit Link Reset",
    outputDefault: "Recovery Result",
    outputOtp: "OTP Preview",
    outputLink: "Reset Link Preview",
  },
  km: {
    locale: "km-KH",
    pageTitle: "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1795\u17D2\u1791\u17B6\u17C6\u1784\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784 | Angkor Garden Tools",
    brandAria: "\u1794\u17BE\u1780\u1780\u17B6\u178F\u17B6\u17A1\u17BB\u1780\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE",
    brandTitle: "Angkor Garden Tools",
    brandSubtitle: "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1795\u17D2\u1791\u17B6\u17C6\u1784\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784",
    recoveryBrandSubtitle: "\u179F\u17D2\u178A\u17B6\u179A\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
    recoveryPageTitle: "\u179F\u17D2\u178A\u17B6\u179A\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB | Angkor Garden Tools",
    username: "\u1788\u17D2\u1798\u17C4\u17C7\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE",
    password: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
    passwordPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
    forgotPasswordLink: "\u1797\u17D2\u179B\u17C1\u1785\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB?",
    backToLogin: "\u178F\u17D2\u179A\u17A1\u1794\u17CB\u1791\u17C5\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE",
    meta: '\u1788\u17D2\u1798\u17C4\u17C7\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE\u178A\u17BE\u1798: <strong>admin</strong>\u17D4',
    submit: "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE",
    showcaseEyebrow: "\u1798\u17BB\u1781\u1784\u17B6\u179A\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784",
    showcaseTitle: "\u179B\u17C6\u17A0\u17BC\u179A\u1795\u17D2\u1791\u17B6\u17C6\u1784\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u179F\u17D2\u178F\u1784\u17CB\u178A\u17B6\u179A \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1780\u17B6\u178F\u17B6\u17A1\u17BB\u1780\u17D4",
    showcaseText: "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE \u179F\u17D2\u179C\u17C2\u1784\u179A\u1780\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799 \u1793\u17B7\u1784\u1780\u17C2\u1794\u17D2\u179A\u17C2\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1791\u17C6\u1793\u17B7\u1789\u1794\u17B6\u1793\u1784\u17B6\u1799\u179F\u17D2\u179A\u17BD\u179B\u17D4",
    cardOneTitle: "\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1795\u179B\u17B7\u178F\u1795\u179B",
    cardOneText: "\u1794\u1784\u17D2\u1780\u17BE\u178F \u1780\u17C2\u1794\u17D2\u179A\u17C2 \u17AC\u179B\u17BB\u1794\u1791\u17C6\u1793\u17B7\u1789\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u178F\u17B6\u17A1\u17BB\u1780\u17D4",
    cardTwoTitle: "\u179F\u1798\u17D0\u1799\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1798\u17B6\u1793\u1780\u17B6\u179A\u1780\u17B6\u179A\u1796\u17B6\u179A",
    cardTwoText: "\u178F\u17D2\u179A\u17BC\u179C\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1787\u17B6\u1798\u17BB\u1793\u179F\u17B7\u1793 \u1798\u17BB\u1793\u1794\u17BE\u1780\u1795\u17D2\u1791\u17B6\u17C6\u1784\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u17D4",
    cardThreeTitle: "\u1783\u17D2\u179B\u17B6\u17C6\u1784\u1780\u17B6\u178F\u17B6\u17A1\u17BB\u1780\u179A\u17BD\u1798",
    cardThreeText: "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C2\u1794\u17D2\u179A\u17C2 \u1793\u17B9\u1784\u179F\u1798\u1780\u17B6\u179B\u1780\u1798\u17D2\u1798\u1787\u17B6\u1798\u17BD\u1799\u1780\u17B6\u178F\u17B6\u17A1\u17BB\u1780\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE\u17D4",
    invalidLogin: "\u1788\u17D2\u1798\u17C4\u17C7\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE \u17AC \u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB \u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4",
    signedIn: "\u1794\u17B6\u1793\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u179A\u17BD\u1785\u17A0\u17BE\u1799\u17D4",
    signInError: "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u1791\u17C1\u17D4",
    recoveryEyebrow: "\u1797\u17D2\u179B\u17C1\u1785\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
    recoveryTitle: "\u1780\u17B6\u179A\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
    recoveryCopy: "\u1794\u17D2\u179A\u17BE\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u178A\u17C2\u179B\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1793\u17C5 Settings \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB OTP \u17AC reset link\u17D4",
    recoveryRequestStep: "\u1787\u17C6\u17A0\u17B6\u1793\u17B8 1",
    recoveryRequestTitle: "\u1795\u17D2\u1789\u17BE OTP / \u1795\u17D2\u1789\u17BE Reset Link",
    recoveryEmailLabel: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    recoveryEmailPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
    sendOtp: "\u1795\u17D2\u1789\u17BE OTP",
    sendResetLink: "\u1795\u17D2\u1789\u17BE Reset Link",
    otpStepLabel: "\u1787\u17C6\u17A0\u17B6\u1793\u17B8 2",
    otpResetTitle: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17BC\u178A OTP",
    otpStepCopy: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17BC\u178A OTP \u1787\u17B6\u1798\u17BB\u1793\u179F\u17B7\u1793\u17D4 \u1794\u17BE\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C \u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u178A\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u1794\u17B6\u1793\u17D4",
    otpEmailLabel: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    otpCodeLabel: "\u1780\u17BC\u178A OTP",
    otpCodePlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17BC\u178A OTP",
    otpVerify: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB OTP",
    otpVerified: "OTP \u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u17A0\u17BE\u1799\u17D4 \u179F\u17BC\u1798\u178A\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u17D4",
    otpVerifyFirst: "\u179F\u17BC\u1798\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u1780\u17BC\u178A OTP \u1787\u17B6\u1798\u17BB\u1793\u179F\u17B7\u1793\u17D4",
    newPasswordLabel: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
    confirmPasswordLabel: "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
    newPasswordPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
    confirmPasswordPlaceholder: "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
    otpSubmit: "\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
    linkResetTitle: "\u1794\u17D2\u178A\u17BC\u179A\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u178F\u17B6\u1798 Link",
    linkResetCopy: "\u1794\u17BE\u1780 reset link \u179A\u17BD\u1785 \u1794\u17D2\u179A\u17BE\u1791\u17B8\u1793\u17C1\u17C7\u178A\u17BE\u1798\u17D2\u1794\u17B8\u178A\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u17D4",
    linkSubmit: "\u1794\u1789\u17D2\u1787\u17BC\u1793 Link Reset",
    outputDefault: "\u179B\u1791\u17D2\u1792\u1795\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
    outputOtp: "OTP Preview",
    outputLink: "Reset Link Preview",
  },
};

let currentLoginLanguage = readLoginLanguage();
const isRecoveryOnlyPage = !adminLoginForm && Boolean(adminLoginRecoverySection);
let otpVerifiedState = {
  email: "",
  otp: "",
  verified: false,
};

function readLoginLanguage() {
  try {
    return window.localStorage.getItem(LOGIN_STORAGE_KEY) === "km" ? "km" : "en";
  } catch (error) {
    return "en";
  }
}

function getLoginCopy() {
  return LOGIN_COPY[currentLoginLanguage] ?? LOGIN_COPY.en;
}

function saveLoginLanguage(language) {
  try {
    window.localStorage.setItem(LOGIN_STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage errors on the login page.
  }
}

function showLoginStatus(message, type = "info") {
  if (!adminLoginStatus) {
    return;
  }

  adminLoginStatus.hidden = !message;
  adminLoginStatus.textContent = message;
  adminLoginStatus.classList.toggle("admin-login__status--error", type === "error");
}

function setRecoveryOutput(label, value, mode = "") {
  if (!adminLoginRecoveryOutputWrap || !adminLoginRecoveryOutputLabel || !adminLoginRecoveryOutput) {
    return;
  }

  adminLoginRecoveryOutputWrap.hidden = !value;
  adminLoginRecoveryOutputLabel.textContent = label;
  adminLoginRecoveryOutputLabel.dataset.mode = mode;
  adminLoginRecoveryOutput.value = value;
}

function clearRecoveryOutput() {
  setRecoveryOutput("", "", "");
}

function formatExpiry(expiresAt) {
  if (!expiresAt) {
    return "-";
  }

  try {
    return new Intl.DateTimeFormat(getLoginCopy().locale, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(expiresAt));
  } catch (error) {
    return new Date(expiresAt).toLocaleString();
  }
}

function getResetLinkContext() {
  return window.adminAuth?.getResetLinkContext?.(window.location.search) ?? null;
}

function getOtpRequestContext() {
  return window.adminAuth?.getOtpRequestContext?.() ?? null;
}

function setOtpPasswordStepReady(isReady) {
  if (adminLoginOtpPasswordFields) {
    adminLoginOtpPasswordFields.hidden = !isReady;
  }

  for (const input of [adminLoginOtpNewPassword, adminLoginOtpConfirmPassword]) {
    if (!input) {
      continue;
    }

    input.disabled = !isReady;
    input.required = isReady;

    if (!isReady) {
      input.value = "";
    }
  }
}

function resetOtpVerificationState() {
  otpVerifiedState = {
    email: "",
    otp: "",
    verified: false,
  };
  setOtpPasswordStepReady(false);
}

function openRecoverySection() {
  adminLoginRecoverySection?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.setTimeout(() => {
    adminLoginRecoveryEmail?.focus();
  }, 180);
}

function localizeRecoveryError(result) {
  const copy = getLoginCopy();
  const code = result?.code ?? "";

  if (code === "recovery_email_missing") {
    return currentLoginLanguage === "km"
      ? "\u1798\u17B7\u1793\u1791\u17B6\u1793\u17CB\u1798\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u1793\u17C5 Settings \u1791\u17C1\u17D4"
      : "No recovery email is saved in Settings.";
  }

  if (code === "invalid_recovery_email") {
    return currentLoginLanguage === "km"
      ? "\u179F\u17BC\u1798\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u178A\u17C2\u179B\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4"
      : "Enter a valid email address.";
  }

  if (code === "recovery_email_mismatch") {
    return currentLoginLanguage === "km"
      ? "\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u1793\u17C1\u17C7\u1798\u17B7\u1793\u178A\u17BC\u1785\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u178A\u17C2\u179B\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1793\u17C5 Settings \u1791\u17C1\u17D4"
      : "This email does not match the recovery email saved in Settings.";
  }

  if (code === "invalid_otp") {
    return currentLoginLanguage === "km" ? "\u1780\u17BC\u178A OTP \u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4" : "OTP code is incorrect.";
  }

  if (code === "invalid_reset_link") {
    return currentLoginLanguage === "km"
      ? "Reset link \u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C \u17AC \u1795\u17BB\u178F\u1780\u17C6\u178E\u178F\u17CB\u17A0\u17BE\u1799\u17D4"
      : "Reset link is invalid or expired.";
  }

  if (code === "reset_request_missing") {
    return currentLoginLanguage === "km"
      ? "\u1798\u17B7\u1793\u1798\u17B6\u1793\u179F\u17C6\u178E\u17BE\u179F\u17BB\u17C6\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u178A\u17C2\u179B\u1780\u17C6\u1796\u17BB\u1784\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u1791\u17C1\u17D4"
      : "No active reset request was found.";
  }

  if (code === "password_too_short") {
    return currentLoginLanguage === "km"
      ? "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793\u1799\u17C9\u17B6\u1784\u178F\u17B7\u1785 6 \u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A\u17D4"
      : "New password must be at least 6 characters.";
  }

  if (code === "password_unchanged") {
    return currentLoginLanguage === "km"
      ? "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u178F\u17D2\u179A\u17BC\u179C\u1781\u17BB\u179F\u1796\u17B8\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1785\u17B6\u179F\u17CB\u17D4"
      : "New password must be different from the current password.";
  }

  if (code === "password_storage_unavailable") {
    return currentLoginLanguage === "km"
      ? "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u1794\u17B6\u1793\u1791\u17C1\u17D4"
      : "Unable to save the new password on this browser.";
  }

  if (code === "reset_request_storage_unavailable" || code === "recovery_email_storage_unavailable") {
    return currentLoginLanguage === "km"
      ? "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1794\u1784\u17D2\u1780\u17BE\u178F\u179F\u17C6\u178E\u17BE\u179F\u17BB\u17C6 reset \u1794\u17B6\u1793\u1791\u17C1\u17D4"
      : "Unable to create the reset request on this browser.";
  }

  return result?.message ?? copy.signInError;
}

function syncResetLinkForm() {
  const linkContext = getResetLinkContext();
  const otpContext = linkContext ? null : getOtpRequestContext();

  if (adminLoginRecoveryRequestForm) {
    adminLoginRecoveryRequestForm.hidden = Boolean(linkContext);
  }

  if (adminLoginOtpResetForm) {
    adminLoginOtpResetForm.hidden = !otpContext;
  }

  if (adminLoginLinkResetForm) {
    adminLoginLinkResetForm.hidden = !linkContext;
  }

  if (!otpContext) {
    resetOtpVerificationState();
  } else if (adminLoginOtpEmail && !String(adminLoginOtpEmail.value ?? "").trim()) {
    adminLoginOtpEmail.value = otpContext.email ?? "";
  }

  if (adminLoginLinkEmail) {
    adminLoginLinkEmail.value = linkContext?.email ?? "";
  }
}

function applyLoginLanguage() {
  const copy = getLoginCopy();

  document.documentElement.lang = currentLoginLanguage;
  document.title = isRecoveryOnlyPage ? copy.recoveryPageTitle : copy.pageTitle;
  document.body.dataset.adminLanguage = currentLoginLanguage;

  if (adminLoginBrand) adminLoginBrand.setAttribute("aria-label", copy.brandAria);
  if (adminLoginBrandTitle) adminLoginBrandTitle.textContent = copy.brandTitle;
  if (adminLoginBrandSubtitle) adminLoginBrandSubtitle.textContent = isRecoveryOnlyPage
    ? copy.recoveryBrandSubtitle
    : copy.brandSubtitle;
  if (adminLoginUsernameLabel) adminLoginUsernameLabel.textContent = copy.username;
  if (adminLoginPasswordLabel) adminLoginPasswordLabel.textContent = copy.password;
  if (adminLoginPassword) adminLoginPassword.placeholder = copy.passwordPlaceholder;
  if (adminLoginForgotPasswordLink) adminLoginForgotPasswordLink.textContent = copy.forgotPasswordLink;
  if (adminLoginBackLink) adminLoginBackLink.textContent = copy.backToLogin;
  if (adminLoginMeta) adminLoginMeta.innerHTML = copy.meta;
  if (adminLoginSubmitButton) adminLoginSubmitButton.textContent = copy.submit;
  if (adminLoginShowcaseEyebrow) adminLoginShowcaseEyebrow.textContent = copy.showcaseEyebrow;
  if (adminLoginShowcaseTitle) adminLoginShowcaseTitle.textContent = copy.showcaseTitle;
  if (adminLoginShowcaseText) adminLoginShowcaseText.textContent = copy.showcaseText;
  if (adminLoginCardOneTitle) adminLoginCardOneTitle.textContent = copy.cardOneTitle;
  if (adminLoginCardOneText) adminLoginCardOneText.textContent = copy.cardOneText;
  if (adminLoginCardTwoTitle) adminLoginCardTwoTitle.textContent = copy.cardTwoTitle;
  if (adminLoginCardTwoText) adminLoginCardTwoText.textContent = copy.cardTwoText;
  if (adminLoginCardThreeTitle) adminLoginCardThreeTitle.textContent = copy.cardThreeTitle;
  if (adminLoginCardThreeText) adminLoginCardThreeText.textContent = copy.cardThreeText;
  if (adminLoginRecoveryEyebrow) adminLoginRecoveryEyebrow.textContent = copy.recoveryEyebrow;
  if (adminLoginRecoveryTitle) adminLoginRecoveryTitle.textContent = copy.recoveryTitle;
  if (adminLoginRecoveryCopy) adminLoginRecoveryCopy.textContent = copy.recoveryCopy;
  if (adminLoginRecoveryRequestStep) adminLoginRecoveryRequestStep.textContent = copy.recoveryRequestStep;
  if (adminLoginRecoveryRequestTitle) adminLoginRecoveryRequestTitle.textContent = copy.recoveryRequestTitle;
  if (adminLoginRecoveryEmailLabel) adminLoginRecoveryEmailLabel.textContent = copy.recoveryEmailLabel;
  if (adminLoginRecoveryEmail) adminLoginRecoveryEmail.placeholder = copy.recoveryEmailPlaceholder;
  if (adminLoginSendOtpButton) adminLoginSendOtpButton.textContent = copy.sendOtp;
  if (adminLoginSendResetLinkButton) adminLoginSendResetLinkButton.textContent = copy.sendResetLink;
  if (adminLoginOtpStepLabel) adminLoginOtpStepLabel.textContent = copy.otpStepLabel;
  if (adminLoginOtpResetTitle) adminLoginOtpResetTitle.textContent = copy.otpResetTitle;
  if (adminLoginOtpStepCopy) adminLoginOtpStepCopy.textContent = copy.otpStepCopy;
  if (adminLoginOtpEmailLabel) adminLoginOtpEmailLabel.textContent = copy.otpEmailLabel;
  if (adminLoginOtpEmail) adminLoginOtpEmail.placeholder = copy.recoveryEmailPlaceholder;
  if (adminLoginOtpCodeLabel) adminLoginOtpCodeLabel.textContent = copy.otpCodeLabel;
  if (adminLoginOtpCode) adminLoginOtpCode.placeholder = copy.otpCodePlaceholder;
  if (adminLoginOtpVerifyButton) adminLoginOtpVerifyButton.textContent = copy.otpVerify;
  if (adminLoginOtpNewPasswordLabel) adminLoginOtpNewPasswordLabel.textContent = copy.newPasswordLabel;
  if (adminLoginOtpNewPassword) adminLoginOtpNewPassword.placeholder = copy.newPasswordPlaceholder;
  if (adminLoginOtpConfirmPasswordLabel) adminLoginOtpConfirmPasswordLabel.textContent = copy.confirmPasswordLabel;
  if (adminLoginOtpConfirmPassword) adminLoginOtpConfirmPassword.placeholder = copy.confirmPasswordPlaceholder;
  if (adminLoginOtpSubmitButton) adminLoginOtpSubmitButton.textContent = copy.otpSubmit;
  if (adminLoginLinkResetTitle) adminLoginLinkResetTitle.textContent = copy.linkResetTitle;
  if (adminLoginLinkResetCopy) adminLoginLinkResetCopy.textContent = copy.linkResetCopy;
  if (adminLoginLinkEmailLabel) adminLoginLinkEmailLabel.textContent = copy.recoveryEmailLabel;
  if (adminLoginLinkNewPasswordLabel) adminLoginLinkNewPasswordLabel.textContent = copy.newPasswordLabel;
  if (adminLoginLinkNewPassword) adminLoginLinkNewPassword.placeholder = copy.newPasswordPlaceholder;
  if (adminLoginLinkConfirmPasswordLabel) adminLoginLinkConfirmPasswordLabel.textContent = copy.confirmPasswordLabel;
  if (adminLoginLinkConfirmPassword) adminLoginLinkConfirmPassword.placeholder = copy.confirmPasswordPlaceholder;
  if (adminLoginLinkSubmitButton) adminLoginLinkSubmitButton.textContent = copy.linkSubmit;

  if (adminLoginRecoveryOutputLabel) {
    const mode = adminLoginRecoveryOutputLabel.dataset.mode;
    adminLoginRecoveryOutputLabel.textContent = mode === "otp"
      ? copy.outputOtp
      : mode === "link"
        ? copy.outputLink
        : copy.outputDefault;
  }

  for (const button of adminLoginLanguageButtons) {
    const isActive = button.dataset.adminLoginLanguageOption === currentLoginLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }

  syncResetLinkForm();
}

function setLoginLanguage(language) {
  if (!LOGIN_COPY[language] || currentLoginLanguage === language) {
    return;
  }

  currentLoginLanguage = language;
  saveLoginLanguage(language);
  applyLoginLanguage();
}

function ensurePasswordMatch(nextPassword, confirmPassword) {
  if (String(nextPassword ?? "") !== String(confirmPassword ?? "")) {
    throw new Error(
      currentLoginLanguage === "km"
        ? "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8 \u1793\u17B7\u1784\u1780\u17B6\u179A\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB \u1798\u17B7\u1793\u178A\u17BC\u1785\u1782\u17D2\u1793\u17B6\u17D4"
        : "The new password and confirm password do not match.",
    );
  }
}

async function copyText(text) {
  if (!navigator.clipboard?.writeText) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
}

function clearResetLinkQuery() {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.delete("resetToken");
  nextUrl.searchParams.delete("email");
  window.history.replaceState({}, "", nextUrl.pathname + nextUrl.search);
}

async function handleSendOtp() {
  const copy = getLoginCopy();
  const result = window.adminAuth?.requestPasswordResetOtp?.(adminLoginRecoveryEmail?.value ?? "");

  if (!result?.ok) {
    showLoginStatus(localizeRecoveryError(result), "error");
    return;
  }

  if (adminLoginOtpEmail) {
    adminLoginOtpEmail.value = result.email ?? "";
  }

  resetOtpVerificationState();
  if (adminLoginOtpCode) {
    adminLoginOtpCode.value = "";
  }

  setRecoveryOutput(
    copy.outputOtp,
    `OTP: ${result.otp}\nExpires: ${formatExpiry(result.expiresAt)}`,
    "otp",
  );
  syncResetLinkForm();
  showLoginStatus(currentLoginLanguage === "km" ? "OTP \u179A\u17BD\u1785\u179A\u17B6\u179B\u17CB\u17A0\u17BE\u1799\u17D4" : "OTP is ready for recovery.");
  adminLoginOtpCode?.focus();
}

function handleVerifyOtp() {
  const copy = getLoginCopy();
  const result = window.adminAuth?.verifyPasswordResetOtp?.(
    adminLoginOtpEmail?.value ?? "",
    adminLoginOtpCode?.value ?? "",
  );

  if (!result?.ok) {
    resetOtpVerificationState();
    showLoginStatus(localizeRecoveryError(result), "error");
    return;
  }

  otpVerifiedState = {
    email: String(adminLoginOtpEmail?.value ?? "").trim().toLowerCase(),
    otp: String(adminLoginOtpCode?.value ?? "").trim(),
    verified: true,
  };
  setOtpPasswordStepReady(true);
  showLoginStatus(copy.otpVerified);
  adminLoginOtpNewPassword?.focus();
}

async function handleSendResetLink() {
  const copy = getLoginCopy();
  const result = window.adminAuth?.requestPasswordResetLink?.(adminLoginRecoveryEmail?.value ?? "");

  if (!result?.ok) {
    showLoginStatus(localizeRecoveryError(result), "error");
    return;
  }

  setRecoveryOutput(copy.outputLink, result.link ?? "", "link");
  const copied = await copyText(result.link ?? "");
  showLoginStatus(
    copied
      ? currentLoginLanguage === "km"
        ? "\u1794\u17B6\u1793\u1785\u1798\u17D2\u179B\u1784 reset link \u17A0\u17BE\u1799\u17D4"
        : "Reset link copied to clipboard."
      : currentLoginLanguage === "km"
        ? "Reset link \u179A\u17BD\u1785\u179A\u17B6\u179B\u17CB\u17A0\u17BE\u1799\u17D4"
        : "Reset link is ready.",
  );
}

function handleOtpReset(event) {
  event.preventDefault();

  try {
    if (
      !otpVerifiedState.verified
      || otpVerifiedState.email !== String(adminLoginOtpEmail?.value ?? "").trim().toLowerCase()
      || otpVerifiedState.otp !== String(adminLoginOtpCode?.value ?? "").trim()
    ) {
      throw new Error(getLoginCopy().otpVerifyFirst);
    }

    ensurePasswordMatch(adminLoginOtpNewPassword?.value, adminLoginOtpConfirmPassword?.value);
    const result = window.adminAuth?.resetPasswordWithOtp?.(
      adminLoginOtpEmail?.value ?? "",
      adminLoginOtpCode?.value ?? "",
      adminLoginOtpNewPassword?.value ?? "",
    );

    if (!result?.ok) {
      throw new Error(localizeRecoveryError(result));
    }

    adminLoginOtpResetForm?.reset();
    resetOtpVerificationState();
    clearRecoveryOutput();
    syncResetLinkForm();
    showLoginStatus(
      currentLoginLanguage === "km"
        ? "\u1780\u17C2\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u179A\u17BD\u1785\u179A\u17B6\u179B\u17CB\u17A0\u17BE\u1799\u17D4"
        : "Password reset completed. You can sign in now.",
    );
    adminLoginPassword?.focus();
  } catch (error) {
    showLoginStatus(error instanceof Error ? error.message : getLoginCopy().signInError, "error");
  }
}

function handleLinkReset(event) {
  event.preventDefault();

  try {
    ensurePasswordMatch(adminLoginLinkNewPassword?.value, adminLoginLinkConfirmPassword?.value);
    const context = getResetLinkContext();

    if (!context) {
      throw new Error(localizeRecoveryError({ code: "invalid_reset_link" }));
    }

    const result = window.adminAuth?.resetPasswordWithToken?.(
      context.token,
      context.email,
      adminLoginLinkNewPassword?.value ?? "",
    );

    if (!result?.ok) {
      throw new Error(localizeRecoveryError(result));
    }

    adminLoginLinkResetForm?.reset();
    clearRecoveryOutput();
    clearResetLinkQuery();
    syncResetLinkForm();
    showLoginStatus(
      currentLoginLanguage === "km"
        ? "\u1780\u17C2\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u179A\u17BD\u1785\u179A\u17B6\u179B\u17CB\u17A0\u17BE\u1799\u17D4"
        : "Password reset completed. You can sign in now.",
    );
    adminLoginPassword?.focus();
  } catch (error) {
    showLoginStatus(error instanceof Error ? error.message : getLoginCopy().signInError, "error");
  }
}

if (adminLoginUsername && window.adminAuth?.defaultUsername) {
  adminLoginUsername.value = window.adminAuth.defaultUsername;
}

const savedRecoveryEmail = window.adminAuth?.getRecoveryEmail?.() ?? "";

if (adminLoginRecoveryEmail && savedRecoveryEmail) {
  adminLoginRecoveryEmail.value = savedRecoveryEmail;
}

if (adminLoginOtpEmail && savedRecoveryEmail) {
  adminLoginOtpEmail.value = savedRecoveryEmail;
}

resetOtpVerificationState();

for (const button of adminLoginLanguageButtons) {
  button.addEventListener("click", () => {
    setLoginLanguage(button.dataset.adminLoginLanguageOption);
  });
}

adminLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const result = window.adminAuth?.login(
    adminLoginUsername?.value ?? "",
    adminLoginPassword?.value ?? "",
  );

  if (!result?.ok) {
    showLoginStatus(getLoginCopy().invalidLogin, "error");
    adminLoginPassword?.focus();
    adminLoginPassword?.select();
    return;
  }

  showLoginStatus(getLoginCopy().signedIn);
  window.location.replace(window.adminAuth?.dashboardFile ?? "admin.html");
});

adminLoginSendOtpButton?.addEventListener("click", handleSendOtp);
adminLoginSendResetLinkButton?.addEventListener("click", handleSendResetLink);
adminLoginOtpVerifyButton?.addEventListener("click", handleVerifyOtp);
adminLoginOtpResetForm?.addEventListener("submit", handleOtpReset);
adminLoginLinkResetForm?.addEventListener("submit", handleLinkReset);
for (const input of [adminLoginOtpEmail, adminLoginOtpCode]) {
  input?.addEventListener("input", () => {
    if (!otpVerifiedState.verified) {
      return;
    }

    const currentEmail = String(adminLoginOtpEmail?.value ?? "").trim().toLowerCase();
    const currentOtp = String(adminLoginOtpCode?.value ?? "").trim();

    if (otpVerifiedState.email !== currentEmail || otpVerifiedState.otp !== currentOtp) {
      resetOtpVerificationState();
    }
  });
}
adminLoginForgotPasswordLink?.addEventListener("click", (event) => {
  if (!adminLoginRecoverySection) {
    return;
  }

  event.preventDefault();
  openRecoverySection();
});

applyLoginLanguage();

if (window.location.hash === "#adminLoginRecoverySection") {
  openRecoverySection();
}
