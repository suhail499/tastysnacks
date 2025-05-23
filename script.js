let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>Shopping Cart</h2>';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        cartContainer.innerHTML += `<p>${item.product}: ₹${item.price}</p>`;
        total += item.price;
    });

    cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

// Page load पर cart अपडेट करें
document.addEventListener('DOMContentLoaded', updateCart);
