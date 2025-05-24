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
const authModal = new bootstrap.Modal(document.getElementById('authModal'));
let currentUser = null;

// प्रोडक्ट डेटा (असली ऐप में Firebase से लोड होगा)
const products = [
    { id: 1, name: "Masala Chips", price: 20, rating: 4.5, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Chocolate Cookies", price: 50, rating: 4.2, image: "https://via.placeholder.com/150" }
];

// प्रोडक्ट्स दिखाएं
function renderProducts(products) {
    productList.innerHTML = products.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">₹${product.price} | ⭐${product.rating}</p>
                    <button class="btn btn-warning add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// साइन अप/लॉगिन
document.getElementById('signupBtn').addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = "Sign Up";
    document.getElementById('emailField').style.display = 'block';
    document.getElementById('submitAuth').textContent = "Sign Up";
    authModal.show();
});

// Firebase Auth (Phone/Email)
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (document.getElementById('submitAuth').textContent === "Sign Up") {
        // साइन अप लॉजिक
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Account created!");
                authModal.hide();
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    } else {
        // लॉगिन लॉजिक
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Logged in!");
                authModal.hide();
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }
});

// कार्ट फंक्शन
let cart = [];
function updateCart() {
    cartCount.textContent = cart.length;
}

// इनिशियल लोड
renderProducts(products);
