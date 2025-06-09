<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TastySnacks - Premium Online Snack Store | Fast Delivery</title>
  <meta name="description" content="Buy premium quality snacks online at TastySnacks. Enjoy fast delivery of chips, cookies, chocolates, nuts and Indian snacks at best prices.">
  <meta name="keywords" content="online snacks, buy chips, cookies delivery, Indian snacks, healthy snacks">
  <meta name="author" content="TastySnacks">
  <meta property="og:title" content="TastySnacks - Premium Online Snack Store">
  <meta property="og:description" content="Buy premium quality snacks online with fast delivery">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://suhail499.github.io/tastysnacks/">
  <link rel="canonical" href="https://suhail499.github.io/tastysnacks/">
  
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
  <link rel="manifest" href="assets/favicon/site.webmanifest">
  
  <!-- CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Skip to Content Link (Accessibility) -->
  <a href="#main-content" class="skip-link visually-hidden-focusable">Skip to main content</a>

  <!-- Announcement Bar -->
  <div class="announcement-bar bg-dark text-white py-2 text-center">
    <div class="container">
      <p class="mb-0 small">🎉 Free shipping on orders over ₹299 | Use code <strong>TASTY10</strong> for 10% off first order</p>
    </div>
  </div>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="index.html" aria-label="TastySnacks Home">
        <img src="assets/logo.png" alt="TastySnacks Logo" height="40" class="me-2 d-inline-block align-top">
        TastySnacks
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="products.html">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        
        <!-- Search Bar -->
        <form class="d-flex search-box mx-lg-3 my-2 my-lg-0" role="search">
          <div class="input-group">
            <input class="form-control rounded-0 rounded-start" type="search" placeholder="Search snacks..." id="searchInput" aria-label="Search products">
            <button class="btn btn-warning rounded-0 rounded-end px-3" type="submit" aria-label="Search">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        
        <!-- Right Menu -->
        <div class="d-flex align-items-center ms-lg-auto gap-2 gap-lg-3">
          <a href="account.html" class="btn btn-light btn-sm px-3" aria-label="My Account">
            <i class="fas fa-user me-1"></i> <span class="d-none d-lg-inline">Account</span>
          </a>
          <a href="wishlist.html" class="btn btn-light btn-sm px-3 position-relative" aria-label="Wishlist">
            <i class="fas fa-heart me-1"></i> <span class="d-none d-lg-inline">Wishlist</span>
            <span id="wishlistCount" class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">0</span>
          </a>
          <a href="cart.html" class="btn btn-light btn-sm px-3 position-relative" aria-label="Shopping Cart">
            <i class="fas fa-shopping-cart me-1"></i> <span class="d-none d-lg-inline">Cart</span>
            <span id="cartCount" class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">0</span>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main id="main-content" class="main-content">
    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h1 class="display-4 fw-bold mb-3">Snack Happiness Delivered</h1>
            <p class="lead mb-4">Discover 1000+ premium snacks with free delivery on orders above ₹299</p>
            <div class="d-flex gap-3">
              <a href="products.html" class="btn btn-primary btn-lg px-4 fw-bold">Shop Now</a>
              <a href="#featured" class="btn btn-outline-light btn-lg px-4">Explore</a>
            </div>
            <div class="trust-badges mt-4 d-flex flex-wrap gap-3">
              <div class="badge-item">
                <i class="fas fa-shield-alt me-2"></i>100% Quality
              </div>
              <div class="badge-item">
                <i class="fas fa-truck me-2"></i>Fast Delivery
              </div>
              <div class="badge-item">
                <i class="fas fa-undo me-2"></i>Easy Returns
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="assets/hero-image.png" alt="Variety of TastySnacks products" class="img-fluid rounded-3 shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Shop by Category</h2>
        <div class="row g-4">
          <div class="col-6 col-md-4 col-lg-2">
            <a href="products.html?category=chips" class="category-card">
              <div class="card h-100 border-0 shadow-sm">
                <img src="assets/categories/chips.jpg" class="card-img-top" alt="Chips & Crisps">
                <div class="card-body text-center">
                  <h3 class="h6 mb-0">Chips & Crisps</h3>
                </div>
              </div>
            </a>
          </div>
          <!-- Repeat for other categories -->
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section id="featured" class="featured-products py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-5">
          <h2 class="mb-0">Featured Products</h2>
          <a href="products.html" class="btn btn-outline-primary">View All</a>
        </div>
        
        <div class="row g-4" id="featuredProducts">
          <!-- Products loaded via JavaScript -->
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">What Our Customers Say</h2>
        <div class="row">
          <!-- Testimonial cards -->
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter py-5 bg-primary text-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mb-3">Join Our Snack Community</h2>
            <p class="mb-4">Subscribe to get exclusive offers, new product alerts, and snack inspiration!</p>
            <form class="newsletter-form">
              <div class="input-group mx-auto" style="max-width: 500px;">
                <input type="email" class="form-control" placeholder="Your email address" required>
                <button class="btn btn-dark" type="submit">Subscribe</button>
              </div>
              <div class="form-text mt-2">We respect your privacy. Unsubscribe at any time.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 mb-4">
          <img src="assets/logo-white.png" alt="TastySnacks Logo" height="40" class="mb-3">
          <p class="mb-3">Delivering happiness through delicious snacks since 2020.</p>
          <div class="social-icons mb-3">
            <a href="#" class="text-white me-3" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white me-3" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-white me-3" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="app-badges">
            <a href="#" class="d-inline-block me-2 mb-2">
              <img src="assets/google-play-badge.png" alt="Get on Google Play" height="40">
            </a>
            <a href="#" class="d-inline-block mb-2">
              <img src="assets/app-store-badge.png" alt="Download on the App Store" height="40">
            </a>
          </div>
        </div>
        
        <div class="col-6 col-md-3 col-lg-2 mb-4">
          <h3 class="h5 mb-3">Shop</h3>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="products.html" class="text-white text-decoration-none">All Products</a></li>
            <li class="mb-2"><a href="products.html?category=new" class="text-white text-decoration-none">New Arrivals</a></li>
            <li class="mb-2"><a href="products.html?category=bestsellers" class="text-white text-decoration-none">Bestsellers</a></li>
            <li class="mb-2"><a href="products.html?category=deals" class="text-white text-decoration-none">Special Offers</a></li>
          </ul>
        </div>
        
        <div class="col-6 col-md-3 col-lg-2 mb-4">
          <h3 class="h5 mb-3">Help</h3>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="faq.html" class="text-white text-decoration-none">FAQs</a></li>
            <li class="mb-2"><a href="shipping.html" class="text-white text-decoration-none">Shipping</a></li>
            <li class="mb-2"><a href="returns.html" class="text-white text-decoration-none">Returns</a></li>
            <li class="mb-2"><a href="contact.html" class="text-white text-decoration-none">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="col-6 col-md-3 col-lg-2 mb-4">
          <h3 class="h5 mb-3">About</h3>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="about.html" class="text-white text-decoration-none">Our Story</a></li>
            <li class="mb-2"><a href="blog.html" class="text-white text-decoration-none">Blog</a></li>
            <li class="mb-2"><a href="careers.html" class="text-white text-decoration-none">Careers</a></li>
            <li class="mb-2"><a href="locations.html" class="text-white text-decoration-none">Store Locator</a></li>
          </ul>
        </div>
        
        <div class="col-6 col-md-3 col-lg-2 mb-4">
          <h3 class="h5 mb-3">Legal</h3>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="terms.html" class="text-white text-decoration-none">Terms</a></li>
            <li class="mb-2"><a href="privacy.html" class="text-white text-decoration-none">Privacy</a></li>
            <li class="mb-2"><a href="cookies.html" class="text-white text-decoration-none">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <hr class="my-4">
      
      <div class="row">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <p class="mb-0 small">&copy; 2023 TastySnacks. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="payment-methods">
            <img src="assets/payments/visa.png" alt="Visa" class="me-2" height="20">
            <img src="assets/payments/mastercard.png" alt="Mastercard" class="me-2" height="20">
            <img src="assets/payments/amex.png" alt="American Express" class="me-2" height="20">
            <img src="assets/payments/paypal.png" alt="PayPal" class="me-2" height="20">
            <img src="assets/payments/upi.png" alt="UPI" height="20">
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/main.js" type="module"></script>
  
  <!-- Structured Data for SEO -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TastySnacks",
      "url": "https://suhail499.github.io/tastysnacks/",
      "logo": "https://suhail499.github.io/tastysnacks/assets/logo.png",
      "description": "Premium online snack store offering fast delivery of chips, cookies, chocolates and more.",
      "sameAs": [
        "https://facebook.com/tastysnacks",
        "https://instagram.com/tastysnacks",
        "https://twitter.com/tastysnacks"
      ]
    }
  </script>
</body>
</html>
