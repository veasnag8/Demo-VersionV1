const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const brandFilter = document.querySelector("#brandFilter");
const catalogGrid = document.querySelector(".catalog-grid");
const totalRecords = document.querySelector("#totalRecords");
const matchingRecords = document.querySelector("#matchingRecords");
const totalRecordsLabel = document.querySelector("#totalRecordsLabel");
const matchingRecordsLabel = document.querySelector("#matchingRecordsLabel");
const pageStatus = document.querySelector("#pageStatus");
const paginationStatus = document.querySelector("#paginationStatus");
const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const emptyStateMessage = document.querySelector("#emptyStateMessage");
const catalogEyebrow = document.querySelector("#catalogEyebrow");
const catalogTitle = document.querySelector("#catalogTitle");
const heroSubline = document.querySelector("#heroSubline");
const languageLabel = document.querySelector("#languageLabel");
const languageMenuRoot = document.querySelector("#languageMenuRoot");
const languageMenuButton = document.querySelector("#languageMenuButton");
const languageMenu = document.querySelector("#languageMenu");
const languageEnglishButton = document.querySelector("#languageEnglish");
const languageKhmerButton = document.querySelector("#languageKhmer");
const searchLabel = document.querySelector("#searchLabel");
const typeFilterLabel = document.querySelector("#typeFilterLabel");
const brandFilterLabel = document.querySelector("#brandFilterLabel");
const pagination = document.querySelector(".pagination");
const heroContact = document.querySelector(".hero__contact");
const siteFooterText = document.querySelector("#siteFooterText");
const siteFooterPage = document.querySelector("#siteFooterPage");
const languageButtons = [...document.querySelectorAll("[data-language-option]")];
const catalogView = document.body.dataset.catalogView === "depo" ? "depo" : "user";

const STORAGE_KEYS = {
  language: "agt-language",
};

const RECORDS_PER_PAGE = 20;
const products = (window.catalogStore?.getProducts() ?? (Array.isArray(window.catalogProducts) ? window.catalogProducts : []))
  .filter((product) => product.showOnUserPage !== false);

const translations = {
  en: {
    pageTitle: "Product Price List | Angkor Garden Tools",
    depoPageTitle: "Depo Price List | Angkor Garden Tools",
    catalogEyebrow: "Angkor Garden Tools",
    catalogTitle: "Product Price List",
    depoCatalogTitle: "Depo Price List",
    heroSubline: "Product price list with shared catalog data and quick search",
    footerText: "Catalog layout . Shared product data for quick browsing",
    footerPage: "Catalog overview page",
    languageLabel: "Language",
    languageEnglish: "English",
    languageKhmer: "Khmer",
    searchLabel: "Search catalog",
    searchPlaceholder: "Search model, item brand, capacity, or series",
    typeLabel: "Item Group",
    brandLabel: "Item Brand",
    typeAll: "All Items",
    typeFeatured: "Featured",
    typeSprayer: "Sprayers",
    typeBattery: "Battery Units",
    allBrands: "All Item Brands",
    totalRecordsLabel: "Total records",
    matchingLabel: "Matching",
    previous: "Previous",
    next: "Next",
    emptyState: "No catalog items match that search.",
    paginationLabel: "Catalog pagination",
    code: "Item Code",
    series: "Series",
    depot: "Depo",
    user: "User",
    price: "Price",
    stockOut: "Out of stock",
    openDetails: "Open product details",
    pageOf(page, total) {
      return `Page ${page} of ${total}`;
    },
    showing(start, end, total) {
      return `Showing ${start}-${end} of ${total}`;
    },
  },
  km: {
    depoPageTitle: "តារាងតម្លៃដេប៉ូ | Angkor Garden Tools",
    depoCatalogTitle: "តារាងតម្លៃដេប៉ូ",
    price: "តម្លៃ",
    pageTitle: "តារាងតម្លៃផលិតផល | Angkor Garden Tools",
    catalogEyebrow: "អង្គរហ្គាដិនធូក",
    catalogTitle: "តារាងតម្លៃផលិតផល",
    heroSubline: "តារាងតម្លៃផលិតផល មានទិន្នន័យរួម និងស្វែងរកបានរហ័ស",
    footerText: "ទំព័រកាតាឡុក . ទិន្នន័យផលិតផលរួម សម្រាប់មើលបានរហ័ស",
    footerPage: "ទំព័រកាតាឡុកផលិតផល",
    languageLabel: "ភាសា",
    languageEnglish: "English",
    languageKhmer: "ខ្មែរ",
    searchLabel: "ស្វែងរកផលិតផល",
    searchPlaceholder: "ស្វែងរកម៉ូដែល ម៉ាកទំនិញ ចំណុះ ឬស៊េរី",
    typeLabel: "ក្រុមទំនិញ",
    brandLabel: "ម៉ាកទំនិញ",
    typeAll: "ទាំងអស់",
    typeFeatured: "ពេញនិយម",
    typeSprayer: "ម៉ាស៊ីនបាញ់",
    typeBattery: "បាតឺរី",
    allBrands: "ម៉ាកទំនិញទាំងអស់",
    totalRecordsLabel: "ទំនិញសរុប",
    matchingLabel: "ត្រូវនឹង",
    previous: "មុន",
    next: "បន្ទាប់",
    emptyState: "មិនមានផលិតផលត្រូវនឹងការស្វែងរកនេះទេ។",
    paginationLabel: "ការបែងចែកទំព័រផលិតផល",
    code: "លេខកូដ",
    series: "ស៊េរី",
    depot: "ដេប៉ូ",
    user: "អ្នកប្រើ",
    stockOut: "អស់ស្តុក",
    openDetails: "បើកព័ត៌មានលម្អិតផលិតផល",
    pageOf(page, total) {
      return `ទំព័រ ${page} នៃ ${total}`;
    },
    showing(start, end, total) {
      return `បង្ហាញ ${start}-${end} នៃ ${total}`;
    },
  },
};

let currentLanguage = readStoredPreference(STORAGE_KEYS.language, ["en", "km"], "km");
let currentPage = 1;

document.body.removeAttribute("data-theme");

function getDictionary() {
  return translations[currentLanguage] ?? translations.km;
}

function isDepoCatalogView() {
  return catalogView === "depo";
}

function getCatalogPageTitle(dictionary) {
  return isDepoCatalogView() ? dictionary.depoPageTitle ?? dictionary.pageTitle : dictionary.pageTitle;
}

function getCatalogHeading(dictionary) {
  return isDepoCatalogView() ? dictionary.depoCatalogTitle ?? dictionary.catalogTitle : dictionary.catalogTitle;
}

function getCatalogUserPriceLabel(dictionary) {
  return isDepoCatalogView() ? dictionary.user : dictionary.price ?? dictionary.user;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPublicContactSettings() {
  return window.catalogStore?.getBannerContactSettings?.()
    ?? window.catalogStore?.getContactSettings?.()
    ?? { address: "", contacts: [] };
}

function getContactVisualType(entry) {
  return window.catalogStore?.getContactDisplayType?.(entry) ?? entry?.type;
}

function getContactIconId(entry) {
  const type = getContactVisualType(entry);

  if (type === "email") {
    return "icon-mail";
  }

  if (type === "telegram") {
    return "icon-telegram";
  }

  if (type === "link") {
    return "icon-link";
  }

  return "icon-phone";
}

function buildPublicContactHref(entry) {
  return window.catalogStore?.buildContactHref?.(entry) ?? "";
}

function buildContactLinkAttributes(href) {
  if (/^https?:/i.test(href)) {
    return ' target="_blank" rel="noopener noreferrer"';
  }

  return "";
}

function renderHeroContact() {
  if (!heroContact) {
    return;
  }

  const contactSettings = getPublicContactSettings();
  const addressMarkup = contactSettings.address
    ? `
      <p class="hero__address">
        <svg aria-hidden="true"><use href="#icon-location"></use></svg>
        <span>${escapeHtml(contactSettings.address)}</span>
      </p>
    `
    : "";
  const contactItemsMarkup = (contactSettings.contacts ?? [])
    .map((entry) => {
      const href = buildPublicContactHref(entry);
      const label = String(entry.label ?? entry.value ?? "").trim();

      if (!href || !label) {
      return "";
      }

      return `
        <a class="hero__contact-item" href="${escapeHtml(href)}"${buildContactLinkAttributes(href)}>
          <svg aria-hidden="true"><use href="#${escapeHtml(getContactIconId(entry))}"></use></svg>
          <span>${escapeHtml(label)}</span>
        </a>
      `;
    })
    .join("");

  heroContact.innerHTML = `${addressMarkup}${contactItemsMarkup}`;
  heroContact.hidden = !addressMarkup && !contactItemsMarkup;
}

function readStoredPreference(key, allowedValues, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue && allowedValues.includes(storedValue)) {
      return storedValue;
    }
  } catch (error) {
    return fallbackValue;
  }

  return fallbackValue;
}

function savePreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    return;
  }
}

function buildBrandOptions() {
  const selectedValue = brandFilter.value;
  const uniqueBrands = [...new Set(products.map((product) => product.brand).filter(Boolean))].sort((left, right) =>
    left.localeCompare(right),
  );

  brandFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  brandFilter.append(allOption);

  for (const brand of uniqueBrands) {
    const option = document.createElement("option");
    option.value = brand.toLowerCase();
    option.textContent = brand;
    brandFilter.append(option);
  }

  if ([...brandFilter.options].some((option) => option.value === selectedValue)) {
    brandFilter.value = selectedValue;
  } else {
    brandFilter.value = "all";
  }
}

function getTypeRecords() {
  const visibleTypeNames = [...new Set(products.map((product) => product.filterType).filter(Boolean))].sort((left, right) =>
    left.localeCompare(right),
  );
  const storedTypes = Array.isArray(window.catalogStore?.getTypes?.())
    ? window.catalogStore.getTypes().filter((type) => type?.name && visibleTypeNames.includes(type.name))
    : [];
  const storedNames = new Set(storedTypes.map((type) => type.name));
  const derivedTypes = visibleTypeNames
    .filter((name) => !storedNames.has(name))
    .map((name) => ({ name }));

  return [...storedTypes, ...derivedTypes];
}

function humanizeTypeName(value) {
  return String(value ?? "")
    .trim()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getTypeOptionText(typeName, dictionary) {
  const normalizedType = String(typeName ?? "").trim().toLowerCase();

  if (!normalizedType) {
    return "";
  }

  if (normalizedType === "sprayer") {
    return dictionary.typeSprayer;
  }

  if (normalizedType === "battery") {
    return dictionary.typeBattery;
  }

  return humanizeTypeName(normalizedType);
}

function buildTypeOptions() {
  const dictionary = getDictionary();
  const selectedValue = typeFilter.value;
  const typeRecords = getTypeRecords();

  typeFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.id = "typeOptionAll";
  allOption.textContent = dictionary.typeAll;
  typeFilter.append(allOption);

  const featuredOption = document.createElement("option");
  featuredOption.value = "featured";
  featuredOption.id = "typeOptionFeatured";
  featuredOption.textContent = dictionary.typeFeatured;
  typeFilter.append(featuredOption);

  for (const type of typeRecords) {
    const option = document.createElement("option");
    option.value = type.name;
    option.textContent = getTypeOptionText(type.name, dictionary);
    typeFilter.append(option);
  }

  if ([...typeFilter.options].some((option) => option.value === selectedValue)) {
    typeFilter.value = selectedValue;
  } else {
    typeFilter.value = "all";
  }
}

function matchesType(product) {
  if (typeFilter.value === "all") {
    return true;
  }

  if (typeFilter.value === "featured") {
    return Boolean(product.featured);
  }

  return product.filterType === typeFilter.value;
}

function matchesBrand(product) {
  if (brandFilter.value === "all") {
    return true;
  }

  return product.brand.toLowerCase() === brandFilter.value;
}

function matchesSearch(product) {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    return true;
  }

  return product.searchText.includes(query);
}

function getFilteredProducts() {
  return products.filter((product) => matchesType(product) && matchesBrand(product) && matchesSearch(product));
}

function buildCardColorsMarkup(product) {
  const colors = product.colors ?? [];

  if (colors.length === 0) {
    return "<span></span>";
  }

  const dots = colors
    .map(
      (color) =>
        `<span class="catalog-card__color-dot" style="background-color: ${escapeHtml(color.hex)};" title="${escapeHtml(color.label)}"></span>`,
    )
    .join("");

  return `<div class="catalog-card__colors">${dots}</div>`;
}

function buildCatalogStockMarkup(product, dictionary) {
  if (Number(product.stock ?? 0) > 0) {
    return "";
  }

  return `<span class="catalog-card__stock catalog-card__stock--out">${escapeHtml(dictionary.stockOut)}</span>`;
}

function buildCatalogArtworkMarkup(product) {
  const imageUrl = String(product.image ?? "").trim();

  return `
    ${imageUrl
      ? `<img class="catalog-card__art-image" data-artwork-image src="${escapeHtml(imageUrl)}" alt="" loading="lazy" decoding="async" hidden>`
      : ""}
    <svg class="catalog-card__art-icon" viewBox="0 0 220 220" aria-hidden="true"><use href="#icon-${escapeHtml(product.icon)}"></use></svg>
  `;
}

function buildCatalogPriceMarkup(product, dictionary) {
  const priceRows = [];

  if (isDepoCatalogView()) {
    priceRows.push(`
          <div class="catalog-card__price-row">
            <small>${escapeHtml(dictionary.depot)}</small>
            <strong>${escapeHtml(product.depoPrice)}</strong>
          </div>`);
  }

  priceRows.push(`
          <div class="catalog-card__price-row">
            <small>${escapeHtml(getCatalogUserPriceLabel(dictionary))}</small>
            <strong>${escapeHtml(product.userPrice)}</strong>
          </div>`);

  return `<div class="catalog-card__price-stack">${priceRows.join("")}
        </div>`;
}

function buildDetailUrl(code) {
  return `detail.html?code=${encodeURIComponent(code)}&view=${encodeURIComponent(catalogView)}`;
}

function hydrateArtworkImages(root = document) {
  const artworkImages = root.querySelectorAll("[data-artwork-image]");

  for (const image of artworkImages) {
    if (image.dataset.artworkBound === "true") {
      continue;
    }

    image.dataset.artworkBound = "true";

    const frame = image.closest(".catalog-card__art, .detail-art__frame");

    if (!frame) {
      continue;
    }

    const showImage = () => {
      frame.classList.add("is-image-ready");
      image.hidden = false;
    };

    const hideImage = () => {
      frame.classList.remove("is-image-ready");
      image.hidden = true;
    };

    if (image.complete) {
      if (image.naturalWidth > 0) {
        showImage();
      } else {
        hideImage();
      }

      continue;
    }

    image.addEventListener("load", showImage, { once: true });
    image.addEventListener("error", hideImage, { once: true });
  }
}

function relocateCatalogStockBadges(root = document) {
  const cards = root.querySelectorAll(".catalog-card");

  for (const card of cards) {
    const stockBadge = card.querySelector(".catalog-card__stock");
    const artFrame = card.querySelector(".catalog-card__art");

    if (!stockBadge || !artFrame || stockBadge.parentElement === artFrame) {
      continue;
    }

    artFrame.append(stockBadge);
  }
}

function buildCatalogCardMarkup(product, dictionary) {
  const detailLabel = `${product.code} - ${dictionary.openDetails}`;

  return `
    <a
      class="catalog-card catalog-card--link"
      href="${buildDetailUrl(product.code)}"
      aria-label="${escapeHtml(detailLabel)}"
    >
      <div class="catalog-card__head">
        <span class="catalog-card__label"${currentLanguage === "km" ? ' lang="km"' : ""}>${escapeHtml(dictionary.code)}</span>
        <span class="catalog-card__code">${escapeHtml(product.code)}</span>
      </div>
      <div class="catalog-card__band">
        <span class="catalog-card__brand">${escapeHtml(product.brand)}</span>
      </div>
      <div class="catalog-card__body">
        <h3 lang="km">${escapeHtml(product.title)}</h3>
        <p lang="km">${escapeHtml(product.description)}</p>
      </div>
      <div class="catalog-card__art" style="--art-bg:${escapeHtml(product.artBg)}; --art-color:${escapeHtml(product.artColor)};">
        ${buildCatalogArtworkMarkup(product)}
        <span class="catalog-card__volume">${escapeHtml(product.volume)}</span>
        ${buildCatalogStockMarkup(product, dictionary)}
      </div>
      <div class="catalog-card__meta">
        ${buildCardColorsMarkup(product)}
        ${buildCatalogPriceMarkup(product, dictionary)}
      </div>
    </a>
  `;
}

function renderCatalog() {
  const dictionary = getDictionary();
  const filteredProducts = getFilteredProducts();
  const totalMatches = filteredProducts.length;
  const totalPages = totalMatches === 0 ? 0 : Math.ceil(totalMatches / RECORDS_PER_PAGE);

  if (totalPages === 0) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = totalPages === 0 ? 0 : (currentPage - 1) * RECORDS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + RECORDS_PER_PAGE);
  const startRecord = totalMatches === 0 ? 0 : startIndex + 1;
  const endRecord = totalMatches === 0 ? 0 : startIndex + visibleProducts.length;

  catalogGrid.innerHTML = visibleProducts.map((product) => buildCatalogCardMarkup(product, dictionary)).join("");
  relocateCatalogStockBadges(catalogGrid);
  hydrateArtworkImages(catalogGrid);
  emptyStateMessage.hidden = totalMatches !== 0;
  totalRecords.textContent = String(products.length);
  matchingRecords.textContent = String(totalMatches);
  pageStatus.textContent = totalPages === 0 ? dictionary.pageOf(0, 0) : dictionary.pageOf(currentPage, totalPages);
  paginationStatus.textContent = dictionary.showing(startRecord, endRecord, totalMatches);
  prevPageButton.disabled = totalPages <= 1 || currentPage === 1;
  nextPageButton.disabled = totalPages <= 1 || currentPage === totalPages;
}

function syncLanguageButtons() {
  for (const button of languageButtons) {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-checked", String(isActive));
  }
}

function setLanguageMenuOpen(isOpen) {
  if (!languageMenuRoot || !languageMenuButton || !languageMenu) {
    return;
  }

  languageMenu.hidden = !isOpen;
  languageMenuRoot.classList.toggle("is-open", isOpen);
  languageMenuButton.setAttribute("aria-expanded", String(isOpen));
}

function applyLanguage() {
  const dictionary = getDictionary();

  document.documentElement.lang = currentLanguage;
  document.title = getCatalogPageTitle(dictionary);
  catalogEyebrow.textContent = dictionary.catalogEyebrow;
  catalogTitle.textContent = getCatalogHeading(dictionary);
  if (heroSubline) {
    heroSubline.textContent = dictionary.heroSubline;
  }
  languageLabel.textContent = dictionary.languageLabel;
  languageMenuButton?.setAttribute("aria-label", dictionary.languageLabel);
  languageMenuButton?.setAttribute("title", dictionary.languageLabel);
  languageEnglishButton.setAttribute("aria-label", dictionary.languageEnglish);
  languageEnglishButton.setAttribute("title", dictionary.languageEnglish);
  languageKhmerButton.setAttribute("aria-label", dictionary.languageKhmer);
  languageKhmerButton.setAttribute("title", dictionary.languageKhmer);
  searchLabel.textContent = dictionary.searchLabel;
  searchInput.placeholder = dictionary.searchPlaceholder;
  typeFilterLabel.textContent = dictionary.typeLabel;
  brandFilterLabel.textContent = dictionary.brandLabel;
  totalRecordsLabel.textContent = dictionary.totalRecordsLabel;
  matchingRecordsLabel.textContent = dictionary.matchingLabel;
  buildTypeOptions();
  brandFilter.options[0].textContent = dictionary.allBrands;
  emptyStateMessage.textContent = dictionary.emptyState;
  prevPageButton.setAttribute("aria-label", dictionary.previous);
  prevPageButton.setAttribute("title", dictionary.previous);
  nextPageButton.setAttribute("aria-label", dictionary.next);
  nextPageButton.setAttribute("title", dictionary.next);
  pagination.setAttribute("aria-label", dictionary.paginationLabel);
  if (siteFooterText) {
    siteFooterText.textContent = dictionary.footerText;
  }
  if (siteFooterPage) {
    siteFooterPage.textContent = dictionary.footerPage;
  }
  syncLanguageButtons();
  renderCatalog();
}

function setLanguage(language) {
  if (!translations[language] || currentLanguage === language) {
    return;
  }

  currentLanguage = language;
  savePreference(STORAGE_KEYS.language, language);
  applyLanguage();
}

function resetAndRender() {
  currentPage = 1;
  renderCatalog();
}

for (const button of languageButtons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
    setLanguageMenuOpen(false);
  });
}

languageMenuButton?.addEventListener("click", () => {
  setLanguageMenuOpen(languageMenu?.hidden ?? true);
});

document.addEventListener("click", (event) => {
  if (!languageMenuRoot?.contains(event.target)) {
    setLanguageMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !languageMenuRoot?.classList.contains("is-open")) {
    return;
  }

  setLanguageMenuOpen(false);
  languageMenuButton?.focus();
});

searchInput.addEventListener("input", resetAndRender);
typeFilter.addEventListener("change", resetAndRender);
brandFilter.addEventListener("change", resetAndRender);

prevPageButton.addEventListener("click", () => {
  if (currentPage <= 1) {
    return;
  }

  currentPage -= 1;
  renderCatalog();
});

nextPageButton.addEventListener("click", () => {
  const totalPages = Math.ceil(getFilteredProducts().length / RECORDS_PER_PAGE);

  if (currentPage >= totalPages) {
    return;
  }

  currentPage += 1;
  renderCatalog();
});

buildBrandOptions();
buildTypeOptions();
renderHeroContact();
applyLanguage();
