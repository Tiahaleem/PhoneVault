document.addEventListener("DOMContentLoaded", () => {
  const itemsEl = document.getElementById("checkout-items");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  const cart = getCart();
  let total = 0;

  itemsEl.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    itemsEl.innerHTML += `
      <div class="checkout_item">
        <img src="${item.image}" />
        <div>
          <p>${item.name} × ${item.quantity}</p>
          <span>₦${itemTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
  });

  subtotalEl.textContent = `₦${total.toLocaleString()}`;
  totalEl.textContent = `₦${total.toLocaleString()}`;
});

function checkoutViaWhatsApp() {
  const name = document.getElementById("customer-name").value.trim();
  const location = document.getElementById("customer-location").value.trim();
  const note = document.getElementById("customer-note").value.trim();

  if (!name || !location) {
    alert("Please enter your name and delivery location.");
    return;
  }

  const cart = getCart();
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  let message = `Hello, I would like to place an order.%0A%0A`;
  message += `Name: ${name}%0A`;
  message += `Location: ${location}%0A%0A`;
  message += `Order Details:%0A`;

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    message += `- ${item.name} × ${item.quantity} (₦${itemTotal.toLocaleString()})%0A`;
  });

  message += `%0A Total: ₦${total.toLocaleString()}%0A`;

  if (note) {
    message += `%0A Note: ${note}`;
  }

  // CHANGE THIS NUMBER to the owner's WhatsApp number
  const phoneNumber = "2348136828054";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}
