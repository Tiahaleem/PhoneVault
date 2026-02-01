document.addEventListener("DOMContentLoaded", () => {
  const products = Array.from(document.querySelectorAll(".item_display_product"));
  const filterButtons = document.querySelectorAll(".product_bth button");
  const sortSelect = document.getElementById("sortProducts");
  const searchInput = document.getElementById("searchProducts");
  const itemsCount = document.getElementById("items-count");
  const noResults = document.querySelector(".no_results");
  const grid = document.querySelector(".items_display_grid");

  let activeBrand = "all";
  let searchTerm = "";

  /* ---------------- DEBOUNCE ---------------- */
  function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  /* ---------------- CORE FILTER ---------------- */
  function applyFilters() {
    let visibleProducts = [];

    products.forEach(product => {
      const details = product.querySelector(".phone_details");
      const brand = details.dataset.brand.toLowerCase();
      const titleText = product.querySelector("h3").innerText.toLowerCase();

      const brandMatch = activeBrand === "all" || brand === activeBrand;
      const searchMatch =
        titleText.includes(searchTerm) || brand.includes(searchTerm);

      if (brandMatch && searchMatch) {
        product.hidden = false;
        visibleProducts.push(product);
      } else {
        product.hidden = true;
      }
    });

    sortProducts(visibleProducts);
    updateUI(visibleProducts.length);
  }

  /* ---------------- SORT ---------------- */
  function sortProducts(visibleProducts) {
    const value = sortSelect.value;
    if (value === "default") return;

    visibleProducts.sort((a, b) => {
      const priceA = +a.querySelector(".phone_details").dataset.price;
      const priceB = +b.querySelector(".phone_details").dataset.price;
      return value === "low-high" ? priceA - priceB : priceB - priceA;
    });

    visibleProducts.forEach(p => grid.appendChild(p));
  }

  /* ---------------- UI ---------------- */
  function updateUI(count) {
    itemsCount.textContent = count;
    noResults.hidden = count !== 0;
  }

  /* ---------------- EVENTS ---------------- */

  // Brand filter
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      activeBrand = btn.dataset.brand.toLowerCase();

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      applyFilters();
    });
  });

  // Sort
  sortSelect.addEventListener("change", applyFilters);

  // Search (debounced)
  searchInput.addEventListener(
    "input",
    debounce(e => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    }, 300)
  );

  // Initial load
  applyFilters();
});
