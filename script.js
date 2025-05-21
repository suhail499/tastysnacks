
const products = [
  { id: 1, name: "Baked Chips", price: 2.5 },
  { id: 2, name: "Granola Bar", price: 1.75 },
  { id: 3, name: "Fruit Bites", price: 3.0 }
];
const cart = [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price.toFixed(2);
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = \`
      <h3>\${product.name}</h3>
      <p>Price: $\${product.price.toFixed(2)}</p>
      <button onclick="addToCart(\${product.id})">Add to Cart</button>
    \`;
    grid.appendChild(div);
  });
});
