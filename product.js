
const products = {
  "iphone-15-pro-max": {
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    price: 799000,
    oldPrice: 899000,
    image: "images/photo-1695048133142-1a20484d2569.jfif",
    description:
      "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    specs: [
      "A17 Pro chip",
      "6.7\" Super Retina XDR display",
      "48MP camera system",
      "Titanium design",
      "USB-C",
      "256GB Storage"
    ]
  },

  "google-pixel": {
    brand: "Google",
    name: "Google Pixel 8 Pro",
    price: 549000,
    oldPrice: null,
    image: "images/google_pixel.jfif",
    description: "The best of Google AI in a stunning design with incredible camera capabilities.",
    specs: [
      "Tensor G3 chip",
      "6.7\" OLED display",
      "50MP Camera",
      "Android 14"
    ]
  },
  "samsung-s24-ultra":{
    brand: "Samsung",
    name: "Samsung Galaxy S24 Ultra",
    price:749000,
    oldPrice:849000,
    image:"images/samsungs21.jfif",
    description: "Galaxy AI powered smartphone with 200MP camera and S Pen included.",
    specs: [
        "Snapdragon 8 Gen 3",
        "6.8 QHD+ Dynamic AMOLED",
        "200MP camera",
        "S Pen included",
        "256GB Storage"
    ]
  },
"iphone-15":{
    brand:"Apple",
    name: "iPhone 15",
    price:749000,
    oldPrice:null,
    image: "images/iphone_15.jfif",
    description: "Dynamic Island, 48MP camera, and the powerful A16 Bionic chip",
    specs:[
        "A16 Bionic chip",
        "6.1 Super Retina XDR display",
        "48MP camera",
        "USB-C",
        "128GB Storage"
    ]
},
"oneplus_12":{
    brand:"Oneplus",
    name:"OnePlus 12",
    price:449000,
    image:"images/oneplus_12.jfif",
    description:"Flagship killer with Hasselblad camera and ultra-fast charging.",
    specs:[
        "Snapdragon 8 Gen 3",
        "6.82 2K LTPO display",
        "Hasselblad camera",
        "100W charging",
        "256GB Storage"
    ]
},
"Airpods_Pro":{
    brand:"Apple",
    name:"AirPods Pro (2nd Gen)",
    price:149000,
    image:"images/Airpods Pro(2nd Gen).jfif",
    description:"Active Noise Cancellation, Adaptive Audio, and USB-C charging case.",
    specs:[
"Active Noise Cancellation",
"Adaptive Audio",
"USB-C charging",
"6 hours battery"
    ]
},
"AnkerPowerbank":{
brand:"Anker",
name:"Anker PowerCore 20000mAh",
price:35000,
image:"images/magsafeCharger.jfif",
description:"Fast wireless charging with perfect alignment every time.",
specs:[
"15W fast charging",
"MagSafe alignment",
"1m cable"
]
},
"MagSafe":{
    brand:"Anker",
name:"Anker PowerCore 20000mAh",
price:29000,
image:"images/magsafeCharger.jfif",
description:"Fast wireless charging with perfect alignment every time.",
specs:[
"15W fast charging",
"MagSafe alignment",
"1m cable"
]
},
"Iphone14":{
  brand:"Apple",
name:"iPhone 14",
price:499000,
image:"images/Iphone14.jfif",
description:"Reliable iPhone with great camera and all-day battery life.",
specs:[
"A15 Bionic chip",
"6.1 Super Retina XDR",
"12MP camera",
"Lightning",
"128GB Storage"
]
},
"Xiaomi14":{
  brand:"Xiaomi",
name:"Xiaomi 14 Ultra",
price:399000,
image:"images/Xiaomi14.jfif",
description:"Professional photography phone with Leica optics.",
specs:[
"Snapdragon 8 Gen 3",
"6.73 LTPO AMOLED",
"Leica camera system",
"90W charging",
"256GB Storage"
]
}
};

// Read ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];

if (!product) {
  document.body.innerHTML = "<h1>Product not found</h1>";
  throw new Error("Invalid product ID");
}

// Inject content
document.getElementById("product-image").src = product.image;
document.getElementById("breadcrumb-product-name").textContent = product.name;
document.getElementById("product-brand").textContent = product.brand;
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent =
  `₦${product.price.toLocaleString()}`;

document.getElementById("product-description").textContent =
  product.description;

if (product.oldPrice) {
  document.getElementById("product-old-price").textContent =
    `₦${product.oldPrice.toLocaleString()}`;
}

// ✅ THIS IS THE IMPORTANT PART (you did it right)
const productSpec = document.querySelector(".product_details_spec");

productSpec.dataset.id = productId;
productSpec.dataset.name = product.name;
productSpec.dataset.brand = product.brand;
productSpec.dataset.price = product.price;
productSpec.dataset.image = product.image;


// Specs
const specsUl = document.getElementById("product-specs");
specsUl.innerHTML = "";
product.specs.forEach(spec => {
  const li = document.createElement("li");
  li.textContent = spec;
  specsUl.appendChild(li);
});
// Related Product
const relatedContainer = document.getElementById("related-products");

Object.entries(products).forEach(([id, item]) => {
  // Skip the current product
  if (id === productId) return;

  const div = document.createElement("div");
  div.className = "item_display_product";

  div.innerHTML = `
    <div class="item_img">
      <a href="product.html?id=${id}">
        <img src="${item.image}" alt="${item.name}">
      </a>
    </div>

    <div class="phone_details">
      <div class="detail_txt">
        <p class="brand">${item.brand}</p>
        <h3>
          <a href="product.html?id=${id}">${item.name}</a>
        </h3>
      </div>

      <div class="price_cart_flex">
        <div class="price">
          <span class="current">₦${item.price.toLocaleString()}</span>
          ${
            item.oldPrice
              ? `<span class="old">₦${item.oldPrice.toLocaleString()}</span>`
              : ""
          }
        </div>
      </div>
    </div>
  `;

  relatedContainer.appendChild(div);
});
document.addEventListener("DOMContentLoaded", () => {
  const productSpec = document.querySelector(".product_details_spec");
  let quantity = 1;

  const qtySpan = productSpec.querySelector(".qty");

  productSpec.querySelector(".increase").onclick = () => {
    quantity++;
    qtySpan.textContent = quantity;
  };

  productSpec.querySelector(".decrease").onclick = () => {
    if (quantity > 1) {
      quantity--;
      qtySpan.textContent = quantity;
    }
  };

  const addBtn = productSpec.querySelector(".add_to_cart");

  addBtn.onclick = () => {
    const cartProduct = {
      id: productSpec.dataset.id,
      name: productSpec.dataset.name,
      brand: productSpec.dataset.brand,
      price: Number(productSpec.dataset.price),
      image: productSpec.dataset.image
    };

    addItemToCart(cartProduct, quantity);

    addBtn.innerHTML = "✔ Added";
    addBtn.disabled = true;

    setTimeout(() => {
      addBtn.innerHTML = "Add to Cart";
      addBtn.disabled = false;
    }, 1500);
  };

  updateCartBadge();
});
