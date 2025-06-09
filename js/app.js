// orders.js - Handles loading and displaying order data

document.addEventListener('DOMContentLoaded', function() {
  const ordersList = document.getElementById('ordersList');
  const noOrdersRow = document.getElementById('noOrdersRow');
  
  // Initialize Firebase (replace with your config)
  // const firebaseConfig = {
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_SENDER_ID",
  //   appId: "YOUR_APP_ID"
  // };
  
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // const db = firebase.firestore();
  
  // For demo purposes, we'll use sample data
  // In production, replace this with Firestore data fetching
  loadOrders();
  
  async function loadOrders() {
    try {
      // In production, you would fetch orders from Firestore like this:
      // const querySnapshot = await db.collection("orders")
      //   .where("userId", "==", getCurrentUserId())
      //   .orderBy("orderDate", "desc")
      //   .get();
      
      // For demo, we'll use sample data
      const orders = getSampleOrders();
      
      if (orders.length === 0) {
        noOrdersRow.style.display = 'table-row';
      } else {
        noOrdersRow.remove();
        renderOrders(orders);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
      noOrdersRow.innerHTML = '<td colspan="6" class="empty-message">Error loading orders. Please try again later.</td>';
      noOrdersRow.style.display = 'table-row';
    }
  }
  
  function renderOrders(orders) {
    ordersList.innerHTML = '';
    
    orders.forEach(order => {
      const row = document.createElement('tr');
      
      // Format date
      const orderDate = new Date(order.date);
      const formattedDate = orderDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      
      // Determine status class
      let statusClass = '';
      switch(order.status.toLowerCase()) {
        case 'pending':
          statusClass = 'status-pending';
          break;
        case 'delivered':
          statusClass = 'status-delivered';
          break;
        case 'cancelled':
          statusClass = 'status-cancelled';
          break;
        case 'shipped':
          statusClass = 'status-shipped';
          break;
        default:
          statusClass = '';
      }
      
      row.innerHTML = `
        <td>
          <a href="order-details.html?id=${order.id}" class="text-decoration-none">${order.id}</a>
        </td>
        <td>${formattedDate}</td>
        <td>
          <span class="order-item-count">${order.items.length}</span>
          ${order.items.length > 1 ? 'items' : 'item'}
        </td>
        <td>₹${order.total.toLocaleString('en-IN')}</td>
        <td class="order-status ${statusClass}">${order.status}</td>
        <td>
          <a href="order-details.html?id=${order.id}" class="btn btn-sm btn-outline-primary order-details-btn">
            Details
          </a>
        </td>
      `;
      
      ordersList.appendChild(row);
    });
  }
  
  // Helper function to get sample orders (remove in production)
  function getSampleOrders() {
    return [
      {
        id: 'TS-2023-05678',
        date: '2023-05-15',
        items: ['Masala Chips', 'Pani Puri Kit', 'Bhel Mix'],
        total: 345,
        status: 'Delivered'
      },
      {
        id: 'TS-2023-04789',
        date: '2023-04-28',
        items: ['Kurkure Pack', 'Aloo Bhujia'],
        total: 120,
        status: 'Cancelled'
      },
      {
        id: 'TS-2023-06123',
        date: '2023-06-02',
        items: ['Cheese Balls Family Pack', 'Nachos', 'Popcorn', 'Soya Sticks'],
        total: 420,
        status: 'Shipped'
      },
      {
        id: 'TS-2023-06245',
        date: '2023-06-10',
        items: ['Chocolate Cookies'],
        total: 95,
        status: 'Pending'
      }
    ];
  }
  
  // Helper function to get current user ID (implement based on your auth system)
  function getCurrentUserId() {
    // In production, implement this based on your authentication system
    // For example with Firebase Auth:
    // return firebase.auth().currentUser.uid;
    return 'demo-user-id';
  }
});
