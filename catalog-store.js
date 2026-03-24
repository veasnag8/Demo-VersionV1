(function () {
  const STORAGE_KEY = "agt-products";
  const BRAND_STORAGE_KEY = "agt-brands";
  const TYPE_STORAGE_KEY = "agt-types";
  const CONTACT_STORAGE_KEY = "agt-contact-settings";
  const defaultProducts = cloneProducts(Array.isArray(window.catalogProducts) ? window.catalogProducts : []);
  const defaultContactSettings = Object.freeze({
    address: "No775, Str38, Trea2 Village, Sangkat Steng Meanchey, Khan Meanchey, Phnom Penh",
    contacts: [
      {
        type: "phone",
        label: "+855 (0) 70 516 333",
        value: "+85570516333",
        link: "",
      },
      {
        type: "phone",
        label: "078 96 36 36",
        value: "078963636",
        link: "",
      },
      {
        type: "email",
        label: "angkorgardentools@gmail.com",
        value: "angkorgardentools@gmail.com",
        link: "",
      },
    ],
  });

  function cloneProducts(products) {
    return JSON.parse(JSON.stringify(products));
  }

  function cloneContactSettings(settings) {
    return JSON.parse(JSON.stringify(settings));
  }

  function cleanString(value) {
    return String(value ?? "").trim();
  }

  function normalizeBoolean(value) {
    return value === true || value === "true" || value === "1" || value === 1 || value === "on";
  }

  function normalizeUserPageVisibility(value) {
    if (value === undefined || value === null || value === "") {
      return true;
    }

    return normalizeBoolean(value);
  }

  function normalizeStatus(value, stock) {
    const normalizedValue = cleanString(value).toLowerCase();

    if (normalizedValue === "inactive") {
      return "inactive";
    }

    if (normalizedValue === "active") {
      return "active";
    }

    return stock > 0 ? "active" : "inactive";
  }

  function normalizeStock(value) {
    const parsedValue = Number.parseInt(value, 10);

    if (!Number.isFinite(parsedValue) || parsedValue < 0) {
      return 0;
    }

    return parsedValue;
  }

  function normalizePrice(value) {
    const text = cleanString(value);

    if (!text) {
      return "";
    }

    const parsedValue = Number.parseFloat(text.replace(/[^0-9.]/g, ""));

    if (Number.isFinite(parsedValue)) {
      return `$${parsedValue.toFixed(2)}`;
    }

    return text.startsWith("$") ? text : `$${text}`;
  }

  function normalizeTags(value) {
    const source = Array.isArray(value) ? value : cleanString(value).split(/[\n,]+/);

    return [...new Set(source.map((item) => cleanString(item)).filter(Boolean))];
  }

  function normalizeSizes(value, volume) {
    const source = Array.isArray(value) ? value : cleanString(value).split(/[\n,]+/);
    const sizes = [...new Set(source.map((item) => cleanString(item)).filter(Boolean))];

    if (sizes.length > 0) {
      return sizes;
    }

    if (cleanString(volume)) {
      return [cleanString(volume)];
    }

    return [];
  }

  function normalizeColors(value) {
    const source = Array.isArray(value) ? value : cleanString(value).split(/\r?\n|,+/);

    return source
      .map((item) => {
        if (typeof item === "object" && item !== null) {
          const label = cleanString(item.label);
          const hex = cleanString(item.hex);

          if (!label && !hex) {
            return null;
          }

          return {
            label: label || hex || "Color",
            hex: hex || "#d8e7e2",
          };
        }

        const text = cleanString(item);

        if (!text) {
          return null;
        }

        const [labelPart, hexPart] = text.split("|");
        const label = cleanString(hexPart ? labelPart : "");
        const hex = cleanString(hexPart ?? labelPart);

        return {
          label: label || hex || "Color",
          hex: hex || "#d8e7e2",
        };
      })
      .filter(Boolean);
  }

  function normalizeSpecRows(value) {
    const source = Array.isArray(value) ? value : cleanString(value).split(/\r?\n/);

    return source
      .map((item) => {
        if (typeof item === "object" && item !== null) {
          const label = cleanString(item.label);
          const content = cleanString(item.value ?? item.content);

          if (!label || !content) {
            return null;
          }

          return { label, value: content };
        }

        const text = cleanString(item);

        if (!text) {
          return null;
        }

        const [labelPart, ...valueParts] = text.split("|");
        const label = cleanString(labelPart);
        const content = cleanString(valueParts.join("|"));

        if (!label || !content) {
          return null;
        }

        return { label, value: content };
      })
      .filter(Boolean);
  }

  function normalizeFeaturePoints(value) {
    const source = Array.isArray(value) ? value : cleanString(value).split(/\r?\n/);
    return [...new Set(source.map((item) => cleanString(item)).filter(Boolean))];
  }

  function normalizeContactType(value) {
    const type = cleanString(value).toLowerCase();

    if (type === "email" || type === "telegram" || type === "link") {
      return type;
    }

    return "phone";
  }

  function normalizePublicUrl(value) {
    const url = cleanString(value);

    if (!url) {
      return "";
    }

    if (/^(?:https?:|mailto:|tel:|tg:)/i.test(url)) {
      return url;
    }

    return `https://${url.replace(/^\/+/, "")}`;
  }

  function normalizePhoneValue(value) {
    return cleanString(value).replace(/[^0-9+]/g, "");
  }

  function buildTelegramHref(value) {
    const telegramValue = cleanString(value);

    if (!telegramValue) {
      return "";
    }

    if (/^(?:https?:|tg:)/i.test(telegramValue)) {
      return telegramValue;
    }

    if (telegramValue.startsWith("@")) {
      return `https://t.me/${telegramValue.slice(1)}`;
    }

    const compactValue = telegramValue.replace(/\s+/g, "");

    if (/^t\.me\//i.test(compactValue)) {
      return `https://${compactValue}`;
    }

    return `https://t.me/${compactValue}`;
  }

  function getContactDisplayType(entry = {}) {
    const type = normalizeContactType(entry.type);
    const telegram = cleanString(entry.telegram);

    if (type === "phone" && telegram) {
      return "telegram";
    }

    return type;
  }

  function buildContactHref(entry = {}) {
    const type = normalizeContactType(entry.type);
    const value = cleanString(entry.value);
    const label = cleanString(entry.label);
    const link = cleanString(entry.link ?? entry.href);
    const telegram = cleanString(entry.telegram);

    if (type === "phone" && telegram) {
      return buildTelegramHref(telegram);
    }

    if (type === "phone") {
      const phoneValue = normalizePhoneValue(value || label);
      return phoneValue ? `tel:${phoneValue}` : (link ? normalizePublicUrl(link) : "");
    }

    if (type === "email") {
      const emailValue = cleanString(value || label);
      return emailValue ? `mailto:${emailValue}` : "";
    }

    if (type === "telegram") {
      return buildTelegramHref(value || link);
    }

    if (link) {
      return normalizePublicUrl(link);
    }

    return normalizePublicUrl(value);
  }

  function normalizeContactEntry(input = {}) {
    const type = normalizeContactType(input.type);
    const label = cleanString(input.label);
    const value = cleanString(input.value);
    const link = cleanString(input.link ?? input.href);
    const telegram = cleanString(input.telegram);

    if (!label && !value && !link) {
      return null;
    }

    return {
      type,
      label: label || value || link,
      value,
      link,
      telegram,
    };
  }

  function normalizeContactSettings(input = {}) {
    return {
      address: cleanString(input.address),
      contacts: (Array.isArray(input.contacts) ? input.contacts : [])
        .map((entry) => normalizeContactEntry(entry))
        .filter(Boolean),
    };
  }

  function getBannerContactSettings(settings = getContactSettings()) {
    const normalizedSettings = normalizeContactSettings(settings);
    const bannerContacts = [];
    let phoneCount = 0;
    let emailAdded = false;

    for (const entry of normalizedSettings.contacts) {
      const type = normalizeContactType(entry.type);

      if (type === "phone" && phoneCount < 2) {
        bannerContacts.push(entry);
        phoneCount += 1;
        continue;
      }

      if (type === "email" && !emailAdded) {
        bannerContacts.push(entry);
        emailAdded = true;
      }
    }

    return {
      address: normalizedSettings.address,
      contacts: bannerContacts,
    };
  }

  function buildAutoProductKindText(input, filterType, tags, specRows, featurePoints) {
    return [
      filterType,
      cleanString(input.code),
      cleanString(input.brand),
      cleanString(input.volume),
      cleanString(input.series),
      cleanString(input.title),
      cleanString(input.description),
      ...tags,
      ...featurePoints,
      ...specRows.flatMap((row) => [row.label, row.value]),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function resolveSimilarKey(input, filterType, tags, specRows, featurePoints) {
    const explicitSimilarKey = cleanString(input.similarKey).toLowerCase();
    const explicitIcon = cleanString(input.icon).toLowerCase();
    const autoProductKindText = buildAutoProductKindText(input, filterType, tags, specRows, featurePoints);

    if (filterType.includes("battery") || explicitSimilarKey === "battery" || explicitIcon === "battery") {
      return "battery";
    }

    if (
      filterType.includes("mister") ||
      explicitSimilarKey === "mister" ||
      explicitIcon === "mister" ||
      autoProductKindText.includes("mister")
    ) {
      return "mister";
    }

    if (
      explicitSimilarKey &&
      explicitSimilarKey !== "sprayer" &&
      explicitSimilarKey !== "battery" &&
      explicitSimilarKey !== "mister"
    ) {
      return explicitSimilarKey;
    }

    return filterType || "sprayer";
  }

  function resolveIcon(input, filterType, similarKey) {
    const explicitIcon = cleanString(input.icon).toLowerCase();

    if (similarKey === "mister" || explicitIcon === "mister") {
      return "mister";
    }

    if (similarKey === "battery" || filterType.includes("battery") || explicitIcon === "battery") {
      return "battery";
    }

    return "sprayer";
  }

  function buildSearchText(product) {
    return [
      product.code,
      product.brand,
      product.filterType,
      product.similarKey,
      product.status,
      product.showOnUserPage ? "visible" : "hidden",
      product.icon,
      product.volume,
      product.series,
      ...(product.colors ?? []).flatMap((color) => [color.label, color.hex]),
      product.title,
      product.description,
      ...(product.specRows ?? []).flatMap((row) => [row.label, row.value]),
      ...(product.featurePoints ?? []),
      ...(product.tags ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function buildBrandSearchText(brand) {
    return [brand.name, brand.note]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function buildTypeSearchText(type) {
    return [type.name, type.note]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function normalizeProduct(input = {}) {
    const code = cleanString(input.code).toUpperCase();
    const brand = cleanString(input.brand);
    const filterType = cleanString(input.filterType).toLowerCase() || "sprayer";
    const volume = cleanString(input.volume);
    const title = cleanString(input.title);
    const description = cleanString(input.description);
    const series = cleanString(input.series);
    let stock = normalizeStock(input.stock);
    const status = normalizeStatus(input.status, stock);
    const tags = normalizeTags(input.tags);
    const specRows = normalizeSpecRows(input.specRows);
    const featurePoints = normalizeFeaturePoints(input.featurePoints);
    const similarKey = resolveSimilarKey(input, filterType, tags, specRows, featurePoints);
    const icon = resolveIcon(input, filterType, similarKey);

    if (status === "inactive") {
      stock = 0;
    } else if (stock <= 0) {
      stock = 1;
    }

    const product = {
      code,
      brand,
      filterType,
      similarKey,
      status,
      showOnUserPage: normalizeUserPageVisibility(input.showOnUserPage),
      icon,
      image: cleanString(input.image),
      volume,
      title,
      description,
      series,
      depoPrice: normalizePrice(input.depoPrice),
      userPrice: normalizePrice(input.userPrice),
      stock,
      featured: normalizeBoolean(input.featured),
      artBg: cleanString(input.artBg) || "#eefbf6",
      artColor: cleanString(input.artColor) || "#89d8c2",
      colors: normalizeColors(input.colors),
      sizes: normalizeSizes(input.sizes, volume),
      specRows,
      featurePoints,
      tags,
    };

    return {
      ...product,
      searchText: buildSearchText(product),
    };
  }

  function normalizeBrand(input = {}) {
    const name = cleanString(input.name);
    const note = cleanString(input.note);

    return {
      name,
      note,
      searchText: buildBrandSearchText({ name, note }),
    };
  }

  function normalizeType(input = {}) {
    const name = cleanString(input.name).toLowerCase();
    const note = cleanString(input.note);

    return {
      name,
      note,
      searchText: buildTypeSearchText({ name, note }),
    };
  }

  function getProducts() {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      if (!storedValue) {
        return cloneProducts(defaultProducts);
      }

      const parsedValue = JSON.parse(storedValue);

      if (!Array.isArray(parsedValue)) {
        return cloneProducts(defaultProducts);
      }

      return parsedValue.map((product) => normalizeProduct(product));
    } catch (error) {
      return cloneProducts(defaultProducts);
    }
  }

  function saveProducts(products) {
    const normalizedProducts = products.map((product) => normalizeProduct(product));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedProducts));
    return normalizedProducts;
  }

  function upsertProduct(product) {
    const normalizedProduct = normalizeProduct(product);
    const products = getProducts();
    const existingIndex = products.findIndex((item) => item.code.toLowerCase() === normalizedProduct.code.toLowerCase());

    if (existingIndex >= 0) {
      products.splice(existingIndex, 1, normalizedProduct);
    } else {
      products.push(normalizedProduct);
    }

    return saveProducts(products);
  }

  function deleteProduct(code) {
    const nextProducts = getProducts().filter((product) => product.code.toLowerCase() !== String(code).toLowerCase());
    return saveProducts(nextProducts);
  }

  function resetProducts() {
    window.localStorage.removeItem(STORAGE_KEY);
    return cloneProducts(defaultProducts);
  }

  function getStoredBrands() {
    try {
      const storedValue = window.localStorage.getItem(BRAND_STORAGE_KEY);

      if (!storedValue) {
        return [];
      }

      const parsedValue = JSON.parse(storedValue);

      if (!Array.isArray(parsedValue)) {
        return [];
      }

      return parsedValue
        .map((brand) => normalizeBrand(brand))
        .filter((brand) => brand.name);
    } catch (error) {
      return [];
    }
  }

  function getStoredTypes() {
    try {
      const storedValue = window.localStorage.getItem(TYPE_STORAGE_KEY);

      if (!storedValue) {
        return [];
      }

      const parsedValue = JSON.parse(storedValue);

      if (!Array.isArray(parsedValue)) {
        return [];
      }

      return parsedValue
        .map((type) => normalizeType(type))
        .filter((type) => type.name);
    } catch (error) {
      return [];
    }
  }

  function getContactSettings() {
    try {
      const storedValue = window.localStorage.getItem(CONTACT_STORAGE_KEY);

      if (!storedValue) {
        return cloneContactSettings(normalizeContactSettings(defaultContactSettings));
      }

      const parsedValue = JSON.parse(storedValue);

      if (!parsedValue || typeof parsedValue !== "object" || Array.isArray(parsedValue)) {
        return cloneContactSettings(normalizeContactSettings(defaultContactSettings));
      }

      return cloneContactSettings(normalizeContactSettings(parsedValue));
    } catch (error) {
      return cloneContactSettings(normalizeContactSettings(defaultContactSettings));
    }
  }

  function sortBrands(brands) {
    return [...brands].sort((left, right) => left.name.localeCompare(right.name));
  }

  function sortTypes(types) {
    return [...types].sort((left, right) => left.name.localeCompare(right.name));
  }

  function getBrands() {
    const brandsByKey = new Map();

    for (const product of getProducts()) {
      const name = cleanString(product.brand);

      if (!name) {
        continue;
      }

      brandsByKey.set(name.toLowerCase(), normalizeBrand({ name }));
    }

    for (const brand of getStoredBrands()) {
      if (!brand.name) {
        continue;
      }

      brandsByKey.set(brand.name.toLowerCase(), brand);
    }

    return sortBrands([...brandsByKey.values()]);
  }

  function getTypes() {
    const typesByKey = new Map();

    for (const product of getProducts()) {
      const name = cleanString(product.filterType).toLowerCase();

      if (!name) {
        continue;
      }

      typesByKey.set(name, normalizeType({ name }));
    }

    for (const type of getStoredTypes()) {
      if (!type.name) {
        continue;
      }

      typesByKey.set(type.name.toLowerCase(), type);
    }

    return sortTypes([...typesByKey.values()]);
  }

  function saveBrands(brands) {
    const normalizedBrands = sortBrands(
      brands
        .map((brand) => normalizeBrand(brand))
        .filter((brand) => brand.name),
    );

    window.localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(normalizedBrands));
    return getBrands();
  }

  function saveTypes(types) {
    const normalizedTypes = sortTypes(
      types
        .map((type) => normalizeType(type))
        .filter((type) => type.name),
    );

    window.localStorage.setItem(TYPE_STORAGE_KEY, JSON.stringify(normalizedTypes));
    return getTypes();
  }

  function saveContactSettings(settings) {
    const normalizedSettings = normalizeContactSettings(settings);
    window.localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(normalizedSettings));
    return getContactSettings();
  }

  function getEmptyBrand() {
    return normalizeBrand({
      name: "",
      note: "",
    });
  }

  function getEmptyType() {
    return normalizeType({
      name: "",
      note: "",
    });
  }

  function getEmptyProduct() {
    return normalizeProduct({
      code: "",
      brand: "",
      filterType: "sprayer",
      similarKey: "sprayer",
      status: "active",
      showOnUserPage: true,
      icon: "sprayer",
      image: "",
      volume: "",
      title: "",
      description: "",
      series: "",
      depoPrice: "",
      userPrice: "",
      stock: 1,
      featured: false,
      artBg: "#eefbf6",
      artColor: "#89d8c2",
      colors: [],
      sizes: [],
      specRows: [],
      featurePoints: [],
      tags: [],
    });
  }

  function getEmptyContactEntry() {
    return {
      type: "phone",
      label: "",
      value: "",
      link: "",
    };
  }

  function getEmptyContactSettings() {
    return {
      address: "",
      contacts: [],
    };
  }

  window.catalogStore = {
    STORAGE_KEY,
    BRAND_STORAGE_KEY,
    TYPE_STORAGE_KEY,
    CONTACT_STORAGE_KEY,
    getProducts,
    saveProducts,
    upsertProduct,
    deleteProduct,
    resetProducts,
    getBrands,
    saveBrands,
    getTypes,
    saveTypes,
    getContactSettings,
    getBannerContactSettings,
    saveContactSettings,
    normalizeProduct,
    normalizeBrand,
    normalizeType,
    normalizeContactSettings,
    normalizeContactEntry,
    normalizeContactType,
    getContactDisplayType,
    buildContactHref,
    getEmptyProduct,
    getEmptyBrand,
    getEmptyType,
    getEmptyContactEntry,
    getEmptyContactSettings,
  };
})();
