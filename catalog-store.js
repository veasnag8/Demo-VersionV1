(function () {
  const STORAGE_KEY = "agt-products";
  const BRAND_STORAGE_KEY = "agt-brands";
  const defaultProducts = cloneProducts(Array.isArray(window.catalogProducts) ? window.catalogProducts : []);

  function cloneProducts(products) {
    return JSON.parse(JSON.stringify(products));
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

  function normalizeProduct(input = {}) {
    const code = cleanString(input.code).toUpperCase();
    const brand = cleanString(input.brand);
    const filterType = cleanString(input.filterType).toLowerCase() || "sprayer";
    const similarKey = cleanString(input.similarKey).toLowerCase() || filterType;
    const icon = cleanString(input.icon).toLowerCase() || (similarKey === "mister" ? "mister" : filterType === "battery" ? "battery" : "sprayer");
    const volume = cleanString(input.volume);
    const title = cleanString(input.title);
    const description = cleanString(input.description);
    const series = cleanString(input.series);
    let stock = normalizeStock(input.stock);
    const status = normalizeStatus(input.status, stock);
    const tags = normalizeTags(input.tags);
    const specRows = normalizeSpecRows(input.specRows);
    const featurePoints = normalizeFeaturePoints(input.featurePoints);

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

  function sortBrands(brands) {
    return [...brands].sort((left, right) => left.name.localeCompare(right.name));
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

  function saveBrands(brands) {
    const normalizedBrands = sortBrands(
      brands
        .map((brand) => normalizeBrand(brand))
        .filter((brand) => brand.name),
    );

    window.localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(normalizedBrands));
    return getBrands();
  }

  function getEmptyBrand() {
    return normalizeBrand({
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

  window.catalogStore = {
    STORAGE_KEY,
    BRAND_STORAGE_KEY,
    getProducts,
    saveProducts,
    upsertProduct,
    deleteProduct,
    resetProducts,
    getBrands,
    saveBrands,
    normalizeProduct,
    normalizeBrand,
    getEmptyProduct,
    getEmptyBrand,
  };
})();
