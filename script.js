let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<li>Your cart is empty.</li>';
    totalElement.textContent = '0';
    return;
  }

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ₹${item.price}`;
    cartContainer.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = total;
}

document.addEventListener('DOMContentLoaded', updateCart);
