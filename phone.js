document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section"); // phone OR accessories

  const products = Array.from(
    section.querySelectorAll(".item_display_product")
  );
  const filterButtons = section.querySelectorAll(".product_bth button");
  const sortSelect = section.querySelector(".sortProducts");
  const searchInput = section.querySelector(".searchProducts");
  const itemsCount = section.querySelector(".items-count");
  const noResults = section.querySelector(".no_results");
  const grid = section.querySelector(".items_display_grid");

  let activeBrand = "all";
  let searchTerm = "";

  /* ---------- DEBOUNCE ---------- */
  function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  /* ---------- FILTER ---------- */
  function applyFilters() {
    let visible = [];

    products.forEach(product => {
      const details = product.querySelector(".phone_details");
      const brand = details.dataset.brand.toLowerCase();
      const name = details.dataset.name.toLowerCase();

      const brandMatch = activeBrand === "all" || brand === activeBrand;
      const searchMatch =
        name.includes(searchTerm) || brand.includes(searchTerm);

      if (brandMatch && searchMatch) {
        product.hidden = false;
        visible.push(product);
      } else {
        product.hidden = true;
      }
    });

    sortProducts(visible);
    updateUI(visible.length);
  }

  /* ---------- SORT ---------- */
  function sortProducts(list) {
    if (sortSelect.value === "default") return;

    list.sort((a, b) => {
      const aPrice = +a.querySelector(".phone_details").dataset.price;
      const bPrice = +b.querySelector(".phone_details").dataset.price;
      return sortSelect.value === "low-high"
        ? aPrice - bPrice
        : bPrice - aPrice;
    });

    list.forEach(p => grid.appendChild(p));
  }

  /* ---------- UI ---------- */
  function updateUI(count) {
    itemsCount.textContent = count;
    if (noResults) noResults.hidden = count !== 0;
  }

  /* ---------- EVENTS ---------- */

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      activeBrand = btn.dataset.brand.toLowerCase();
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  sortSelect.addEventListener("change", applyFilters);

  searchInput.addEventListener(
    "input",
    debounce(e => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    }, 300)
  );

  applyFilters();
});
