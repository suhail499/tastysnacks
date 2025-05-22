const prices = {
  "product1": { INR: 100, USD: 1.2 },
  "product2": { INR: 150, USD: 1.8 }
};

const currencySelector = document.getElementById("currency-selector");

currencySelector.addEventListener("change", updatePrices);

function updatePrices() {
  const selectedCurrency = currencySelector.value;
  document.querySelectorAll(".price").forEach(el => {
    const id = el.dataset.id;
    el.textContent = selectedCurrency === "INR" ? `₹${prices[id].INR}` : `$${prices[id].USD}`;
  });
}

fetch("https://ipapi.co/json")
  .then(response => response.json())
  .then(data => {
    if (data.country_code === "IN") {
      currencySelector.value = "INR";
    } else {
      currencySelector.value = "USD";
    }
    updatePrices();
  });