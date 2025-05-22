
let currentCurrency = "INR";
let exchangeRate = 0.012; // ₹1 = $0.012

function convertPrices() {
  currentCurrency = document.getElementById("currency").value;
  document.querySelectorAll(".product").forEach((product) => {
    const basePrice = product.getAttribute("data-price");
    const priceTag = product.querySelector(".price");
    if (currentCurrency === "USD") {
      priceTag.innerText = "$" + (basePrice * exchangeRate).toFixed(2);
    } else {
      priceTag.innerText = "₹" + basePrice;
    }
  });
}

function addToCart(name, price) {
  const cart = document.getElementById("cart");
  const item = document.createElement("li");
  item.innerText = name + " - " + (currentCurrency === "USD" ? "$" + (price * exchangeRate).toFixed(2) : "₹" + price);
  cart.appendChild(item);
}
