const adminLoginForm = document.querySelector("#adminLoginForm");
const adminLoginUsername = document.querySelector("#adminLoginUsername");
const adminLoginPassword = document.querySelector("#adminLoginPassword");
const adminLoginStatus = document.querySelector("#adminLoginStatus");

function showLoginStatus(message, type = "info") {
  adminLoginStatus.hidden = false;
  adminLoginStatus.textContent = message;
  adminLoginStatus.classList.toggle("admin-login__status--error", type === "error");
}

if (adminLoginUsername && window.adminAuth?.defaultUsername) {
  adminLoginUsername.value = window.adminAuth.defaultUsername;
}

adminLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const result = window.adminAuth?.login(
    adminLoginUsername?.value ?? "",
    adminLoginPassword?.value ?? "",
  );

  if (!result?.ok) {
    showLoginStatus(result?.message ?? "Unable to sign in.", "error");
    adminLoginPassword?.focus();
    adminLoginPassword?.select();
    return;
  }

  showLoginStatus(result.message);
  window.location.replace(window.adminAuth?.dashboardFile ?? "admin.html");
});
