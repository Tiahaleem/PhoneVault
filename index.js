const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header_context");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart_btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productEl = btn.closest(".phone_details");
      if (!productEl) return;

      const product = {
        id: productEl.dataset.id,
        name: productEl.dataset.name,
        brand: productEl.dataset.brand,
        price: Number(productEl.dataset.price),
        image: productEl.dataset.image
      };

      addItemToCart(product, 1);

      btn.innerHTML = "✔";
      setTimeout(() => (btn.innerHTML = "🛒"), 800);
    });
  });
});
