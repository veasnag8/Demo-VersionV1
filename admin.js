const adminDashboardRoot = document.querySelector(".admin-dashboard");
const adminSearch = document.querySelector("#adminSearch");
const adminNewButton = document.querySelector("#adminNewButton");
const adminImportItemsButton = document.querySelector("#adminImportItemsButton");
const adminExportItemsButton = document.querySelector("#adminExportItemsButton");
const adminImportItemsInput = document.querySelector("#adminImportItemsInput");
const adminToggleListButton = document.querySelector("#adminToggleListButton");
const adminTopbar = document.querySelector(".admin-topbar");
const adminTopbarEyebrow = document.querySelector("#adminTopbarEyebrow");
const adminTopbarTitle = document.querySelector("#adminTopbarTitle");
const adminTopbarText = document.querySelector("#adminTopbarText");
const adminTopbarActions = document.querySelector(".admin-topbar__actions");
const adminSectionButtons = [...document.querySelectorAll("[data-admin-section-option]")];
const adminShortcutButtons = [...document.querySelectorAll("[data-admin-shortcut]")];
const adminSidebarBrandSubline = document.querySelector(".admin-sidebar__brand-copy small");
const adminSidebarSessionLabel = document.querySelector(".admin-sidebar__label");
const adminSidebarSessionHint = document.querySelector(".admin-sidebar__hint");
const adminQuickAccessLabel = document.querySelector(".admin-topbar__action-label");
const adminCatalogLink = document.querySelector(".admin-topbar__catalog-link");
const adminCatalogLinkTitle = adminCatalogLink?.querySelector("strong");
const adminCatalogLinkHint = adminCatalogLink?.querySelector("small");
const adminQrButtonLabel = document.querySelector(".admin-topbar__qr-button span");
const adminOverviewEyebrow = document.querySelector(".admin-overview__intro .eyebrow");
const adminOverviewTitle = document.querySelector(".admin-overview__intro h2");
const adminStats = [...document.querySelectorAll(".admin-stat")];
const adminDashboardCards = [...document.querySelectorAll(".admin-dashboard-card")];
const adminTotalCount = document.querySelector("#adminTotalCount");
const adminBrandCount = document.querySelector("#adminBrandCount");
const adminTypeCount = document.querySelector("#adminTypeCount");
const adminDashboardSection = document.querySelector("#adminDashboardSection");
const adminItemsSection = document.querySelector("#adminItemsSection");
const adminBrandsSection = document.querySelector("#adminBrandsSection");
const adminTypesSection = document.querySelector("#adminTypesSection");
const adminSettingsSection = document.querySelector("#adminSettingsSection");
const adminControls = document.querySelector("#adminControls");
const adminWorkspace = document.querySelector("#adminWorkspace");
const adminListPanel = document.querySelector("#adminListPanel");
const adminEditorPanel = document.querySelector("#adminEditorPanel");
const adminListHeading = document.querySelector("#adminListHeading");
const adminList = document.querySelector("#adminList");
const adminListEmpty = document.querySelector("#adminListEmpty");
const adminListRange = document.querySelector("#adminListRange");
const adminListPageSize = document.querySelector("#adminListPageSize");
const adminListBrandFilter = document.querySelector("#adminListBrandFilter");
let adminListStatusFilter = document.querySelector("#adminListStatusFilter");
const adminPrevPageButton = document.querySelector("#adminPrevPageButton");
const adminNextPageButton = document.querySelector("#adminNextPageButton");
const adminPageStatus = document.querySelector("#adminPageStatus");
const adminFormHeading = document.querySelector("#adminFormHeading");
const adminModeBadge = document.querySelector("#adminModeBadge");
const adminStatus = document.querySelector("#adminStatus");
const adminForm = document.querySelector("#adminForm");
const adminImageInput = document.querySelector("#adminImageInput");
const adminImageFileInput = document.querySelector("#adminImageFileInput");
const adminImageUploadButton = document.querySelector("#adminImageUploadButton");
const adminImageClearButton = document.querySelector("#adminImageClearButton");
const adminImagePreview = document.querySelector("#adminImagePreview");
const adminImagePreviewEmpty = document.querySelector("#adminImagePreviewEmpty");
const adminImageUploadMeta = document.querySelector("#adminImageUploadMeta");
const adminClearButton = document.querySelector("#adminClearButton");
const adminBrandWorkspace = document.querySelector("#adminBrandWorkspace");
const adminBrandListPanel = document.querySelector("#adminBrandListPanel");
const adminBrandEditorPanel = document.querySelector("#adminBrandEditorPanel");
const adminBrandHeading = document.querySelector("#adminBrandHeading");
const adminBrandList = document.querySelector("#adminBrandList");
const adminBrandEmpty = document.querySelector("#adminBrandEmpty");
const adminBrandRange = document.querySelector("#adminBrandRange");
const adminBrandSearch = document.querySelector("#adminBrandSearch");
const adminBrandFilter = document.querySelector("#adminBrandFilter");
const adminBrandFormHeading = document.querySelector("#adminBrandFormHeading");
const adminBrandModeBadge = document.querySelector("#adminBrandModeBadge");
const adminBrandStatus = document.querySelector("#adminBrandStatus");
const adminBrandForm = document.querySelector("#adminBrandForm");
const adminBrandNewButton = document.querySelector("#adminBrandNewButton");
const adminImportBrandsButton = document.querySelector("#adminImportBrandsButton");
const adminExportBrandsButton = document.querySelector("#adminExportBrandsButton");
const adminImportBrandsInput = document.querySelector("#adminImportBrandsInput");
const adminBrandDeleteButton = document.querySelector("#adminBrandDeleteButton");
const adminBrandClearButton = document.querySelector("#adminBrandClearButton");
const adminBrandLinkedItems = document.querySelector("#adminBrandLinkedItems");
const adminBrandOptions = document.querySelector("#adminBrandOptions");
const adminBrandSelect = document.querySelector("#adminBrandSelect");
const adminTypeSelect = document.querySelector("#adminTypeSelect");
const adminTypeWorkspace = document.querySelector("#adminTypeWorkspace");
const adminTypeListPanel = document.querySelector("#adminTypeListPanel");
const adminTypeEditorPanel = document.querySelector("#adminTypeEditorPanel");
const adminTypeHeading = document.querySelector("#adminTypeHeading");
const adminTypeList = document.querySelector("#adminTypeList");
const adminTypeEmpty = document.querySelector("#adminTypeEmpty");
const adminTypeRange = document.querySelector("#adminTypeRange");
const adminTypeSearch = document.querySelector("#adminTypeSearch");
const adminTypeFilter = document.querySelector("#adminTypeFilter");
const adminTypeFormHeading = document.querySelector("#adminTypeFormHeading");
const adminTypeModeBadge = document.querySelector("#adminTypeModeBadge");
const adminTypeStatus = document.querySelector("#adminTypeStatus");
const adminTypeForm = document.querySelector("#adminTypeForm");
const adminTypeNewButton = document.querySelector("#adminTypeNewButton");
const adminImportTypesButton = document.querySelector("#adminImportTypesButton");
const adminExportTypesButton = document.querySelector("#adminExportTypesButton");
const adminImportTypesInput = document.querySelector("#adminImportTypesInput");
const adminTypeClearButton = document.querySelector("#adminTypeClearButton");
const adminTypeLinkedItems = document.querySelector("#adminTypeLinkedItems");
const adminLogoutButton = document.querySelector("#adminLogoutButton");
const adminSettingsLogoutButton = document.querySelector("#adminSettingsLogoutButton");
const adminSidebarToggle = document.querySelector("#adminSidebarToggle");
const adminSidebarRevealToggle = document.querySelector("#adminSidebarRevealToggle");
const adminSessionUser = document.querySelector("#adminSessionUser");
const adminLanguageButtons = [...document.querySelectorAll("[data-admin-language-option]")];
const adminSettingsEyebrow = document.querySelector("#adminSettingsEyebrow");
const adminSettingsTitle = document.querySelector("#adminSettingsTitle");
const adminSettingsText = document.querySelector("#adminSettingsText");
const adminSettingsLanguageEyebrow = document.querySelector("#adminSettingsLanguageEyebrow");
const adminSettingsLanguageTitle = document.querySelector("#adminSettingsLanguageTitle");
const adminSettingsLanguageCopy = document.querySelector("#adminSettingsLanguageCopy");
const adminLanguageEnglishLabel = document.querySelector("#adminLanguageEnglishLabel");
const adminLanguageEnglishHint = document.querySelector("#adminLanguageEnglishHint");
const adminLanguageKhmerLabel = document.querySelector("#adminLanguageKhmerLabel");
const adminLanguageKhmerHint = document.querySelector("#adminLanguageKhmerHint");
const adminSettingsProfileEyebrow = document.querySelector("#adminSettingsProfileEyebrow");
const adminSettingsProfileTitle = document.querySelector("#adminSettingsProfileTitle");
const adminSettingsProfileCopy = document.querySelector("#adminSettingsProfileCopy");
const adminSettingsUsernameLabel = document.querySelector("#adminSettingsUsernameLabel");
const adminSettingsRoleLabel = document.querySelector("#adminSettingsRoleLabel");
const adminSettingsIssuedLabel = document.querySelector("#adminSettingsIssuedLabel");
const adminSettingsExpiresLabel = document.querySelector("#adminSettingsExpiresLabel");
const adminSettingsStatusLabel = document.querySelector("#adminSettingsStatusLabel");
const adminSettingsProfileUsername = document.querySelector("#adminSettingsProfileUsername");
const adminSettingsProfileRole = document.querySelector("#adminSettingsProfileRole");
const adminSettingsProfileIssuedAt = document.querySelector("#adminSettingsProfileIssuedAt");
const adminSettingsProfileExpiresAt = document.querySelector("#adminSettingsProfileExpiresAt");
const adminSettingsProfileStatus = document.querySelector("#adminSettingsProfileStatus");
const adminOpenQrButton = document.querySelector("#adminOpenQrButton");
const adminQrModal = document.querySelector("#adminQrModal");
const adminCloseQrButton = document.querySelector("#adminCloseQrButton");
const adminCopyQrLinkButton = document.querySelector("#adminCopyQrLinkButton");
const adminSaveQrButton = document.querySelector("#adminSaveQrButton");
const adminCatalogQrImage = document.querySelector("#adminCatalogQrImage");
const adminCatalogQrStatus = document.querySelector("#adminCatalogQrStatus");

const store = window.catalogStore;
const DEFAULT_LIST_PAGE_SIZE = 30;
const DEFAULT_QR_STATUS_TEXT = "Scan this QR code to open the customer catalog page.";
const EXCEL_ITEMS_SHEET_NAME = "Items";
const EXCEL_BRANDS_SHEET_NAME = "Brands";
const EXCEL_TYPES_SHEET_NAME = "Item Types";
const ITEM_EXPORT_COLUMNS = [
  { header: "Code", width: 14 },
  { header: "Brand", width: 18 },
  { header: "Product Type", width: 16 },
  { header: "Status", width: 12 },
  { header: "Visible On User Page", width: 18 },
  { header: "Similar Group", width: 16 },
  { header: "Icon", width: 14 },
  { header: "Image", width: 36 },
  { header: "Volume", width: 14 },
  { header: "Series", width: 18 },
  { header: "Depot Price", width: 14 },
  { header: "User Price", width: 14 },
  { header: "Product Title", width: 34 },
  { header: "Description", width: 44 },
  { header: "Sizes", width: 24 },
];
const BRAND_EXPORT_COLUMNS = [
  { header: "Brand Name", width: 22 },
  { header: "Note", width: 42 },
];
const TYPE_EXPORT_COLUMNS = [
  { header: "Type Name", width: 22 },
  { header: "Note", width: 42 },
];
const ITEM_IMPORT_ALIASES = {
  code: ["code", "item code"],
  brand: ["brand", "brand name"],
  filterType: ["product type", "type", "filter type"],
  status: ["status", "item status"],
  showOnUserPage: ["visible on user page", "show on user page", "user visible", "visible", "published"],
  similarKey: ["similar group", "similar key"],
  icon: ["icon"],
  image: ["image url", "image", "photo", "picture"],
  volume: ["volume", "capacity"],
  series: ["series"],
  depoPrice: ["depot price", "depo price"],
  userPrice: ["user price", "retail price"],
  title: ["product title", "title"],
  description: ["description"],
  sizes: ["sizes", "size"],
};
const BRAND_IMPORT_ALIASES = {
  name: ["brand name", "name", "brand"],
  note: ["note", "notes"],
};
const TYPE_IMPORT_ALIASES = {
  name: ["type name", "item type", "product type", "type", "name"],
  note: ["note", "notes"],
};
const STORAGE_KEYS = {
  language: "agt-admin-language",
};
const AVAILABLE_SECTIONS = new Set(["dashboard", "items", "types", "brands", "settings"]);
const ADMIN_UI = {
  en: {
    locale: "en-US",
    sidebarPanelCopy: "Admin Control Panel",
    nav: {
      dashboard: "Dashboard",
      items: "Items",
      types: "Item Types",
      brands: "Brands",
      settings: "Settings",
    },
    session: {
      label: "Signed In",
      hint: "Protected browser session",
      logout: "Log Out",
      signOut: "Sign Out",
      role: "Administrator",
      status: "Active",
      showMenu: "Show menu",
      hideMenu: "Hide menu",
      showMenuAria: "Show admin menu",
      hideMenuAria: "Hide admin menu",
    },
    quickAccess: {
      label: "Quick Access",
      openCatalog: "Open User Catalog",
      openCatalogHint: "Open in a new tab",
      qr: "QR",
      qrAria: "Show catalog QR code",
    },
    sections: {
      dashboard: {
        eyebrow: "Admin Overview",
        title: "Dashboard",
        text: "",
      },
      items: {
        eyebrow: "Catalog Control",
        title: "Items",
        text: "Search, update, and manage catalog item records from one standard admin workspace.",
      },
      types: {
        eyebrow: "Type Control",
        title: "Item Types",
        text: "Manage product type records, keep filter choices consistent, and rename types used across the item catalog.",
      },
      brands: {
        eyebrow: "Brand Control",
        title: "Brands",
        text: "Manage brand records, keep the catalog naming consistent, and prepare brands before assigning them to items.",
      },
      settings: {
        eyebrow: "Preferences",
        title: "Settings",
        text: "Adjust interface language and review the current session profile.",
      },
    },
    dashboard: {
      eyebrow: "Overview",
      title: "Catalog Summary",
      stats: [
        {
          label: "Total Products",
          copy: "All active records in the shared catalog store.",
        },
        {
          label: "Total Brands",
          copy: "Unique brands currently used across catalog records.",
        },
        {
          label: "Total Types",
          copy: "Unique product types available in the catalog.",
        },
      ],
      cards: {
        items: {
          eyebrow: "Items",
          title: "Open Item Management",
          copy: "Browse the item list, create new records, and edit catalog details from one workspace.",
          button: "Go to Items",
        },
        types: {
          eyebrow: "Item Types",
          title: "Open Type Management",
          copy: "Manage product type records and keep catalog filtering consistent across the admin and user pages.",
          button: "Go to Types",
        },
        brands: {
          eyebrow: "Brands",
          title: "Open Brand Management",
          copy: "Maintain brand names, prepare new brand records, and keep item branding consistent.",
          button: "Go to Brands",
        },
      },
    },
    settings: {
      eyebrow: "Preferences",
      title: "Settings",
      text: "Choose the admin interface language and review the current session profile.",
      languageEyebrow: "Interface",
      languageTitle: "Language",
      languageCopy: "Switch the admin shell between English and Khmer.",
      englishLabel: "English",
      englishHint: "Use English across the admin shell.",
      khmerLabel: "Khmer",
      khmerHint: "Use Khmer for navigation and settings labels.",
      profileEyebrow: "Account",
      profileTitle: "User Profile",
      profileCopy: "Current signed-in details from this browser session.",
      username: "Username",
      role: "Role",
      issuedAt: "Signed in at",
      expiresAt: "Session expires",
      status: "Session status",
    },
  },
  km: {
    locale: "km-KH",
    sidebarPanelCopy: "ផ្ទាំងគ្រប់គ្រងអ្នកគ្រប់គ្រង",
    nav: {
      dashboard: "ផ្ទាំងដើម",
      items: "ទំនិញ",
      brands: "ម៉ាក",
      settings: "ការកំណត់",
    },
    session: {
      label: "បានចូលប្រើ",
      hint: "សម័យការងារនេះត្រូវបានការពារ",
      logout: "ចាកចេញ",
      signOut: "ចាកចេញ",
      role: "អ្នកគ្រប់គ្រង",
      status: "កំពុងដំណើរការ",
      showMenu: "បង្ហាញម៉ឺនុយ",
      hideMenu: "លាក់ម៉ឺនុយ",
      showMenuAria: "បង្ហាញម៉ឺនុយគ្រប់គ្រង",
      hideMenuAria: "លាក់ម៉ឺនុយគ្រប់គ្រង",
    },
    quickAccess: {
      label: "ចូលប្រើរហ័ស",
      openCatalog: "បើកកាតាឡុកអ្នកប្រើ",
      openCatalogHint: "បើកក្នុងផ្ទាំងថ្មី",
      qr: "QR",
      qrAria: "បង្ហាញ QR កាតាឡុក",
    },
    sections: {
      dashboard: {
        eyebrow: "ទិដ្ឋភាពទូទៅ",
        title: "ផ្ទាំងដើម",
        text: "",
      },
      items: {
        eyebrow: "គ្រប់គ្រងកាតាឡុក",
        title: "ទំនិញ",
        text: "ស្វែងរក កែប្រែ និងគ្រប់គ្រងទិន្នន័យទំនិញពីកន្លែងតែមួយ។",
      },
      brands: {
        eyebrow: "គ្រប់គ្រងម៉ាក",
        title: "ម៉ាក",
        text: "គ្រប់គ្រងកំណត់ត្រាម៉ាក និងរៀបចំឈ្មោះម៉ាកឱ្យស្របគ្នានៅក្នុងកាតាឡុក។",
      },
      settings: {
        eyebrow: "ចំណង់ចំណូលចិត្ត",
        title: "ការកំណត់",
        text: "កែភាសាផ្ទាំងគ្រប់គ្រង និងពិនិត្យមើលប្រវត្តិរូបសម័យការងារបច្ចុប្បន្ន។",
      },
    },
    dashboard: {
      eyebrow: "ទិដ្ឋភាពទូទៅ",
      title: "សង្ខេបកាតាឡុក",
      stats: [
        {
          label: "ចំនួនទំនិញសរុប",
          copy: "កំណត់ត្រាដែលកំពុងដំណើរការទាំងអស់នៅក្នុងឃ្លាំងទិន្នន័យរួម។",
        },
        {
          label: "ចំនួនម៉ាកសរុប",
          copy: "ម៉ាកតែមួយគត់ដែលកំពុងត្រូវបានប្រើនៅក្នុងកាតាឡុក។",
        },
        {
          label: "ចំនួនប្រភេទសរុប",
          copy: "ប្រភេទផលិតផលតែមួយគត់ដែលមាននៅក្នុងកាតាឡុក។",
        },
      ],
      cards: {
        items: {
          eyebrow: "ទំនិញ",
          title: "បើកការគ្រប់គ្រងទំនិញ",
          copy: "មើលបញ្ជីទំនិញ បង្កើតកំណត់ត្រាថ្មី និងកែប្រែព័ត៌មានកាតាឡុកពីកន្លែងតែមួយ។",
          button: "ទៅកាន់ទំនិញ",
        },
        brands: {
          eyebrow: "ម៉ាក",
          title: "បើកការគ្រប់គ្រងម៉ាក",
          copy: "ថែទាំឈ្មោះម៉ាក រៀបចំកំណត់ត្រាម៉ាកថ្មី និងរក្សាភាពស្របគ្នារបស់ម៉ាកទំនិញ។",
          button: "ទៅកាន់ម៉ាក",
        },
      },
    },
    settings: {
      eyebrow: "ចំណង់ចំណូលចិត្ត",
      title: "ការកំណត់",
      text: "ជ្រើសភាសាផ្ទាំងគ្រប់គ្រង និងពិនិត្យមើលប្រវត្តិរូបសម័យការងារបច្ចុប្បន្ន។",
      languageEyebrow: "ផ្ទាំងកម្មវិធី",
      languageTitle: "ភាសា",
      languageCopy: "ប្តូរភាសាផ្ទាំងគ្រប់គ្រងរវាងអង់គ្លេស និងខ្មែរ។",
      englishLabel: "អង់គ្លេស",
      englishHint: "ប្រើភាសាអង់គ្លេសសម្រាប់ផ្ទាំងគ្រប់គ្រង។",
      khmerLabel: "ខ្មែរ",
      khmerHint: "ប្រើភាសាខ្មែរសម្រាប់ម៉ឺនុយ និងការកំណត់។",
      profileEyebrow: "គណនី",
      profileTitle: "ប្រវត្តិរូបអ្នកប្រើ",
      profileCopy: "ព័ត៌មាននៃការចូលប្រើបច្ចុប្បន្នពីសម័យកម្មវិធីនេះ។",
      username: "ឈ្មោះអ្នកប្រើ",
      role: "តួនាទី",
      issuedAt: "ចូលប្រើនៅម៉ោង",
      expiresAt: "សម័យផុតកំណត់",
      status: "ស្ថានភាពសម័យ",
    },
  },
};

let products = getSortedProducts();
let brands = getSortedBrands();
let types = getSortedTypes();
let pendingLocalImageDataUrl = "";
let pendingLocalImageName = "";
let selectedCode = null;
let selectedBrandName = null;
let selectedTypeName = null;
let statusTimeoutId = 0;
let brandStatusTimeoutId = 0;
let typeStatusTimeoutId = 0;
let listPage = 1;
let qrStatusTimeoutId = 0;
let catalogQrCardPromise = null;
let editorHidden = true;
let brandEditorHidden = true;
let typeEditorHidden = true;
let currentAdminLanguage = readStoredPreference(STORAGE_KEYS.language, ["en", "km"], "en");
let currentSection = "dashboard";
let sidebarCollapsed = false;

function readStoredPreference(key, allowedValues, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    return allowedValues.includes(storedValue) ? storedValue : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function saveStoredPreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors and keep the current in-memory preference.
  }
}

function getAdminCopy() {
  return ADMIN_UI[currentAdminLanguage] ?? ADMIN_UI.en;
}

function formatAdminDateTime(timestamp) {
  if (!timestamp) {
    return "-";
  }

  const date = new Date(Number(timestamp));

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return new Intl.DateTimeFormat(getAdminCopy().locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function syncNavigationLabels() {
  const copy = getAdminCopy();

  if (adminSidebarBrandSubline) {
    adminSidebarBrandSubline.textContent = copy.sidebarPanelCopy;
  }

  for (const button of adminSectionButtons) {
    const label = button.querySelector(".admin-nav__copy strong");
    const section = button.dataset.adminSectionOption;
    const nextLabel = (section && copy.nav[section]) || (section && ADMIN_UI.en.nav[section]);

    if (label && nextLabel) {
      label.textContent = nextLabel;
    }
  }

  if (adminSidebarSessionLabel) {
    adminSidebarSessionLabel.textContent = copy.session.label;
  }

  if (adminSidebarSessionHint) {
    adminSidebarSessionHint.textContent = copy.session.hint;
  }

  if (adminLogoutButton) {
    adminLogoutButton.textContent = copy.session.logout;
  }

  if (adminQuickAccessLabel) {
    adminQuickAccessLabel.textContent = copy.quickAccess.label;
  }

  if (adminCatalogLinkTitle) {
    adminCatalogLinkTitle.textContent = copy.quickAccess.openCatalog;
  }

  if (adminCatalogLinkHint) {
    adminCatalogLinkHint.textContent = copy.quickAccess.openCatalogHint;
  }

  if (adminQrButtonLabel) {
    adminQrButtonLabel.textContent = copy.quickAccess.qr;
  }

  if (adminOpenQrButton) {
    adminOpenQrButton.setAttribute("aria-label", copy.quickAccess.qrAria);
    adminOpenQrButton.setAttribute("title", copy.quickAccess.qrAria);
  }
}

function syncDashboardCopy() {
  const copy = getAdminCopy().dashboard;

  if (adminOverviewEyebrow) {
    adminOverviewEyebrow.textContent = copy.eyebrow;
  }

  if (adminOverviewTitle) {
    adminOverviewTitle.textContent = copy.title;
  }

  adminStats.forEach((card, index) => {
    const label = card.querySelector(".admin-stat__label");
    const note = card.querySelector("small");
    const statCopy = copy.stats[index];

    if (!statCopy) {
      return;
    }

    if (label) {
      label.textContent = statCopy.label;
    }

    if (note) {
      note.textContent = statCopy.copy;
    }
  });

  for (const shortcutButton of adminShortcutButtons) {
    const card = shortcutButton.closest(".admin-dashboard-card");
    const cardKey = shortcutButton.dataset.adminShortcut;
    const cardCopy = copy.cards[cardKey] ?? ADMIN_UI.en.dashboard.cards[cardKey];

    if (!card || !cardCopy) {
      continue;
    }

    const eyebrow = card.querySelector(".eyebrow");
    const title = card.querySelector("h3");
    if (eyebrow) {
      eyebrow.textContent = cardCopy.eyebrow;
    }

    if (title) {
      title.textContent = cardCopy.title;
    }

    shortcutButton.textContent = cardCopy.button;
  }
}

function syncSettingsCopy() {
  const copy = getAdminCopy().settings;

  if (adminSettingsEyebrow) {
    adminSettingsEyebrow.textContent = copy.eyebrow;
  }

  if (adminSettingsTitle) {
    adminSettingsTitle.textContent = copy.title;
  }

  if (adminSettingsText) {
    adminSettingsText.textContent = copy.text;
  }

  if (adminSettingsLanguageEyebrow) {
    adminSettingsLanguageEyebrow.textContent = copy.languageEyebrow;
  }

  if (adminSettingsLanguageTitle) {
    adminSettingsLanguageTitle.textContent = copy.languageTitle;
  }

  if (adminSettingsLanguageCopy) {
    adminSettingsLanguageCopy.textContent = copy.languageCopy;
  }

  if (adminLanguageEnglishLabel) {
    adminLanguageEnglishLabel.textContent = copy.englishLabel;
  }

  if (adminLanguageEnglishHint) {
    adminLanguageEnglishHint.textContent = copy.englishHint;
  }

  if (adminLanguageKhmerLabel) {
    adminLanguageKhmerLabel.textContent = copy.khmerLabel;
  }

  if (adminLanguageKhmerHint) {
    adminLanguageKhmerHint.textContent = copy.khmerHint;
  }

  if (adminSettingsProfileEyebrow) {
    adminSettingsProfileEyebrow.textContent = copy.profileEyebrow;
  }

  if (adminSettingsProfileTitle) {
    adminSettingsProfileTitle.textContent = copy.profileTitle;
  }

  if (adminSettingsProfileCopy) {
    adminSettingsProfileCopy.textContent = copy.profileCopy;
  }

  if (adminSettingsUsernameLabel) {
    adminSettingsUsernameLabel.textContent = copy.username;
  }

  if (adminSettingsRoleLabel) {
    adminSettingsRoleLabel.textContent = copy.role;
  }

  if (adminSettingsIssuedLabel) {
    adminSettingsIssuedLabel.textContent = copy.issuedAt;
  }

  if (adminSettingsExpiresLabel) {
    adminSettingsExpiresLabel.textContent = copy.expiresAt;
  }

  if (adminSettingsStatusLabel) {
    adminSettingsStatusLabel.textContent = copy.status;
  }

  if (adminSettingsLogoutButton) {
    adminSettingsLogoutButton.textContent = getAdminCopy().session.signOut;
  }
}

function syncAdminLanguageButtons() {
  for (const button of adminLanguageButtons) {
    const isActive = button.dataset.adminLanguageOption === currentAdminLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function syncAuthSession() {
  const session = window.adminAuth?.getSession?.();
  const copy = getAdminCopy();
  const username = session?.username ?? copy.session.role;

  if (adminSessionUser) {
    adminSessionUser.textContent = username;
  }

  if (adminSettingsProfileUsername) {
    adminSettingsProfileUsername.textContent = username;
  }

  if (adminSettingsProfileRole) {
    adminSettingsProfileRole.textContent = copy.session.role;
  }

  if (adminSettingsProfileIssuedAt) {
    adminSettingsProfileIssuedAt.textContent = formatAdminDateTime(session?.issuedAt);
  }

  if (adminSettingsProfileExpiresAt) {
    adminSettingsProfileExpiresAt.textContent = formatAdminDateTime(session?.expiresAt);
  }

  if (adminSettingsProfileStatus) {
    adminSettingsProfileStatus.textContent = session ? copy.session.status : "-";
  }
}

function syncSectionCopy() {
  const copy = getAdminCopy().sections[currentSection]
    ?? ADMIN_UI.en.sections[currentSection]
    ?? getAdminCopy().sections.dashboard;

  if (adminTopbarEyebrow) {
    adminTopbarEyebrow.textContent = copy.eyebrow;
  }

  if (adminTopbarTitle) {
    adminTopbarTitle.textContent = copy.title;
  }

  if (adminTopbarText) {
    adminTopbarText.textContent = copy.text;
    adminTopbarText.hidden = !copy.text;
  }
}

function applyAdminLanguage() {
  document.documentElement.lang = currentAdminLanguage;
  document.body.dataset.adminLanguage = currentAdminLanguage;
  syncNavigationLabels();
  syncDashboardCopy();
  syncSettingsCopy();
  syncAdminLanguageButtons();
  syncAuthSession();
  syncSectionCopy();
}

function syncSectionNavigation() {
  for (const button of adminSectionButtons) {
    const isActive = button.dataset.adminSectionOption === currentSection;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function syncSidebarLayout() {
  const copy = getAdminCopy();

  if (adminDashboardRoot) {
    adminDashboardRoot.classList.toggle("admin-dashboard--collapsed", sidebarCollapsed);
  }

  const toggleButtons = [adminSidebarToggle, adminSidebarRevealToggle].filter(Boolean);

  for (const button of toggleButtons) {
    const isRevealButton = button === adminSidebarRevealToggle;
    const shouldShow = isRevealButton ? sidebarCollapsed : !sidebarCollapsed;

    button.hidden = !shouldShow;
    button.setAttribute("aria-pressed", String(sidebarCollapsed));
    button.setAttribute(
      "aria-label",
      sidebarCollapsed ? copy.session.showMenuAria : copy.session.hideMenuAria,
    );

    const label = button.querySelector(".admin-sidebar-toggle__label");

    if (label) {
      label.textContent = sidebarCollapsed ? copy.session.showMenu : copy.session.hideMenu;
    }
  }
}

function syncSectionVisibility() {
  if (adminTopbar) {
    adminTopbar.hidden = currentSection !== "dashboard";
  }

  if (adminTopbarActions) {
    adminTopbarActions.hidden = currentSection !== "dashboard";
  }

  if (adminDashboardSection) {
    adminDashboardSection.hidden = currentSection !== "dashboard";
  }

  if (adminItemsSection) {
    adminItemsSection.hidden = currentSection !== "items";
  }

  if (adminBrandsSection) {
    adminBrandsSection.hidden = currentSection !== "brands";
  }

  if (adminTypesSection) {
    adminTypesSection.hidden = currentSection !== "types";
  }

  if (adminSettingsSection) {
    adminSettingsSection.hidden = currentSection !== "settings";
  }

  syncSectionNavigation();
  syncSectionCopy();
}

function syncListVisibility() {
  const showListingOnly = editorHidden;
  const showEditorOnly = !editorHidden;

  adminWorkspace?.classList.toggle("is-list-hidden", showEditorOnly);

  if (adminListPanel) {
    adminListPanel.hidden = showEditorOnly;
  }

  if (adminToggleListButton) {
    adminToggleListButton.hidden = showListingOnly;
    adminToggleListButton.setAttribute("aria-label", "Back to Items");
  }
}

function syncEditorVisibility() {
  adminWorkspace?.classList.toggle("is-editor-hidden", editorHidden);

  if (adminEditorPanel) {
    adminEditorPanel.hidden = editorHidden;
  }

  if (adminControls) {
    adminControls.hidden = editorHidden || currentSection !== "items";
  }
}

function syncBrandVisibility() {
  const showListingOnly = brandEditorHidden;
  const showEditorOnly = !brandEditorHidden;

  adminBrandWorkspace?.classList.toggle("is-editor-hidden", showListingOnly);
  adminBrandWorkspace?.classList.toggle("is-list-hidden", showEditorOnly);

  if (adminBrandListPanel) {
    adminBrandListPanel.hidden = showEditorOnly;
  }

  if (adminBrandEditorPanel) {
    adminBrandEditorPanel.hidden = brandEditorHidden;
  }
}

function syncTypeVisibility() {
  const showListingOnly = typeEditorHidden;
  const showEditorOnly = !typeEditorHidden;

  adminTypeWorkspace?.classList.toggle("is-editor-hidden", showListingOnly);
  adminTypeWorkspace?.classList.toggle("is-list-hidden", showEditorOnly);

  if (adminTypeListPanel) {
    adminTypeListPanel.hidden = showEditorOnly;
  }

  if (adminTypeEditorPanel) {
    adminTypeEditorPanel.hidden = typeEditorHidden;
  }
}

function getCatalogShareUrl() {
  return new URL("users.html#catalog", window.location.href).href;
}

function getCatalogQrUrl() {
  return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(getCatalogShareUrl())}`;
}

function loadImage(sourceUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error(`Unable to load image: ${sourceUrl}`));
    };

    image.src = sourceUrl;
  });
}

function loadImageFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const objectUrl = window.URL.createObjectURL(blob);
    const image = new Image();

    image.onload = () => {
      window.URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      window.URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to load QR blob image."));
    };

    image.src = objectUrl;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string" && reader.result) {
        resolve(reader.result);
        return;
      }

      reject(new Error(`Unable to read ${file.name}.`));
    };

    reader.onerror = () => {
      reject(new Error(`Unable to read ${file.name}.`));
    };

    reader.readAsDataURL(file);
  });
}

function roundRectPath(context, x, y, width, height, radius) {
  const nextRadius = Math.min(radius, width / 2, height / 2);

  context.beginPath();
  context.moveTo(x + nextRadius, y);
  context.arcTo(x + width, y, x + width, y + height, nextRadius);
  context.arcTo(x + width, y + height, x, y + height, nextRadius);
  context.arcTo(x, y + height, x, y, nextRadius);
  context.arcTo(x, y, x + width, y, nextRadius);
  context.closePath();
}

function fillRoundedRect(context, x, y, width, height, radius, fillStyle) {
  context.save();
  context.fillStyle = fillStyle;
  roundRectPath(context, x, y, width, height, radius);
  context.fill();
  context.restore();
}

function strokeRoundedRect(context, x, y, width, height, radius, strokeStyle, lineWidth) {
  context.save();
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  roundRectPath(context, x, y, width, height, radius);
  context.stroke();
  context.restore();
}

async function buildCatalogQrCard() {
  const qrResponse = await fetch(getCatalogQrUrl());

  if (!qrResponse.ok) {
    throw new Error(`QR request failed with ${qrResponse.status}`);
  }

  const qrBlob = await qrResponse.blob();
  const [qrImage, logoImage] = await Promise.all([
    loadImageFromBlob(qrBlob),
    loadImage("logo.png"),
  ]);

  const canvas = document.createElement("canvas");
  const cardWidth = 1080;
  const cardHeight = 1280;
  const context = canvas.getContext("2d");

  canvas.width = cardWidth;
  canvas.height = cardHeight;

  const backgroundGradient = context.createLinearGradient(0, 0, cardWidth, cardHeight);
  backgroundGradient.addColorStop(0, "#edf1ea");
  backgroundGradient.addColorStop(1, "#e1e6de");
  context.fillStyle = backgroundGradient;
  context.fillRect(0, 0, cardWidth, cardHeight);

  context.save();
  context.shadowColor = "rgba(16, 63, 54, 0.12)";
  context.shadowBlur = 30;
  context.shadowOffsetY = 18;
  fillRoundedRect(context, 86, 40, 908, 1200, 54, "#f7f3ea");
  context.restore();

  strokeRoundedRect(context, 86, 40, 908, 1200, 54, "rgba(16, 63, 54, 0.08)", 4);
  strokeRoundedRect(context, 110, 64, 860, 1152, 38, "rgba(95, 211, 205, 0.22)", 2);

  const headerGradient = context.createLinearGradient(156, 112, 924, 280);
  headerGradient.addColorStop(0, "#103f36");
  headerGradient.addColorStop(1, "#185648");
  fillRoundedRect(context, 156, 112, 768, 162, 34, headerGradient);

  fillRoundedRect(context, 184, 140, 132, 106, 26, "#071713");
  context.drawImage(logoImage, 196, 152, 108, 82);

  context.fillStyle = "#f6fffb";
  context.font = "700 38px 'Segoe UI', sans-serif";
  context.fillText("ANGKOR GARDEN TOOLS", 350, 176);

  context.fillStyle = "rgba(232, 255, 248, 0.76)";
  context.font = "600 22px 'Segoe UI', sans-serif";
  context.fillText("Customer product catalog", 350, 214);

  fillRoundedRect(context, 156, 356, 768, 862, 40, "#ffffff");
  strokeRoundedRect(context, 156, 356, 768, 862, 40, "rgba(16, 63, 54, 0.08)", 4);

  fillRoundedRect(context, 226, 430, 628, 628, 32, "#d8ebe3");
  strokeRoundedRect(context, 226, 430, 628, 628, 32, "rgba(95, 211, 205, 0.2)", 4);
  fillRoundedRect(context, 278, 482, 524, 524, 26, "#ffffff");

  const qrSize = 468;
  const qrX = 306;
  const qrY = 510;
  context.drawImage(qrImage, qrX, qrY, qrSize, qrSize);

  const dataUrl = canvas.toDataURL("image/png");
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((nextBlob) => {
      if (!nextBlob) {
        reject(new Error("Unable to export QR card."));
        return;
      }

      resolve(nextBlob);
    }, "image/png");
  });

  return {
    blob,
    dataUrl,
  };
}

async function getCatalogQrCardAsset() {
  if (!catalogQrCardPromise) {
    catalogQrCardPromise = buildCatalogQrCard().catch((error) => {
      catalogQrCardPromise = null;
      throw error;
    });
  }

  return catalogQrCardPromise;
}

function showCatalogQrStatus(message, type = "info") {
  if (!adminCatalogQrStatus) {
    return;
  }

  window.clearTimeout(qrStatusTimeoutId);
  adminCatalogQrStatus.textContent = message;
  adminCatalogQrStatus.classList.toggle("admin-modal__text--error", type === "error");

  qrStatusTimeoutId = window.setTimeout(() => {
    adminCatalogQrStatus.textContent = DEFAULT_QR_STATUS_TEXT;
    adminCatalogQrStatus.classList.remove("admin-modal__text--error");
  }, 3200);
}

async function syncCatalogQrState() {
  if (!adminCatalogQrImage) {
    return;
  }

  adminCatalogQrImage.alt = "Styled QR code for the user catalog";

  const qrCardAsset = await getCatalogQrCardAsset();
  adminCatalogQrImage.src = qrCardAsset.dataUrl;
}

async function copyCatalogLink() {
  const shareUrl = getCatalogShareUrl();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareUrl);
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = shareUrl;
      document.body.append(tempInput);
      tempInput.select();
      document.execCommand("copy");
      tempInput.remove();
    }

    showCatalogQrStatus("Catalog link copied.");
  } catch (error) {
    showCatalogQrStatus("Copy failed. Please try again.", "error");
  }
}

function openQrModal() {
  adminQrModal?.removeAttribute("hidden");
  document.body.classList.add("admin-modal-open");
  adminCatalogQrStatus.textContent = "Preparing branded QR card...";
  adminCatalogQrStatus.classList.remove("admin-modal__text--error");

  syncCatalogQrState()
    .then(() => {
      adminCatalogQrStatus.textContent = DEFAULT_QR_STATUS_TEXT;
    })
    .catch(() => {
      if (adminCatalogQrImage) {
        adminCatalogQrImage.src = getCatalogQrUrl();
        adminCatalogQrImage.alt = "QR code for the user catalog";
      }

      showCatalogQrStatus("Unable to build branded QR. Plain QR shown instead.", "error");
    });
}

function closeQrModal() {
  adminQrModal?.setAttribute("hidden", "");
  document.body.classList.remove("admin-modal-open");
}

async function saveCatalogQrCode() {
  try {
    const qrCardAsset = await getCatalogQrCardAsset();
    const objectUrl = window.URL.createObjectURL(qrCardAsset.blob);
    const downloadLink = document.createElement("a");

    downloadLink.href = objectUrl;
    downloadLink.download = "user-catalog-qr-card.png";
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.URL.revokeObjectURL(objectUrl);
    showCatalogQrStatus("Branded QR card downloaded.");
  } catch (error) {
    window.open(getCatalogQrUrl(), "_blank", "noopener");
    showCatalogQrStatus("Styled QR failed. Plain QR opened in a new tab instead.", "error");
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sortProducts(list) {
  return [...list].sort(
    (left, right) =>
      left.brand.localeCompare(right.brand) ||
      left.code.localeCompare(right.code),
  );
}

function getSortedProducts() {
  return sortProducts(store.getProducts());
}

function sortBrands(list) {
  return [...list].sort((left, right) => left.name.localeCompare(right.name));
}

function getSortedBrands() {
  return sortBrands(store.getBrands?.() ?? []);
}

function sortTypes(list) {
  return [...list].sort((left, right) => left.name.localeCompare(right.name));
}

function getSortedTypes() {
  return sortTypes(store.getTypes?.() ?? []);
}

function getSelectedProduct() {
  return products.find((product) => product.code === selectedCode) ?? null;
}

function getSelectedBrand() {
  return brands.find((brand) => brand.name.toLowerCase() === String(selectedBrandName ?? "").toLowerCase()) ?? null;
}

function getSelectedType() {
  return types.find((type) => type.name.toLowerCase() === String(selectedTypeName ?? "").toLowerCase()) ?? null;
}

function getBrandLinkedItemCount(brandName) {
  return products.filter((product) => product.brand.toLowerCase() === String(brandName ?? "").toLowerCase()).length;
}

function getTypeLinkedItemCount(typeName) {
  return products.filter((product) => product.filterType.toLowerCase() === String(typeName ?? "").toLowerCase()).length;
}

function ensureItemStatusFilter() {
  if (adminListStatusFilter) {
    return adminListStatusFilter;
  }

  const itemControls = document.querySelector(".admin-list-tools__controls--items");
  const searchField = itemControls?.querySelector(".admin-list-search");

  if (!itemControls || !searchField) {
    return null;
  }

  const field = document.createElement("label");
  field.className = "admin-list-tools__field";
  field.htmlFor = "adminListStatusFilter";
  field.innerHTML = `
    <span>Filter Status</span>
    <select id="adminListStatusFilter">
      <option value="all">All statuses</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  `;

  itemControls.insertBefore(field, searchField);
  adminListStatusFilter = field.querySelector("#adminListStatusFilter");
  return adminListStatusFilter;
}

function getFilteredBrands() {
  const query = adminBrandSearch?.value.trim().toLowerCase() ?? "";
  const filterValue = adminBrandFilter?.value ?? "all";

  return brands.filter((brand) => {
    const matchesQuery = !query || brand.searchText.includes(query);

    if (!matchesQuery) {
      return false;
    }

    const linkedItemCount = getBrandLinkedItemCount(brand.name);

    if (filterValue === "with-items") {
      return linkedItemCount > 0;
    }

    if (filterValue === "no-items") {
      return linkedItemCount === 0;
    }

    return true;
  });
}

function getFilteredTypes() {
  const query = adminTypeSearch?.value.trim().toLowerCase() ?? "";
  const filterValue = adminTypeFilter?.value ?? "all";

  return types.filter((type) => {
    const matchesQuery = !query || type.searchText.includes(query);

    if (!matchesQuery) {
      return false;
    }

    const linkedItemCount = getTypeLinkedItemCount(type.name);

    if (filterValue === "with-items") {
      return linkedItemCount > 0;
    }

    if (filterValue === "no-items") {
      return linkedItemCount === 0;
    }

    return true;
  });
}

function getFilteredProducts() {
  const query = adminSearch?.value.trim().toLowerCase() ?? "";
  const brandFilter = adminListBrandFilter?.value ?? "all";
  const statusFilter = ensureItemStatusFilter()?.value ?? "all";

  return products.filter((product) => {
    const matchesQuery = !query || product.searchText.includes(query);

    if (!matchesQuery) {
      return false;
    }

    const matchesBrand = brandFilter === "all"
      || product.brand.toLowerCase() === brandFilter.toLowerCase();
    const matchesStatus = statusFilter === "all"
      || String(product.status ?? "").toLowerCase() === statusFilter.toLowerCase();

    if (!matchesBrand || !matchesStatus) {
      return false;
    }

    return true;
  });
}

function getActivePageSize() {
  if (adminListPageSize?.value === "all") {
    return Number.POSITIVE_INFINITY;
  }

  const parsedValue = Number.parseInt(adminListPageSize?.value ?? "", 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : DEFAULT_LIST_PAGE_SIZE;
}

function getPageCount(filteredProducts) {
  const pageSize = getActivePageSize();

  if (!filteredProducts.length || !Number.isFinite(pageSize)) {
    return 1;
  }

  return Math.max(1, Math.ceil(filteredProducts.length / pageSize));
}

function clampListPage(filteredProducts) {
  listPage = Math.min(Math.max(1, listPage), getPageCount(filteredProducts));
}

function getVisibleProducts(filteredProducts) {
  const pageSize = getActivePageSize();

  clampListPage(filteredProducts);

  if (!Number.isFinite(pageSize)) {
    return filteredProducts;
  }

  const startIndex = (listPage - 1) * pageSize;
  return filteredProducts.slice(startIndex, startIndex + pageSize);
}

function setPageForCode(code) {
  const filteredProducts = getFilteredProducts();
  const pageSize = getActivePageSize();

  if (!code || !filteredProducts.length || !Number.isFinite(pageSize)) {
    listPage = 1;
    return;
  }

  const productIndex = filteredProducts.findIndex((product) => product.code === code);

  if (productIndex === -1) {
    listPage = 1;
    return;
  }

  listPage = Math.floor(productIndex / pageSize) + 1;
}

function formatListValue(value, fallback = "-") {
  const text = String(value ?? "").trim();

  if (!text) {
    return fallback;
  }

  return text;
}

function formatTypeLabel(value) {
  const text = formatListValue(value);
  return text === "-" ? text : `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function buildListItemMarkup(product) {
  const isActive = product.code === selectedCode;

  return `
    <article class="admin-list-item${isActive ? " is-active" : ""}">
      <span class="admin-list-cell admin-list-cell--code" data-label="Code">
        <button
          class="admin-list-code-button"
          type="button"
          data-code-link
          data-code="${escapeHtml(product.code)}"
        >
          <strong>${escapeHtml(product.code)}</strong>
          <small>${escapeHtml(formatListValue(product.volume))}</small>
        </button>
      </span>
      <span class="admin-list-cell admin-list-cell--title" data-label="Title">
        <strong lang="km">${escapeHtml(product.title)}</strong>
        <small lang="km">${escapeHtml(formatListValue(product.description))}</small>
      </span>
      <span class="admin-list-cell" data-label="Brand">${escapeHtml(formatListValue(product.brand))}</span>
      <span class="admin-list-cell" data-label="Type">${escapeHtml(formatTypeLabel(product.filterType))}</span>
      <span class="admin-list-cell" data-label="Status">${escapeHtml(formatTypeLabel(product.status))}</span>
      <span class="admin-list-cell" data-label="Series">${escapeHtml(formatListValue(product.series))}</span>
      <span class="admin-list-cell admin-list-cell--actions" data-label="Actions">
        <button
          class="pagination__button admin-button admin-button--danger"
          type="button"
          data-code-delete
          data-code="${escapeHtml(product.code)}"
        >
          Delete
        </button>
      </span>
    </article>
  `;
}

function updateStats() {
  const brandRecords = getSortedBrands();
  const typeRecords = getSortedTypes();

  adminTotalCount.textContent = String(products.length);
  adminBrandCount.textContent = String(brandRecords.length);
  adminTypeCount.textContent = String(typeRecords.length);
}

function renderList() {
  const filteredProducts = getFilteredProducts();
  const visibleProducts = getVisibleProducts(filteredProducts);
  const pageSize = getActivePageSize();
  const totalFilteredProducts = filteredProducts.length;
  const pageCount = getPageCount(filteredProducts);
  const rangeStart = totalFilteredProducts ? ((Number.isFinite(pageSize) ? (listPage - 1) * pageSize : 0) + 1) : 0;
  const rangeEnd = totalFilteredProducts ? (Number.isFinite(pageSize) ? Math.min(listPage * pageSize, totalFilteredProducts) : totalFilteredProducts) : 0;

  adminList.innerHTML = visibleProducts.map((product) => buildListItemMarkup(product)).join("");
  adminListHeading.textContent = `Items (${totalFilteredProducts})`;
  adminListRange.textContent = totalFilteredProducts
    ? `Showing ${rangeStart}-${rangeEnd} of ${totalFilteredProducts} records`
    : "Showing 0 records";
  adminPageStatus.textContent = Number.isFinite(pageSize)
    ? `Page ${listPage} of ${pageCount}`
    : "All records";
  adminPrevPageButton.disabled = !Number.isFinite(pageSize) || listPage <= 1 || totalFilteredProducts === 0;
  adminNextPageButton.disabled = !Number.isFinite(pageSize) || listPage >= pageCount || totalFilteredProducts === 0;
  adminListEmpty.hidden = totalFilteredProducts !== 0;
}

function renderBrandOptions() {
  const datalistMarkup = brands
    .map((brand) => `<option value="${escapeHtml(brand.name)}"></option>`)
    .join("");

  if (adminBrandOptions) {
    adminBrandOptions.innerHTML = datalistMarkup;
  }

  if (adminBrandSelect) {
    const currentValue = adminBrandSelect.value;

    adminBrandSelect.innerHTML = [
      '<option value="">Select brand</option>',
      ...brands.map(
        (brand) =>
          `<option value="${escapeHtml(brand.name)}">${escapeHtml(brand.name)}</option>`,
      ),
    ].join("");

    if (currentValue && brands.some((brand) => brand.name === currentValue)) {
      adminBrandSelect.value = currentValue;
    }
  }

  if (adminListBrandFilter) {
    const currentValue = adminListBrandFilter.value;

    adminListBrandFilter.innerHTML = [
      '<option value="all">All brands</option>',
      ...brands.map(
        (brand) =>
          `<option value="${escapeHtml(brand.name)}">${escapeHtml(brand.name)}</option>`,
      ),
    ].join("");

    adminListBrandFilter.value = currentValue && (
      currentValue === "all" || brands.some((brand) => brand.name === currentValue)
    )
      ? currentValue
      : "all";
  }
}

function renderTypeOptions() {
  if (!adminTypeSelect) {
    return;
  }

  const currentValue = adminTypeSelect.value;
  const nextTypes = types.length ? types : [{ name: "sprayer" }, { name: "battery" }];

  adminTypeSelect.innerHTML = nextTypes
    .map((type) => `<option value="${escapeHtml(type.name)}">${escapeHtml(formatTypeLabel(type.name))}</option>`)
    .join("");

  if (currentValue && nextTypes.some((type) => type.name === currentValue)) {
    adminTypeSelect.value = currentValue;
    return;
  }

  if (nextTypes.some((type) => type.name === "sprayer")) {
    adminTypeSelect.value = "sprayer";
    return;
  }

  adminTypeSelect.value = nextTypes[0]?.name ?? "";
}

function buildBrandListItemMarkup(brand) {
  const isActive = brand.name.toLowerCase() === String(selectedBrandName ?? "").toLowerCase();
  const linkedItemCount = getBrandLinkedItemCount(brand.name);
  const itemLabel = linkedItemCount === 1 ? "1 item" : `${linkedItemCount} items`;

  return `
    <article class="admin-list-item admin-list-item--brand${isActive ? " is-active" : ""}">
      <span class="admin-list-cell admin-list-cell--code" data-label="Brand">
        <button
          class="admin-list-code-button"
          type="button"
          data-brand-link
          data-brand-name="${escapeHtml(brand.name)}"
        >
          <strong>${escapeHtml(brand.name)}</strong>
          <small>${escapeHtml(itemLabel)}</small>
        </button>
      </span>
      <span class="admin-list-cell" data-label="Items">${escapeHtml(itemLabel)}</span>
      <span class="admin-list-cell admin-list-cell--title" data-label="Note">
        <small>${escapeHtml(formatListValue(brand.note, "No note"))}</small>
      </span>
      <span class="admin-list-cell admin-list-cell--actions" data-label="Actions">
        <button
          class="pagination__button admin-button admin-button--danger"
          type="button"
          data-brand-delete
          data-brand-name="${escapeHtml(brand.name)}"
          ${linkedItemCount > 0 ? "disabled" : ""}
        >
          Delete
        </button>
      </span>
    </article>
  `;
}

function buildTypeListItemMarkup(type) {
  const isActive = type.name.toLowerCase() === String(selectedTypeName ?? "").toLowerCase();
  const linkedItemCount = getTypeLinkedItemCount(type.name);
  const itemLabel = linkedItemCount === 1 ? "1 item" : `${linkedItemCount} items`;

  return `
    <article class="admin-list-item admin-list-item--brand${isActive ? " is-active" : ""}">
      <span class="admin-list-cell admin-list-cell--code" data-label="Type">
        <button
          class="admin-list-code-button"
          type="button"
          data-type-link
          data-type-name="${escapeHtml(type.name)}"
        >
          <strong>${escapeHtml(formatTypeLabel(type.name))}</strong>
          <small>${escapeHtml(itemLabel)}</small>
        </button>
      </span>
      <span class="admin-list-cell" data-label="Items">${escapeHtml(itemLabel)}</span>
      <span class="admin-list-cell admin-list-cell--title" data-label="Note">
        <small>${escapeHtml(formatListValue(type.note, "No note"))}</small>
      </span>
      <span class="admin-list-cell admin-list-cell--actions" data-label="Actions">
        <button
          class="pagination__button admin-button admin-button--danger"
          type="button"
          data-type-delete
          data-type-name="${escapeHtml(type.name)}"
          ${linkedItemCount > 0 ? "disabled" : ""}
        >
          Delete
        </button>
      </span>
    </article>
  `;
}

function renderBrandList() {
  const filteredBrands = getFilteredBrands();
  const totalBrands = filteredBrands.length;

  if (adminBrandHeading) {
    adminBrandHeading.textContent = `Brands (${totalBrands})`;
  }

  if (adminBrandRange) {
    adminBrandRange.textContent = totalBrands ? `Showing ${totalBrands} brands` : "Showing 0 brands";
  }

  if (adminBrandList) {
    adminBrandList.innerHTML = filteredBrands.map((brand) => buildBrandListItemMarkup(brand)).join("");
  }

  if (adminBrandEmpty) {
    adminBrandEmpty.hidden = totalBrands !== 0;
  }
}

function renderTypeList() {
  const filteredTypes = getFilteredTypes();
  const totalTypes = filteredTypes.length;

  if (adminTypeHeading) {
    adminTypeHeading.textContent = `Item Types (${totalTypes})`;
  }

  if (adminTypeRange) {
    adminTypeRange.textContent = totalTypes ? `Showing ${totalTypes} item types` : "Showing 0 item types";
  }

  if (adminTypeList) {
    adminTypeList.innerHTML = filteredTypes.map((type) => buildTypeListItemMarkup(type)).join("");
  }

  if (adminTypeEmpty) {
    adminTypeEmpty.hidden = totalTypes !== 0;
  }
}

function setFormValue(name, value) {
  const field = adminForm.elements.namedItem(name);

  if (field && "value" in field) {
    field.value = value;
  }
}

function setFormChecked(name, checked) {
  const field = adminForm.elements.namedItem(name);

  if (field && "checked" in field) {
    field.checked = Boolean(checked);
  }
}

function getFormValue(name, fallbackValue = "") {
  const field = adminForm.elements.namedItem(name);
  return field && "value" in field ? field.value : fallbackValue;
}

function getFormChecked(name, fallbackValue = false) {
  const field = adminForm.elements.namedItem(name);
  return field && "checked" in field ? field.checked : fallbackValue;
}

function setBrandFormValue(name, value) {
  const field = adminBrandForm?.elements.namedItem(name);

  if (field && "value" in field) {
    field.value = value;
  }
}

function getBrandFormValue(name, fallbackValue = "") {
  const field = adminBrandForm?.elements.namedItem(name);
  return field && "value" in field ? field.value : fallbackValue;
}

function setTypeFormValue(name, value) {
  const field = adminTypeForm?.elements.namedItem(name);

  if (field && "value" in field) {
    field.value = value;
  }
}

function getTypeFormValue(name, fallbackValue = "") {
  const field = adminTypeForm?.elements.namedItem(name);
  return field && "value" in field ? field.value : fallbackValue;
}

function toEditablePriceValue(value) {
  const text = String(value ?? "").trim();

  if (!text) {
    return "";
  }

  return text.replace(/[^0-9.]/g, "");
}

function isImageDataUrl(value) {
  return /^data:image\//i.test(String(value ?? "").trim());
}

function clearPendingLocalImage() {
  pendingLocalImageDataUrl = "";
  pendingLocalImageName = "";

  if (adminImageFileInput) {
    adminImageFileInput.value = "";
  }
}

function getActiveImageValue() {
  return getFormValue("image") || pendingLocalImageDataUrl;
}

function syncItemImageFieldState() {
  const directImageValue = getFormValue("image");
  const previewSource = directImageValue || pendingLocalImageDataUrl;

  if (adminImageUploadMeta) {
    if (directImageValue) {
      adminImageUploadMeta.textContent = "Using the image URL above. You can replace it with a local file at any time.";
    } else if (pendingLocalImageDataUrl) {
      adminImageUploadMeta.textContent = pendingLocalImageName
        ? `${pendingLocalImageName} selected from this device.`
        : "Using a saved local image from this browser.";
    } else {
      adminImageUploadMeta.textContent = "Paste an image URL or choose a local file from this device. Local images stay in this browser.";
    }
  }

  if (!adminImagePreview || !adminImagePreviewEmpty) {
    return;
  }

  if (!previewSource) {
    adminImagePreview.hidden = true;
    adminImagePreview.removeAttribute("src");
    adminImagePreviewEmpty.hidden = false;
    adminImagePreviewEmpty.textContent = "No image selected. The selected icon will be shown.";
    return;
  }

  adminImagePreviewEmpty.hidden = true;
  adminImagePreview.hidden = false;
  adminImagePreview.src = previewSource;
}

function setItemImageValue(imageValue) {
  const normalizedImageValue = String(imageValue ?? "").trim();

  clearPendingLocalImage();

  if (isImageDataUrl(normalizedImageValue)) {
    pendingLocalImageDataUrl = normalizedImageValue;
    setFormValue("image", "");
  } else {
    setFormValue("image", normalizedImageValue);
  }

  syncItemImageFieldState();
}

function fillForm(product) {
  const nextProduct = product ?? store.getEmptyProduct();

  setFormValue("code", nextProduct.code);
  setFormValue("brand", nextProduct.brand);
  setFormValue("filterType", nextProduct.filterType);
  setFormValue("status", nextProduct.status);
  setFormChecked("showOnUserPage", nextProduct.showOnUserPage);
  setFormValue("similarKey", nextProduct.similarKey);
  setFormValue("icon", nextProduct.icon);
  setItemImageValue(nextProduct.image);
  setFormValue("volume", nextProduct.volume);
  setFormValue("series", nextProduct.series);
  setFormValue("stock", String(nextProduct.stock ?? 0));
  setFormValue("depoPrice", toEditablePriceValue(nextProduct.depoPrice));
  setFormValue("userPrice", toEditablePriceValue(nextProduct.userPrice));
  setFormValue("artBg", nextProduct.artBg);
  setFormValue("artColor", nextProduct.artColor);
  setFormValue("title", nextProduct.title);
  setFormValue("description", nextProduct.description);
  setFormValue(
    "colors",
    (nextProduct.colors ?? [])
      .map((color) => `${color.label}|${color.hex}`)
      .join("\n"),
  );
  setFormValue("sizes", (nextProduct.sizes ?? []).join(", "));
  setFormValue(
    "specRows",
    (nextProduct.specRows ?? [])
      .map((row) => `${row.label}|${row.value}`)
      .join("\n"),
  );
  setFormValue("featurePoints", (nextProduct.featurePoints ?? []).join("\n"));
  setFormValue("tags", (nextProduct.tags ?? []).join(", "));
}

function syncEditorState() {
  const selectedProduct = getSelectedProduct();

  if (selectedProduct) {
    fillForm(selectedProduct);
    adminFormHeading.textContent = `Edit ${selectedProduct.code}`;
    adminModeBadge.textContent = "Editing";
    adminModeBadge.className = "stock-pill stock-pill--in";
    return;
  }

  fillForm(store.getEmptyProduct());
  adminFormHeading.textContent = "Create Item";
  adminModeBadge.textContent = "New Item";
  adminModeBadge.className = "stock-pill stock-pill--low";
}

function fillBrandForm(brand) {
  const nextBrand = brand ?? store.getEmptyBrand();
  const linkedItemCount = getBrandLinkedItemCount(nextBrand.name);
  const itemLabel = linkedItemCount === 1 ? "1 item" : `${linkedItemCount} items`;

  setBrandFormValue("name", nextBrand.name);
  setBrandFormValue("note", nextBrand.note);

  if (adminBrandLinkedItems) {
    adminBrandLinkedItems.value = itemLabel;
  }
}

function syncBrandEditorState() {
  const selectedBrand = getSelectedBrand();

  if (selectedBrand) {
    fillBrandForm(selectedBrand);

    if (adminBrandFormHeading) {
      adminBrandFormHeading.textContent = `Edit ${selectedBrand.name}`;
    }

    if (adminBrandModeBadge) {
      adminBrandModeBadge.textContent = "Editing";
      adminBrandModeBadge.className = "stock-pill stock-pill--in";
    }

    if (adminBrandDeleteButton) {
      adminBrandDeleteButton.disabled = getBrandLinkedItemCount(selectedBrand.name) > 0;
    }

    return;
  }

  fillBrandForm(store.getEmptyBrand());

  if (adminBrandFormHeading) {
    adminBrandFormHeading.textContent = "Create Brand";
  }

  if (adminBrandModeBadge) {
    adminBrandModeBadge.textContent = "New Brand";
    adminBrandModeBadge.className = "stock-pill stock-pill--low";
  }

  if (adminBrandDeleteButton) {
    adminBrandDeleteButton.disabled = true;
  }
}

function fillTypeForm(type) {
  const nextType = type ?? store.getEmptyType();
  const linkedItemCount = getTypeLinkedItemCount(nextType.name);
  const itemLabel = linkedItemCount === 1 ? "1 item" : `${linkedItemCount} items`;

  setTypeFormValue("name", nextType.name);
  setTypeFormValue("note", nextType.note);

  if (adminTypeLinkedItems) {
    adminTypeLinkedItems.value = itemLabel;
  }
}

function syncTypeEditorState() {
  const selectedType = getSelectedType();

  if (selectedType) {
    fillTypeForm(selectedType);

    if (adminTypeFormHeading) {
      adminTypeFormHeading.textContent = `Edit ${formatTypeLabel(selectedType.name)}`;
    }

    if (adminTypeModeBadge) {
      adminTypeModeBadge.textContent = "Editing";
      adminTypeModeBadge.className = "stock-pill stock-pill--in";
    }

    return;
  }

  fillTypeForm(store.getEmptyType());

  if (adminTypeFormHeading) {
    adminTypeFormHeading.textContent = "Create Type";
  }

  if (adminTypeModeBadge) {
    adminTypeModeBadge.textContent = "New Type";
    adminTypeModeBadge.className = "stock-pill stock-pill--low";
  }
}

function showStatus(message, type = "info") {
  window.clearTimeout(statusTimeoutId);
  adminStatus.hidden = false;
  adminStatus.textContent = message;
  adminStatus.classList.toggle("admin-status--error", type === "error");

  statusTimeoutId = window.setTimeout(() => {
    adminStatus.hidden = true;
  }, 2800);
}

function showBrandStatus(message, type = "info") {
  if (!adminBrandStatus) {
    return;
  }

  window.clearTimeout(brandStatusTimeoutId);
  adminBrandStatus.hidden = false;
  adminBrandStatus.textContent = message;
  adminBrandStatus.classList.toggle("admin-status--error", type === "error");

  brandStatusTimeoutId = window.setTimeout(() => {
    adminBrandStatus.hidden = true;
  }, 2800);
}

function showTypeStatus(message, type = "info") {
  if (!adminTypeStatus) {
    return;
  }

  window.clearTimeout(typeStatusTimeoutId);
  adminTypeStatus.hidden = false;
  adminTypeStatus.textContent = message;
  adminTypeStatus.classList.toggle("admin-status--error", type === "error");

  typeStatusTimeoutId = window.setTimeout(() => {
    adminTypeStatus.hidden = true;
  }, 2800);
}

function showImportExportNotice(title, text, type = "success") {
  if (window.Swal?.fire) {
    const isSuccess = type === "success";

    window.Swal.fire({
      title,
      text,
      icon: type,
      showConfirmButton: !isSuccess,
      timer: isSuccess ? 1800 : undefined,
      timerProgressBar: isSuccess,
    });
    return;
  }

  window.alert(text);
}

function hasExcelSupport() {
  return Boolean(window.XLSX?.utils && window.XLSX?.read && window.XLSX?.writeFile);
}

function ensureExcelSupport() {
  if (hasExcelSupport()) {
    return true;
  }

  showImportExportNotice(
    "Excel unavailable",
    "Excel tools did not load. Refresh the page and try again.",
    "error",
  );
  return false;
}

function formatExcelDateToken() {
  return new Date().toISOString().slice(0, 10);
}

function serializeSpecRows(specRows) {
  return (specRows ?? [])
    .map((row) => `${row.label}|${row.value}`)
    .join("\n");
}

function serializeColors(colors) {
  return (colors ?? [])
    .map((color) => `${color.label}|${color.hex}`)
    .join("\n");
}

function buildItemExportRow(product) {
  return {
    Code: product.code,
    Brand: product.brand,
    "Product Type": product.filterType,
    Status: formatTypeLabel(product.status),
    "Visible On User Page": Boolean(product.showOnUserPage),
    "Similar Group": product.similarKey,
    Icon: product.icon,
    Image: product.image,
    Volume: product.volume,
    Series: product.series,
    "Depot Price": product.depoPrice,
    "User Price": product.userPrice,
    "Product Title": product.title,
    Description: product.description,
    Sizes: (product.sizes ?? []).join("\n"),
  };
}

function buildBrandExportRow(brand) {
  return {
    "Brand Name": brand.name,
    Note: brand.note,
  };
}

function buildTypeExportRow(type) {
  return {
    "Type Name": type.name,
    Note: type.note,
  };
}

function buildWorkbook(rows, columns, sheetName) {
  const headers = columns.map((column) => column.header);
  const worksheet = rows.length
    ? window.XLSX.utils.json_to_sheet(rows, { header: headers })
    : window.XLSX.utils.aoa_to_sheet([headers]);

  worksheet["!cols"] = columns.map((column) => ({ wch: column.width }));

  const workbook = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  return workbook;
}

function normalizeSpreadsheetHeader(header) {
  return String(header ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeSpreadsheetRow(row) {
  return Object.entries(row).reduce((nextRow, [key, value]) => {
    const normalizedKey = normalizeSpreadsheetHeader(key);

    if (normalizedKey) {
      nextRow[normalizedKey] = value;
    }

    return nextRow;
  }, {});
}

function isSpreadsheetRowEmpty(row) {
  return Object.values(row).every((value) => String(value ?? "").trim() === "");
}

function getSpreadsheetValue(row, aliases, fallbackValue) {
  for (const alias of aliases) {
    const normalizedAlias = normalizeSpreadsheetHeader(alias);

    if (Object.prototype.hasOwnProperty.call(row, normalizedAlias)) {
      return {
        found: true,
        value: row[normalizedAlias],
      };
    }
  }

  return {
    found: false,
    value: fallbackValue,
  };
}

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

async function readWorkbookRows(file) {
  const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error("The workbook does not contain any sheets.");
  }

  return window.XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
    defval: "",
  });
}

function buildImportedProduct(row, existingProduct) {
  return {
    ...existingProduct,
    code: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.code, existingProduct.code).value,
    brand: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.brand, existingProduct.brand).value,
    filterType: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.filterType, existingProduct.filterType).value,
    status: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.status, existingProduct.status).value,
    showOnUserPage: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.showOnUserPage, existingProduct.showOnUserPage).value,
    similarKey: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.similarKey, existingProduct.similarKey).value,
    icon: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.icon, existingProduct.icon).value,
    image: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.image, existingProduct.image).value,
    volume: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.volume, existingProduct.volume).value,
    series: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.series, existingProduct.series).value,
    depoPrice: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.depoPrice, existingProduct.depoPrice).value,
    userPrice: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.userPrice, existingProduct.userPrice).value,
    title: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.title, existingProduct.title).value,
    description: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.description, existingProduct.description).value,
    sizes: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.sizes, existingProduct.sizes).value,
  };
}

function buildImportedBrand(row, existingBrand) {
  return {
    ...existingBrand,
    name: getSpreadsheetValue(row, BRAND_IMPORT_ALIASES.name, existingBrand.name).value,
    note: getSpreadsheetValue(row, BRAND_IMPORT_ALIASES.note, existingBrand.note).value,
  };
}

function buildImportedType(row, existingType) {
  return {
    ...existingType,
    name: getSpreadsheetValue(row, TYPE_IMPORT_ALIASES.name, existingType.name).value,
    note: getSpreadsheetValue(row, TYPE_IMPORT_ALIASES.note, existingType.note).value,
  };
}

function exportItemsToExcel() {
  if (!ensureExcelSupport()) {
    return;
  }

  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    showImportExportNotice(
      "No items to export",
      "There are no items matching the current filters.",
      "warning",
    );
    return;
  }

  const workbook = buildWorkbook(
    filteredProducts.map((product) => buildItemExportRow(product)),
    ITEM_EXPORT_COLUMNS,
    EXCEL_ITEMS_SHEET_NAME,
  );

  window.XLSX.writeFile(workbook, `agt-items-${formatExcelDateToken()}.xlsx`);
  showImportExportNotice(
    "Items exported",
    `Exported ${filteredProducts.length} ${pluralize(filteredProducts.length, "item")} to Excel.`,
    "success",
  );
}

function exportBrandsToExcel() {
  if (!ensureExcelSupport()) {
    return;
  }

  const filteredBrands = getFilteredBrands();

  if (!filteredBrands.length) {
    showImportExportNotice(
      "No brands to export",
      "There are no brands matching the current filters.",
      "warning",
    );
    return;
  }

  const workbook = buildWorkbook(
    filteredBrands.map((brand) => buildBrandExportRow(brand)),
    BRAND_EXPORT_COLUMNS,
    EXCEL_BRANDS_SHEET_NAME,
  );

  window.XLSX.writeFile(workbook, `agt-brands-${formatExcelDateToken()}.xlsx`);
  showImportExportNotice(
    "Brands exported",
    `Exported ${filteredBrands.length} ${pluralize(filteredBrands.length, "brand")} to Excel.`,
    "success",
  );
}

function exportTypesToExcel() {
  if (!ensureExcelSupport()) {
    return;
  }

  const filteredTypes = getFilteredTypes();

  if (!filteredTypes.length) {
    showImportExportNotice(
      "No item types to export",
      "There are no item types matching the current filters.",
      "warning",
    );
    return;
  }

  const workbook = buildWorkbook(
    filteredTypes.map((type) => buildTypeExportRow(type)),
    TYPE_EXPORT_COLUMNS,
    EXCEL_TYPES_SHEET_NAME,
  );

  window.XLSX.writeFile(workbook, `agt-item-types-${formatExcelDateToken()}.xlsx`);
  showImportExportNotice(
    "Item types exported",
    `Exported ${filteredTypes.length} ${pluralize(filteredTypes.length, "item type")} to Excel.`,
    "success",
  );
}

async function importItemsFromExcel(file) {
  if (!ensureExcelSupport()) {
    return;
  }

  const rows = await readWorkbookRows(file);
  const nextProductsByCode = new Map(products.map((product) => [product.code.toLowerCase(), product]));
  let importedCount = 0;
  let skippedCount = 0;
  const issues = [];

  rows.forEach((row, index) => {
    const normalizedRow = normalizeSpreadsheetRow(row);

    if (isSpreadsheetRowEmpty(normalizedRow)) {
      return;
    }

    const codeValue = String(getSpreadsheetValue(normalizedRow, ITEM_IMPORT_ALIASES.code, "").value ?? "").trim();
    const existingProduct = codeValue
      ? nextProductsByCode.get(codeValue.toLowerCase()) ?? store.getEmptyProduct()
      : store.getEmptyProduct();
    const normalizedProduct = store.normalizeProduct(buildImportedProduct(normalizedRow, existingProduct));

    if (!normalizedProduct.code || !normalizedProduct.brand || !normalizedProduct.title) {
      skippedCount += 1;

      if (issues.length < 3) {
        issues.push(`Row ${index + 2}: code, brand, and product title are required.`);
      }

      return;
    }

    nextProductsByCode.set(normalizedProduct.code.toLowerCase(), normalizedProduct);
    importedCount += 1;
  });

  if (!importedCount) {
    const detail = issues[0] ?? "The workbook did not contain any valid item rows.";
    throw new Error(detail);
  }

  store.saveProducts(sortProducts([...nextProductsByCode.values()]));
  refreshCurrentSection();

  const summary = skippedCount
    ? `Imported ${importedCount} ${pluralize(importedCount, "item")} and skipped ${skippedCount} invalid ${pluralize(skippedCount, "row")}.`
    : `Imported ${importedCount} ${pluralize(importedCount, "item")} from Excel.`;

  showImportExportNotice("Items imported", summary, skippedCount ? "warning" : "success");
}

async function importBrandsFromExcel(file) {
  if (!ensureExcelSupport()) {
    return;
  }

  const rows = await readWorkbookRows(file);
  const nextBrandsByName = new Map(brands.map((brand) => [brand.name.toLowerCase(), brand]));
  let importedCount = 0;
  let skippedCount = 0;
  const issues = [];

  rows.forEach((row, index) => {
    const normalizedRow = normalizeSpreadsheetRow(row);

    if (isSpreadsheetRowEmpty(normalizedRow)) {
      return;
    }

    const nameValue = String(getSpreadsheetValue(normalizedRow, BRAND_IMPORT_ALIASES.name, "").value ?? "").trim();
    const existingBrand = nameValue
      ? nextBrandsByName.get(nameValue.toLowerCase()) ?? store.getEmptyBrand()
      : store.getEmptyBrand();
    const normalizedBrand = store.normalizeBrand(buildImportedBrand(normalizedRow, existingBrand));

    if (!normalizedBrand.name) {
      skippedCount += 1;

      if (issues.length < 3) {
        issues.push(`Row ${index + 2}: brand name is required.`);
      }

      return;
    }

    nextBrandsByName.set(normalizedBrand.name.toLowerCase(), normalizedBrand);
    importedCount += 1;
  });

  if (!importedCount) {
    const detail = issues[0] ?? "The workbook did not contain any valid brand rows.";
    throw new Error(detail);
  }

  store.saveBrands(sortBrands([...nextBrandsByName.values()]));
  refreshCurrentSection();

  const summary = skippedCount
    ? `Imported ${importedCount} ${pluralize(importedCount, "brand")} and skipped ${skippedCount} invalid ${pluralize(skippedCount, "row")}.`
    : `Imported ${importedCount} ${pluralize(importedCount, "brand")} from Excel.`;

  showImportExportNotice("Brands imported", summary, skippedCount ? "warning" : "success");
}

async function importTypesFromExcel(file) {
  if (!ensureExcelSupport()) {
    return;
  }

  const rows = await readWorkbookRows(file);
  const nextTypesByName = new Map(types.map((type) => [type.name.toLowerCase(), type]));
  let importedCount = 0;
  let skippedCount = 0;
  const issues = [];

  rows.forEach((row, index) => {
    const normalizedRow = normalizeSpreadsheetRow(row);

    if (isSpreadsheetRowEmpty(normalizedRow)) {
      return;
    }

    const nameValue = String(getSpreadsheetValue(normalizedRow, TYPE_IMPORT_ALIASES.name, "").value ?? "").trim();
    const existingType = nameValue
      ? nextTypesByName.get(nameValue.toLowerCase()) ?? store.getEmptyType()
      : store.getEmptyType();
    const normalizedType = store.normalizeType(buildImportedType(normalizedRow, existingType));

    if (!normalizedType.name) {
      skippedCount += 1;

      if (issues.length < 3) {
        issues.push(`Row ${index + 2}: type name is required.`);
      }

      return;
    }

    nextTypesByName.set(normalizedType.name.toLowerCase(), normalizedType);
    importedCount += 1;
  });

  if (!importedCount) {
    const detail = issues[0] ?? "The workbook did not contain any valid item type rows.";
    throw new Error(detail);
  }

  store.saveTypes(sortTypes([...nextTypesByName.values()]));
  refreshCurrentSection();

  const summary = skippedCount
    ? `Imported ${importedCount} ${pluralize(importedCount, "item type")} and skipped ${skippedCount} invalid ${pluralize(skippedCount, "row")}.`
    : `Imported ${importedCount} ${pluralize(importedCount, "item type")} from Excel.`;

  showImportExportNotice("Item types imported", summary, skippedCount ? "warning" : "success");
}

function refreshItemsView() {
  products = getSortedProducts();
  brands = getSortedBrands();
  types = getSortedTypes();

  if (selectedCode && !products.some((product) => product.code === selectedCode)) {
    selectedCode = null;
  }

  setPageForCode(selectedCode);
  updateStats();
  renderBrandOptions();
  renderTypeOptions();
  renderList();
  syncEditorState();
  syncEditorVisibility();
  syncListVisibility();
}

function refreshDashboardView() {
  products = getSortedProducts();
  brands = getSortedBrands();
  types = getSortedTypes();
  updateStats();
  renderBrandOptions();
  renderTypeOptions();
}

function refreshBrandsView() {
  products = getSortedProducts();
  brands = getSortedBrands();
  types = getSortedTypes();

  if (selectedBrandName && !brands.some((brand) => brand.name.toLowerCase() === String(selectedBrandName).toLowerCase())) {
    selectedBrandName = null;
  }

  updateStats();
  renderBrandOptions();
  renderTypeOptions();
  renderBrandList();
  syncBrandEditorState();
  syncBrandVisibility();
}

function refreshTypesView() {
  products = getSortedProducts();
  brands = getSortedBrands();
  types = getSortedTypes();

  if (selectedTypeName && !types.some((type) => type.name.toLowerCase() === String(selectedTypeName).toLowerCase())) {
    selectedTypeName = null;
  }

  updateStats();
  renderBrandOptions();
  renderTypeOptions();
  renderTypeList();
  syncTypeEditorState();
  syncTypeVisibility();
}

function refreshSettingsView() {
  syncAdminLanguageButtons();
  syncAuthSession();
}

function refreshCurrentSection() {
  syncSectionVisibility();

  if (currentSection === "dashboard") {
    refreshDashboardView();
    return;
  }

  if (currentSection === "brands") {
    refreshBrandsView();
    return;
  }

  if (currentSection === "types") {
    refreshTypesView();
    return;
  }

  if (currentSection === "settings") {
    refreshSettingsView();
    return;
  }

  refreshItemsView();
}

function readFormProduct() {
  const selectedProduct = getSelectedProduct() ?? store.getEmptyProduct();

  return {
    code: getFormValue("code"),
    brand: getFormValue("brand"),
    filterType: getFormValue("filterType"),
    status: getFormValue("status", selectedProduct.status),
    showOnUserPage: getFormChecked("showOnUserPage", selectedProduct.showOnUserPage),
    similarKey: getFormValue("similarKey"),
    icon: getFormValue("icon"),
    image: getActiveImageValue(),
    volume: getFormValue("volume"),
    series: getFormValue("series"),
    stock: getFormValue("stock", String(selectedProduct.stock ?? 0)),
    depoPrice: getFormValue("depoPrice"),
    userPrice: getFormValue("userPrice"),
    artBg: getFormValue("artBg", selectedProduct.artBg),
    artColor: getFormValue("artColor", selectedProduct.artColor),
    title: getFormValue("title"),
    description: getFormValue("description"),
    colors: getFormValue(
      "colors",
      (selectedProduct.colors ?? [])
        .map((color) => `${color.label}|${color.hex}`)
        .join("\n"),
    ),
    sizes: getFormValue("sizes", (selectedProduct.sizes ?? []).join(", ")),
    specRows: getFormValue(
      "specRows",
      (selectedProduct.specRows ?? [])
        .map((row) => `${row.label}|${row.value}`)
        .join("\n"),
    ),
    featurePoints: getFormValue("featurePoints", (selectedProduct.featurePoints ?? []).join("\n")),
    tags: getFormValue("tags", (selectedProduct.tags ?? []).join(", ")),
    featured: Boolean(selectedProduct.featured),
  };
}

function readBrandForm() {
  const selectedBrand = getSelectedBrand() ?? store.getEmptyBrand();

  return {
    name: getBrandFormValue("name", selectedBrand.name),
    note: getBrandFormValue("note", selectedBrand.note),
  };
}

function readTypeForm() {
  const selectedType = getSelectedType() ?? store.getEmptyType();

  return {
    name: getTypeFormValue("name", selectedType.name),
    note: getTypeFormValue("note", selectedType.note),
  };
}

function saveProduct(event) {
  event.preventDefault();

  const rawProduct = readFormProduct();
  const normalizedProduct = store.normalizeProduct(rawProduct);
  const previousCode = selectedCode;
  const isNewItem = !previousCode;

  if (!normalizedProduct.code || !normalizedProduct.brand || !normalizedProduct.title) {
    showStatus("Code, brand, and product title are required.", "error");
    return;
  }

  const duplicateProduct = products.find(
    (product) =>
      product.code.toLowerCase() === normalizedProduct.code.toLowerCase() &&
      product.code.toLowerCase() !== String(previousCode ?? "").toLowerCase(),
  );

  if (duplicateProduct) {
    showStatus(`Code ${normalizedProduct.code} already exists.`, "error");
    return;
  }

  const nextProducts = products.filter(
    (product) => product.code.toLowerCase() !== String(previousCode ?? "").toLowerCase(),
  );
  nextProducts.push(normalizedProduct);

  try {
    store.saveProducts(nextProducts);
  } catch (error) {
    const saveMessage = error instanceof DOMException && error.name === "QuotaExceededError"
      ? "This image is too large for browser storage. Try a smaller file or use an image URL."
      : "Unable to save this item right now.";
    showStatus(saveMessage, "error");
    return;
  }

  selectedCode = normalizedProduct.code;
  refreshItemsView();
  showStatus(`Saved ${normalizedProduct.code}.`);

  if (window.Swal?.fire) {
    window.Swal.fire({
      title: isNewItem ? "Item created" : "Item updated",
      text: `Item "${normalizedProduct.code}" has been saved to your catalog.`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
}

function saveBrand(event) {
  event.preventDefault();

  const rawBrand = readBrandForm();
  const normalizedBrand = store.normalizeBrand(rawBrand);
  const previousName = String(selectedBrandName ?? "").trim();
  const isNewBrand = !previousName;

  if (!normalizedBrand.name) {
    showBrandStatus("Brand name is required.", "error");
    return;
  }

  const duplicateBrand = brands.find(
    (brand) =>
      brand.name.toLowerCase() === normalizedBrand.name.toLowerCase() &&
      brand.name.toLowerCase() !== previousName.toLowerCase(),
  );

  if (duplicateBrand) {
    showBrandStatus(`Brand ${normalizedBrand.name} already exists.`, "error");
    return;
  }

  if (previousName && previousName.toLowerCase() !== normalizedBrand.name.toLowerCase()) {
    const renamedProducts = products.map((product) =>
      product.brand.toLowerCase() === previousName.toLowerCase()
        ? { ...product, brand: normalizedBrand.name }
        : product,
    );

    store.saveProducts(renamedProducts);
    products = getSortedProducts();
  }

  const nextBrands = brands
    .filter((brand) => brand.name.toLowerCase() !== previousName.toLowerCase())
    .map((brand) => ({ name: brand.name, note: brand.note }));

  nextBrands.push(normalizedBrand);
  store.saveBrands(nextBrands);

  selectedBrandName = normalizedBrand.name;
  brandEditorHidden = false;
  refreshBrandsView();
  showBrandStatus(`Saved ${normalizedBrand.name}.`);

  if (window.Swal?.fire) {
    const swalOptions = {
      title: "Brand saved",
      text: `Brand "${normalizedBrand.name}" has been saved to your catalog.`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    };

    if (isNewBrand) {
      window.Swal.fire(swalOptions).then(() => {
        selectedBrandName = null;
        brandEditorHidden = true;
        refreshBrandsView();
      });
    } else {
      window.Swal.fire(swalOptions);
    }
  }
}

function saveType(event) {
  event.preventDefault();

  const rawType = readTypeForm();
  const normalizedType = store.normalizeType(rawType);
  const previousName = String(selectedTypeName ?? "").trim().toLowerCase();
  const isNewType = !previousName;

  if (!normalizedType.name) {
    showTypeStatus("Type name is required.", "error");
    return;
  }

  const duplicateType = types.find(
    (type) =>
      type.name.toLowerCase() === normalizedType.name.toLowerCase()
      && type.name.toLowerCase() !== previousName,
  );

  if (duplicateType) {
    showTypeStatus(`Type ${formatTypeLabel(normalizedType.name)} already exists.`, "error");
    return;
  }

  if (previousName && previousName !== normalizedType.name.toLowerCase()) {
    const renamedProducts = products.map((product) => {
      if (product.filterType.toLowerCase() !== previousName) {
        return product;
      }

      const nextProduct = {
        ...product,
        filterType: normalizedType.name,
      };

      if (String(product.similarKey ?? "").toLowerCase() === previousName) {
        nextProduct.similarKey = normalizedType.name;
      }

      return nextProduct;
    });

    store.saveProducts(renamedProducts);
    products = getSortedProducts();
  }

  const nextTypes = types
    .filter((type) => type.name.toLowerCase() !== previousName)
    .map((type) => ({ name: type.name, note: type.note }));

  nextTypes.push(normalizedType);
  store.saveTypes(nextTypes);

  selectedTypeName = normalizedType.name;
  typeEditorHidden = false;
  refreshTypesView();
  showTypeStatus(`Saved ${formatTypeLabel(normalizedType.name)}.`);

  if (window.Swal?.fire) {
    const swalOptions = {
      title: "Item type saved",
      text: `Item type "${formatTypeLabel(normalizedType.name)}" has been saved to your catalog.`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    };

    if (isNewType) {
      window.Swal.fire(swalOptions).then(() => {
        selectedTypeName = null;
        typeEditorHidden = true;
        refreshTypesView();
      });
    } else {
      window.Swal.fire(swalOptions);
    }
  }
}

async function deleteSelectedProduct() {
  const selectedProduct = getSelectedProduct();

  if (!selectedProduct) {
    showStatus("Select a product first.", "error");
    return;
  }

  if (window.Swal?.fire) {
    const result = await window.Swal.fire({
      title: "Delete item?",
      text: `Delete ${selectedProduct.code} from the catalog?`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e23e3e",
      confirmButtonText: "Delete",
      focusCancel: true,
    });

    if (!result.isConfirmed) {
      return;
    }
  } else if (!window.confirm(`Delete ${selectedProduct.code}?`)) {
    return;
  }

  store.deleteProduct(selectedProduct.code);
  selectedCode = null;
  refreshItemsView();
  showStatus(`Deleted ${selectedProduct.code}.`);
}

async function deleteSelectedBrand() {
  const selectedBrand = getSelectedBrand();

  if (!selectedBrand) {
    showBrandStatus("Select a brand first.", "error");
    return;
  }

  const linkedItemCount = getBrandLinkedItemCount(selectedBrand.name);

  if (linkedItemCount > 0) {
    showBrandStatus("This brand is still used by items and cannot be deleted.", "error");
    return;
  }

  if (window.Swal?.fire) {
    const result = await window.Swal.fire({
      title: "Delete brand?",
      text: `Delete brand "${selectedBrand.name}" from the catalog?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e23e3e",
      focusCancel: true,
    });

    if (!result.isConfirmed) {
      return;
    }
  } else if (!window.confirm(`Delete ${selectedBrand.name}?`)) {
    return;
  }

  const nextBrands = brands
    .filter((brand) => brand.name.toLowerCase() !== selectedBrand.name.toLowerCase())
    .map((brand) => ({ name: brand.name, note: brand.note }));

  store.saveBrands(nextBrands);
  selectedBrandName = null;
  brandEditorHidden = true;
  refreshBrandsView();
  showBrandStatus(`Deleted ${selectedBrand.name}.`);
}

async function deleteSelectedType() {
  const selectedType = getSelectedType();

  if (!selectedType) {
    showTypeStatus("Select an item type first.", "error");
    return;
  }

  const linkedItemCount = getTypeLinkedItemCount(selectedType.name);

  if (linkedItemCount > 0) {
    showTypeStatus("This item type is still used by items and cannot be deleted.", "error");
    return;
  }

  if (window.Swal?.fire) {
    const result = await window.Swal.fire({
      title: "Delete item type?",
      text: `Delete item type "${formatTypeLabel(selectedType.name)}" from the catalog?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e23e3e",
      focusCancel: true,
    });

    if (!result.isConfirmed) {
      return;
    }
  } else if (!window.confirm(`Delete ${selectedType.name}?`)) {
    return;
  }

  const nextTypes = types
    .filter((type) => type.name.toLowerCase() !== selectedType.name.toLowerCase())
    .map((type) => ({ name: type.name, note: type.note }));

  store.saveTypes(nextTypes);
  selectedTypeName = null;
  typeEditorHidden = true;
  refreshTypesView();
  showTypeStatus(`Deleted ${formatTypeLabel(selectedType.name)}.`);
}

function setSection(section) {
  if (!AVAILABLE_SECTIONS.has(section) || currentSection === section) {
    return;
  }

  currentSection = section;
  refreshCurrentSection();
}

function setAdminLanguage(language) {
  if (!ADMIN_UI[language] || currentAdminLanguage === language) {
    return;
  }

  currentAdminLanguage = language;
  saveStoredPreference(STORAGE_KEYS.language, language);
  applyAdminLanguage();
  refreshCurrentSection();
  syncSidebarLayout();
}

function handleLogout() {
  window.adminAuth?.logout?.();
}

adminList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-code-delete]");

  if (deleteButton) {
    const code = deleteButton.dataset.code;

    if (!code) {
      return;
    }

    selectedCode = code;
    deleteSelectedProduct();
    return;
  }

  const itemButton = event.target.closest("[data-code-link]");

  if (!itemButton) {
    return;
  }

  selectedCode = itemButton.dataset.code;
  editorHidden = false;
  refreshItemsView();
});

adminSearch.addEventListener("input", () => {
  listPage = 1;
  renderList();
});
adminListBrandFilter?.addEventListener("change", () => {
  listPage = 1;
  renderList();
});
ensureItemStatusFilter();
adminListStatusFilter?.addEventListener("change", () => {
  listPage = 1;
  renderList();
});
adminImportItemsButton?.addEventListener("click", () => {
  adminImportItemsInput?.click();
});
adminExportItemsButton?.addEventListener("click", exportItemsToExcel);
adminImportItemsInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) {
    return;
  }

  try {
    await importItemsFromExcel(file);
  } catch (error) {
    showImportExportNotice(
      "Items import failed",
      error instanceof Error ? error.message : "Unable to import items from this workbook.",
      "error",
    );
  }
});

adminNewButton.addEventListener("click", () => {
  selectedCode = null;
  editorHidden = false;
  refreshItemsView();

  window.clearTimeout(statusTimeoutId);

  if (adminStatus) {
    adminStatus.hidden = true;
    adminStatus.textContent = "";
    adminStatus.classList.remove("admin-status--error");
  }
});

adminClearButton.addEventListener("click", () => {
  selectedCode = null;
  editorHidden = true;
  refreshItemsView();
});

adminToggleListButton?.addEventListener("click", () => {
  selectedCode = null;
  editorHidden = true;
  refreshItemsView();
});
adminImageUploadButton?.addEventListener("click", () => {
  adminImageFileInput?.click();
});
adminImageFileInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) {
    return;
  }

  if (!String(file.type ?? "").toLowerCase().startsWith("image/")) {
    showStatus("Please choose an image file.", "error");
    return;
  }

  try {
    pendingLocalImageDataUrl = await readFileAsDataUrl(file);
    pendingLocalImageName = file.name;
    setFormValue("image", "");
    syncItemImageFieldState();
    showStatus(`Selected ${file.name}.`);
  } catch (error) {
    showStatus(error instanceof Error ? error.message : "Unable to read this image file.", "error");
  }
});
adminImageInput?.addEventListener("input", () => {
  if (getFormValue("image")) {
    clearPendingLocalImage();
  }

  syncItemImageFieldState();
});
adminImageClearButton?.addEventListener("click", () => {
  clearPendingLocalImage();
  setFormValue("image", "");
  syncItemImageFieldState();
  showStatus("Image cleared.");
});
adminImagePreview?.addEventListener("load", () => {
  if (adminImagePreviewEmpty) {
    adminImagePreviewEmpty.hidden = true;
    adminImagePreviewEmpty.textContent = "No image selected. The selected icon will be shown.";
  }

  adminImagePreview.hidden = false;
});
adminImagePreview?.addEventListener("error", () => {
  adminImagePreview.hidden = true;

  if (adminImagePreviewEmpty) {
    adminImagePreviewEmpty.hidden = false;
    adminImagePreviewEmpty.textContent = "Unable to preview this image.";
  }
});
adminForm.addEventListener("submit", saveProduct);
adminListPageSize?.addEventListener("change", () => {
  setPageForCode(selectedCode);
  renderList();
});
adminPrevPageButton?.addEventListener("click", () => {
  listPage = Math.max(1, listPage - 1);
  renderList();
});
adminNextPageButton?.addEventListener("click", () => {
  const filteredProducts = getFilteredProducts();
  listPage = Math.min(getPageCount(filteredProducts), listPage + 1);
  renderList();
});
adminBrandList?.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-brand-delete]");

  if (deleteButton) {
    const brandName = deleteButton.dataset.brandName;

    if (!brandName) {
      return;
    }

    selectedBrandName = brandName;
    deleteSelectedBrand();
    return;
  }

  const brandButton = event.target.closest("[data-brand-link]");

  if (!brandButton) {
    return;
  }

  selectedBrandName = brandButton.dataset.brandName;
  brandEditorHidden = false;
  refreshBrandsView();
});
adminBrandSearch?.addEventListener("input", () => {
  renderBrandList();
});
adminBrandFilter?.addEventListener("change", () => {
  renderBrandList();
});
adminImportBrandsButton?.addEventListener("click", () => {
  adminImportBrandsInput?.click();
});
adminExportBrandsButton?.addEventListener("click", exportBrandsToExcel);
adminImportBrandsInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) {
    return;
  }

  try {
    await importBrandsFromExcel(file);
  } catch (error) {
    showImportExportNotice(
      "Brands import failed",
      error instanceof Error ? error.message : "Unable to import brands from this workbook.",
      "error",
    );
  }
});
adminBrandNewButton?.addEventListener("click", () => {
  selectedBrandName = null;
  brandEditorHidden = false;
  refreshBrandsView();
});
adminBrandClearButton?.addEventListener("click", () => {
  selectedBrandName = null;
  brandEditorHidden = true;
  refreshBrandsView();
});
adminBrandForm?.addEventListener("submit", saveBrand);
adminTypeList?.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-type-delete]");

  if (deleteButton) {
    const typeName = deleteButton.dataset.typeName;

    if (!typeName) {
      return;
    }

    selectedTypeName = typeName;
    deleteSelectedType();
    return;
  }

  const typeButton = event.target.closest("[data-type-link]");

  if (!typeButton) {
    return;
  }

  selectedTypeName = typeButton.dataset.typeName;
  typeEditorHidden = false;
  refreshTypesView();
});
adminTypeSearch?.addEventListener("input", () => {
  renderTypeList();
});
adminTypeFilter?.addEventListener("change", () => {
  renderTypeList();
});
adminImportTypesButton?.addEventListener("click", () => {
  adminImportTypesInput?.click();
});
adminExportTypesButton?.addEventListener("click", exportTypesToExcel);
adminImportTypesInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) {
    return;
  }

  try {
    await importTypesFromExcel(file);
  } catch (error) {
    showImportExportNotice(
      "Item types import failed",
      error instanceof Error ? error.message : "Unable to import item types from this workbook.",
      "error",
    );
  }
});
adminTypeNewButton?.addEventListener("click", () => {
  selectedTypeName = null;
  typeEditorHidden = false;
  refreshTypesView();
});
adminTypeClearButton?.addEventListener("click", () => {
  selectedTypeName = null;
  typeEditorHidden = true;
  refreshTypesView();
});
adminTypeForm?.addEventListener("submit", saveType);
for (const button of adminSectionButtons) {
  button.addEventListener("click", () => {
    setSection(button.dataset.adminSectionOption);
  });
}
for (const button of adminShortcutButtons) {
  button.addEventListener("click", () => {
    setSection(button.dataset.adminShortcut);
  });
}
for (const button of adminLanguageButtons) {
  button.addEventListener("click", () => {
    setAdminLanguage(button.dataset.adminLanguageOption);
  });
}
adminLogoutButton?.addEventListener("click", handleLogout);
adminSettingsLogoutButton?.addEventListener("click", handleLogout);
for (const button of [adminSidebarToggle, adminSidebarRevealToggle]) {
  button?.addEventListener("click", () => {
    sidebarCollapsed = !sidebarCollapsed;
    syncSidebarLayout();
  });
}
adminOpenQrButton?.addEventListener("click", openQrModal);
adminCloseQrButton?.addEventListener("click", closeQrModal);
adminCopyQrLinkButton?.addEventListener("click", copyCatalogLink);
adminSaveQrButton?.addEventListener("click", saveCatalogQrCode);
adminQrModal?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.hasAttribute("data-admin-close")) {
    closeQrModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && adminQrModal && !adminQrModal.hasAttribute("hidden")) {
    closeQrModal();
  }
});

applyAdminLanguage();
syncItemImageFieldState();
refreshCurrentSection();
syncSidebarLayout();
