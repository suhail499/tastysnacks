// Firebase कॉन्फिग (अपना कॉन्फिग यहाँ डालें)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const authModal = new bootstrap.Modal(document.getElementById('authModal'));
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));

// ग्लोबल वेरिएबल्स
let currentUser = null;
let cart = [];

// प्रोडक्ट डेटा (असली ऐप में Firebase से लोड होगा)
const products = [
    { id: 1, name: "Masala Chips", price: 20, rating: 4.5, image: "https://via.placeholder.com/150", category: "Snacks" },
    { id: 2, name: "Chocolate Cookies", price: 50, rating: 4.2, image: "https://via.placeholder.com/150", category: "Sweets" },
    { id: 3, name: "Namkeen Mix", price: 80, rating: 4.7, image: "https://via.placeholder.com/150", category: "Snacks" },
    { id: 4, name: "Gulab Jamun", price: 120, rating: 4.8, image: "https://via.placeholder.com/150", category: "Sweets" }
];

// प्रोडक्ट्स रेंडर करें
function renderProducts(productsToRender) {
    productList.innerHTML = productsToRender.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text mb-0">₹${product.price}</p>
                        <span class="badge bg-warning text-dark">⭐ ${product.rating}</span>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <button class="btn btn-warning w-100 add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // कार्ट बटन इवेंट लिस्नेर्स
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// कार्ट फंक्शन्स
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showAlert(`${product.name} added to cart!`, 'success');
}

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    renderCartItems();
}

function renderCartItems() {
    cartItems.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <div class="input-group" style="width: 120px;">
                    <button class="btn btn-outline-secondary minus-btn" data-id="${item.id}">-</button>
                    <input type="text" class="form-control text-center quantity-input" value="${item.quantity}" readonly>
                    <button class="btn btn-outline-secondary plus-btn" data-id="${item.id}">+</button>
                </div>
            </td>
            <td>₹${item.price * item.quantity}</td>
            <td><button class="btn btn-danger btn-sm remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button></td>
        </tr>
    `).join('');

    // कार्ट टोटल कैलकुलेट करें
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;

    // कार्ट इवेंट्स
    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(id, -1);
        });
    });

    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(id, 1);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showAlert('Item removed from cart!', 'danger');
}

// ऑथ फंक्शन्स
document.getElementById('signupBtn').addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = "Sign Up";
    document.getElementById('emailField').style.display = 'block';
    document.getElementById('submitAuth').textContent = "Sign Up";
    authModal.show();
});

document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = "Login";
    document.getElementById('emailField').style.display = 'none';
    document.getElementById('submitAuth').textContent = "Login";
    authModal.show();
});

document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (document.getElementById('submitAuth').textContent === "Sign Up") {
        // साइन अप
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                currentUser = userCredential.user;
                showAlert('Account created successfully!', 'success');
                authModal.hide();
            })
            .catch((error) => {
                showAlert(error.message, 'danger');
            });
    } else {
        // लॉगिन
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                currentUser = userCredential.user;
                showAlert('Logged in successfully!', 'success');
                authModal.hide();
            })
            .catch((error) => {
                showAlert(error.message, 'danger');
            });
    }
});

// चेकआउट फंक्शन्स
document.getElementById('cartBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showAlert('Your cart is empty!', 'warning');
    } else {
        cartModal.show();
    }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (!currentUser) {
        showAlert('Please login to proceed!', 'warning');
        authModal.show();
    } else {
        cartModal.hide();
        checkoutModal.show();
    }
});

document.getElementById('deliveryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const order = {
        userId: currentUser.uid,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        address: document.getElementById('deliveryAddress').value,
        pincode: document.getElementById('pincode').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        status: 'pending',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Firebase में ऑर्डर सेव करें
    db.collection('orders').add(order)
        .then(() => {
            showAlert('Order placed successfully!', 'success');
            cart = [];
            updateCart();
            checkoutModal.hide();
        })
        .catch((error) => {
            showAlert(error.message, 'danger');
        });
});

// हेल्पर फंक्शन्स
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show fixed-top mx-3 mt-3`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// इनिशियलाइज़ेशन
renderProducts(products);
updateCart();
// Firebase इनिशियलाइज़ेशन
document.addEventListener('DOMContentLoaded', () => {
  console.log("Firebase initialized:", firebase.app().name);
  if (!firebase.app().length) {
    firebase.initializeApp(firebaseConfig);
  }
});
