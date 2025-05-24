import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1jBxatuWQd56C5trcdOEs9u7wW6100dM",
  authDomain: "tastysnacks-8e725.firebaseapp.com",
  projectId: "tastysnacks-8e725",
  storageBucket: "tastysnacks-8e725.appspot.com",
  appId: "1:497024204571:web:c0429059c80434f0705dbe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load Products
document.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const productList = document.getElementById('productList');
  
  querySnapshot.forEach(doc => {
    const product = doc.data();
    productList.innerHTML += `
      <div class="col-md-3">
        <div class="card product-card h-100">
          <img src="${product.image}" class="product-img p-3">
          <div class="card-body">
            <h6>${product.name}</h6>
            <div class="d-flex justify-content-between">
              <span class="text-success fw-bold">₹${product.price}</span>
              <small class="text-warning"><i class="fas fa-star"></i> ${product.rating}</small>
            </div>
            <button class="btn btn-primary btn-sm w-100 mt-2 add-to-cart" data-id="${doc.id}">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
});
