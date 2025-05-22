function addToCart(product, price) {
  const cart = document.getElementById("cart");
  const item = document.createElement("li");
  item.textContent = `${product} - ₹${price}`;
  cart.appendChild(item);
}
