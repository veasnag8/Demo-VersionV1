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
const adminCatalogMenuRoot = document.querySelector("#adminCatalogMenuRoot");
const adminCatalogMenuButton = document.querySelector("#adminCatalogMenuButton");
const adminCatalogMenu = document.querySelector("#adminCatalogMenu");
const adminCatalogMenuTitle = document.querySelector("#adminCatalogMenuTitle");
const adminCatalogMenuHint = document.querySelector("#adminCatalogMenuHint");
const adminCatalogMenuItems = [...document.querySelectorAll("[data-admin-catalog-target]")];
const adminQrMenuRoot = document.querySelector("#adminQrMenuRoot");
const adminQrMenuButton = document.querySelector("#adminQrMenuButton");
const adminQrMenu = document.querySelector("#adminQrMenu");
const adminQrButtonLabel = document.querySelector("#adminQrButtonLabel");
const adminQrMenuItems = [...document.querySelectorAll("[data-admin-qr-target]")];
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
const adminContactSection = document.querySelector("#adminContactSection");
const adminControls = document.querySelector("#adminControls");
const adminWorkspace = document.querySelector("#adminWorkspace");
const adminListPanel = document.querySelector("#adminListPanel");
const adminEditorPanel = document.querySelector("#adminEditorPanel");
const adminListHeading = document.querySelector("#adminListHeading");
const adminItemListTable = document.querySelector("#adminItemListTable");
const adminItemListHead = document.querySelector("#adminItemListHead");
const adminList = document.querySelector("#adminList");
const adminListEmpty = document.querySelector("#adminListEmpty");
const adminListRange = document.querySelector("#adminListRange");
const adminListPageSize = document.querySelector("#adminListPageSize");
const adminListBrandFilter = document.querySelector("#adminListBrandFilter");
let adminListStatusFilter = document.querySelector("#adminListStatusFilter");
const adminOpenItemColumnsButton = document.querySelector("#adminOpenItemColumnsButton");
const adminAvailableColumns = document.querySelector("#adminAvailableColumns");
const adminSelectedColumns = document.querySelector("#adminSelectedColumns");
const adminResetItemColumnsButton = document.querySelector("#adminResetItemColumnsButton");
const adminMoveItemColumnUpButton = document.querySelector("#adminMoveItemColumnUpButton");
const adminMoveItemColumnDownButton = document.querySelector("#adminMoveItemColumnDownButton");
const adminPrevPageButton = document.querySelector("#adminPrevPageButton");
const adminNextPageButton = document.querySelector("#adminNextPageButton");
const adminPageStatus = document.querySelector("#adminPageStatus");
const adminFormHeading = document.querySelector("#adminFormHeading");
const adminModeBadge = document.querySelector("#adminModeBadge");
const adminStatus = document.querySelector("#adminStatus");
const adminForm = document.querySelector("#adminForm");
const adminColorPresetSelect = document.querySelector("#adminColorPresetSelect");
const adminAddColorPresetButton = document.querySelector("#adminAddColorPresetButton");
const adminCustomColorName = document.querySelector("#adminCustomColorName");
const adminCustomColorCode = document.querySelector("#adminCustomColorCode");
const adminCustomColorHex = document.querySelector("#adminCustomColorHex");
const adminAddCustomColorButton = document.querySelector("#adminAddCustomColorButton");
const adminCustomColorMatch = document.querySelector("#adminCustomColorMatch");
const adminSelectedColors = document.querySelector("#adminSelectedColors");
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
const adminSidebarBackdrop = document.querySelector("#adminSidebarBackdrop");
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
const adminSettingsProfileInitial = document.querySelector("#adminSettingsProfileInitial");
const adminSettingsPanelButtons = [...document.querySelectorAll("[data-admin-settings-panel-option]")];
const adminSettingsPanels = [...document.querySelectorAll("[data-admin-settings-panel]")];
const adminSettingsProfileTab = document.querySelector("#adminSettingsProfileTab");
const adminSettingsLanguageTab = document.querySelector("#adminSettingsLanguageTab");
const adminSettingsStatusTab = document.querySelector("#adminSettingsStatusTab");
const adminSettingsProfilePanelEyebrow = document.querySelector("#adminSettingsProfilePanelEyebrow");
const adminSettingsProfilePanelTitle = document.querySelector("#adminSettingsProfilePanelTitle");
const adminSettingsProfilePanelCopy = document.querySelector("#adminSettingsProfilePanelCopy");
const adminSettingsUsernameLabelPanel = document.querySelector("#adminSettingsUsernameLabelPanel");
const adminSettingsProfileUsernamePanel = document.querySelector("#adminSettingsProfileUsernamePanel");
const adminSettingsSessionEyebrow = document.querySelector("#adminSettingsSessionEyebrow");
const adminSettingsSessionTitle = document.querySelector("#adminSettingsSessionTitle");
const adminSettingsSessionCopy = document.querySelector("#adminSettingsSessionCopy");
const adminSettingsTimeoutForm = document.querySelector("#adminSettingsTimeoutForm");
const adminSettingsTimeoutEyebrow = document.querySelector("#adminSettingsTimeoutEyebrow");
const adminSettingsTimeoutTitle = document.querySelector("#adminSettingsTimeoutTitle");
const adminSettingsTimeoutCopy = document.querySelector("#adminSettingsTimeoutCopy");
const adminSettingsTimeoutLabel = document.querySelector("#adminSettingsTimeoutLabel");
const adminSettingsTimeoutInput = document.querySelector("#adminSettingsTimeoutInput");
const adminSettingsTimeoutSaveButton = document.querySelector("#adminSettingsTimeoutSaveButton");
const adminSettingsLogoutText = document.querySelector("#adminSettingsLogoutText");
const adminSettingsUsernameLabel = document.querySelector("#adminSettingsUsernameLabel");
const adminSettingsRoleLabel = document.querySelector("#adminSettingsRoleLabel");
const adminSettingsIssuedLabel = document.querySelector("#adminSettingsIssuedLabel");
const adminSettingsExpiresLabel = document.querySelector("#adminSettingsExpiresLabel");
const adminSettingsStatusLabel = document.querySelector("#adminSettingsStatusLabel");
const adminSettingsProfileUsername = document.querySelector("#adminSettingsProfileUsername");
const adminSettingsProfileRole = document.querySelector("#adminSettingsProfileRole");
const adminSettingsPasswordForm = document.querySelector("#adminSettingsPasswordForm");
const adminSettingsPasswordEyebrow = document.querySelector("#adminSettingsPasswordEyebrow");
const adminSettingsPasswordTitle = document.querySelector("#adminSettingsPasswordTitle");
const adminSettingsPasswordCopy = document.querySelector("#adminSettingsPasswordCopy");
const adminSettingsCurrentPasswordLabel = document.querySelector("#adminSettingsCurrentPasswordLabel");
const adminSettingsCurrentPasswordInput = document.querySelector("#adminSettingsCurrentPasswordInput");
const adminSettingsNewPasswordLabel = document.querySelector("#adminSettingsNewPasswordLabel");
const adminSettingsNewPasswordInput = document.querySelector("#adminSettingsNewPasswordInput");
const adminSettingsConfirmPasswordLabel = document.querySelector("#adminSettingsConfirmPasswordLabel");
const adminSettingsConfirmPasswordInput = document.querySelector("#adminSettingsConfirmPasswordInput");
const adminSettingsPasswordSaveButton = document.querySelector("#adminSettingsPasswordSaveButton");
const adminSettingsRecoveryEmailForm = document.querySelector("#adminSettingsRecoveryEmailForm");
const adminSettingsRecoveryEyebrow = document.querySelector("#adminSettingsRecoveryEyebrow");
const adminSettingsRecoveryTitle = document.querySelector("#adminSettingsRecoveryTitle");
const adminSettingsRecoveryCopy = document.querySelector("#adminSettingsRecoveryCopy");
const adminSettingsRecoveryEmailLabel = document.querySelector("#adminSettingsRecoveryEmailLabel");
const adminSettingsRecoveryEmailInput = document.querySelector("#adminSettingsRecoveryEmailInput");
const adminSettingsRecoveryEmailSaveButton = document.querySelector("#adminSettingsRecoveryEmailSaveButton");
const adminSettingsProfileIssuedAt = document.querySelector("#adminSettingsProfileIssuedAt");
const adminSettingsProfileExpiresAt = document.querySelector("#adminSettingsProfileExpiresAt");
const adminSettingsProfileStatus = document.querySelector("#adminSettingsProfileStatus");
const adminSettingsStatusLabelMirror = document.querySelector("#adminSettingsStatusLabelMirror");
const adminSettingsIssuedLabelMirror = document.querySelector("#adminSettingsIssuedLabelMirror");
const adminSettingsExpiresLabelMirror = document.querySelector("#adminSettingsExpiresLabelMirror");
const adminSettingsProfileStatusMirror = document.querySelector("#adminSettingsProfileStatusMirror");
const adminSettingsProfileIssuedAtMirror = document.querySelector("#adminSettingsProfileIssuedAtMirror");
const adminSettingsProfileExpiresAtMirror = document.querySelector("#adminSettingsProfileExpiresAtMirror");
const adminContactForm = document.querySelector("#adminContactForm");
const adminContactEyebrow = document.querySelector("#adminContactEyebrow");
const adminContactTitle = document.querySelector("#adminContactTitle");
const adminContactText = document.querySelector("#adminContactText");
const adminContactAddressEyebrow = document.querySelector("#adminContactAddressEyebrow");
const adminContactAddressTitle = document.querySelector("#adminContactAddressTitle");
const adminContactAddressCopy = document.querySelector("#adminContactAddressCopy");
const adminContactAddressLabel = document.querySelector("#adminContactAddressLabel");
const adminContactAddressInput = document.querySelector("#adminContactAddressInput");
const adminContactAddressHint = document.querySelector("#adminContactAddressHint");
const adminContactPrimaryEyebrow = document.querySelector("#adminContactPrimaryEyebrow");
const adminContactPrimaryTitle = document.querySelector("#adminContactPrimaryTitle");
const adminContactPrimaryCopy = document.querySelector("#adminContactPrimaryCopy");
const adminContactPhoneOneTitle = document.querySelector("#adminContactPhoneOneTitle");
const adminContactPhoneOneCopy = document.querySelector("#adminContactPhoneOneCopy");
const adminContactPhoneOneLabel = document.querySelector("#adminContactPhoneOneLabel");
const adminContactPhoneOneInput = document.querySelector("#adminContactPhoneOneInput");
const adminContactPhoneOneTelegramLabel = document.querySelector("#adminContactPhoneOneTelegramLabel");
const adminContactPhoneOneTelegramInput = document.querySelector("#adminContactPhoneOneTelegramInput");
const adminContactPhoneTwoTitle = document.querySelector("#adminContactPhoneTwoTitle");
const adminContactPhoneTwoCopy = document.querySelector("#adminContactPhoneTwoCopy");
const adminContactPhoneTwoLabel = document.querySelector("#adminContactPhoneTwoLabel");
const adminContactPhoneTwoInput = document.querySelector("#adminContactPhoneTwoInput");
const adminContactPhoneTwoTelegramLabel = document.querySelector("#adminContactPhoneTwoTelegramLabel");
const adminContactPhoneTwoTelegramInput = document.querySelector("#adminContactPhoneTwoTelegramInput");
const adminContactEmailLabel = document.querySelector("#adminContactEmailLabel");
const adminContactEmailInput = document.querySelector("#adminContactEmailInput");
const adminContactPrimaryHint = document.querySelector("#adminContactPrimaryHint");
const adminContactResetButton = document.querySelector("#adminContactResetButton");
const adminContactSaveButton = document.querySelector("#adminContactSaveButton");
const adminContactStatus = document.querySelector("#adminContactStatus");
const adminQrModal = document.querySelector("#adminQrModal");
const adminQrModalTitle = document.querySelector("#adminQrModalTitle");
const adminCloseQrButton = document.querySelector("#adminCloseQrButton");
const adminItemColumnsModal = document.querySelector("#adminItemColumnsModal");
const adminCloseItemColumnsButton = document.querySelector("#adminCloseItemColumnsButton");
const adminCopyQrLinkButton = document.querySelector("#adminCopyQrLinkButton");
const adminSaveQrButton = document.querySelector("#adminSaveQrButton");
const adminCatalogQrImage = document.querySelector("#adminCatalogQrImage");
const adminCatalogQrStatus = document.querySelector("#adminCatalogQrStatus");

const store = window.catalogStore;
const DEFAULT_LIST_PAGE_SIZE = 30;
const CATALOG_TARGETS = Object.freeze({
  user: {
    href: "users.html#catalog",
    label: "Users",
    downloadName: "users-catalog-qr-card.png",
  },
  depo: {
    href: "depo.html#catalog",
    label: "Depo",
    downloadName: "depo-catalog-qr-card.png",
  },
});
const ADMIN_DEFAULT_CUSTOM_COLOR_HEX = "#2bb673";
const ENGLISH_COLOR_LABEL_TO_KHMER = Object.freeze({
  aqua: "ខៀវបៃតង",
  beige: "ត្នោតខ្ចី",
  black: "ខ្មៅ",
  blue: "ខៀវ",
  brown: "ត្នោត",
  charcoal: "ប្រផេះចាស់",
  coral: "ផ្កាថ្ម",
  crimson: "ក្រហមចាស់",
  gold: "មាស",
  gray: "ប្រផេះ",
  grey: "ប្រផេះ",
  green: "បៃតង",
  indigo: "ខៀវស្វាយ",
  ivory: "សភ្លឺ",
  lavender: "ស្វាយស្រាល",
  lime: "បៃតងខ្ចី",
  magenta: "ស្វាយក្រហម",
  maroon: "ត្នោតក្រហម",
  mint: "បៃតងមីន",
  navy: "ខៀវចាស់",
  olive: "បៃតងអូលីវ",
  orange: "ទឹកក្រូច",
  peach: "ទឹកក្រូចស្រាល",
  pink: "ផ្កាឈូក",
  purple: "ស្វាយ",
  red: "ក្រហម",
  rose: "ផ្កាកុលាប",
  silver: "ប្រាក់",
  "sky blue": "ខៀវស្រាល",
  slate: "ប្រផេះខៀវ",
  teal: "បៃតងខៀវ",
  turquoise: "ខៀវបៃតងស្រាល",
  violet: "ស្វាយចាស់",
  white: "ស",
  yellow: "លឿង",
});
const DEFAULT_ITEM_COLOR_OPTIONS = Object.freeze([
  { label: "ខ្មៅ", hex: "#111111" },
  { label: "ខៀវ", hex: "#2563eb" },
  { label: "ត្នោត", hex: "#8b5e3c" },
  { label: "មាស", hex: "#d4a017" },
  { label: "ប្រផេះ", hex: "#6b7280" },
  { label: "បៃតង", hex: "#2bb673" },
  { label: "ទឹកក្រូច", hex: "#f97316" },
  { label: "ផ្កាឈូក", hex: "#ec4899" },
  { label: "ស្វាយ", hex: "#7c3aed" },
  { label: "ក្រហម", hex: "#ef4444" },
  { label: "ប្រាក់", hex: "#b8c0cc" },
  { label: "ស", hex: "#f8fafc" },
  { label: "លឿង", hex: "#facc15" },
]);
const ADMIN_COMMON_COLOR_NAME_OPTIONS = Object.freeze([
  { label: "ខៀវបៃតង", hex: "#00ffff" },
  { label: "ត្នោតខ្ចី", hex: "#f5f5dc" },
  { label: "ប្រផេះចាស់", hex: "#36454f" },
  { label: "ផ្កាថ្ម", hex: "#ff7f50" },
  { label: "ក្រហមចាស់", hex: "#dc143c" },
  { label: "ខៀវស្វាយ", hex: "#4f46e5" },
  { label: "សភ្លឺ", hex: "#fffff0" },
  { label: "ស្វាយស្រាល", hex: "#e6e6fa" },
  { label: "បៃតងខ្ចី", hex: "#84cc16" },
  { label: "ស្វាយក្រហម", hex: "#ff00ff" },
  { label: "ត្នោតក្រហម", hex: "#800000" },
  { label: "បៃតងមីន", hex: "#98ff98" },
  { label: "ខៀវចាស់", hex: "#000080" },
  { label: "បៃតងអូលីវ", hex: "#808000" },
  { label: "ទឹកក្រូចស្រាល", hex: "#ffcba4" },
  { label: "ផ្កាកុលាប", hex: "#f43f5e" },
  { label: "ខៀវស្រាល", hex: "#38bdf8" },
  { label: "ប្រផេះខៀវ", hex: "#64748b" },
  { label: "បៃតងខៀវ", hex: "#0d9488" },
  { label: "ខៀវបៃតងស្រាល", hex: "#40e0d0" },
  { label: "ស្វាយចាស់", hex: "#8b5cf6" },
]);
const EXCEL_ITEMS_SHEET_NAME = "Items";
const EXCEL_BRANDS_SHEET_NAME = "Item Brands";
const EXCEL_TYPES_SHEET_NAME = "Item Groups";
const ITEM_EXPORT_COLUMNS = [
  { header: "Code", width: 14 },
  { header: "Item Brand", width: 18 },
  { header: "Item Group", width: 16 },
  { header: "Status", width: 12 },
  { header: "Visible On User Page", width: 18 },
  { header: "Image", width: 36 },
  { header: "Volume", width: 14 },
  { header: "Colors", width: 24 },
  { header: "Depot Price", width: 14 },
  { header: "User Price", width: 14 },
  { header: "Name", width: 34 },
  { header: "Description", width: 44 },
  { header: "Sizes", width: 24 },
];
const AUTO_IMAGE_FALLBACK_TEXT = "No image selected. A matching system icon will be shown automatically.";
const AUTO_IMAGE_UPLOAD_META_TEXT =
  "Choose a local file from this device. Local images stay in this browser, or leave it empty to use the matching system icon automatically.";
const BRAND_EXPORT_COLUMNS = [
  { header: "Brand Name", width: 22 },
  { header: "Note", width: 42 },
];
const TYPE_EXPORT_COLUMNS = [
  { header: "Name", width: 22 },
  { header: "Note", width: 42 },
];
const ITEM_IMPORT_ALIASES = {
  code: ["code", "item code"],
  brand: ["item brand", "brand", "brand name"],
  filterType: ["item group", "items type", "type", "filter type"],
  status: ["status", "item status"],
  showOnUserPage: ["visible on user page", "show on user page", "user visible", "visible", "published"],
  similarKey: ["similar group", "similar key"],
  icon: ["icon"],
  image: ["image url", "image", "photo", "picture"],
  volume: ["volume", "capacity"],
  series: ["series"],
  colors: ["colors", "color"],
  depoPrice: ["depot price", "depo price"],
  userPrice: ["user price", "retail price"],
  title: ["name", "product title", "title"],
  description: ["description"],
  sizes: ["sizes", "size"],
};
const BRAND_IMPORT_ALIASES = {
  name: ["brand name", "name", "brand"],
  note: ["note", "notes"],
};
const TYPE_IMPORT_ALIASES = {
  name: ["=name", "item group", "item type", "items type", "type", "name"],
  note: ["note", "notes"],
};
const STORAGE_KEYS = {
  language: "agt-admin-language",
  itemListColumns: "agt-admin-item-list-columns",
};
const ITEM_LIST_COLUMNS = Object.freeze([
  {
    key: "code",
    label: "Item Code",
    width: "150px",
    minWidth: 150,
    required: true,
    defaultVisible: true,
  },
  {
    key: "image",
    label: "Image",
    width: "92px",
    minWidth: 92,
    defaultVisible: true,
  },
  {
    key: "title",
    label: "Name",
    width: "minmax(280px, 1.95fr)",
    minWidth: 280,
    defaultVisible: true,
  },
  {
    key: "brand",
    label: "Item Brand",
    width: "minmax(108px, 0.8fr)",
    minWidth: 128,
    defaultVisible: true,
  },
  {
    key: "visibility",
    label: "Visibility",
    width: "108px",
    minWidth: 112,
    defaultVisible: false,
  },
  {
    key: "group",
    label: "Item Group",
    width: "minmax(100px, 0.76fr)",
    minWidth: 120,
    defaultVisible: true,
  },
  {
    key: "status",
    label: "Status",
    width: "minmax(96px, 0.72fr)",
    minWidth: 112,
    defaultVisible: true,
  },
  {
    key: "volume",
    label: "Volume",
    width: "100px",
    minWidth: 104,
    defaultVisible: false,
  },
  {
    key: "color",
    label: "Color",
    width: "minmax(106px, 0.8fr)",
    minWidth: 128,
    defaultVisible: true,
  },
  {
    key: "depoPrice",
    label: "Depot Price",
    width: "118px",
    minWidth: 122,
    defaultVisible: false,
  },
  {
    key: "userPrice",
    label: "User Price",
    width: "118px",
    minWidth: 122,
    defaultVisible: false,
  },
  {
    key: "description",
    label: "Description",
    width: "minmax(220px, 1.4fr)",
    minWidth: 220,
    defaultVisible: false,
  },
  {
    key: "sizes",
    label: "Sizes",
    width: "minmax(140px, 0.95fr)",
    minWidth: 148,
    defaultVisible: false,
  },
  {
    key: "actions",
    label: "Actions",
    width: "auto",
    minWidth: 126,
    required: true,
    defaultVisible: true,
  },
]);
const LEGACY_DEFAULT_ITEM_LIST_COLUMNS = Object.freeze(["code", "title", "brand", "group", "status", "color", "actions"]);
const DEPO_ACCESS_TTL_MS = 2 * 60 * 60 * 1000;
const AVAILABLE_SECTIONS = new Set(["dashboard", "items", "types", "brands", "contact", "settings"]);
const ADMIN_UI = {
  en: {
    locale: "en-US",
    sidebarPanelCopy: "Admin Control Panel",
    nav: {
      dashboard: "Dashboard",
      items: "Items",
      types: "Item Group",
      brands: "Item Brands",
      contact: "Chontact Banner",
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
      openCatalog: "Open Catalog",
      openCatalogHint: "Choose Depo or Users",
      openCatalogAria: "Open catalog options",
      qr: "QR",
      qrAria: "Choose catalog QR code",
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
        eyebrow: "Group Control",
        title: "Item Group",
        text: "Manage item group records, keep filter choices consistent, and rename groups used across the item catalog.",
      },
      brands: {
        eyebrow: "Item Brand Control",
        title: "Item Brands",
        text: "Manage item brand records, keep the catalog naming consistent, and prepare item brands before assigning them to items.",
      },
      contact: {
        eyebrow: "Public Contact",
        title: "Chontact Banner",
        text: "Control the address and contact banner shown on the users, depo, and detail pages.",
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
          label: "Total Items",
          copy: "All active records in the shared catalog store.",
        },
        {
          label: "Total Item Brands",
          copy: "Unique item brands currently used across catalog records.",
        },
        {
          label: "Total Item Groups",
          copy: "Unique item groups available in the catalog.",
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
          eyebrow: "Item Group",
          title: "Open Group Management",
          copy: "Manage item group records and keep catalog filtering consistent across the admin and user pages.",
          button: "Go to Item Groups",
        },
        brands: {
          eyebrow: "Item Brands",
          title: "Open Brand Management",
          copy: "Maintain item brand names, prepare new brand records, and keep item branding consistent.",
          button: "Go to Item Brands",
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
    contact: {
      eyebrow: "Public Contact",
      title: "Chontact Banner",
      text: "Control the public address, 2 phone lines, email, and optional Link Telegrams.",
      addressEyebrow: "Line 1",
      addressTitle: "Address",
      addressCopy: "This is the first public line shown in the contact banner.",
      addressLabel: "Address",
      addressHint: "Leave blank if you do not want to show an address line.",
      primaryEyebrow: "Phone And Email",
      primaryTitle: "Public Contact Lines",
      primaryCopy: "Add phone and email lines under the address. Telegram is optional for each phone line.",
      phoneOneTitle: "Phone 1",
      phoneOneCopy: "Leave Telegram blank to use the phone icon and call link.",
      phoneOneLabel: "Phone Number",
      phoneOneTelegramLabel: "Link Telegram",
      phoneTwoTitle: "Phone 2",
      phoneTwoCopy: "If Telegram is filled, this line opens Telegram chat instead of calling.",
      phoneTwoLabel: "Phone Number",
      phoneTwoTelegramLabel: "Link Telegram",
      emailLabel: "Email",
      primaryHint: "If a Link Telegram is filled for a phone line, the public page shows a Telegram icon and opens chat. If it is blank, the phone icon and call link stay the same.",
      reset: "Reset",
      save: "Save Contact",
      saved: "Contact banner saved.",
      savedTitle: "Contact saved",
      saveErrorTitle: "Unable to save contact",
      phonePlaceholder: "Input phone number",
      phoneTwoPlaceholder: "Input phone number",
      telegramPlaceholder: "@username telegram",
      emailPlaceholder: "Input email",
    },
  },
  km: {
    locale: "km-KH",
    sidebarPanelCopy: "ផ្ទាំងគ្រប់គ្រងអ្នកគ្រប់គ្រង",
    nav: {
      dashboard: "ផ្ទាំងដើម",
      items: "ទំនិញ",
      types: "ក្រុមទំនិញ",
      brands: "ម៉ាកទំនិញ",
      contact: "??????????",
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
      types: {
        eyebrow: "គ្រប់គ្រងក្រុមទំនិញ",
        title: "ក្រុមទំនិញ",
        text: "គ្រប់គ្រងកំណត់ត្រាក្រុមទំនិញ និងរៀបចំឈ្មោះក្រុមឱ្យស្របគ្នានៅក្នុងកាតាឡុក។",
      },
      contact: {
        eyebrow: "?????????????????",
        title: "??????????",
        text: "?????????????????? ???????????????????????????????????? users, depo ??? detail?",
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
          label: "ចំនួនម៉ាកទំនិញសរុប",
          copy: "ម៉ាកទំនិញតែមួយគត់ដែលកំពុងត្រូវបានប្រើនៅក្នុងកាតាឡុក។",
        },
        {
          label: "ចំនួនក្រុមទំនិញសរុប",
          copy: "ក្រុមទំនិញតែមួយគត់ដែលមាននៅក្នុងកាតាឡុក។",
        },
      ],
      cards: {
        items: {
          eyebrow: "ទំនិញ",
          title: "បើកការគ្រប់គ្រងទំនិញ",
          copy: "មើលបញ្ជីទំនិញ បង្កើតកំណត់ត្រាថ្មី និងកែប្រែព័ត៌មានកាតាឡុកពីកន្លែងតែមួយ។",
          button: "ទៅកាន់ទំនិញ",
        },
        types: {
          eyebrow: "ក្រុមទំនិញ",
          title: "បើកការគ្រប់គ្រងក្រុមទំនិញ",
          copy: "គ្រប់គ្រងកំណត់ត្រាក្រុមទំនិញ រៀបចំឈ្មោះក្រុមទំនិញថ្មី និងរក្សាភាពស្របគ្នារបស់ក្រុមទំនិញ។",
          button: "ទៅកាន់ក្រុមទំនិញ",
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
    contact: {
      eyebrow: "ទំនាក់ទំនងសាធារណៈ",
      title: "ទំនាក់ទំនង",
      text: "គ្រប់គ្រងអាសយដ្ឋាន លេខទូរស័ព្ទ 2 ខ្សែ អ៊ីមែល និងឈ្មោះ Telegram សម្រាប់ទំព័រសាធារណៈ។",
      addressEyebrow: "បន្ទាត់ 1",
      addressTitle: "អាសយដ្ឋាន",
      addressCopy: "នេះជាបន្ទាត់ទី 1 ដែលបង្ហាញនៅផ្នែកទំនាក់ទំនងខាងលើ។",
      addressLabel: "អាសយដ្ឋាន",
      addressHint: "ទុកឱ្យទទេ បើមិនចង់បង្ហាញអាសយដ្ឋាន។",
      primaryEyebrow: "ទូរស័ព្ទ និងអ៊ីមែល",
      primaryTitle: "បន្ទាត់ទំនាក់ទំនងសាធារណៈ",
      primaryCopy: "",
      phoneOneTitle: "ទូរស័ព្ទ 1",
      phoneOneCopy: "",
      phoneOneLabel: "លេខទូរស័ព្ទ",
      phoneOneTelegramLabel: "ឈ្មោះ Telegram",
      phoneTwoTitle: "ទូរស័ព្ទ 2",
      phoneTwoCopy: "",
      phoneTwoLabel: "លេខទូរស័ព្ទ",
      phoneTwoTelegramLabel: "ឈ្មោះ Telegram",
      emailLabel: "អ៊ីមែល",
      primaryHint: "",
      reset: "កំណត់ឡើងវិញ",
      save: "រក្សាទុកទំនាក់ទំនង",
      saved: "បានរក្សាទុកព័ត៌មានទំនាក់ទំនងរួចរាល់។",
      savedTitle: "បានរក្សាទុកទំនាក់ទំនង",
      saveErrorTitle: "មិនអាចរក្សាទុកទំនាក់ទំនងបានទេ",
      phonePlaceholder: "បញ្ចូលលេខទូរស័ព្ទ",
      phoneTwoPlaceholder: "បញ្ចូលលេខទូរស័ព្ទ",
      telegramPlaceholder: "@username telegram",
      emailPlaceholder: "បញ្ចូលអ៊ីមែល",
    },
  },
};

Object.assign(ADMIN_UI.en.settings, {
  profileTab: ADMIN_UI.en.settings.profileTitle,
  languageTab: ADMIN_UI.en.settings.languageTitle,
  statusTab: ADMIN_UI.en.settings.status,
  sessionEyebrow: "Session",
  sessionTitle: "Current Browser Session",
  sessionCopy: "Your admin access details stay here while the browser session is active.",
  sessionTimeoutEyebrow: "Auto Logout",
  sessionTimeoutTitle: "Session Expire Time",
  sessionTimeoutCopy: "If the system is left unused, it will sign out automatically after the selected time.",
  sessionTimeoutLabel: "Session expires after",
  sessionTimeoutSave: "Save Session Time",
  sessionTimeoutSavedTitle: "Session time saved",
  sessionTimeoutSaved: "The auto logout time has been updated.",
  sessionTimeoutSaveErrorTitle: "Unable to save session time",
  sessionTimeoutOption(minutes) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  },
});

Object.assign(ADMIN_UI.km.settings, {
  profileTab: ADMIN_UI.km.settings.profileTitle,
  languageTab: ADMIN_UI.km.settings.languageTitle,
  statusTab: ADMIN_UI.km.settings.status,
  sessionEyebrow: "សម័យ",
  sessionTitle: "សម័យកម្មវិធីរុករកបច្ចុប្បន្ន",
  sessionCopy: "ព័ត៌មានចូលប្រើរបស់អ្នកត្រូវបានបង្ហាញទីនេះ ខណៈពេលសម័យកម្មវិធីរុករកនៅសកម្ម។",
});

Object.assign(ADMIN_UI.km.settings, {
  sessionTimeoutEyebrow: "ការចាកចេញស្វ័យប្រវត្តិ",
  sessionTimeoutTitle: "រយៈពេលផុតសម័យ",
  sessionTimeoutCopy: "ទុកចោលមិនប្រើរយៈពេលដែលបានជ្រើស នឹងចាកចេញស្វ័យប្រវត្តិ។",
  sessionTimeoutLabel: "សម័យផុតបន្ទាប់ពី",
  sessionTimeoutSave: "រក្សាទុករយៈពេលសម័យ",
  sessionTimeoutSavedTitle: "បានរក្សាទុករយៈពេលសម័យ",
  sessionTimeoutSaved: "បានកែប្រែពេលវេលាចាកចេញស្វ័យប្រវត្តិរួចរាល់។",
  sessionTimeoutSaveErrorTitle: "មិនអាចរក្សាទុករយៈពេលសម័យបានទេ",
  sessionTimeoutOption(minutes) {
    return `${minutes} នាទី`;
  },
});

Object.assign(ADMIN_UI.en.settings, {
  passwordEyebrow: "Security",
  passwordTitle: "Reset Password",
  passwordCopy: "Change the admin password used to sign in on this browser.",
  currentPasswordLabel: "Current Password",
  newPasswordLabel: "New Password",
  confirmPasswordLabel: "Confirm New Password",
  currentPasswordPlaceholder: "Enter current password",
  newPasswordPlaceholder: "Enter new password",
  confirmPasswordPlaceholder: "Confirm new password",
  passwordSave: "Save New Password",
  passwordSavedTitle: "Password updated",
  passwordSaved: "The admin password has been saved for this browser.",
  passwordSaveErrorTitle: "Unable to update password",
  passwordCurrentError: "Current password is incorrect.",
  passwordMismatchError: "The new password and confirm password do not match.",
  passwordTooShortError: "New password must be at least 6 characters.",
  passwordSameError: "New password must be different from the current password.",
  passwordStorageError: "Unable to save the new password on this browser.",
  recoveryEyebrow: "Recovery",
  recoveryTitle: "Forgot Password Email",
  recoveryCopy: "Save the recovery email used for OTP and reset-link recovery.",
  recoveryEmailLabel: "Email",
  recoveryEmailPlaceholder: "Enter recovery email",
  recoveryEmailSave: "Save Recovery Email",
  recoveryEmailSavedTitle: "Recovery email saved",
  recoveryEmailSaved: "The recovery email is ready for forgot-password tools.",
  recoveryEmailSaveErrorTitle: "Unable to save recovery email",
  recoveryEmailInvalidError: "Enter a valid email address.",
  recoveryEmailStorageError: "Unable to save the recovery email on this browser.",
});

Object.assign(ADMIN_UI.km.settings, {
  passwordEyebrow: "\u179F\u17BB\u179C\u178F\u17D2\u1790\u17B7\u1797\u17B6\u1796",
  passwordTitle: "\u1794\u17D2\u178A\u17BC\u179A\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
  passwordCopy: "\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178A\u17BC\u179A\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u17A2\u17D2\u1793\u1780\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u178A\u17C2\u179B\u1794\u17D2\u179A\u17BE\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1785\u17BC\u179B\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u179A\u17BB\u1780\u179A\u1780\u1793\u17C1\u17C7\u17D4",
  currentPasswordLabel: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793",
  newPasswordLabel: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
  confirmPasswordLabel: "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
  currentPasswordPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793",
  newPasswordPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
  confirmPasswordPlaceholder: "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
  passwordSave: "\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8",
  passwordSavedTitle: "\u1794\u17B6\u1793\u1780\u17C2\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
  passwordSaved: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u17A2\u17D2\u1793\u1780\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u179A\u17BB\u1780\u179A\u1780\u1793\u17C1\u17C7\u179A\u17BD\u1785\u179A\u17B6\u179B\u17CB\u17D4",
  passwordSaveErrorTitle: "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1780\u17C2\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1794\u17B6\u1793\u1791\u17C1",
  passwordCurrentError: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4",
  passwordMismatchError: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8 \u1793\u17B7\u1784\u1780\u17B6\u179A\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1798\u17B7\u1793\u178A\u17BC\u1785\u1782\u17D2\u1793\u17B6\u17D4",
  passwordTooShortError: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793\u1799\u17C9\u17B6\u1784\u178F\u17B7\u1785 6 \u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A\u17D4",
  passwordSameError: "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u178F\u17D2\u179A\u17BC\u179C\u1781\u17BB\u179F\u1796\u17B8\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u17D4",
  passwordStorageError: "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB\u1790\u17D2\u1798\u17B8\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u179A\u17BB\u1780\u179A\u1780\u1793\u17C1\u17C7\u1794\u17B6\u1793\u1791\u17C1\u17D4",
  recoveryEyebrow: "\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
  recoveryTitle: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u1797\u17D2\u179B\u17C1\u1785\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
  recoveryCopy: "\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB OTP \u1793\u17B7\u1784\u178F\u17C6\u178E\u1797\u17D2\u1787\u17B6\u1794\u17CB reset password\u17D4",
  recoveryEmailLabel: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
  recoveryEmailPlaceholder: "\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
  recoveryEmailSave: "\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
  recoveryEmailSavedTitle: "\u1794\u17B6\u1793\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789",
  recoveryEmailSaved: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u17A2\u17B6\u1785\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB forgot password \u179A\u17BD\u1785\u17A0\u17BE\u1799\u17D4",
  recoveryEmailSaveErrorTitle: "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u1794\u17B6\u1793\u1791\u17C1",
  recoveryEmailInvalidError: "\u179F\u17BC\u1798\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u178A\u17C2\u179B\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4",
  recoveryEmailStorageError: "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u179A\u1780\u17D2\u179F\u17B6\u1791\u17BB\u1780\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179F\u17D2\u178A\u17B6\u179A\u179C\u17B7\u1789\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u179A\u17BB\u1780\u179A\u1780\u1793\u17C1\u17C7\u1794\u17B6\u1793\u1791\u17C1\u17D4",
});

ADMIN_UI.km.nav.contact = ADMIN_UI.km.contact.title;
ADMIN_UI.km.sections.contact = {
  eyebrow: ADMIN_UI.km.contact.eyebrow,
  title: ADMIN_UI.km.contact.title,
  text: ADMIN_UI.km.contact.text,
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
let contactStatusTimeoutId = 0;
let listPage = 1;
let qrStatusTimeoutId = 0;
const catalogQrCardPromises = new Map();
let editorHidden = true;
let brandEditorHidden = true;
let typeEditorHidden = true;
let currentAdminLanguage = readStoredPreference(STORAGE_KEYS.language, ["en", "km"], "en");
let currentSection = "dashboard";
let currentSettingsPanel = "profile";
const mobileSidebarQuery = window.matchMedia("(max-width: 1024px)");
let sidebarCollapsed = mobileSidebarQuery.matches;
let currentQrCatalogTarget = "user";
let openQuickAccessMenuName = null;
let selectedItemColors = [];
let selectedItemListColumns = readStoredItemListColumns();
let activeItemListColumnKey = null;

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

function getDefaultItemListColumns() {
  return ITEM_LIST_COLUMNS
    .filter((column) => column.defaultVisible)
    .map((column) => column.key);
}

function getItemListColumnDefinition(columnKey) {
  return ITEM_LIST_COLUMNS.find((column) => column.key === columnKey) ?? null;
}

function getItemListColumnMasterIndex(columnKey) {
  return ITEM_LIST_COLUMNS.findIndex((column) => column.key === columnKey);
}

function insertItemListColumnAtNaturalPosition(columnKeys, columnKey) {
  const masterIndex = getItemListColumnMasterIndex(columnKey);

  if (masterIndex === -1 || columnKeys.includes(columnKey)) {
    return columnKeys;
  }

  let insertIndex = columnKeys.length;

  for (let index = masterIndex - 1; index >= 0; index -= 1) {
    const previousKey = ITEM_LIST_COLUMNS[index]?.key;
    const previousIndex = previousKey ? columnKeys.indexOf(previousKey) : -1;

    if (previousIndex !== -1) {
      insertIndex = previousIndex + 1;
      break;
    }
  }

  if (insertIndex === columnKeys.length) {
    for (let index = masterIndex + 1; index < ITEM_LIST_COLUMNS.length; index += 1) {
      const nextKey = ITEM_LIST_COLUMNS[index]?.key;
      const nextIndex = nextKey ? columnKeys.indexOf(nextKey) : -1;

      if (nextIndex !== -1) {
        insertIndex = nextIndex;
        break;
      }
    }
  }

  columnKeys.splice(insertIndex, 0, columnKey);
  return columnKeys;
}

function normalizeItemListColumns(columnKeys) {
  const requestedKeys = Array.isArray(columnKeys)
    ? columnKeys.map((columnKey) => String(columnKey ?? "").trim()).filter(Boolean)
    : [];
  const fallbackKeys = getDefaultItemListColumns();
  const validRequestedKeys = [];
  const seenKeys = new Set();

  for (const columnKey of requestedKeys) {
    if (seenKeys.has(columnKey) || !getItemListColumnDefinition(columnKey)) {
      continue;
    }

    validRequestedKeys.push(columnKey);
    seenKeys.add(columnKey);
  }

  const normalizedKeys = validRequestedKeys.length ? [...validRequestedKeys] : [...fallbackKeys];

  for (const column of ITEM_LIST_COLUMNS) {
    if (!column.required || normalizedKeys.includes(column.key)) {
      continue;
    }

    insertItemListColumnAtNaturalPosition(normalizedKeys, column.key);
  }

  return normalizedKeys;
}

function readStoredItemListColumns() {
  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEYS.itemListColumns);

    if (!rawValue) {
      return getDefaultItemListColumns();
    }

    const parsedValue = JSON.parse(rawValue);
    const normalizedColumns = normalizeItemListColumns(parsedValue);
    const matchesLegacyDefault = (
      normalizedColumns.length === LEGACY_DEFAULT_ITEM_LIST_COLUMNS.length
      && LEGACY_DEFAULT_ITEM_LIST_COLUMNS.every((columnKey, index) => normalizedColumns[index] === columnKey)
    );

    return matchesLegacyDefault ? getDefaultItemListColumns() : normalizedColumns;
  } catch (error) {
    return getDefaultItemListColumns();
  }
}

function saveStoredItemListColumns() {
  try {
    window.localStorage.setItem(STORAGE_KEYS.itemListColumns, JSON.stringify(selectedItemListColumns));
  } catch (error) {
    // Ignore storage errors and keep the current in-memory preference.
  }
}

function getSelectedItemListColumnDefinitions() {
  return selectedItemListColumns
    .map((columnKey) => getItemListColumnDefinition(columnKey))
    .filter(Boolean);
}

function getAvailableItemListColumnDefinitions() {
  const selectedKeys = new Set(selectedItemListColumns);
  return ITEM_LIST_COLUMNS.filter((column) => !selectedKeys.has(column.key));
}

function getItemListMinWidth(columns) {
  const totalWidth = columns.reduce((sum, column) => sum + Number(column.minWidth ?? 120), 0);
  return `${Math.max(totalWidth, 540)}px`;
}

function syncItemListTableLayout(columns = getSelectedItemListColumnDefinitions()) {
  if (!adminItemListTable) {
    return;
  }

  adminItemListTable.style.setProperty(
    "--admin-list-columns",
    columns.map((column) => column.width).join(" "),
  );
  adminItemListTable.style.setProperty("--admin-list-min-width", getItemListMinWidth(columns));
}

function buildItemColumnActionMarkup(
  label,
  attributeName,
  attributeValue,
  ariaLabel,
  isDisabled = false,
) {
  return `
    <button
      class="admin-column-config__action"
      type="button"
      ${attributeName}="${escapeHtml(attributeValue)}"
      aria-label="${escapeHtml(ariaLabel)}"
      title="${escapeHtml(ariaLabel)}"
      ${isDisabled ? "disabled" : ""}
    >${escapeHtml(label)}</button>
  `;
}

function buildItemColumnOptionMarkup(column, mode, options = {}) {
  const isSelectedMode = mode === "selected";
  const isLocked = Boolean(isSelectedMode && column.required);
  const isActive = Boolean(isSelectedMode && options.isActive);
  const currentIndex = Number.isInteger(options.index) ? options.index : -1;
  const total = Number.isInteger(options.total) ? options.total : 0;
  const helperText = isSelectedMode
    ? `Position ${currentIndex + 1} of ${total}`
    : "";
  let actionsMarkup = buildItemColumnActionMarkup(
    "Add",
    "data-admin-item-column-add",
    column.key,
    `Show ${column.label} column`,
  );

  if (isSelectedMode) {
    actionsMarkup = isLocked
      ? '<span class="admin-column-config__badge">Required</span>'
      : buildItemColumnActionMarkup(
        "Hide",
        "data-admin-item-column-remove",
        column.key,
        `Hide ${column.label} column`,
      );
  }

  return `
    <div
      class="admin-column-config__item${isLocked ? " is-locked" : ""}${isSelectedMode ? " admin-column-config__item--selectable" : ""}${isActive ? " is-active" : ""}"
      ${isSelectedMode ? `data-admin-item-column-select="${escapeHtml(column.key)}"` : ""}
    >
      <div class="admin-column-config__item-copy">
        <span>${escapeHtml(column.label)}</span>
        <small>${escapeHtml(helperText)}</small>
      </div>
      <div class="admin-column-config__actions">
        ${actionsMarkup}
      </div>
    </div>
  `;
}

function syncActiveItemListColumn(columns = getSelectedItemListColumnDefinitions()) {
  const columnKeys = columns.map((column) => column.key);

  if (!columnKeys.length) {
    activeItemListColumnKey = null;
    return;
  }

  if (!activeItemListColumnKey || !columnKeys.includes(activeItemListColumnKey)) {
    [activeItemListColumnKey] = columnKeys;
  }
}

function syncItemColumnMoveButtons(columns = getSelectedItemListColumnDefinitions()) {
  syncActiveItemListColumn(columns);

  const activeIndex = columns.findIndex((column) => column.key === activeItemListColumnKey);
  const activeColumn = activeIndex === -1 ? null : columns[activeIndex];
  const upLabel = activeColumn ? `Move ${activeColumn.label} column up` : "Move selected column up";
  const downLabel = activeColumn ? `Move ${activeColumn.label} column down` : "Move selected column down";

  if (adminMoveItemColumnUpButton) {
    adminMoveItemColumnUpButton.disabled = !activeColumn || activeIndex <= 0;
    adminMoveItemColumnUpButton.setAttribute("aria-label", upLabel);
    adminMoveItemColumnUpButton.setAttribute("title", upLabel);
  }

  if (adminMoveItemColumnDownButton) {
    adminMoveItemColumnDownButton.disabled = !activeColumn || activeIndex >= columns.length - 1;
    adminMoveItemColumnDownButton.setAttribute("aria-label", downLabel);
    adminMoveItemColumnDownButton.setAttribute("title", downLabel);
  }
}

function renderItemColumnConfiguration(columns = getSelectedItemListColumnDefinitions()) {
  syncActiveItemListColumn(columns);
  syncItemListTableLayout(columns);

  if (adminItemListHead) {
    adminItemListHead.innerHTML = columns
      .map((column) => `<span>${escapeHtml(column.label)}</span>`)
      .join("");
  }

  if (adminAvailableColumns) {
    const availableColumns = getAvailableItemListColumnDefinitions();
    adminAvailableColumns.innerHTML = availableColumns.length
      ? availableColumns.map((column) => buildItemColumnOptionMarkup(column, "available")).join("")
      : '<p class="admin-column-config__empty">All columns are already selected.</p>';
  }

  if (adminSelectedColumns) {
    adminSelectedColumns.innerHTML = columns.length
      ? columns
        .map((column, index) => buildItemColumnOptionMarkup(column, "selected", {
          index,
          total: columns.length,
          isActive: column.key === activeItemListColumnKey,
        }))
        .join("")
      : '<p class="admin-column-config__empty">Choose at least one column.</p>';
  }

  syncItemColumnMoveButtons(columns);
}

function setActiveItemListColumn(columnKey) {
  if (!selectedItemListColumns.includes(columnKey)) {
    return;
  }

  activeItemListColumnKey = columnKey;
  renderItemColumnConfiguration();
}

function setSelectedItemListColumns(columnKeys) {
  selectedItemListColumns = normalizeItemListColumns(columnKeys);
  saveStoredItemListColumns();
  renderList();
}

function addItemListColumn(columnKey) {
  const column = getItemListColumnDefinition(columnKey);

  if (!column || selectedItemListColumns.includes(column.key)) {
    return;
  }

  activeItemListColumnKey = column.key;
  setSelectedItemListColumns([...selectedItemListColumns, column.key]);
}

function removeItemListColumn(columnKey) {
  const column = getItemListColumnDefinition(columnKey);

  if (!column || column.required) {
    return;
  }

  const currentIndex = selectedItemListColumns.indexOf(column.key);
  const remainingColumns = selectedItemListColumns.filter((selectedKey) => selectedKey !== column.key);

  if (activeItemListColumnKey === column.key) {
    activeItemListColumnKey = remainingColumns[currentIndex] ?? remainingColumns[currentIndex - 1] ?? null;
  }

  setSelectedItemListColumns(remainingColumns);
}

function moveItemListColumn(columnKey, direction) {
  const currentIndex = selectedItemListColumns.indexOf(columnKey);

  if (currentIndex === -1) {
    return;
  }

  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

  if (targetIndex < 0 || targetIndex >= selectedItemListColumns.length) {
    return;
  }

  const nextColumns = [...selectedItemListColumns];
  [nextColumns[currentIndex], nextColumns[targetIndex]] = [nextColumns[targetIndex], nextColumns[currentIndex]];
  setSelectedItemListColumns(nextColumns);
}

function resetItemListColumns() {
  setSelectedItemListColumns(getDefaultItemListColumns());
}

function getAdminCopy() {
  return ADMIN_UI[currentAdminLanguage] ?? ADMIN_UI.en;
}

function normalizeCatalogTarget(value) {
  return value === "depo" ? "depo" : "user";
}

function getCatalogTargetConfig(target) {
  return CATALOG_TARGETS[normalizeCatalogTarget(target)];
}

function getCatalogTargetLabel(target) {
  return getCatalogTargetConfig(target).label;
}

function getCatalogTargetHref(target) {
  return getCatalogTargetConfig(target).href;
}

function grantDepoAccessIfNeeded(target) {
  if (normalizeCatalogTarget(target) !== "depo") {
    return;
  }

  try {
    window.localStorage.setItem(
      "agt-depo-access",
      JSON.stringify({
        issuedAt: Date.now(),
        expiresAt: Date.now() + DEPO_ACCESS_TTL_MS,
      }),
    );
  } catch (error) {
    // Ignore storage errors and keep the admin flow working.
  }
}

function getCatalogMenuParts(menuName) {
  if (menuName === "catalog") {
    return {
      root: adminCatalogMenuRoot,
      button: adminCatalogMenuButton,
      panel: adminCatalogMenu,
    };
  }

  if (menuName === "qr") {
    return {
      root: adminQrMenuRoot,
      button: adminQrMenuButton,
      panel: adminQrMenu,
    };
  }

  return null;
}

function closeQuickAccessMenus(exceptMenuName = null) {
  for (const menuName of ["catalog", "qr"]) {
    if (menuName === exceptMenuName) {
      continue;
    }

    const parts = getCatalogMenuParts(menuName);

    if (!parts?.button || !parts.panel || !parts.root) {
      continue;
    }

    parts.root.classList.remove("is-open");
    parts.button.setAttribute("aria-expanded", "false");
    parts.panel.hidden = true;

    if (openQuickAccessMenuName === menuName) {
      openQuickAccessMenuName = null;
    }
  }
}

function setQuickAccessMenuOpen(menuName, isOpen) {
  const parts = getCatalogMenuParts(menuName);

  if (!parts?.button || !parts.panel || !parts.root) {
    return;
  }

  if (isOpen) {
    closeQuickAccessMenus(menuName);
  }

  parts.root.classList.toggle("is-open", isOpen);
  parts.button.setAttribute("aria-expanded", String(isOpen));
  parts.panel.hidden = !isOpen;
  openQuickAccessMenuName = isOpen ? menuName : openQuickAccessMenuName === menuName ? null : openQuickAccessMenuName;
}

function toggleQuickAccessMenu(menuName) {
  const parts = getCatalogMenuParts(menuName);

  if (!parts?.button || !parts.panel) {
    return;
  }

  setQuickAccessMenuOpen(menuName, parts.panel.hidden);
}

function getDefaultQrStatusText(target = currentQrCatalogTarget) {
  return `Scan this QR code to open the ${getCatalogTargetLabel(target).toLowerCase()} catalog page.`;
}

function getQrModalTitleText(target = currentQrCatalogTarget) {
  return `${getCatalogTargetLabel(target)} QR Code`;
}

function getQrImageAltText(target = currentQrCatalogTarget, isStyled = true) {
  const prefix = isStyled ? "Styled QR code" : "QR code";
  return `${prefix} for the ${getCatalogTargetLabel(target).toLowerCase()} catalog`;
}

function normalizeAdminColorHex(value) {
  const text = String(value ?? "").trim();

  if (!text) {
    return "";
  }

  const normalized = text.startsWith("#") ? text.slice(1) : text;

  if (/^[0-9a-fA-F]{3}$/.test(normalized)) {
    return `#${normalized
      .split("")
      .map((character) => `${character}${character}`)
      .join("")
      .toLowerCase()}`;
  }

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return "";
  }

  return `#${normalized.toLowerCase()}`;
}

function normalizeAdminColorLabel(value) {
  const label = String(value ?? "").trim();

  if (!label) {
    return "";
  }

  const normalizedKey = label.toLowerCase().replace(/\s+/g, " ");
  return ENGLISH_COLOR_LABEL_TO_KHMER[normalizedKey] ?? label;
}

function normalizeAdminColorEntry(color) {
  const label = normalizeAdminColorLabel(color?.label);
  const hex = normalizeAdminColorHex(color?.hex);

  if (!label && !hex) {
    return null;
  }

  return {
    label: label || (hex ? hex.toUpperCase() : "ពណ៌"),
    hex: hex || "#d8e7e2",
  };
}

function getAdminColorKey(color) {
  const normalizedColor = normalizeAdminColorEntry(color);
  return normalizedColor ? `${normalizedColor.label.toLowerCase()}|${normalizedColor.hex.toLowerCase()}` : "";
}

function getAdminColorLabelKey(color) {
  const normalizedColor = normalizeAdminColorEntry(color);
  return normalizedColor ? normalizedColor.label.toLowerCase() : "";
}

function getStoredAdminColorOptions() {
  if (typeof store.getColors === "function") {
    return store.getColors();
  }

  return products.flatMap((product) => product.colors ?? []);
}

function getAvailableItemColors() {
  const palette = new Map();
  const sourceColors = [
    ...DEFAULT_ITEM_COLOR_OPTIONS,
    ...getStoredAdminColorOptions(),
    ...selectedItemColors,
  ];

  for (const color of sourceColors) {
    const normalizedColor = normalizeAdminColorEntry(color);

    if (!normalizedColor) {
      continue;
    }

    const colorLabelKey = getAdminColorLabelKey(normalizedColor);

    if (!colorLabelKey || palette.has(colorLabelKey)) {
      continue;
    }

    palette.set(colorLabelKey, normalizedColor);
  }

  return [...palette.values()].sort((left, right) => left.label.localeCompare(right.label) || left.hex.localeCompare(right.hex));
}

function getAdminColorMatchCandidates() {
  const candidates = [];
  const seenKeys = new Set();
  const sourceColors = [
    ...selectedItemColors,
    ...getStoredAdminColorOptions(),
    ...DEFAULT_ITEM_COLOR_OPTIONS,
    ...ADMIN_COMMON_COLOR_NAME_OPTIONS,
  ];

  for (const color of sourceColors) {
    const normalizedColor = normalizeAdminColorEntry(color);

    if (!normalizedColor) {
      continue;
    }

    const colorKey = getAdminColorKey(normalizedColor);

    if (seenKeys.has(colorKey)) {
      continue;
    }

    seenKeys.add(colorKey);
    candidates.push(normalizedColor);
  }

  return candidates;
}

function getAdminRgbFromHex(hex) {
  const normalizedHex = normalizeAdminColorHex(hex);

  if (!normalizedHex) {
    return null;
  }

  return {
    r: Number.parseInt(normalizedHex.slice(1, 3), 16),
    g: Number.parseInt(normalizedHex.slice(3, 5), 16),
    b: Number.parseInt(normalizedHex.slice(5, 7), 16),
  };
}

function getAdminColorDistance(leftHex, rightHex) {
  const leftRgb = getAdminRgbFromHex(leftHex);
  const rightRgb = getAdminRgbFromHex(rightHex);

  if (!leftRgb || !rightRgb) {
    return Number.POSITIVE_INFINITY;
  }

  return ((leftRgb.r - rightRgb.r) ** 2) + ((leftRgb.g - rightRgb.g) ** 2) + ((leftRgb.b - rightRgb.b) ** 2);
}

function findAdminColorMatch(hex) {
  const normalizedHex = normalizeAdminColorHex(hex);

  if (!normalizedHex) {
    return null;
  }

  const candidates = getAdminColorMatchCandidates();
  const exactMatch = candidates.find((color) => color.hex === normalizedHex);

  if (exactMatch) {
    return { ...exactMatch, exact: true };
  }

  let closestMatch = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  for (const candidate of candidates) {
    const distance = getAdminColorDistance(normalizedHex, candidate.hex);

    if (distance < closestDistance) {
      closestMatch = candidate;
      closestDistance = distance;
    }
  }

  return closestMatch ? { ...closestMatch, exact: false } : null;
}

function formatColorListValue(colors, fallback = "-") {
  const labels = (colors ?? [])
    .map((color) => String(color?.label ?? "").trim())
    .filter(Boolean);

  return labels.length ? labels.join(", ") : fallback;
}

function syncItemColorFieldValue() {
  setFormValue("colors", serializeColors(selectedItemColors));
}

function saveAdminColorOption(color) {
  const normalizedColor = normalizeAdminColorEntry(color);

  if (!normalizedColor || typeof store.getColors !== "function" || typeof store.saveColors !== "function") {
    return;
  }

  try {
    const currentColors = store.getColors();
    const currentColorKeys = new Set(currentColors.map((item) => getAdminColorLabelKey(item)));

    if (currentColorKeys.has(getAdminColorLabelKey(normalizedColor))) {
      return;
    }

    store.saveColors([...currentColors, normalizedColor]);
    renderColorPresetOptions();
  } catch (error) {
    showStatus("Color added to this item, but it could not be saved to the shared color list.", "error");
  }
}

function setAdminCustomColorMatchText(message, tone = "default") {
  if (!adminCustomColorMatch) {
    return;
  }

  adminCustomColorMatch.textContent = message;

  if (tone === "default") {
    delete adminCustomColorMatch.dataset.tone;
    return;
  }

  adminCustomColorMatch.dataset.tone = tone;
}

function syncAdminCustomColorNameSuggestion(match) {
  if (!adminCustomColorName || !match?.label) {
    return;
  }

  const currentValue = String(adminCustomColorName.value ?? "").trim();
  const canAutofill = !currentValue || adminCustomColorName.dataset.autoFilled === "true";

  if (!canAutofill) {
    return;
  }

  adminCustomColorName.value = match.label;
  adminCustomColorName.dataset.autoFilled = "true";
}

function syncAdminCustomColorInputs({
  source = "picker",
  allowAutofillName = true,
  normalizeCodeInput = false,
} = {}) {
  const codeValue = String(adminCustomColorCode?.value ?? "").trim();
  const pickerValue = String(adminCustomColorHex?.value ?? "").trim();
  const activeValue = source === "code" ? codeValue : pickerValue;
  const normalizedHex = normalizeAdminColorHex(activeValue);

  if (source === "code" && normalizeCodeInput && adminCustomColorCode) {
    adminCustomColorCode.value = normalizedHex ? normalizedHex.toUpperCase() : codeValue.toUpperCase();
  }

  if (!normalizedHex) {
    if (source === "code" && codeValue) {
      setAdminCustomColorMatchText("Enter a valid hex code like #2BB673.", "invalid");
    } else {
      setAdminCustomColorMatchText("Type a hex code or use the picker to detect a color name.");
    }

    return "";
  }

  if (adminCustomColorCode) {
    adminCustomColorCode.value = normalizedHex.toUpperCase();
  }

  if (adminCustomColorHex && adminCustomColorHex.value !== normalizedHex) {
    adminCustomColorHex.value = normalizedHex;
  }

  const match = findAdminColorMatch(normalizedHex);

  if (allowAutofillName && match) {
    syncAdminCustomColorNameSuggestion(match);
  }

  if (match?.exact) {
    setAdminCustomColorMatchText(`Matched color name: ${match.label}`);
  } else if (match) {
    setAdminCustomColorMatchText(`Closest color name: ${match.label}`, "closest");
  } else {
    setAdminCustomColorMatchText(`Color code ready: ${normalizedHex.toUpperCase()}`);
  }

  return normalizedHex;
}

function resetAdminCustomColorInputs() {
  if (adminCustomColorName) {
    adminCustomColorName.value = "";
    adminCustomColorName.dataset.autoFilled = "false";
  }

  if (adminCustomColorHex) {
    adminCustomColorHex.value = ADMIN_DEFAULT_CUSTOM_COLOR_HEX;
  }

  if (adminCustomColorCode) {
    adminCustomColorCode.value = ADMIN_DEFAULT_CUSTOM_COLOR_HEX.toUpperCase();
  }

  syncAdminCustomColorInputs({ source: "picker", allowAutofillName: false, normalizeCodeInput: true });
}

function renderColorPresetOptions() {
  if (!adminColorPresetSelect) {
    return;
  }

  const currentValue = adminColorPresetSelect.value;
  const options = getAvailableItemColors();

  adminColorPresetSelect.innerHTML = [
    '<option value="">Choose color</option>',
    ...options.map(
      (color) =>
        `<option value="${escapeHtml(getAdminColorKey(color))}">${escapeHtml(color.label)} (${escapeHtml(color.hex.toUpperCase())})</option>`,
    ),
  ].join("");

  if ([...adminColorPresetSelect.options].some((option) => option.value === currentValue)) {
    adminColorPresetSelect.value = currentValue;
  } else {
    adminColorPresetSelect.value = "";
  }
}

function renderSelectedItemColors() {
  if (!adminSelectedColors) {
    return;
  }

  if (!selectedItemColors.length) {
    adminSelectedColors.innerHTML = '<p class="admin-color-picker__empty">No colors selected.</p>';
    return;
  }

  adminSelectedColors.innerHTML = selectedItemColors
    .map(
      (color, index) => `
        <div class="admin-color-chip">
          <span class="admin-color-chip__content">
            <span class="admin-color-chip__swatch" style="background-color:${escapeHtml(color.hex)};"></span>
            <span class="admin-color-chip__label">${escapeHtml(color.label)}</span>
            <small>${escapeHtml(color.hex.toUpperCase())}</small>
          </span>
          <button
            class="admin-color-chip__remove"
            type="button"
            data-admin-color-remove="${index}"
            aria-label="Remove color ${escapeHtml(color.label)}"
            title="Remove color"
          >&times;</button>
        </div>
      `,
    )
    .join("");
}

function setSelectedItemColors(colors) {
  const nextColors = [];
  const seenKeys = new Set();

  for (const color of colors ?? []) {
    const normalizedColor = normalizeAdminColorEntry(color);

    if (!normalizedColor) {
      continue;
    }

    const colorKey = getAdminColorLabelKey(normalizedColor);

    if (!colorKey || seenKeys.has(colorKey)) {
      continue;
    }

    seenKeys.add(colorKey);
    nextColors.push(normalizedColor);
  }

  selectedItemColors = nextColors;
  syncItemColorFieldValue();
  renderColorPresetOptions();
  renderSelectedItemColors();
}

function addSelectedItemColor(color) {
  const normalizedColor = normalizeAdminColorEntry(color);

  if (!normalizedColor) {
    showStatus("Choose a valid color.", "error");
    return false;
  }

  const colorKey = getAdminColorKey(normalizedColor);
  const colorLabelKey = getAdminColorLabelKey(normalizedColor);

  if (
    selectedItemColors.some(
      (item) => getAdminColorKey(item) === colorKey || getAdminColorLabelKey(item) === colorLabelKey,
    )
  ) {
    showStatus(`${normalizedColor.label} is already selected.`, "error");
    return false;
  }

  selectedItemColors = [...selectedItemColors, normalizedColor];
  syncItemColorFieldValue();
  renderColorPresetOptions();
  renderSelectedItemColors();
  return true;
}

function addPresetItemColor() {
  if (!adminColorPresetSelect) {
    return;
  }

  const selectedColor = getAvailableItemColors().find((color) => getAdminColorKey(color) === adminColorPresetSelect.value);

  if (!selectedColor) {
    showStatus("Choose a color to add.", "error");
    return;
  }

  if (addSelectedItemColor(selectedColor)) {
    adminColorPresetSelect.value = "";
  }
}

function addCustomItemColor() {
  const label = String(adminCustomColorName?.value ?? "").trim();
  const codeValue = String(adminCustomColorCode?.value ?? "").trim();
  const codeHex = normalizeAdminColorHex(codeValue);
  const hex = codeValue ? codeHex : normalizeAdminColorHex(adminCustomColorHex?.value);
  const matchedColor = hex ? findAdminColorMatch(hex) : null;

  if (!label && !hex) {
    showStatus("Enter a color name or choose a color.", "error");
    return;
  }

  if (codeValue && !codeHex) {
    showStatus("Enter a valid color hex like #2BB673.", "error");
    return;
  }

  if (!hex) {
    showStatus("Choose a valid color hex.", "error");
    return;
  }

  const nextColor = {
    label: label || matchedColor?.label || hex.toUpperCase(),
    hex,
  };

  if (!addSelectedItemColor(nextColor)) {
    return;
  }

  saveAdminColorOption(nextColor);

  resetAdminCustomColorInputs();
}

function removeSelectedItemColor(index) {
  if (!Number.isInteger(index) || index < 0 || index >= selectedItemColors.length) {
    return;
  }

  selectedItemColors = selectedItemColors.filter((_, colorIndex) => colorIndex !== index);
  syncItemColorFieldValue();
  renderColorPresetOptions();
  renderSelectedItemColors();
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
    adminLogoutButton.setAttribute("aria-label", copy.session.logout);
    adminLogoutButton.setAttribute("title", copy.session.logout);
  }

  if (adminQuickAccessLabel) {
    adminQuickAccessLabel.textContent = copy.quickAccess.label;
  }

  if (adminCatalogMenuTitle) {
    adminCatalogMenuTitle.textContent = copy.quickAccess.openCatalog ?? ADMIN_UI.en.quickAccess.openCatalog;
  }

  if (adminCatalogMenuHint) {
    adminCatalogMenuHint.textContent = copy.quickAccess.openCatalogHint ?? ADMIN_UI.en.quickAccess.openCatalogHint;
  }

  if (adminQrButtonLabel) {
    adminQrButtonLabel.textContent = copy.quickAccess.qr;
  }

  if (adminCatalogMenuButton) {
    const openCatalogAria = copy.quickAccess.openCatalogAria ?? ADMIN_UI.en.quickAccess.openCatalogAria;
    adminCatalogMenuButton.setAttribute("aria-label", openCatalogAria);
    adminCatalogMenuButton.setAttribute("title", openCatalogAria);
  }

  if (adminQrMenuButton) {
    const qrAria = copy.quickAccess.qrAria ?? ADMIN_UI.en.quickAccess.qrAria;
    adminQrMenuButton.setAttribute("aria-label", qrAria);
    adminQrMenuButton.setAttribute("title", qrAria);
  }

  for (const item of adminCatalogMenuItems) {
    item.textContent = getCatalogTargetLabel(item.dataset.adminCatalogTarget);
  }

  for (const item of adminQrMenuItems) {
    item.textContent = getCatalogTargetLabel(item.dataset.adminQrTarget);
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

  if (adminSettingsProfilePanelEyebrow) {
    adminSettingsProfilePanelEyebrow.textContent = copy.profileEyebrow;
  }

  if (adminSettingsProfilePanelTitle) {
    adminSettingsProfilePanelTitle.textContent = copy.profileTitle;
  }

  if (adminSettingsProfilePanelCopy) {
    adminSettingsProfilePanelCopy.textContent = copy.profileCopy;
  }

  if (adminSettingsProfileTab) {
    adminSettingsProfileTab.textContent = copy.profileTab ?? copy.profileTitle;
  }

  if (adminSettingsLanguageTab) {
    adminSettingsLanguageTab.textContent = copy.languageTab ?? copy.languageTitle;
  }

  if (adminSettingsStatusTab) {
    adminSettingsStatusTab.textContent = copy.statusTab ?? copy.status;
  }

  if (adminSettingsSessionEyebrow) {
    adminSettingsSessionEyebrow.textContent = copy.sessionEyebrow ?? copy.status;
  }

  if (adminSettingsSessionTitle) {
    adminSettingsSessionTitle.textContent = copy.sessionTitle ?? copy.status;
  }

  if (adminSettingsSessionCopy) {
    adminSettingsSessionCopy.textContent = copy.sessionCopy ?? copy.profileCopy;
  }

  if (adminSettingsTimeoutEyebrow) {
    adminSettingsTimeoutEyebrow.textContent = copy.sessionTimeoutEyebrow ?? copy.sessionEyebrow ?? copy.status;
  }

  if (adminSettingsTimeoutTitle) {
    adminSettingsTimeoutTitle.textContent = copy.sessionTimeoutTitle ?? copy.expiresAt;
  }

  if (adminSettingsTimeoutCopy) {
    adminSettingsTimeoutCopy.textContent = copy.sessionTimeoutCopy ?? copy.sessionCopy ?? copy.profileCopy;
  }

  if (adminSettingsTimeoutLabel) {
    adminSettingsTimeoutLabel.textContent = copy.sessionTimeoutLabel ?? copy.expiresAt;
  }

  if (adminSettingsUsernameLabel) {
    adminSettingsUsernameLabel.textContent = copy.username;
  }

  if (adminSettingsUsernameLabelPanel) {
    adminSettingsUsernameLabelPanel.textContent = copy.username;
  }

  if (adminSettingsRoleLabel) {
    adminSettingsRoleLabel.textContent = copy.role;
  }

  if (adminSettingsPasswordEyebrow) {
    adminSettingsPasswordEyebrow.textContent = copy.passwordEyebrow ?? "Security";
  }

  if (adminSettingsPasswordTitle) {
    adminSettingsPasswordTitle.textContent = copy.passwordTitle ?? "Reset Password";
  }

  if (adminSettingsPasswordCopy) {
    adminSettingsPasswordCopy.textContent = copy.passwordCopy ?? "Change the admin password used to sign in on this browser.";
  }

  if (adminSettingsCurrentPasswordLabel) {
    adminSettingsCurrentPasswordLabel.textContent = copy.currentPasswordLabel ?? "Current Password";
  }

  if (adminSettingsCurrentPasswordInput) {
    adminSettingsCurrentPasswordInput.placeholder = copy.currentPasswordPlaceholder ?? "Enter current password";
  }

  if (adminSettingsNewPasswordLabel) {
    adminSettingsNewPasswordLabel.textContent = copy.newPasswordLabel ?? "New Password";
  }

  if (adminSettingsNewPasswordInput) {
    adminSettingsNewPasswordInput.placeholder = copy.newPasswordPlaceholder ?? "Enter new password";
  }

  if (adminSettingsConfirmPasswordLabel) {
    adminSettingsConfirmPasswordLabel.textContent = copy.confirmPasswordLabel ?? "Confirm New Password";
  }

  if (adminSettingsConfirmPasswordInput) {
    adminSettingsConfirmPasswordInput.placeholder = copy.confirmPasswordPlaceholder ?? "Confirm new password";
  }

  if (adminSettingsPasswordSaveButton) {
    adminSettingsPasswordSaveButton.textContent = copy.passwordSave ?? "Save New Password";
  }

  if (adminSettingsRecoveryEyebrow) {
    adminSettingsRecoveryEyebrow.textContent = copy.recoveryEyebrow ?? "Recovery";
  }

  if (adminSettingsRecoveryTitle) {
    adminSettingsRecoveryTitle.textContent = copy.recoveryTitle ?? "Forgot Password Email";
  }

  if (adminSettingsRecoveryCopy) {
    adminSettingsRecoveryCopy.textContent = copy.recoveryCopy ?? "Save the recovery email used for OTP and reset-link recovery.";
  }

  if (adminSettingsRecoveryEmailLabel) {
    adminSettingsRecoveryEmailLabel.textContent = copy.recoveryEmailLabel ?? "Email";
  }

  if (adminSettingsRecoveryEmailInput) {
    adminSettingsRecoveryEmailInput.placeholder = copy.recoveryEmailPlaceholder ?? "Enter recovery email";
  }

  if (adminSettingsRecoveryEmailSaveButton) {
    adminSettingsRecoveryEmailSaveButton.textContent = copy.recoveryEmailSave ?? "Save Recovery Email";
  }

  if (adminSettingsIssuedLabel) {
    adminSettingsIssuedLabel.textContent = copy.issuedAt;
  }

  if (adminSettingsIssuedLabelMirror) {
    adminSettingsIssuedLabelMirror.textContent = copy.issuedAt;
  }

  if (adminSettingsExpiresLabel) {
    adminSettingsExpiresLabel.textContent = copy.expiresAt;
  }

  if (adminSettingsExpiresLabelMirror) {
    adminSettingsExpiresLabelMirror.textContent = copy.expiresAt;
  }

  if (adminSettingsStatusLabel) {
    adminSettingsStatusLabel.textContent = copy.status;
  }

  if (adminSettingsStatusLabelMirror) {
    adminSettingsStatusLabelMirror.textContent = copy.status;
  }

  if (adminSettingsLogoutButton) {
    adminSettingsLogoutButton.setAttribute("aria-label", getAdminCopy().session.signOut);
    adminSettingsLogoutButton.setAttribute("title", getAdminCopy().session.signOut);
  }

  if (adminSettingsLogoutText) {
    adminSettingsLogoutText.textContent = getAdminCopy().session.signOut;
  }

  if (adminSettingsTimeoutSaveButton) {
    adminSettingsTimeoutSaveButton.textContent = copy.sessionTimeoutSave ?? "Save Session Time";
  }

  renderSessionTimeoutOptions();
}

function getAdminIdleTimeoutOptions() {
  return Array.isArray(window.adminAuth?.idleTimeoutOptions) && window.adminAuth.idleTimeoutOptions.length > 0
    ? window.adminAuth.idleTimeoutOptions
    : [1, 2, 5, 15, 30];
}

function renderSessionTimeoutOptions() {
  if (!adminSettingsTimeoutInput) {
    return;
  }

  const copy = getAdminCopy().settings;
  const timeoutOptions = getAdminIdleTimeoutOptions();
  const selectedMinutes = String(window.adminAuth?.getIdleTimeoutMinutes?.() ?? 15);

  adminSettingsTimeoutInput.replaceChildren(
    ...timeoutOptions.map((minutes) => {
      const option = document.createElement("option");
      option.value = String(minutes);
      option.textContent = copy.sessionTimeoutOption?.(minutes) ?? `${minutes} min`;
      return option;
    }),
  );

  adminSettingsTimeoutInput.value = timeoutOptions.includes(Number.parseInt(selectedMinutes, 10))
    ? selectedMinutes
    : String(timeoutOptions[0]);
}

function saveSessionTimeoutSetting(event) {
  event.preventDefault();

  try {
    const copy = getAdminCopy().settings;
    const timeoutMinutes = window.adminAuth?.saveIdleTimeoutMinutes?.(adminSettingsTimeoutInput?.value);

    if (!timeoutMinutes) {
      throw new Error("Unable to save the selected session time.");
    }

    renderSessionTimeoutOptions();
    syncAuthSession();
    showImportExportNotice(
      copy.sessionTimeoutSavedTitle ?? "Session time saved",
      copy.sessionTimeoutSaved ?? "The auto logout time has been updated.",
      "success",
    );
  } catch (error) {
    const copy = getAdminCopy().settings;
    const message = error instanceof Error ? error.message : "Unable to save the selected session time.";
    showImportExportNotice(
      copy.sessionTimeoutSaveErrorTitle ?? "Unable to save session time",
      message,
      "error",
    );
  }
}

function saveAdminPasswordSetting(event) {
  event.preventDefault();

  const copy = getAdminCopy().settings;
  const currentPassword = String(adminSettingsCurrentPasswordInput?.value ?? "");
  const nextPassword = String(adminSettingsNewPasswordInput?.value ?? "");
  const confirmPassword = String(adminSettingsConfirmPasswordInput?.value ?? "");

  try {
    if (nextPassword.trim().length < 6) {
      throw new Error(copy.passwordTooShortError ?? "New password must be at least 6 characters.");
    }

    if (nextPassword !== confirmPassword) {
      throw new Error(copy.passwordMismatchError ?? "The new password and confirm password do not match.");
    }

    const result = window.adminAuth?.changePassword?.(currentPassword, nextPassword);

    if (!result?.ok) {
      const localizedMessage = result?.code === "incorrect_current_password"
        ? copy.passwordCurrentError
        : result?.code === "password_too_short"
          ? copy.passwordTooShortError
          : result?.code === "password_unchanged"
            ? copy.passwordSameError
            : result?.code === "password_storage_unavailable"
              ? copy.passwordStorageError
              : result?.message;

      throw new Error(localizedMessage ?? copy.passwordSaveErrorTitle ?? "Unable to update password.");
    }

    adminSettingsPasswordForm?.reset();
    showImportExportNotice(
      copy.passwordSavedTitle ?? "Password updated",
      copy.passwordSaved ?? "The admin password has been saved for this browser.",
      "success",
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update password.";
    showImportExportNotice(
      copy.passwordSaveErrorTitle ?? "Unable to update password",
      message,
      "error",
    );
  }
}

function syncRecoveryEmailSetting() {
  if (!adminSettingsRecoveryEmailInput) {
    return;
  }

  if (document.activeElement === adminSettingsRecoveryEmailInput) {
    return;
  }

  adminSettingsRecoveryEmailInput.value = window.adminAuth?.getRecoveryEmail?.() ?? "";
}

function saveRecoveryEmailSetting(event) {
  event.preventDefault();

  const copy = getAdminCopy().settings;

  try {
    const result = window.adminAuth?.saveRecoveryEmail?.(adminSettingsRecoveryEmailInput?.value ?? "");

    if (!result?.ok) {
      const localizedMessage = result?.code === "invalid_recovery_email"
        ? copy.recoveryEmailInvalidError
        : result?.code === "recovery_email_storage_unavailable"
          ? copy.recoveryEmailStorageError
          : result?.message;

      throw new Error(localizedMessage ?? copy.recoveryEmailSaveErrorTitle ?? "Unable to save recovery email.");
    }

    syncRecoveryEmailSetting();
    showImportExportNotice(
      copy.recoveryEmailSavedTitle ?? "Recovery email saved",
      copy.recoveryEmailSaved ?? "The recovery email is ready for forgot-password tools.",
      "success",
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save recovery email.";
    showImportExportNotice(
      copy.recoveryEmailSaveErrorTitle ?? "Unable to save recovery email",
      message,
      "error",
    );
  }
}

function syncSettingsPanels() {
  for (const button of adminSettingsPanelButtons) {
    const panelKey = button.dataset.adminSettingsPanelOption;
    const isActive = panelKey === currentSettingsPanel;

    button.classList.toggle("admin-settings__tab--active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.setAttribute("tabindex", isActive ? "0" : "-1");
  }

  for (const panel of adminSettingsPanels) {
    panel.hidden = panel.dataset.adminSettingsPanel !== currentSettingsPanel;
  }
}

function setAdminSettingsPanel(panelKey) {
  const nextPanel = panelKey === "language" || panelKey === "session" ? panelKey : "profile";

  if (currentSettingsPanel === nextPanel) {
    syncSettingsPanels();
    return;
  }

  currentSettingsPanel = nextPanel;
  syncSettingsPanels();
}

function getContactCopy() {
  return getAdminCopy().contact ?? ADMIN_UI.en.contact;
}

function getStoredContactSettings() {
  return store.getContactSettings?.() ?? store.getEmptyContactSettings?.() ?? { address: "", contacts: [] };
}

function normalizePrimaryContactType(type) {
  const normalizedType = String(type ?? "").trim().toLowerCase();
  return normalizedType === "email" || normalizedType === "phone" ? normalizedType : "";
}

function getContactEntryText(entry = {}) {
  return String(entry.label ?? entry.value ?? "").trim()
    || String(entry.value ?? "").trim();
}

function getContactTelegramValue(entry = {}) {
  return String(entry.telegram ?? "").trim();
}

function getContactInputValue(input) {
  return String(input?.value ?? "").trim();
}

function getPrimaryContactValues(settings = getStoredContactSettings()) {
  const normalizedSettings = store.normalizeContactSettings?.(settings) ?? settings;
  const contacts = Array.isArray(normalizedSettings.contacts) ? normalizedSettings.contacts : [];
  const phoneEntries = [];
  let emailValue = "";

  for (const entry of contacts) {
    const type = normalizePrimaryContactType(entry?.type);
    const text = getContactEntryText(entry);

    if (!type || !text) {
      continue;
    }

    if (type === "phone" && phoneEntries.length < 2) {
      phoneEntries.push({
        phone: text,
        telegram: getContactTelegramValue(entry),
      });
      continue;
    }

    if (type === "email" && !emailValue) {
      emailValue = text;
    }
  }

  return {
    address: String(normalizedSettings.address ?? ""),
    phoneOne: phoneEntries[0]?.phone ?? "",
    phoneOneTelegram: phoneEntries[0]?.telegram ?? "",
    phoneTwo: phoneEntries[1]?.phone ?? "",
    phoneTwoTelegram: phoneEntries[1]?.telegram ?? "",
    email: emailValue,
  };
}

function syncContactCopy() {
  const copy = getContactCopy();

  if (adminContactEyebrow) {
    adminContactEyebrow.textContent = copy.eyebrow;
  }

  if (adminContactTitle) {
    adminContactTitle.textContent = copy.title;
  }

  if (adminContactText) {
    adminContactText.textContent = copy.text;
  }

  if (adminContactAddressEyebrow) {
    adminContactAddressEyebrow.textContent = copy.addressEyebrow;
  }

  if (adminContactAddressTitle) {
    adminContactAddressTitle.textContent = copy.addressTitle;
  }

  if (adminContactAddressCopy) {
    adminContactAddressCopy.textContent = copy.addressCopy;
  }

  if (adminContactAddressLabel) {
    adminContactAddressLabel.textContent = copy.addressLabel;
  }

  if (adminContactAddressHint) {
    adminContactAddressHint.textContent = copy.addressHint;
  }

  if (adminContactPrimaryEyebrow) {
    adminContactPrimaryEyebrow.textContent = copy.primaryEyebrow;
  }

  if (adminContactPrimaryTitle) {
    adminContactPrimaryTitle.textContent = copy.primaryTitle;
  }

  if (adminContactPrimaryCopy) {
    adminContactPrimaryCopy.textContent = copy.primaryCopy;
  }

  if (adminContactPhoneOneTitle) {
    adminContactPhoneOneTitle.textContent = copy.phoneOneTitle;
  }

  if (adminContactPhoneOneCopy) {
    adminContactPhoneOneCopy.textContent = copy.phoneOneCopy;
  }

  if (adminContactPhoneOneLabel) {
    adminContactPhoneOneLabel.textContent = copy.phoneOneLabel;
  }

  if (adminContactPhoneOneTelegramLabel) {
    adminContactPhoneOneTelegramLabel.textContent = copy.phoneOneTelegramLabel;
  }

  if (adminContactPhoneTwoTitle) {
    adminContactPhoneTwoTitle.textContent = copy.phoneTwoTitle;
  }

  if (adminContactPhoneTwoCopy) {
    adminContactPhoneTwoCopy.textContent = copy.phoneTwoCopy;
  }

  if (adminContactPhoneTwoLabel) {
    adminContactPhoneTwoLabel.textContent = copy.phoneTwoLabel;
  }

  if (adminContactPhoneTwoTelegramLabel) {
    adminContactPhoneTwoTelegramLabel.textContent = copy.phoneTwoTelegramLabel;
  }

  if (adminContactEmailLabel) {
    adminContactEmailLabel.textContent = copy.emailLabel;
  }

  if (adminContactPrimaryHint) {
    adminContactPrimaryHint.textContent = copy.primaryHint;
  }

  if (adminContactResetButton) {
    adminContactResetButton.textContent = copy.reset;
  }

  if (adminContactSaveButton) {
    adminContactSaveButton.textContent = copy.save;
  }

  if (adminContactAddressInput) {
    adminContactAddressInput.placeholder = "No775, Str38, Trea2 Village, Sangkat Steng Meanchey, Khan Meanchey, Phnom Penh";
  }

  if (adminContactPhoneOneInput) {
    adminContactPhoneOneInput.placeholder = copy.phonePlaceholder;
  }

  if (adminContactPhoneTwoInput) {
    adminContactPhoneTwoInput.placeholder = copy.phoneTwoPlaceholder ?? copy.phonePlaceholder;
  }

  if (adminContactPhoneOneTelegramInput) {
    adminContactPhoneOneTelegramInput.placeholder = copy.telegramPlaceholder;
  }

  if (adminContactPhoneTwoTelegramInput) {
    adminContactPhoneTwoTelegramInput.placeholder = copy.telegramPlaceholder;
  }

  if (adminContactEmailInput) {
    adminContactEmailInput.placeholder = copy.emailPlaceholder;
  }
}

function readContactFormDraft() {
  const contacts = [];
  const phoneOne = getContactInputValue(adminContactPhoneOneInput);
  const phoneOneTelegram = getContactInputValue(adminContactPhoneOneTelegramInput);
  const phoneTwo = getContactInputValue(adminContactPhoneTwoInput);
  const phoneTwoTelegram = getContactInputValue(adminContactPhoneTwoTelegramInput);
  const email = getContactInputValue(adminContactEmailInput);

  if (phoneOne) {
    contacts.push({
      type: "phone",
      label: phoneOne,
      value: phoneOne,
      link: "",
      telegram: phoneOneTelegram,
    });
  }

  if (phoneTwo) {
    contacts.push({
      type: "phone",
      label: phoneTwo,
      value: phoneTwo,
      link: "",
      telegram: phoneTwoTelegram,
    });
  }

  if (email) {
    contacts.push({
      type: "email",
      label: email,
      value: email,
      link: "",
    });
  }

  return {
    address: adminContactAddressInput?.value ?? "",
    contacts,
  };
}

function renderContactForm(settings = getStoredContactSettings()) {
  const primaryValues = getPrimaryContactValues(settings);

  if (adminContactAddressInput) {
    adminContactAddressInput.value = primaryValues.address;
  }

  if (adminContactPhoneOneInput) {
    adminContactPhoneOneInput.value = primaryValues.phoneOne;
  }

  if (adminContactPhoneOneTelegramInput) {
    adminContactPhoneOneTelegramInput.value = primaryValues.phoneOneTelegram;
  }

  if (adminContactPhoneTwoInput) {
    adminContactPhoneTwoInput.value = primaryValues.phoneTwo;
  }

  if (adminContactPhoneTwoTelegramInput) {
    adminContactPhoneTwoTelegramInput.value = primaryValues.phoneTwoTelegram;
  }

  if (adminContactEmailInput) {
    adminContactEmailInput.value = primaryValues.email;
  }
}

function showContactStatus(message, tone = "success") {
  window.clearTimeout(contactStatusTimeoutId);

  if (!adminContactStatus) {
    return;
  }

  adminContactStatus.textContent = message;
  adminContactStatus.hidden = !message;
  adminContactStatus.classList.toggle("admin-status--error", tone === "error");

  if (!message) {
    return;
  }

  contactStatusTimeoutId = window.setTimeout(() => {
    adminContactStatus.hidden = true;
    adminContactStatus.textContent = "";
    adminContactStatus.classList.remove("admin-status--error");
  }, 2200);
}

function showContactNotice(title, text, type = "success") {
  if (window.Swal?.fire) {
    const isSuccess = type === "success";

    window.Swal.fire({
      title,
      text,
      icon: type,
      showConfirmButton: !isSuccess,
      timer: isSuccess ? 900 : undefined,
      timerProgressBar: isSuccess,
    });
    return;
  }

  window.alert(text);
}

function refreshContactsView() {
  syncContactCopy();
  renderContactForm(getStoredContactSettings());
}

function resetContactForm() {
  showContactStatus("");
  renderContactForm(getStoredContactSettings());
}

function saveContactForm(event) {
  event.preventDefault();

  try {
    const draft = readContactFormDraft();
    const savedSettings = store.saveContactSettings?.(draft) ?? draft;
    renderContactForm(savedSettings);
    showContactStatus(getContactCopy().saved);
    showContactNotice(
      getContactCopy().savedTitle ?? "Contact saved",
      getContactCopy().saved,
      "success"
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save contact settings.";
    showContactStatus(message, "error");
    showContactNotice(
      getContactCopy().saveErrorTitle ?? "Unable to save contact",
      message,
      "error"
    );
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
  const issuedAt = formatAdminDateTime(session?.issuedAt);
  const expiresAt = formatAdminDateTime(session?.expiresAt);
  const status = session ? copy.session.status : "-";

  if (adminSessionUser) {
    adminSessionUser.textContent = username;
  }

  if (adminSettingsProfileUsername) {
    adminSettingsProfileUsername.textContent = username;
  }

  if (adminSettingsProfileUsernamePanel) {
    adminSettingsProfileUsernamePanel.textContent = username;
  }

  if (adminSettingsProfileInitial) {
    const initial = String(username || copy.session.role || "A").trim().charAt(0) || "A";
    adminSettingsProfileInitial.textContent = initial.toUpperCase();
  }

  if (adminSettingsProfileRole) {
    adminSettingsProfileRole.textContent = copy.session.role;
  }

  if (adminSettingsProfileIssuedAt) {
    adminSettingsProfileIssuedAt.textContent = issuedAt;
  }

  if (adminSettingsProfileIssuedAtMirror) {
    adminSettingsProfileIssuedAtMirror.textContent = issuedAt;
  }

  if (adminSettingsProfileExpiresAt) {
    adminSettingsProfileExpiresAt.textContent = expiresAt;
  }

  if (adminSettingsProfileExpiresAtMirror) {
    adminSettingsProfileExpiresAtMirror.textContent = expiresAt;
  }

  if (adminSettingsProfileStatus) {
    adminSettingsProfileStatus.textContent = status;
  }

  if (adminSettingsProfileStatusMirror) {
    adminSettingsProfileStatusMirror.textContent = status;
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
  syncSettingsPanels();
  syncContactCopy();
  syncAdminLanguageButtons();
  syncAuthSession();
  syncSectionCopy();
  syncQrModalCopy();
}

function syncSectionNavigation() {
  for (const button of adminSectionButtons) {
    const isActive = button.dataset.adminSectionOption === currentSection;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function isMobileSidebarLayout() {
  return mobileSidebarQuery.matches;
}

function setSidebarCollapsed(isCollapsed) {
  sidebarCollapsed = isCollapsed;
  syncSidebarLayout();
}

function syncSidebarLayout() {
  const copy = getAdminCopy();
  const isMobileLayout = isMobileSidebarLayout();

  if (adminDashboardRoot) {
    adminDashboardRoot.classList.toggle("admin-dashboard--collapsed", sidebarCollapsed);
  }

  document.body.classList.toggle("admin-mobile-nav-open", isMobileLayout && !sidebarCollapsed);

  if (adminSidebarBackdrop) {
    adminSidebarBackdrop.hidden = !isMobileLayout || sidebarCollapsed;
    adminSidebarBackdrop.setAttribute("aria-label", copy.session.hideMenuAria);
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

  if (adminContactSection) {
    adminContactSection.hidden = currentSection !== "contact";
  }

  if (adminSettingsSection) {
    adminSettingsSection.hidden = currentSection !== "settings";
  }

  if (currentSection !== "dashboard") {
    closeQuickAccessMenus();
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

function getCatalogShareUrl(target = currentQrCatalogTarget) {
  grantDepoAccessIfNeeded(target);
  return new URL(getCatalogTargetHref(target), window.location.href).href;
}

function getCatalogQrUrl(target = currentQrCatalogTarget) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(getCatalogShareUrl(target))}`;
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

async function buildCatalogQrCard(target = currentQrCatalogTarget) {
  const normalizedTarget = normalizeCatalogTarget(target);
  const qrResponse = await fetch(getCatalogQrUrl(normalizedTarget));

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
  backgroundGradient.addColorStop(0, "#f9faf9");
  backgroundGradient.addColorStop(1, "#f2f4f3");
  context.fillStyle = backgroundGradient;
  context.fillRect(0, 0, cardWidth, cardHeight);

  // Single clean card body
  context.save();
  context.shadowColor = "rgba(16, 63, 54, 0.1)";
  context.shadowBlur = 40;
  context.shadowOffsetY = 16;
  fillRoundedRect(context, 60, 60, 960, 1160, 48, "#ffffff");
  context.restore();

  // Header Gradient
  const headerGradient = context.createLinearGradient(120, 120, 960, 260);
  headerGradient.addColorStop(0, "#103f36");
  headerGradient.addColorStop(1, "#185648");
  fillRoundedRect(context, 120, 120, 840, 160, 32, headerGradient);

  // Logo background
  fillRoundedRect(context, 150, 146, 120, 108, 24, "#071713");
  context.drawImage(logoImage, 158, 156, 104, 88);

  // Header Text
  context.fillStyle = "#ffffff";
  context.font = "800 42px 'Roboto', 'Segoe UI', sans-serif";
  context.fillText("ANGKOR GARDEN TOOLS", 310, 186);

  context.fillStyle = "rgba(232, 255, 248, 0.85)";
  context.font = "600 24px 'Roboto', 'Segoe UI', sans-serif";
  context.fillText(`${getCatalogTargetLabel(normalizedTarget)} product catalog`, 310, 226);

  // Clean, large QR Code without excessive borders
  const qrSize = 640;
  const qrX = 220; // Math.round((1080 - 640) / 2)
  const qrY = 400;

  // Single subtle boundary
  strokeRoundedRect(context, qrX - 24, qrY - 24, qrSize + 48, qrSize + 48, 32, "rgba(36, 170, 134, 0.15)", 2);

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

async function getCatalogQrCardAsset(target = currentQrCatalogTarget) {
  const normalizedTarget = normalizeCatalogTarget(target);

  if (!catalogQrCardPromises.has(normalizedTarget)) {
    catalogQrCardPromises.set(
      normalizedTarget,
      buildCatalogQrCard(normalizedTarget).catch((error) => {
        catalogQrCardPromises.delete(normalizedTarget);
        throw error;
      }),
    );
  }

  return catalogQrCardPromises.get(normalizedTarget);
}

function syncQrModalCopy() {
  if (adminQrModalTitle) {
    adminQrModalTitle.textContent = getQrModalTitleText(currentQrCatalogTarget);
  }

  if (adminCatalogQrImage) {
    adminCatalogQrImage.alt = getQrImageAltText(currentQrCatalogTarget, true);
  }
}

function showCatalogQrStatus(message, type = "info") {
  if (!adminCatalogQrStatus) {
    return;
  }

  window.clearTimeout(qrStatusTimeoutId);
  adminCatalogQrStatus.textContent = message;
  adminCatalogQrStatus.classList.toggle("admin-modal__text--error", type === "error");

  qrStatusTimeoutId = window.setTimeout(() => {
    adminCatalogQrStatus.textContent = getDefaultQrStatusText(currentQrCatalogTarget);
    adminCatalogQrStatus.classList.remove("admin-modal__text--error");
  }, 1500);
}

async function syncCatalogQrState() {
  if (!adminCatalogQrImage) {
    return;
  }

  adminCatalogQrImage.alt = getQrImageAltText(currentQrCatalogTarget, true);

  const qrCardAsset = await getCatalogQrCardAsset(currentQrCatalogTarget);
  adminCatalogQrImage.src = qrCardAsset.dataUrl;
}

function syncAdminModalBodyState() {
  const hasOpenModal = (
    (adminQrModal && !adminQrModal.hasAttribute("hidden"))
    || (adminItemColumnsModal && !adminItemColumnsModal.hasAttribute("hidden"))
  );

  document.body.classList.toggle("admin-modal-open", Boolean(hasOpenModal));
}

async function copyCatalogLink() {
  const shareUrl = getCatalogShareUrl(currentQrCatalogTarget);

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

    showCatalogQrStatus(`${getCatalogTargetLabel(currentQrCatalogTarget)} catalog link copied.`);
  } catch (error) {
    showCatalogQrStatus("Copy failed. Please try again.", "error");
  }
}

function openQrModal(target = "user") {
  currentQrCatalogTarget = normalizeCatalogTarget(target);
  adminItemColumnsModal?.setAttribute("hidden", "");
  adminQrModal?.removeAttribute("hidden");
  syncAdminModalBodyState();
  syncQrModalCopy();
  adminCatalogQrStatus.textContent = "Preparing branded QR card...";
  adminCatalogQrStatus.classList.remove("admin-modal__text--error");

  syncCatalogQrState()
    .then(() => {
      adminCatalogQrStatus.textContent = getDefaultQrStatusText(currentQrCatalogTarget);
    })
    .catch(() => {
      if (adminCatalogQrImage) {
        adminCatalogQrImage.src = getCatalogQrUrl(currentQrCatalogTarget);
        adminCatalogQrImage.alt = getQrImageAltText(currentQrCatalogTarget, false);
      }

      showCatalogQrStatus("Unable to build branded QR. Plain QR shown instead.", "error");
    });
}

function closeQrModal() {
  adminQrModal?.setAttribute("hidden", "");
  syncAdminModalBodyState();
}

function openItemColumnsModal() {
  renderItemColumnConfiguration();
  adminItemColumnsModal?.removeAttribute("hidden");
  syncAdminModalBodyState();
}

function closeItemColumnsModal() {
  adminItemColumnsModal?.setAttribute("hidden", "");
  syncAdminModalBodyState();
}

async function saveCatalogQrCode() {
  try {
    const qrCardAsset = await getCatalogQrCardAsset(currentQrCatalogTarget);
    const objectUrl = window.URL.createObjectURL(qrCardAsset.blob);
    const downloadLink = document.createElement("a");

    downloadLink.href = objectUrl;
    downloadLink.download = getCatalogTargetConfig(currentQrCatalogTarget).downloadName;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.URL.revokeObjectURL(objectUrl);
    showCatalogQrStatus("Branded QR card downloaded.");
  } catch (error) {
    window.open(getCatalogQrUrl(currentQrCatalogTarget), "_blank", "noopener");
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

function formatSizesListValue(sizes, fallback = "-") {
  const labels = (Array.isArray(sizes) ? sizes : [])
    .map((size) => String(size ?? "").trim())
    .filter(Boolean);

  return labels.length ? labels.join(", ") : fallback;
}

function buildListCellMarkup(column, product) {
  if (column.key === "code") {
    return `
      <span class="admin-list-cell admin-list-cell--code" data-label="${escapeHtml(column.label)}">
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
    `;
  }

  if (column.key === "image") {
    const imageUrl = String(product.image ?? "").trim();
    const hasImage = Boolean(imageUrl);

    return `
      <span class="admin-list-cell admin-list-cell--image" data-label="${escapeHtml(column.label)}">
        <span class="admin-list-image${hasImage ? " has-image" : ""}">
          ${hasImage
            ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(product.code)}" loading="lazy" decoding="async">`
            : `<strong>${escapeHtml(formatTypeLabel(product.icon || "system"))}</strong><small>System icon</small>`}
        </span>
      </span>
    `;
  }

  if (column.key === "title") {
    return `
      <span class="admin-list-cell admin-list-cell--title" data-label="${escapeHtml(column.label)}">
        <strong lang="km">${escapeHtml(product.title)}</strong>
        <small lang="km">${escapeHtml(formatListValue(product.description))}</small>
      </span>
    `;
  }

  if (column.key === "brand") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatListValue(product.brand))}</span>`;
  }

  if (column.key === "visibility") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(product.showOnUserPage ? "Visible" : "Hidden")}</span>`;
  }

  if (column.key === "group") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatTypeLabel(product.filterType))}</span>`;
  }

  if (column.key === "status") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatTypeLabel(product.status))}</span>`;
  }

  if (column.key === "volume") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatListValue(product.volume))}</span>`;
  }

  if (column.key === "color") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatColorListValue(product.colors))}</span>`;
  }

  if (column.key === "depoPrice") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatListValue(product.depoPrice))}</span>`;
  }

  if (column.key === "userPrice") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatListValue(product.userPrice))}</span>`;
  }

  if (column.key === "description") {
    return `
      <span class="admin-list-cell admin-list-cell--description" data-label="${escapeHtml(column.label)}">
        <small lang="km">${escapeHtml(formatListValue(product.description))}</small>
      </span>
    `;
  }

  if (column.key === "sizes") {
    return `<span class="admin-list-cell" data-label="${escapeHtml(column.label)}">${escapeHtml(formatSizesListValue(product.sizes))}</span>`;
  }

  if (column.key === "actions") {
    return `
      <span class="admin-list-cell admin-list-cell--actions" data-label="${escapeHtml(column.label)}">
        <button
          class="pagination__button admin-button admin-button--danger"
          type="button"
          data-code-delete
          data-code="${escapeHtml(product.code)}"
        >
          Delete
        </button>
      </span>
    `;
  }

  return "";
}

function buildListItemMarkup(product, columns = getSelectedItemListColumnDefinitions()) {
  const isActive = product.code === selectedCode;

  return `
    <article class="admin-list-item${isActive ? " is-active" : ""}">
      ${columns.map((column) => buildListCellMarkup(column, product)).join("")}
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
  const selectedColumns = getSelectedItemListColumnDefinitions();
  const pageSize = getActivePageSize();
  const totalFilteredProducts = filteredProducts.length;
  const pageCount = getPageCount(filteredProducts);
  const rangeStart = totalFilteredProducts ? ((Number.isFinite(pageSize) ? (listPage - 1) * pageSize : 0) + 1) : 0;
  const rangeEnd = totalFilteredProducts ? (Number.isFinite(pageSize) ? Math.min(listPage * pageSize, totalFilteredProducts) : totalFilteredProducts) : 0;

  renderItemColumnConfiguration(selectedColumns);
  adminList.innerHTML = visibleProducts.map((product) => buildListItemMarkup(product, selectedColumns)).join("");
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
    adminTypeHeading.textContent = `Item Group (${totalTypes})`;
  }

  if (adminTypeRange) {
    adminTypeRange.textContent = totalTypes ? `Showing ${totalTypes} item groups` : "Showing 0 item groups";
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
      adminImageUploadMeta.textContent = "Using the saved item image. You can replace it with a local file at any time.";
    } else if (pendingLocalImageDataUrl) {
      adminImageUploadMeta.textContent = pendingLocalImageName
        ? `${pendingLocalImageName} selected from this device.`
        : "Using a saved local image from this browser.";
    } else {
      adminImageUploadMeta.textContent = AUTO_IMAGE_UPLOAD_META_TEXT;
    }
  }

  if (!adminImagePreview || !adminImagePreviewEmpty) {
    return;
  }

  if (!previewSource) {
    adminImagePreview.hidden = true;
    adminImagePreview.removeAttribute("src");
    adminImagePreviewEmpty.hidden = false;
    adminImagePreviewEmpty.textContent = AUTO_IMAGE_FALLBACK_TEXT;
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
  setSelectedItemColors(nextProduct.colors ?? []);
  resetAdminCustomColorInputs();
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
  }, 1500);
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
  }, 1500);
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
  }, 1500);
}

function showImportExportNotice(title, text, type = "success") {
  if (window.Swal?.fire) {
    const isSuccess = type === "success";

    window.Swal.fire({
      title,
      text,
      icon: type,
      showConfirmButton: !isSuccess,
      timer: isSuccess ? 800 : undefined,
      timerProgressBar: isSuccess,
    });
    return;
  }

  window.alert(text);
}

function hasExcelSupport() {
  return Boolean(
    window.XLSX?.utils
    && window.XLSX?.read
    && (window.XLSX?.writeFile || window.XLSX?.writeFileXLSX),
  );
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
    .map((color) => normalizeAdminColorEntry(color))
    .filter(Boolean)
    .map((color) => `${color.label}|${color.hex}`)
    .join("\n");
}

function getExportableImageValue(imageValue) {
  const value = String(imageValue ?? "").trim();

  if (!value) {
    return "";
  }

  if (isImageDataUrl(value)) {
    return "[Local browser image]";
  }

  return value;
}

function buildItemExportRow(product) {
  return {
    Code: product.code,
    "Item Brand": product.brand,
    "Item Group": product.filterType,
    Status: formatTypeLabel(product.status),
    "Visible On User Page": Boolean(product.showOnUserPage),
    Image: getExportableImageValue(product.image),
    Volume: product.volume,
    Colors: serializeColors(product.colors),
    "Depot Price": product.depoPrice,
    "User Price": product.userPrice,
    Name: product.title,
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
    "Name": type.name,
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

function saveWorkbookFile(workbook, fileName) {
  if (window.XLSX?.writeFileXLSX) {
    window.XLSX.writeFileXLSX(workbook, fileName);
    return;
  }

  if (window.XLSX?.writeFile) {
    window.XLSX.writeFile(workbook, fileName);
    return;
  }

  throw new Error("Excel tools did not load.");
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
    similarKey: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.similarKey, "").value,
    icon: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.icon, "").value,
    image: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.image, existingProduct.image).value,
    volume: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.volume, existingProduct.volume).value,
    series: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.series, existingProduct.series).value,
    colors: getSpreadsheetValue(row, ITEM_IMPORT_ALIASES.colors, serializeColors(existingProduct.colors)).value,
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

function formatImportIssueDetails(baseMessage, issues, previewCount = 3) {
  if (!issues.length) {
    return baseMessage;
  }

  const previewIssues = issues.slice(0, previewCount);
  const remainingCount = Math.max(issues.length - previewIssues.length, 0);
  const previewText = previewIssues.map((issue) => `- ${issue}`).join("\n");
  const remainingText = remainingCount
    ? `\nPlus ${remainingCount} more ${pluralize(remainingCount, "issue")}.`
    : "";

  return `${baseMessage}\n\n${previewText}${remainingText}`;
}

function getImportedItemReferenceIssues(product, availableBrandsByKey, availableTypesByKey) {
  const rowIssues = [];
  const brandName = String(product?.brand ?? "").trim();
  const typeName = String(product?.filterType ?? "").trim().toLowerCase();

  if (brandName && !availableBrandsByKey.has(brandName.toLowerCase())) {
    rowIssues.push(`Item Brand "${brandName}" does not exist in Item Brands.`);
  }

  if (typeName && !availableTypesByKey.has(typeName)) {
    rowIssues.push(`Item Group "${formatTypeLabel(typeName)}" does not exist in Item Groups.`);
  }

  return rowIssues;
}

function applyImportedItemReferenceNames(product, availableBrandsByKey, availableTypesByKey) {
  const brandName = availableBrandsByKey.get(String(product?.brand ?? "").trim().toLowerCase()) ?? product.brand;
  const typeName = availableTypesByKey.get(String(product?.filterType ?? "").trim().toLowerCase()) ?? product.filterType;

  return {
    ...product,
    brand: brandName,
    filterType: typeName,
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

  try {
    const workbook = buildWorkbook(
      filteredProducts.map((product) => buildItemExportRow(product)),
      ITEM_EXPORT_COLUMNS,
      EXCEL_ITEMS_SHEET_NAME,
    );

    saveWorkbookFile(workbook, `agt-items-${formatExcelDateToken()}.xlsx`);
    showImportExportNotice(
      "Items exported",
      `Exported ${filteredProducts.length} ${pluralize(filteredProducts.length, "item")} to Excel.`,
      "success",
    );
  } catch (error) {
    showImportExportNotice(
      "Items export failed",
      error instanceof Error ? error.message : "Unable to export items to Excel.",
      "error",
    );
  }
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

  try {
    const workbook = buildWorkbook(
      filteredBrands.map((brand) => buildBrandExportRow(brand)),
      BRAND_EXPORT_COLUMNS,
      EXCEL_BRANDS_SHEET_NAME,
    );

    saveWorkbookFile(workbook, `agt-brands-${formatExcelDateToken()}.xlsx`);
    showImportExportNotice(
      "Brands exported",
      `Exported ${filteredBrands.length} ${pluralize(filteredBrands.length, "brand")} to Excel.`,
      "success",
    );
  } catch (error) {
    showImportExportNotice(
      "Brands export failed",
      error instanceof Error ? error.message : "Unable to export brands to Excel.",
      "error",
    );
  }
}

function exportTypesToExcel() {
  if (!ensureExcelSupport()) {
    return;
  }

  const filteredTypes = getFilteredTypes();

  if (!filteredTypes.length) {
    showImportExportNotice(
      "No item groups to export",
      "There are no item groups matching the current filters.",
      "warning",
    );
    return;
  }

  try {
    const workbook = buildWorkbook(
      filteredTypes.map((type) => buildTypeExportRow(type)),
      TYPE_EXPORT_COLUMNS,
      EXCEL_TYPES_SHEET_NAME,
    );

    saveWorkbookFile(workbook, `agt-item-types-${formatExcelDateToken()}.xlsx`);
    showImportExportNotice(
      "Item groups exported",
      `Exported ${filteredTypes.length} ${pluralize(filteredTypes.length, "item group")} to Excel.`,
      "success",
    );
  } catch (error) {
    showImportExportNotice(
      "Item groups export failed",
      error instanceof Error ? error.message : "Unable to export item groups to Excel.",
      "error",
    );
  }
}

async function importItemsFromExcel(file) {
  if (!ensureExcelSupport()) {
    return;
  }

  const rows = await readWorkbookRows(file);
  const availableBrandsByKey = new Map(getSortedBrands().map((brand) => [brand.name.toLowerCase(), brand.name]));
  const availableTypesByKey = new Map(getSortedTypes().map((type) => [type.name.toLowerCase(), type.name]));
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
    const existingProductMatch = codeValue ? nextProductsByCode.get(codeValue.toLowerCase()) ?? null : null;
    const existingProduct = existingProductMatch ?? store.getEmptyProduct();
    const resolvedFilterTypeValue = String(
      getSpreadsheetValue(
        normalizedRow,
        ITEM_IMPORT_ALIASES.filterType,
        existingProductMatch ? existingProduct.filterType : "",
      ).value ?? "",
    ).trim();
    const normalizedProduct = store.normalizeProduct(buildImportedProduct(normalizedRow, existingProduct));

    if (!normalizedProduct.code || !normalizedProduct.brand || !normalizedProduct.title || !resolvedFilterTypeValue) {
      skippedCount += 1;

      if (issues.length < 5) {
        issues.push(`Row ${index + 2}: code, item brand, item group, and name are required.`);
      }

      return;
    }

    const referenceIssues = getImportedItemReferenceIssues(normalizedProduct, availableBrandsByKey, availableTypesByKey);

    if (referenceIssues.length) {
      skippedCount += 1;

      if (issues.length < 5) {
        issues.push(`Row ${index + 2}: ${referenceIssues.join(" ")}`);
      }

      return;
    }

    const normalizedImportProduct = applyImportedItemReferenceNames(
      normalizedProduct,
      availableBrandsByKey,
      availableTypesByKey,
    );

    nextProductsByCode.set(normalizedImportProduct.code.toLowerCase(), normalizedImportProduct);
    importedCount += 1;
  });

  if (!importedCount) {
    throw new Error(formatImportIssueDetails("The workbook did not contain any valid item rows.", issues));
  }

  store.saveProducts(sortProducts([...nextProductsByCode.values()]));
  refreshCurrentSection();

  const summary = skippedCount
    ? `Imported ${importedCount} ${pluralize(importedCount, "item")} and skipped ${skippedCount} invalid ${pluralize(skippedCount, "row")}.`
    : `Imported ${importedCount} ${pluralize(importedCount, "item")} from Excel.`;

  showImportExportNotice(
    "Items imported",
    skippedCount ? formatImportIssueDetails(summary, issues) : summary,
    skippedCount ? "warning" : "success",
  );
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
        issues.push(`Row ${index + 2}: name is required.`);
      }

      return;
    }

    nextTypesByName.set(normalizedType.name.toLowerCase(), normalizedType);
    importedCount += 1;
  });

  if (!importedCount) {
    const detail = issues[0] ?? "The workbook did not contain any valid item group rows.";
    throw new Error(detail);
  }

  store.saveTypes(sortTypes([...nextTypesByName.values()]));
  refreshCurrentSection();

  const summary = skippedCount
    ? `Imported ${importedCount} ${pluralize(importedCount, "item group")} and skipped ${skippedCount} invalid ${pluralize(skippedCount, "row")}.`
    : `Imported ${importedCount} ${pluralize(importedCount, "item group")} from Excel.`;

  showImportExportNotice("Item groups imported", summary, skippedCount ? "warning" : "success");
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
  syncRecoveryEmailSetting();
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

  if (currentSection === "contact") {
    refreshContactsView();
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
      serializeColors(selectedProduct.colors),
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

  if (isNewItem) {
    const requiredFields = [
      { value: rawProduct.code, label: "item code" },
      { value: rawProduct.brand, label: "item brand" },
      { value: rawProduct.filterType, label: "item group" },
      { value: rawProduct.title, label: "name" },
      { value: rawProduct.description, label: "description" },
    ];
    const missingFields = requiredFields
      .filter((field) => !String(field.value ?? "").trim())
      .map((field) => field.label);

    if (missingFields.length > 0) {
      showStatus(`Required on create: ${missingFields.join(", ")}.`, "error");
      return;
    }
  }

  if (!normalizedProduct.code || !normalizedProduct.brand || !normalizedProduct.title) {
    showStatus("Code, brand, and name are required.", "error");
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
      timer: 800,
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
      timer: 800,
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
    showTypeStatus("name is required.", "error");
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
      title: "Item group saved",
      text: `Item group "${formatTypeLabel(normalizedType.name)}" has been saved to your catalog.`,
      icon: "success",
      showConfirmButton: false,
      timer: 800,
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
    showTypeStatus("Select an item group first.", "error");
    return;
  }

  const linkedItemCount = getTypeLinkedItemCount(selectedType.name);

  if (linkedItemCount > 0) {
    showTypeStatus("This item group is still used by items and cannot be deleted.", "error");
    return;
  }

  if (window.Swal?.fire) {
    const result = await window.Swal.fire({
      title: "Delete item group?",
      text: `Delete item group "${formatTypeLabel(selectedType.name)}" from the catalog?`,
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
adminImageClearButton?.addEventListener("click", () => {
  clearPendingLocalImage();
  setFormValue("image", "");
  syncItemImageFieldState();
  showStatus("Image cleared.");
});
adminImagePreview?.addEventListener("load", () => {
  if (adminImagePreviewEmpty) {
    adminImagePreviewEmpty.hidden = true;
    adminImagePreviewEmpty.textContent = AUTO_IMAGE_FALLBACK_TEXT;
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
adminOpenItemColumnsButton?.addEventListener("click", openItemColumnsModal);
adminAvailableColumns?.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-admin-item-column-add]");

  if (!addButton) {
    return;
  }

  addItemListColumn(addButton.dataset.adminItemColumnAdd);
});
adminSelectedColumns?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-admin-item-column-remove]");

  if (removeButton) {
    removeItemListColumn(removeButton.dataset.adminItemColumnRemove);
    return;
  }

  const selectButton = event.target.closest("[data-admin-item-column-select]");

  if (!selectButton) {
    return;
  }

  setActiveItemListColumn(selectButton.dataset.adminItemColumnSelect);
});
adminResetItemColumnsButton?.addEventListener("click", resetItemListColumns);
adminMoveItemColumnUpButton?.addEventListener("click", () => {
  if (!activeItemListColumnKey) {
    return;
  }

  moveItemListColumn(activeItemListColumnKey, "up");
});
adminMoveItemColumnDownButton?.addEventListener("click", () => {
  if (!activeItemListColumnKey) {
    return;
  }

  moveItemListColumn(activeItemListColumnKey, "down");
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
      "Item groups import failed",
      error instanceof Error ? error.message : "Unable to import item groups from this workbook.",
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

    if (isMobileSidebarLayout()) {
      setSidebarCollapsed(true);
    }
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
for (const button of adminSettingsPanelButtons) {
  button.addEventListener("click", () => {
    setAdminSettingsPanel(button.dataset.adminSettingsPanelOption);
  });
}
adminSettingsTimeoutForm?.addEventListener("submit", saveSessionTimeoutSetting);
adminSettingsPasswordForm?.addEventListener("submit", saveAdminPasswordSetting);
adminSettingsRecoveryEmailForm?.addEventListener("submit", saveRecoveryEmailSetting);
adminContactResetButton?.addEventListener("click", resetContactForm);
adminContactForm?.addEventListener("submit", saveContactForm);
adminLogoutButton?.addEventListener("click", handleLogout);
adminSettingsLogoutButton?.addEventListener("click", handleLogout);
window.addEventListener("agt-admin-session-refresh", () => {
  syncAuthSession();
});
for (const button of [adminSidebarToggle, adminSidebarRevealToggle]) {
  button?.addEventListener("click", () => {
    setSidebarCollapsed(!sidebarCollapsed);
  });
}
adminSidebarBackdrop?.addEventListener("click", () => {
  setSidebarCollapsed(true);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMobileSidebarLayout() && !sidebarCollapsed) {
    setSidebarCollapsed(true);
  }
});
if (typeof mobileSidebarQuery.addEventListener === "function") {
  mobileSidebarQuery.addEventListener("change", (event) => {
    setSidebarCollapsed(event.matches);
  });
} else if (typeof mobileSidebarQuery.addListener === "function") {
  mobileSidebarQuery.addListener((event) => {
    setSidebarCollapsed(event.matches);
  });
}
adminCatalogMenuButton?.addEventListener("click", () => {
  toggleQuickAccessMenu("catalog");
});
adminQrMenuButton?.addEventListener("click", () => {
  toggleQuickAccessMenu("qr");
});
for (const item of adminCatalogMenuItems) {
  item.addEventListener("click", () => {
    grantDepoAccessIfNeeded(item.dataset.adminCatalogTarget);
    closeQuickAccessMenus();
  });
}
for (const item of adminQrMenuItems) {
  item.addEventListener("click", () => {
    closeQuickAccessMenus();
    openQrModal(item.dataset.adminQrTarget);
  });
}
adminAddColorPresetButton?.addEventListener("click", addPresetItemColor);
adminAddCustomColorButton?.addEventListener("click", addCustomItemColor);
adminCustomColorHex?.addEventListener("input", () => {
  syncAdminCustomColorInputs({ source: "picker" });
});
adminCustomColorCode?.addEventListener("input", () => {
  syncAdminCustomColorInputs({ source: "code" });
});
adminCustomColorCode?.addEventListener("blur", () => {
  syncAdminCustomColorInputs({ source: "code", normalizeCodeInput: true });
});
adminCustomColorName?.addEventListener("input", () => {
  if (!adminCustomColorName) {
    return;
  }

  adminCustomColorName.dataset.autoFilled = String(adminCustomColorName.value ?? "").trim() ? "false" : "true";
});
adminCustomColorName?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCustomItemColor();
  }
});
adminCustomColorCode?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCustomItemColor();
  }
});
adminSelectedColors?.addEventListener("click", (event) => {
  const removeButton = event.target instanceof Element ? event.target.closest("[data-admin-color-remove]") : null;

  if (!removeButton) {
    return;
  }

  removeSelectedItemColor(Number.parseInt(removeButton.dataset.adminColorRemove, 10));
});
adminCloseQrButton?.addEventListener("click", closeQrModal);
adminCloseItemColumnsButton?.addEventListener("click", closeItemColumnsModal);
adminCopyQrLinkButton?.addEventListener("click", copyCatalogLink);
adminSaveQrButton?.addEventListener("click", saveCatalogQrCode);
document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  if (adminCatalogMenuRoot?.contains(target) || adminQrMenuRoot?.contains(target)) {
    return;
  }

  closeQuickAccessMenus();
});
adminQrModal?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.hasAttribute("data-admin-close")) {
    closeQrModal();
  }
});
adminItemColumnsModal?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.hasAttribute("data-admin-close")) {
    closeItemColumnsModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && openQuickAccessMenuName) {
    closeQuickAccessMenus();
  }

  if (event.key === "Escape" && adminQrModal && !adminQrModal.hasAttribute("hidden")) {
    closeQrModal();
  }

  if (event.key === "Escape" && adminItemColumnsModal && !adminItemColumnsModal.hasAttribute("hidden")) {
    closeItemColumnsModal();
  }
});

applyAdminLanguage();
syncItemImageFieldState();
resetAdminCustomColorInputs();
refreshCurrentSection();
syncSidebarLayout();
