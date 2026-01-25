document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".product_bth button");
  const products = document.querySelectorAll(".item_display_product");
  const itemsNum = document.querySelector(".items_num");

  function updateCount(count) {
    itemsNum.textContent = `Showing ${count} product${count !== 1 ? "s" : ""}`;
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const brand = button.dataset.brand;

      // Active button UI
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      let visibleCount = 0;

      products.forEach(product => {
        const productBrand =
          product.querySelector(".phone_details")
                 .dataset.brand
                 .toLowerCase();

        if (brand === "all" || productBrand === brand) {
          product.style.display = "block";
          visibleCount++;
        } else {
          product.style.display = "none";
        }
      });

      updateCount(visibleCount);
    });
  });

  // Initial count
  updateCount(products.length);
});
