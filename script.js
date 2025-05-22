
function updateCurrency() {
  const currency = document.getElementById("currency").value;
  const prices = document.querySelectorAll(".price");
  prices.forEach(p => {
    const value = p.dataset[currency.toLowerCase()];
    p.textContent = currency === "INR" ? `₹${value}` : `$${value}`;
  });
}

function addToCart(product, price) {
  const cart = document.getElementById("cart");
  const li = document.createElement("li");
  li.textContent = product + " - ₹" + price;
  cart.appendChild(li);
}
