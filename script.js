let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(({ item, price }) => {
    const li = document.createElement("li");
    li.textContent = `${item} - ₹${price}`;
    cartList.appendChild(li);
  });
}
