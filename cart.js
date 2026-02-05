/* ================= CART CORE ================= */

function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return cart
    .filter(item => item && item.id && !isNaN(item.quantity))
    .map(item => ({
      id: item.id,
      name: item.name || "",
      brand: item.brand || "",
      price: Number(String(item.price).replace(/[^0-9.-]+/g, "")) || 0,
      image: item.image || "",
      quantity: Number(item.quantity)
    }));
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartPage();
}

/* ================= ADD TO CART ================= */

function addItemToCart(product, qty = 1) {
  const cart = getCart();
const existing = cart.find(
  item => item.name === product.name && item.brand === product.brand
);


  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }

  saveCart(cart);
}

/* ================= BADGE ================= */

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = total;
}

/* ================= CART PAGE ================= */

function renderCartPage() {
  const cartItemsEl = document.getElementById("cart-items");
  const emptyCartEl = document.getElementById("empty-cart");
  const orderSummaryEl = document.getElementById("order-summary");
  const totalAmountEl = document.getElementById("total-amount");

  if (!cartItemsEl) return; // not on cart page

  const cart = getCart();

  if (!cart.length) {
    emptyCartEl.style.display = "flex";
    cartItemsEl.style.display = "none";
    orderSummaryEl.style.display = "none";
    return;
  }

  emptyCartEl.style.display = "none";
  cartItemsEl.style.display = "flex";
  orderSummaryEl.style.display = "flex";

  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartItemsEl.innerHTML += `
      <div class="cart_item">
        <img src="${item.image}" alt="${item.name}">

        <div class="cart_item_details">
          <span class="brand">${item.brand}</span>
          <p class="product_name">${item.name}</p>

          <div class="qty_controls">
            <button class="qty_btn" onclick="changeQty(${index}, -1)">−</button>
            <span class="qty_number">${item.quantity}</span>
            <button class="qty_btn" onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>

        <span class="cart_price">
          ₦${(item.price * item.quantity).toLocaleString()}
        </span>

        <button class="remove_item" onclick="removeItem(${index})">✕</button>
      </div>
    `;
  });

  totalAmountEl.textContent = total.toLocaleString();
}

/* ================= QTY + REMOVE ================= */

function changeQty(index, delta) {
  const cart = getCart();
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCartPage();
});
