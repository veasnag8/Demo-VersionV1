const heroLogoLink = document.querySelector("#heroLogoLink");
const languageLabel = document.querySelector("#languageLabel");
const themeLabel = document.querySelector("#themeLabel");
const languageEnglishButton = document.querySelector("#languageEnglish");
const languageKhmerButton = document.querySelector("#languageKhmer");
const themeLightButton = document.querySelector("#themeLight");
const themeDarkButton = document.querySelector("#themeDark");
const detailHeroSubline = document.querySelector("#detailHeroSubline");
const detailEyebrow = document.querySelector("#detailEyebrow");
const detailHeading = document.querySelector("#detailHeading");
const detailBack = document.querySelector("#detailBack");
const detailMissing = document.querySelector("#detailMissing");
const detailContent = document.querySelector("#detailContent");
const detailCodeLabel = document.querySelector("#detailCodeLabel");
const detailCode = document.querySelector("#detailCode");
const detailStockPill = document.querySelector("#detailStockPill");
const detailBrand = document.querySelector("#detailBrand");
const detailVolume = document.querySelector("#detailVolume");
const detailArt = document.querySelector("#detailArt");
const detailCopyEyebrow = document.querySelector("#detailCopyEyebrow");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailSeriesLabel = document.querySelector("#detailSeriesLabel");
const detailSeries = document.querySelector("#detailSeries");
const detailTypeLabel = document.querySelector("#detailTypeLabel");
const detailType = document.querySelector("#detailType");
const detailStockLabel = document.querySelector("#detailStockLabel");
const detailStockCount = document.querySelector("#detailStockCount");
const detailColorsLabel = document.querySelector("#detailColorsLabel");
const detailColors = document.querySelector("#detailColors");
const detailSizesLabel = document.querySelector("#detailSizesLabel");
const detailSizes = document.querySelector("#detailSizes");
const detailDepotLabel = document.querySelector("#detailDepotLabel");
const detailDepotPrice = document.querySelector("#detailDepotPrice");
const detailUserLabel = document.querySelector("#detailUserLabel");
const detailUserPrice = document.querySelector("#detailUserPrice");
const similarSection = document.querySelector("#similarSection");
const similarEyebrow = document.querySelector("#similarEyebrow");
const similarTitle = document.querySelector("#similarTitle");
const similarCopy = document.querySelector("#similarCopy");
const similarGrid = document.querySelector("#similarGrid");
const detailFooterText = document.querySelector("#detailFooterText");
const detailFooterPage = document.querySelector("#detailFooterPage");
const languageButtons = [...document.querySelectorAll("[data-language-option]")];
const themeButtons = [...document.querySelectorAll("[data-theme-option]")];

const STORAGE_KEYS = {
  language: "agt-language",
  theme: "agt-theme",
};

const products = Array.isArray(window.catalogProducts) ? window.catalogProducts : [];
const productCode = new URLSearchParams(window.location.search).get("code");
const currentProduct = products.find((product) => product.code.toLowerCase() === String(productCode).toLowerCase()) ?? null;

const translations = {
  en: {
    pageTitle(product) {
      return product ? `${product.code} | Product Details | Angkor Garden Tools` : "Product Details | Angkor Garden Tools";
    },
    heroSubline: "Product detail with stock, colors, sizes, and similar items",
    detailEyebrow: "Angkor Garden Tools",
    detailHeading: "Product Details",
    detailCopyEyebrow: "Catalog item",
    languageLabel: "Language",
    themeLabel: "Theme",
    languageEnglish: "English",
    languageKhmer: "Khmer",
    themeLight: "White Mode",
    themeDark: "Dark Mode",
    back: "Back to catalog",
    backLabel: "Back to product list",
    code: "Code",
    series: "Series",
    type: "Type",
    stock: "Stock",
    colors: "Colors",
    sizes: "Sizes",
    depot: "Depo",
    user: "User",
    typeSprayer: "Sprayer",
    typeBattery: "Battery Unit",
    typeMister: "Mist Unit",
    similarEyebrow: "Same Product Group",
    similarTitle: "Similar Items",
    similarCopy: "Browse other products from the same product group.",
    footerText: "Product detail layout . Stock, colors, sizes, and similar items",
    footerPage: "Catalog detail page",
    notFound: "Product not found.",
    openDetails: "Open product details",
    stockIn(count) {
      return `${count} in stock`;
    },
    stockLow(count) {
      return `Low stock: ${count}`;
    },
    stockOut: "Out of stock",
  },
  km: {
    pageTitle(product) {
      return product ? `${product.code} | ព័ត៌មានលម្អិតផលិតផល` : "ព័ត៌មានលម្អិតផលិតផល | Angkor Garden Tools";
    },
    heroSubline: "ព័ត៌មានលម្អិតផលិតផល មានស្តុក ពណ៌ ទំហំ និងផលិតផលស្រដៀង",
    detailEyebrow: "អង្គរឧបករណ៍កសិកម្ម",
    detailHeading: "ព័ត៌មានលម្អិតផលិតផល",
    detailCopyEyebrow: "ទំនិញក្នុងតារាង",
    languageLabel: "ភាសា",
    themeLabel: "ម៉ូដពណ៌",
    languageEnglish: "English",
    languageKhmer: "ខ្មែរ",
    themeLight: "ម៉ូដស",
    themeDark: "ម៉ូដងងឹត",
    back: "ត្រឡប់ទៅតារាង",
    backLabel: "ត្រឡប់ទៅតារាងផលិតផល",
    code: "លេខកូដ",
    series: "ស៊េរី",
    type: "ប្រភេទ",
    stock: "ស្តុក",
    colors: "ពណ៌",
    sizes: "ទំហំ",
    depot: "ដេប៉ូ",
    user: "អ្នកប្រើ",
    typeSprayer: "ម៉ាស៊ីនបាញ់",
    typeBattery: "បាតឺរី",
    typeMister: "ម៉ាស៊ីនបាញ់អ័ព្ទ",
    similarEyebrow: "ទំនិញស្រដៀង",
    similarTitle: "ផលិតផលស្រដៀង",
    similarCopy: "មើលផលិតផលផ្សេងទៀតក្នុងក្រុមដូចគ្នា។",
    footerText: "ទំព័រលម្អិត . ស្តុក ពណ៌ ទំហំ និងទំនិញស្រដៀង",
    footerPage: "ព័ត៌មានលម្អិតផលិតផល",
    notFound: "រកមិនឃើញផលិតផលនេះទេ។",
    openDetails: "បើកព័ត៌មានលម្អិតផលិតផល",
    stockIn(count) {
      return `មានស្តុក ${count}`;
    },
    stockLow(count) {
      return `ស្តុកតិច ${count}`;
    },
    stockOut: "អស់ស្តុក",
  },
};

let currentLanguage = readStoredPreference(STORAGE_KEYS.language, ["en", "km"], "km");
let currentTheme = readStoredPreference(STORAGE_KEYS.theme, ["light", "dark"], "light");

function getDictionary() {
  return translations[currentLanguage] ?? translations.km;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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

function getTypeText(product, dictionary) {
  if (product.similarKey === "mister") {
    return dictionary.typeMister;
  }

  if (product.filterType === "battery") {
    return dictionary.typeBattery;
  }

  return dictionary.typeSprayer;
}

function getStockState(stock, dictionary) {
  if (stock <= 0) {
    return {
      text: dictionary.stockOut,
      className: "stock-pill stock-pill--out",
    };
  }

  if (stock <= 5) {
    return {
      text: dictionary.stockLow(stock),
      className: "stock-pill stock-pill--low",
    };
  }

  return {
    text: dictionary.stockIn(stock),
    className: "stock-pill stock-pill--in",
  };
}

function getCardSeriesText(product, dictionary) {
  if (currentLanguage === "km") {
    return product.series;
  }

  return `${dictionary.series}: ${product.series}`;
}

function getVolumeSortValue(volume) {
  const matchedNumber = String(volume).match(/(\d+(?:\.\d+)?)/);

  if (!matchedNumber) {
    return Number.POSITIVE_INFINITY;
  }

  return Number(matchedNumber[1]);
}

function getSizeVariantProducts(product) {
  return products
    .filter(
      (candidate) =>
        candidate.brand === product.brand &&
        candidate.similarKey === product.similarKey &&
        candidate.title === product.title,
    )
    .sort((left, right) => {
      const volumeScore = getVolumeSortValue(left.volume) - getVolumeSortValue(right.volume);

      return volumeScore || left.code.localeCompare(right.code);
    });
}

function buildSimilarCardMarkup(product, dictionary) {
  const detailLabel = `${product.code} - ${dictionary.openDetails}`;

  return `
    <a
      class="catalog-card catalog-card--link"
      href="detail.html?code=${encodeURIComponent(product.code)}"
      aria-label="${escapeHtml(detailLabel)}"
    >
      <div class="catalog-card__head">
        <span class="catalog-card__label"${currentLanguage === "km" ? ' lang="km"' : ""}>${escapeHtml(dictionary.code)}</span>
        <span class="catalog-card__code">${escapeHtml(product.code)}</span>
      </div>
      <div class="catalog-card__band">
        <span class="catalog-card__brand">${escapeHtml(product.brand)}</span>
        <span class="catalog-card__volume">${escapeHtml(product.volume)}</span>
      </div>
      <div class="catalog-card__body">
        <h3 lang="km">${escapeHtml(product.title)}</h3>
        <p lang="km">${escapeHtml(product.description)}</p>
      </div>
      <div class="catalog-card__art" style="--art-bg:${escapeHtml(product.artBg)}; --art-color:${escapeHtml(product.artColor)};">
        <svg viewBox="0 0 220 220" aria-hidden="true"><use href="#icon-${escapeHtml(product.icon)}"></use></svg>
      </div>
      <div class="catalog-card__meta">
        <span>${escapeHtml(getCardSeriesText(product, dictionary))}</span>
        <div class="catalog-card__price-stack">
          <div class="catalog-card__price-row">
            <small>${escapeHtml(dictionary.depot)}</small>
            <strong>${escapeHtml(product.depoPrice)}</strong>
          </div>
          <div class="catalog-card__price-row">
            <small>${escapeHtml(dictionary.user)}</small>
            <strong>${escapeHtml(product.userPrice)}</strong>
          </div>
        </div>
      </div>
    </a>
  `;
}

function buildColorChipMarkup(color) {
  return `
    <span class="detail-chip detail-chip--color" lang="km">
      <span class="detail-chip__swatch" style="background:${escapeHtml(color.hex)};"></span>
      <span>${escapeHtml(color.label)}</span>
    </span>
  `;
}

function buildSizeChipMarkup(size) {
  const langAttribute = /[^\u0000-\u00ff]/.test(size) ? ' lang="km"' : "";
  return `<span class="detail-chip"${langAttribute}>${escapeHtml(size)}</span>`;
}

function buildSizeVariantMarkup(variant, currentCode, duplicateCounts) {
  const isActive = variant.code === currentCode;
  const needsCode = (duplicateCounts.get(variant.volume) ?? 0) > 1;
  const label = needsCode ? `${variant.volume} • ${variant.code}` : variant.volume;

  if (isActive) {
    return `<span class="detail-chip detail-chip--link is-active">${escapeHtml(label)}</span>`;
  }

  return `
    <a
      class="detail-chip detail-chip--link"
      href="detail.html?code=${encodeURIComponent(variant.code)}"
      aria-label="${escapeHtml(label)}"
    >
      ${escapeHtml(label)}
    </a>
  `;
}

function getSimilarProducts(product) {
  const sameGroup = products
    .filter((candidate) => candidate.code !== product.code && candidate.similarKey === product.similarKey)
    .sort((left, right) => {
      const sameBrandScore = Number(right.brand === product.brand) - Number(left.brand === product.brand);
      const featuredScore = Number(Boolean(right.featured)) - Number(Boolean(left.featured));
      const stockScore = right.stock - left.stock;

      return sameBrandScore || featuredScore || stockScore || left.code.localeCompare(right.code);
    });

  if (sameGroup.length >= 4) {
    return sameGroup.slice(0, 4);
  }

  const fallback = products
    .filter((candidate) => candidate.code !== product.code && candidate.filterType === product.filterType)
    .filter((candidate) => !sameGroup.some((grouped) => grouped.code === candidate.code))
    .sort((left, right) => right.stock - left.stock || left.code.localeCompare(right.code));

  return [...sameGroup, ...fallback].slice(0, 4);
}

function renderSimilarProducts(product, dictionary) {
  const similarProducts = getSimilarProducts(product);

  similarSection.hidden = similarProducts.length === 0;
  similarGrid.innerHTML = similarProducts.map((item) => buildSimilarCardMarkup(item, dictionary)).join("");
}

function renderMissingState(dictionary) {
  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle(null);
  detailContent.hidden = true;
  detailMissing.hidden = false;
  detailMissing.textContent = dictionary.notFound;
  similarSection.hidden = true;
}

function renderProduct(product) {
  const dictionary = getDictionary();
  const stockState = getStockState(product.stock, dictionary);
  const sizeVariants = getSizeVariantProducts(product);
  const sizeDuplicateCounts = new Map();

  for (const variant of sizeVariants) {
    sizeDuplicateCounts.set(variant.volume, (sizeDuplicateCounts.get(variant.volume) ?? 0) + 1);
  }

  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle(product);
  detailContent.hidden = false;
  detailMissing.hidden = true;
  similarSection.hidden = false;

  detailCode.textContent = product.code;
  detailBrand.textContent = product.brand;
  detailVolume.textContent = product.volume;
  detailTitle.textContent = product.title;
  detailDescription.textContent = product.description;
  detailSeries.textContent = product.series;
  detailType.textContent = getTypeText(product, dictionary);
  detailStockCount.textContent = String(product.stock);
  detailDepotPrice.textContent = product.depoPrice;
  detailUserPrice.textContent = product.userPrice;
  detailStockPill.className = stockState.className;
  detailStockPill.textContent = stockState.text;
  detailArt.innerHTML = `
    <div class="detail-art__frame" style="--art-bg:${escapeHtml(product.artBg)}; --art-color:${escapeHtml(product.artColor)};">
      <svg viewBox="0 0 220 220" aria-hidden="true"><use href="#icon-${escapeHtml(product.icon)}"></use></svg>
    </div>
  `;
  detailColors.innerHTML = product.colors.map((color) => buildColorChipMarkup(color)).join("");
  detailSizes.innerHTML =
    sizeVariants.length > 1
      ? sizeVariants.map((variant) => buildSizeVariantMarkup(variant, product.code, sizeDuplicateCounts)).join("")
      : product.sizes.map((size) => buildSizeChipMarkup(size)).join("");
  renderSimilarProducts(product, dictionary);
}

function syncLanguageButtons() {
  for (const button of languageButtons) {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function syncThemeButtons() {
  document.body.dataset.theme = currentTheme;

  for (const button of themeButtons) {
    const isActive = button.dataset.themeOption === currentTheme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function applyLanguage() {
  const dictionary = getDictionary();

  languageLabel.textContent = dictionary.languageLabel;
  themeLabel.textContent = dictionary.themeLabel;
  languageEnglishButton.setAttribute("aria-label", dictionary.languageEnglish);
  languageEnglishButton.setAttribute("title", dictionary.languageEnglish);
  languageKhmerButton.setAttribute("aria-label", dictionary.languageKhmer);
  languageKhmerButton.setAttribute("title", dictionary.languageKhmer);
  themeLightButton.setAttribute("aria-label", dictionary.themeLight);
  themeLightButton.setAttribute("title", dictionary.themeLight);
  themeDarkButton.setAttribute("aria-label", dictionary.themeDark);
  themeDarkButton.setAttribute("title", dictionary.themeDark);
  detailHeroSubline.textContent = dictionary.heroSubline;
  detailEyebrow.textContent = dictionary.detailEyebrow;
  detailHeading.textContent = dictionary.detailHeading;
  detailCopyEyebrow.textContent = dictionary.detailCopyEyebrow;
  detailBack.textContent = dictionary.back;
  detailBack.setAttribute("aria-label", dictionary.backLabel);
  heroLogoLink.setAttribute("aria-label", dictionary.backLabel);
  detailCodeLabel.textContent = dictionary.code;
  detailSeriesLabel.textContent = dictionary.series;
  detailTypeLabel.textContent = dictionary.type;
  detailStockLabel.textContent = dictionary.stock;
  detailColorsLabel.textContent = dictionary.colors;
  detailSizesLabel.textContent = dictionary.sizes;
  detailDepotLabel.textContent = dictionary.depot;
  detailUserLabel.textContent = dictionary.user;
  similarEyebrow.textContent = dictionary.similarEyebrow;
  similarTitle.textContent = dictionary.similarTitle;
  similarCopy.textContent = dictionary.similarCopy;
  detailFooterText.textContent = dictionary.footerText;
  detailFooterPage.textContent = dictionary.footerPage;
  syncLanguageButtons();

  if (currentProduct) {
    renderProduct(currentProduct);
    return;
  }

  renderMissingState(dictionary);
}

function setLanguage(language) {
  if (!translations[language] || currentLanguage === language) {
    return;
  }

  currentLanguage = language;
  savePreference(STORAGE_KEYS.language, language);
  applyLanguage();
}

function setTheme(theme) {
  if (!["light", "dark"].includes(theme) || currentTheme === theme) {
    return;
  }

  currentTheme = theme;
  savePreference(STORAGE_KEYS.theme, theme);
  syncThemeButtons();
}

for (const button of languageButtons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
  });
}

for (const button of themeButtons) {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeOption);
  });
}

syncThemeButtons();
applyLanguage();
