(function () {
  const DEPO_ACCESS_KEY = "agt-depo-access";
  const DEPO_ACCESS_TTL_MS = 2 * 60 * 60 * 1000;

  function getCurrentPage() {
    const path = String(window.location.pathname || "");
    return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
  }

  function readDepoAccessTicket() {
    try {
      const rawValue = window.localStorage.getItem(DEPO_ACCESS_KEY);

      if (!rawValue) {
        return null;
      }

      const parsedValue = JSON.parse(rawValue);
      return parsedValue && typeof parsedValue === "object" ? parsedValue : null;
    } catch (error) {
      return null;
    }
  }

  function clearDepoAccessTicket() {
    try {
      window.localStorage.removeItem(DEPO_ACCESS_KEY);
    } catch (error) {
      // Ignore storage errors on public pages.
    }
  }

  function isDepoAccessValid(ticket = readDepoAccessTicket()) {
    if (!ticket || typeof ticket !== "object") {
      return false;
    }

    const expiresAt = Number(ticket.expiresAt);

    if (!Number.isFinite(expiresAt) || Date.now() >= expiresAt) {
      clearDepoAccessTicket();
      return false;
    }

    return true;
  }

  function grantDepoAccessTicket() {
    const now = Date.now();

    try {
      window.localStorage.setItem(
        DEPO_ACCESS_KEY,
        JSON.stringify({
          issuedAt: now,
          expiresAt: now + DEPO_ACCESS_TTL_MS,
        }),
      );
    } catch (error) {
      // Ignore storage errors in public fallback mode.
    }
  }

  function redirectToUsersCatalog() {
    window.location.replace("users.html#catalog");
  }

  function downgradeDepoDetailView() {
    const nextUrl = new URL(window.location.href);

    nextUrl.searchParams.set("view", "user");
    window.location.replace(`${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }

  function protectDepoPages() {
    if (isDepoAccessValid()) {
      return;
    }

    const currentPage = getCurrentPage();

    if (currentPage === "depo.html") {
      redirectToUsersCatalog();
      return;
    }

    if (currentPage === "detail.html" && new URLSearchParams(window.location.search).get("view") === "depo") {
      downgradeDepoDetailView();
    }
  }

  window.depoAccess = {
    key: DEPO_ACCESS_KEY,
    ttlMs: DEPO_ACCESS_TTL_MS,
    readTicket: readDepoAccessTicket,
    clearTicket: clearDepoAccessTicket,
    isValid: isDepoAccessValid,
    grantTicket: grantDepoAccessTicket,
    protect: protectDepoPages,
  };

  protectDepoPages();
})();
