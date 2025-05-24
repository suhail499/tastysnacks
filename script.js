let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
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
    li.textContent = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = total;
}

document.addEventListener('DOMContentLoaded', updateCart);




document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  const message = document.getElementById('message');

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const userExists = users.some(user => user.email === email);
      if (userExists) {
        message.textContent = "User already exists. Please login.";
        message.style.color = "red";
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      message.textContent = "Signup successful! Redirecting to login...";
      message.style.color = "green";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  }
});

