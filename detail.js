const heroLogoLink = document.querySelector("#heroLogoLink");
const languageLabel = document.querySelector("#languageLabel");
const languageEnglishButton = document.querySelector("#languageEnglish");
const languageKhmerButton = document.querySelector("#languageKhmer");
const detailHeroSubline = document.querySelector("#detailHeroSubline");
const detailEyebrow = document.querySelector("#detailEyebrow");
const detailHeading = document.querySelector("#detailHeading");
const detailBack = document.querySelector("#detailBack");
const detailMissing = document.querySelector("#detailMissing");
const detailContent = document.querySelector("#detailContent");
const detailCodeLabel = document.querySelector("#detailCodeLabel");
const detailCode = document.querySelector("#detailCode");
const detailBrand = document.querySelector("#detailBrand");
const detailVolume = document.querySelector("#detailVolume");
const detailStockPill = document.querySelector("#detailStockPill");
const detailArt = document.querySelector("#detailArt");
const detailCopyEyebrow = document.querySelector("#detailCopyEyebrow");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailOverview = document.querySelector("#detailOverview");
const detailSpecsSection = document.querySelector("#detailSpecsSection");
const detailSpecsLabel = document.querySelector("#detailSpecsLabel");
const detailSpecsCopy = document.querySelector("#detailSpecsCopy");
const detailSpecs = document.querySelector("#detailSpecs");
const detailFeaturesSection = document.querySelector("#detailFeaturesSection");
const detailFeaturesLabel = document.querySelector("#detailFeaturesLabel");
const detailFeatures = document.querySelector("#detailFeatures");
const detailSizesSection = document.querySelector("#detailSizesSection");
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

const STORAGE_KEYS = {
  language: "agt-language",
};

const products = (window.catalogStore?.getProducts() ?? (Array.isArray(window.catalogProducts) ? window.catalogProducts : []))
  .filter((product) => product.showOnUserPage !== false);
let currentProduct = getProductFromLocation();

const detailCopy = {
  en: {
    heroSubline: "Clean product detail prepared for quick reading and easy comparison",
    footerText: "Product detail layout . Clean specifications, prices, and similar items",
    specs: "More Specifications",
    specsCopy: "Extra item details arranged in a cleaner reading order.",
    featurePoints: "Key Features",
    model: "Model",
    productName: "Product Name",
    brand: "Brand",
    capacity: "Capacity",
    sizes: "Sizes",
  },
  km: {
    heroSubline: "ព័ត៌មានលម្អិតផលិតផល រៀបចំថ្មី ងាយមើល និងងាយប្រៀបធៀប",
    footerText: "ទំព័រលម្អិតផលិតផល . លក្ខណៈបច្ចេកទេស តម្លៃ និងទំនិញស្រដៀង",
    specs: "លក្ខណៈបន្ថែម",
    specsCopy: "ព័ត៌មានបន្ថែមត្រូវបានរៀបចំឲ្យមើលបានស្រួលជាងមុន។",
    featurePoints: "ចំណុចពិសេស",
    model: "ម៉ូដែល",
    productName: "ឈ្មោះផលិតផល",
    brand: "ម៉ាក",
    capacity: "ចំណុះ",
    sizes: "ទំហំ",
  },
};

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
    languageEnglish: "English",
    languageKhmer: "Khmer",
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
    detailEyebrow: "អង្គរហ្គាដិនធូក",
    detailHeading: "ព័ត៌មានលម្អិតផលិតផល",
    detailCopyEyebrow: "ទំនិញក្នុងតារាង",
    languageLabel: "ភាសា",
    languageEnglish: "English",
    languageKhmer: "ខ្មែរ",
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

document.body.removeAttribute("data-theme");

function getDictionary() {
  return translations[currentLanguage] ?? translations.km;
}

function getDetailCopy() {
  return detailCopy[currentLanguage] ?? detailCopy.km;
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

function getProductByCode(code) {
  if (!code) {
    return null;
  }

  return products.find((product) => product.code.toLowerCase() === String(code).toLowerCase()) ?? null;
}

function getProductFromLocation() {
  return getProductByCode(new URLSearchParams(window.location.search).get("code"));
}

function buildDetailUrl(code) {
  return `detail.html?code=${encodeURIComponent(code)}`;
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

function getFallbackOverviewItems(product, dictionary, uiCopy) {
  const items = [
    { label: uiCopy.brand, value: product.brand },
    { label: dictionary.type, value: getTypeText(product, dictionary) },
    { label: uiCopy.capacity, value: product.volume },
    { label: dictionary.series, value: product.series },
  ].filter((item) => item.value);

  if (items.length < 4) {
    items.unshift({ label: uiCopy.model, value: product.code });
  }

  return items.slice(0, 4);
}

function splitSpecRows(product, dictionary, uiCopy) {
  const customRows = Array.isArray(product.specRows) ? product.specRows.filter((row) => row?.label && row?.value) : [];

  if (customRows.length > 0) {
    return {
      overviewItems: customRows.slice(0, 4),
      specRows: customRows.slice(4),
    };
  }

  return {
    overviewItems: getFallbackOverviewItems(product, dictionary, uiCopy),
    specRows: [],
  };
}

function getFeaturePoints(product) {
  if (Array.isArray(product.featurePoints) && product.featurePoints.length > 0) {
    return product.featurePoints;
  }

  return [];
}

function getCardSeriesText(product, dictionary) {
  if (currentLanguage === "km") {
    return product.series;
  }

  return `${dictionary.series}: ${product.series}`;
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

function buildCatalogStockMarkup(product, dictionary) {
  if (Number(product.stock ?? 0) > 0) {
    return "";
  }

  return `<span class="catalog-card__stock catalog-card__stock--out">${escapeHtml(dictionary.stockOut)}</span>`;
}

function buildDetailArtworkMarkup(product) {
  const imageUrl = String(product.image ?? "").trim();

  return `
    <div class="detail-art__frame" style="--art-bg:${escapeHtml(product.artBg)}; --art-color:${escapeHtml(product.artColor)};">
      ${imageUrl
        ? `<img class="detail-art__image" data-artwork-image src="${escapeHtml(imageUrl)}" alt="${escapeHtml(product.title || product.code)}" loading="lazy" decoding="async" hidden>`
        : ""}
      <svg class="detail-art__icon" viewBox="0 0 220 220" aria-hidden="true"><use href="#icon-${escapeHtml(product.icon)}"></use></svg>
    </div>
  `;
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

function buildSizeChipMarkup(size) {
  const langAttribute = /[^\u0000-\u00ff]/.test(size) ? ' lang="km"' : "";
  return `<span class="detail-chip"${langAttribute}>${escapeHtml(size)}</span>`;
}

function buildSizeVariantMarkup(variant, currentCode, duplicateCounts) {
  const isActive = variant.code === currentCode;
  const needsCode = (duplicateCounts.get(variant.volume) ?? 0) > 1;
  const label = needsCode ? `${variant.volume} | ${variant.code}` : variant.volume;

  if (isActive) {
    return `<span class="detail-chip detail-chip--link is-active">${escapeHtml(label)}</span>`;
  }

  return `
    <a
      class="detail-chip detail-chip--link"
      href="${buildDetailUrl(variant.code)}"
      aria-label="${escapeHtml(label)}"
    >
      ${escapeHtml(label)}
    </a>
  `;
}

function buildOverviewItemMarkup(item) {
  const labelLanguage = /[^\u0000-\u00ff]/.test(item.label) ? ' lang="km"' : "";
  const valueLanguage = /[^\u0000-\u00ff]/.test(item.value) ? ' lang="km"' : "";

  return `
    <article class="detail-overview-card">
      <span class="detail-overview-card__label"${labelLanguage}>${escapeHtml(item.label)}</span>
      <strong class="detail-overview-card__value"${valueLanguage}>${escapeHtml(item.value)}</strong>
    </article>
  `;
}

function buildSpecRowMarkup(row) {
  const labelLanguage = /[^\u0000-\u00ff]/.test(row.label) ? ' lang="km"' : "";
  const valueLanguage = /[^\u0000-\u00ff]/.test(row.value) ? ' lang="km"' : "";

  return `
    <article class="detail-spec-item">
      <span class="detail-spec-item__label"${labelLanguage}>${escapeHtml(row.label)}</span>
      <p class="detail-spec-item__value"${valueLanguage}>${escapeHtml(row.value)}</p>
    </article>
  `;
}

function buildFeatureItemMarkup(point) {
  return `<li class="detail-feature-list__item" lang="km">${escapeHtml(point)}</li>`;
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
  relocateCatalogStockBadges(similarGrid);
  hydrateArtworkImages(similarGrid);
}

function renderMissingState(dictionary) {
  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle(null);
  detailContent.hidden = true;
  detailMissing.hidden = false;
  detailMissing.textContent = dictionary.notFound;
  similarSection.hidden = true;
}

function renderCurrentProduct() {
  const dictionary = getDictionary();

  if (currentProduct) {
    renderProduct(currentProduct);
    return;
  }

  renderMissingState(dictionary);
}

function renderProduct(product) {
  const dictionary = getDictionary();
  const uiCopy = getDetailCopy();
  const sizeVariants = getSizeVariantProducts(product);
  const sizeDuplicateCounts = new Map();
  const { overviewItems, specRows } = splitSpecRows(product, dictionary, uiCopy);
  const featurePoints = getFeaturePoints(product);

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
  if (detailStockPill) {
    detailStockPill.hidden = Number(product.stock ?? 0) > 0;
    detailStockPill.textContent = dictionary.stockOut;
  }
  detailTitle.textContent = product.title;
  detailDescription.textContent = product.description;
  detailDepotPrice.textContent = product.depoPrice;
  detailUserPrice.textContent = product.userPrice;
  detailArt.innerHTML = buildDetailArtworkMarkup(product);
  hydrateArtworkImages(detailArt);
  detailOverview.hidden = overviewItems.length === 0;
  detailOverview.innerHTML = overviewItems.map((item) => buildOverviewItemMarkup(item)).join("");
  detailSpecsSection.hidden = specRows.length === 0;
  detailSpecs.innerHTML = specRows.map((row) => buildSpecRowMarkup(row)).join("");
  detailFeaturesSection.hidden = featurePoints.length === 0;
  detailFeatures.innerHTML = featurePoints.map((point) => buildFeatureItemMarkup(point)).join("");

  const sizeMarkup =
    sizeVariants.length > 1
      ? sizeVariants.map((variant) => buildSizeVariantMarkup(variant, product.code, sizeDuplicateCounts)).join("")
      : product.sizes
        .filter((size) => size && size !== product.volume)
        .map((size) => buildSizeChipMarkup(size))
        .join("");

  detailSizes.innerHTML = sizeMarkup;
  detailSizesSection.hidden = sizeMarkup === "";
  renderSimilarProducts(product, dictionary);
}

function syncLanguageButtons() {
  for (const button of languageButtons) {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function applyLanguage() {
  const dictionary = getDictionary();
  const uiCopy = getDetailCopy();

  languageLabel.textContent = dictionary.languageLabel;
  languageEnglishButton.setAttribute("aria-label", dictionary.languageEnglish);
  languageEnglishButton.setAttribute("title", dictionary.languageEnglish);
  languageKhmerButton.setAttribute("aria-label", dictionary.languageKhmer);
  languageKhmerButton.setAttribute("title", dictionary.languageKhmer);
  detailHeroSubline.textContent = uiCopy.heroSubline;
  detailEyebrow.textContent = dictionary.detailEyebrow;
  detailHeading.textContent = dictionary.detailHeading;
  detailCopyEyebrow.textContent = dictionary.detailCopyEyebrow;
  detailBack.textContent = dictionary.back;
  detailBack.setAttribute("aria-label", dictionary.backLabel);
  heroLogoLink.setAttribute("aria-label", dictionary.backLabel);
  detailCodeLabel.textContent = dictionary.code;
  detailSpecsLabel.textContent = uiCopy.specs;
  detailSpecsCopy.textContent = uiCopy.specsCopy;
  detailFeaturesLabel.textContent = uiCopy.featurePoints;
  detailSizesLabel.textContent = uiCopy.sizes;
  detailDepotLabel.textContent = dictionary.depot;
  detailUserLabel.textContent = dictionary.user;
  similarEyebrow.textContent = dictionary.similarEyebrow;
  similarTitle.textContent = dictionary.similarTitle;
  similarCopy.textContent = dictionary.similarCopy;
  detailFooterText.textContent = uiCopy.footerText;
  detailFooterPage.textContent = dictionary.footerPage;
  syncLanguageButtons();
  renderCurrentProduct();
}

function setLanguage(language) {
  if (!translations[language] || currentLanguage === language) {
    return;
  }

  currentLanguage = language;
  savePreference(STORAGE_KEYS.language, language);
  applyLanguage();
}

function setCurrentProduct(product, options = {}) {
  const { pushHistory = true, scrollToTop = false } = options;

  currentProduct = product;

  if (pushHistory && product) {
    window.history.pushState({ code: product.code }, "", buildDetailUrl(product.code));
  }

  renderCurrentProduct();

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="detail.html?code="]');

  if (!link || event.defaultPrevented || event.button !== 0) {
    return;
  }

  if (link.target && link.target !== "_self") {
    return;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const nextUrl = new URL(link.href, window.location.href);
  const nextProduct = getProductByCode(nextUrl.searchParams.get("code"));

  if (!nextProduct) {
    return;
  }

  event.preventDefault();

  if (currentProduct?.code === nextProduct.code) {
    return;
  }

  setCurrentProduct(nextProduct, {
    pushHistory: true,
    scrollToTop: Boolean(link.closest("#similarGrid")),
  });
});

window.addEventListener("popstate", () => {
  currentProduct = getProductFromLocation();
  renderCurrentProduct();
});

applyLanguage();
