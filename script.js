const products = [
  {
    id: 1,
    name: 'Aurora Smartwatch',
    category: 'Electronics',
    price: 149.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description:
      'A sleek smartwatch with fitness tracking, heart rate monitoring, and a vibrant AMOLED display designed for daily wear.',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Velora Headphones',
    category: 'Electronics',
    price: 89.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium wireless headphones offering deep bass, active noise cancellation, and all-day comfort.',
    badge: 'Hot Deal'
  },
  {
    id: 3,
    name: 'Nova Running Shoes',
    category: 'Sports',
    price: 119.5,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description:
      'Lightweight, breathable sneakers that deliver a smooth and responsive run for training and everyday wear.',
    badge: 'Trending'
  },
  {
    id: 4,
    name: 'Halo Lamp',
    category: 'Home',
    price: 72.25,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description:
      'A modern ambient lamp with warm dimmable light to create a cozy and elegant atmosphere in your home.',
    badge: 'New'
  },
  {
    id: 5,
    name: 'Bloom Skincare Kit',
    category: 'Beauty',
    price: 64.0,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    description:
      'A radiant skincare routine featuring cleanser, serum, and moisturizer for a healthy-looking glow.',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Luma Backpack',
    category: 'Fashion',
    price: 58.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    description:
      'Minimalist and durable everyday backpack with spacious compartments and a premium finish.',
    badge: 'Limited'
  },
  {
    id: 7,
    name: 'Pure Ceramic Mug',
    category: 'Home',
    price: 25.5,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    description:
      'Handcrafted ceramic mug perfect for tea, coffee, and warm moments at home or in the office.',
    badge: 'Must Have'
  },
  {
    id: 8,
    name: 'Drift Travel Bottle',
    category: 'Beauty',
    price: 34.0,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    description:
      'Insulated stainless steel bottle that keeps drinks cold or hot while on the move and outdoors.',
    badge: 'Eco Pick'
  },
  {
    id: 9,
    name: 'Royal Satin Saree',
    category: 'Saree',
    price: 149.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    description:
      'Elegant handcrafted saree with a rich satin finish and graceful drape for festive and everyday elegance.',
    badge: 'Festive Glow'
  },
  {
    id: 10,
    name: 'Sunny Kids Set',
    category: 'Kids Wear',
    price: 59.5,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80',
    description:
      'Comfortable and playful kids wear set made for active days, soft fabric, and adorable style.',
    badge: 'New Arrival'
  },
  {
    id: 11,
    name: 'Urban Slim Shirt',
    category: 'Mens Wear',
    price: 78.0,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description:
      'Tailored modern shirt with a polished fit, breathable fabric, and versatile styling for everyday wear.',
    badge: 'Premium'
  },
  {
    id: 12,
    name: 'Chef Pro Kitchen Set',
    category: 'Kitchen Sets',
    price: 132.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80',
    description:
      'Complete kitchen starter set with practical cookware pieces designed for home cooking and family meals.',
    badge: 'Home Must-Have'
  },
  {
    id: 13,
    name: 'Brainy Builder Toys',
    category: 'Toys',
    price: 44.99,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
    description:
      'Colorful educational toy set that encourages creativity, problem-solving, and imaginative play.',
    badge: 'Top Rated'
  }
];

const categories = ['All', ...new Set(products.map((product) => product.category))];

const cartKey = 'lunaCart';
const accountKey = 'lunaAccount';
const wishlistKey = 'lunaWishlist';
const reviewKey = 'lunaReviews';
const defaultCart = [];

let currentCategory = 'All';
let searchTerm = '';
let selectedProduct = products[0];

const state = {
  cart: JSON.parse(localStorage.getItem(cartKey)) || defaultCart,
  account: JSON.parse(localStorage.getItem(accountKey)) || null,
  wishlist: JSON.parse(localStorage.getItem(wishlistKey)) || [],
  reviews: JSON.parse(localStorage.getItem(reviewKey)) || [],
};

const elements = {
  productGrid: document.getElementById('productGrid'),
  categoryList: document.getElementById('categoryList'),
  cartCount: document.getElementById('cartCount'),
  cartItems: document.getElementById('cartItems'),
  cartSummary: document.getElementById('cartSummary'),
  checkoutSummary: document.getElementById('checkoutSummary'),
  productDetail: document.getElementById('productDetail'),
  toast: document.getElementById('toast'),
  headerSearch: document.getElementById('headerSearch'),
  orderMessage: document.getElementById('orderMessage'),
  checkoutForm: document.getElementById('checkoutForm')
};

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(state.cart));
}

function saveAccount(account) {
  localStorage.setItem(accountKey, JSON.stringify(account));
  state.account = account;
}

function saveWishlist() {
  localStorage.setItem(wishlistKey, JSON.stringify(state.wishlist));
}

function saveReviews() {
  localStorage.setItem(reviewKey, JSON.stringify(state.reviews));
}

function getProductReviews(productId) {
  return state.reviews.filter((review) => review.productId === Number(productId));
}

function getReviewStats(productId) {
  const reviews = getProductReviews(productId);
  const total = reviews.length;
  const average = total
    ? reviews.reduce((sum, review) => sum + Number(review.rating), 0) / total
    : 0;

  return { reviews, total, average };
}

function updateOrderActionButtons() {
  const cancelOrderBtn = document.getElementById('cancelOrderBtn');
  if (!cancelOrderBtn) return;

  cancelOrderBtn.style.display = state.cart.length ? 'inline-flex' : 'none';
}

function toggleWishlist(productId) {
  const id = Number(productId);
  const exists = state.wishlist.includes(id);

  if (exists) {
    state.wishlist = state.wishlist.filter((itemId) => itemId !== id);
    showToast('Removed from wishlist');
  } else {
    state.wishlist = [...state.wishlist, id];
    showToast('Added to wishlist');
  }

  saveWishlist();
  renderProducts();
  renderProductDetail(selectedProduct);
  renderWishlist();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2000);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(value);
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = currentCategory === 'All' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function updateCartCount() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCount.textContent = totalItems;
}

function renderCategories() {
  elements.categoryList.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-btn ${category === currentCategory ? 'active' : ''}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join('');
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    elements.productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>No products found</h3>
        <p>Try another product name or category.</p>
      </div>
    `;
    return;
  }

  elements.productGrid.innerHTML = filteredProducts
    .map(
      (product) => {
        const isWishlisted = state.wishlist.includes(product.id);
        return `
          <article class="product-card" data-id="${product.id}">
            <div class="product-media">
              <img src="${product.image}" alt="${product.name}" />
              <span class="product-badge">${product.badge}</span>
              <button
                class="wishlist-toggle ${isWishlisted ? 'active' : ''}"
                data-action="wishlist-toggle"
                data-id="${product.id}"
                aria-label="Toggle wishlist"
                title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
              >
                ${isWishlisted ? '♥' : '♡'}
              </button>
            </div>
            <div class="product-info">
              <div class="product-row">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">${formatCurrency(product.price)}</span>
              </div>
              <div class="product-rating">
                <span class="star">★</span>
                <span>${product.rating}</span>
              </div>
              <div class="product-actions">
                <button class="view-btn" data-action="details" data-id="${product.id}">View</button>
                <button class="buy-btn" data-action="buy" data-id="${product.id}">Buy</button>
              </div>
              <button class="primary-btn" data-action="add" data-id="${product.id}">Add to Cart</button>
            </div>
          </article>
        `;
      }
    )
    .join('');
}

function getProductById(productId) {
  return products.find((product) => product.id === Number(productId));
}

function renderProductDetail(product) {
  const qty = 1;
  const isWishlisted = state.wishlist.includes(product.id);
  const reviewStats = getReviewStats(product.id);
  const averageRating = reviewStats.average ? reviewStats.average.toFixed(1) : product.rating.toFixed(1);
  const reviewCount = reviewStats.total;
  const reviewMarkup = reviewStats.reviews.length
    ? reviewStats.reviews
        .slice()
        .reverse()
        .map(
          (review) => `
            <div class="review-item">
              <div class="review-head">
                <strong>${review.name}</strong>
                <span>${'★'.repeat(Number(review.rating))}${'☆'.repeat(5 - Number(review.rating))}</span>
              </div>
              <p>${review.comment}</p>
            </div>
          `
        )
        .join('')
    : `
      <div class="empty-state review-empty-state">
        <h3>No reviews yet</h3>
        <p>Be the first to share your thoughts about this product.</p>
      </div>
    `;

  elements.productDetail.innerHTML = `
    <div class="product-detail-inner">
      <div class="detail-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="detail-content">
        <div class="meta-chip">${product.category}</div>
        <h2>${product.name}</h2>
        <div class="detail-price">
          <span>${formatCurrency(product.price)}</span>
          <span class="product-rating"><span class="star">★</span> ${averageRating} (${reviewCount} reviews)</span>
        </div>
        <p class="detail-description">${product.description}</p>
        <div class="detail-meta">
          <span class="meta-chip">Free shipping</span>
          <span class="meta-chip">30-day returns</span>
          <span class="meta-chip">Top rated</span>
        </div>

        <div class="quantity-row">
          <span>Quantity</span>
          <div class="quantity-controls">
            <button class="qty-btn" data-action="decrease-detail" aria-label="Decrease quantity">−</button>
            <span class="qty-value" id="detailQtyValue">${qty}</span>
            <button class="qty-btn" data-action="increase-detail" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="primary-btn" data-action="add-detail" data-id="${product.id}">Add to Cart</button>
          <button class="secondary-btn" data-action="buy-detail" data-id="${product.id}">Buy Now</button>
        </div>

        <button class="secondary-btn" data-action="wishlist-toggle" data-id="${product.id}">
          ${isWishlisted ? '♥ Saved to Wishlist' : '♡ Add to Wishlist'}
        </button>

        <div class="review-section">
          <div class="review-header">
            <h3>Customer Reviews</h3>
            <span>${averageRating} / 5</span>
          </div>

          <form class="review-form" data-product-id="${product.id}">
            <div class="form-row review-form-row">
              <label>
                <span>Name</span>
                <input type="text" name="reviewName" placeholder="Your name" required />
              </label>
              <label>
                <span>Rating</span>
                <select name="reviewRating" required>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </label>
            </div>

            <label>
              <span>Your feedback</span>
              <textarea name="reviewComment" rows="4" placeholder="Tell us about your experience..." required></textarea>
            </label>

            <button type="submit" class="primary-btn full-width review-submit">Submit Review</button>
          </form>

          <div class="review-list">
            ${reviewMarkup}
          </div>
        </div>
      </div>
    </div>
  `;
}

function addToCart(productId, qty = 1) {
  const existing = state.cart.find((item) => item.id === Number(productId));

  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({ id: Number(productId), quantity: qty });
  }

  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
  updateOrderActionButtons();
  showToast('Product added to cart');
}

function decrementCartItem(productId) {
  const item = state.cart.find((cartItem) => cartItem.id === Number(productId));
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.id !== Number(productId));
  }

  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
}

function incrementCartItem(productId) {
  const item = state.cart.find((cartItem) => cartItem.id === Number(productId));
  if (!item) {
    addToCart(productId, 1);
    return;
  }

  item.quantity += 1;
  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
  updateOrderActionButtons();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter((item) => item.id !== Number(productId));
  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
}

function renderCart() {
  if (!state.cart.length) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Cart is empty</h3>
        <p>Add products to your cart to continue shopping.</p>
      </div>
    `;
    elements.cartSummary.innerHTML = `
      <div class="summary-row total">
        <span>Total</span>
        <span>${formatCurrency(0)}</span>
      </div>
      <div class="summary-actions">
        <button class="secondary-btn" data-target="home">Continue Shopping</button>
        <button class="primary-btn" disabled>Proceed to Checkout</button>
      </div>
    `;
    return;
  }

  const cartProducts = state.cart.map((item) => {
    const product = getProductById(item.id);
    return { ...product, quantity: item.quantity };
  });

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 120 ? 0 : 12;
  const total = subtotal + shipping;

  elements.cartItems.innerHTML = cartProducts
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h3>${item.name}</h3>
            <div class="item-price">${formatCurrency(item.price)}</div>
          </div>
          <div class="item-controls">
            <button class="qty-btn" data-action="decrease-cart" data-id="${item.id}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-action="increase-cart" data-id="${item.id}">+</button>
          </div>
          <div class="item-price"><strong>${formatCurrency(item.price * item.quantity)}</strong></div>
          <button class="remove-btn" data-action="remove-cart" data-id="${item.id}">Remove</button>
        </div>
      `
    )
    .join('');

  elements.cartSummary.innerHTML = `
    <div class="summary-row">
      <span>Subtotal</span>
      <span>${formatCurrency(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatCurrency(total)}</span>
    </div>
    <div class="summary-actions">
      <button type="button" class="secondary-btn" data-target="home">Continue Shopping</button>
      <button type="button" class="secondary-btn" data-action="clear-cart">Clear Cart</button>
      <button type="button" class="primary-btn" data-target="checkout">Proceed to Checkout</button>
    </div>
  `;
}

function updateAccountUI() {
  const logoutBtn = document.getElementById('logoutBtn');
  const accountSummary = document.getElementById('accountSummary');
  const registerMessage = document.getElementById('registerMessage');
  const profileNameTitle = document.getElementById('profileNameTitle');

  if (!state.account) {
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (accountSummary) {
      accountSummary.innerHTML = `
        <p>No account registered yet.</p>
        <p>Create an account to save your name, email, phone, and shipping address.</p>
      `;
    }
    if (profileNameTitle) profileNameTitle.textContent = 'Account Profile';
    if (registerMessage) registerMessage.textContent = '';
    return;
  }

  if (logoutBtn) logoutBtn.style.display = 'inline-flex';
  if (profileNameTitle) profileNameTitle.textContent = state.account.name;

  accountSummary.innerHTML = `
    <div><strong>Name:</strong> ${state.account.name}</div>
    <div><strong>Email:</strong> ${state.account.email}</div>
    <div><strong>Phone:</strong> ${state.account.phone}</div>
    <div><strong>Address:</strong> ${state.account.address}</div>
    <div><strong>City:</strong> ${state.account.city}</div>
    <div><strong>PIN:</strong> ${state.account.pin}</div>
  `;
}

function renderAccountSummary() {
  updateAccountUI();
}

function prefillCheckoutForm() {
  if (!state.account) return;

  document.getElementById('customerName').value = state.account.name || '';
  document.getElementById('customerEmail').value = state.account.email || '';
  document.getElementById('customerPhone').value = state.account.phone || '';
  document.getElementById('customerAddress').value = state.account.address || '';
  document.getElementById('customerCity').value = state.account.city || '';
  document.getElementById('customerPin').value = state.account.pin || '';

  const registerName = document.getElementById('registerName');
  const registerEmail = document.getElementById('registerEmail');
  const registerPhone = document.getElementById('registerPhone');
  const registerAddress = document.getElementById('registerAddress');
  const registerCity = document.getElementById('registerCity');
  const registerPin = document.getElementById('registerPin');
  const registerPassword = document.getElementById('registerPassword');

  if (registerName) registerName.value = state.account.name || '';
  if (registerEmail) registerEmail.value = state.account.email || '';
  if (registerPhone) registerPhone.value = state.account.phone || '';
  if (registerAddress) registerAddress.value = state.account.address || '';
  if (registerCity) registerCity.value = state.account.city || '';
  if (registerPin) registerPin.value = state.account.pin || '';
  if (registerPassword) registerPassword.value = state.account.password || '';
}

function renderWishlist() {
  const wishlistElement = document.getElementById('wishlistItems');

  if (!state.wishlist.length) {
    wishlistElement.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>Your wishlist is empty</h3>
        <p>Save your favorite pieces and come back anytime.</p>
      </div>
    `;
    return;
  }

  const wishlistProducts = state.wishlist
    .map((productId) => getProductById(productId))
    .filter(Boolean);

  wishlistElement.innerHTML = wishlistProducts
    .map(
      (product) => `
        <article class="wishlist-item">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" />
            <button class="wishlist-toggle active" data-action="wishlist-toggle" data-id="${product.id}" aria-label="Remove from wishlist">♥</button>
          </div>
          <div class="product-info">
            <div class="product-row">
              <h3 class="product-name">${product.name}</h3>
              <span class="product-price">${formatCurrency(product.price)}</span>
            </div>
            <div class="product-rating">
              <span class="star">★</span>
              <span>${product.rating}</span>
            </div>
            <div class="product-actions">
              <button class="view-btn" data-action="details" data-id="${product.id}">View</button>
              <button class="buy-btn" data-action="add" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderCheckoutSummary() {
  if (!state.cart.length) {
    elements.checkoutSummary.innerHTML = `
      <div class="empty-state">
        <h3>Cart is empty</h3>
        <p>Choose a few products before checkout.</p>
      </div>
    `;
    return;
  }

  const cartProducts = state.cart.map((item) => {
    const product = getProductById(item.id);
    return { ...product, quantity: item.quantity };
  });

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 120 ? 0 : 12;
  const total = subtotal + shipping;

  elements.checkoutSummary.innerHTML = `
    <div class="checkout-summary-list">
      ${cartProducts
        .map(
          (product) => `
            <div class="checkout-item">
              <span>${product.name} x ${product.quantity}</span>
              <strong>${formatCurrency(product.price * product.quantity)}</strong>
            </div>
          `
        )
        .join('')}
      <div class="checkout-item">
        <span>Subtotal</span>
        <strong>${formatCurrency(subtotal)}</strong>
      </div>
      <div class="checkout-item">
        <span>Shipping</span>
        <strong>${shipping === 0 ? 'Free' : formatCurrency(shipping)}</strong>
      </div>
      <div class="checkout-item" style="border-top: 1px solid var(--border); padding-top: 12px; font-size: 1.2rem;">
        <span>Total</span>
        <strong>${formatCurrency(total)}</strong>
      </div>
    </div>
  `;
}

function showPage(pageId, scrollTarget = null) {
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.toggle('active', page.id === pageId);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.target === pageId && button.dataset.scroll !== 'categories');
  });

  if (scrollTarget) {
    const target = document.getElementById(scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function navigateToProduct(productId) {
  selectedProduct = getProductById(productId);
  renderProductDetail(selectedProduct);
  showPage('product');
}

function handleHeaderSearch() {
  searchTerm = elements.headerSearch.value.trim();
  currentCategory = 'All';
  renderCategories();
  renderProducts();
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
  elements.orderMessage.textContent = '';
  elements.orderMessage.className = 'order-message';
  const cancelOrderBtn = document.getElementById('cancelOrderBtn');
  if (cancelOrderBtn) cancelOrderBtn.style.display = 'none';
  updateOrderActionButtons();
}

function cancelOrder() {
  if (!state.cart.length) {
    elements.orderMessage.textContent = 'There is no active order to cancel.';
    elements.orderMessage.className = 'order-message error';
    return;
  }

  state.cart = [];
  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
  elements.orderMessage.textContent = 'Your order has been cancelled successfully.';
  elements.orderMessage.className = 'order-message success';
  document.getElementById('checkoutForm').reset();
  document.getElementById('cancelOrderBtn').style.display = 'none';
  updateOrderActionButtons();
}

function logoutAccount() {
  state.account = null;
  localStorage.removeItem(accountKey);
  const form = document.getElementById('registerForm');
  if (form) form.reset();
  renderAccountSummary();
  renderCheckoutSummary();
  prefillCheckoutForm();
  const registerMessage = document.getElementById('registerMessage');
  if (registerMessage) {
    registerMessage.textContent = 'You have been logged out.';
    registerMessage.className = 'order-message success';
  }
}

function registerAccount(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const account = {
    name: document.getElementById('registerName').value.trim(),
    email: document.getElementById('registerEmail').value.trim(),
    phone: document.getElementById('registerPhone').value.trim(),
    address: document.getElementById('registerAddress').value.trim(),
    city: document.getElementById('registerCity').value.trim(),
    pin: document.getElementById('registerPin').value.trim(),
    password: document.getElementById('registerPassword').value.trim(),
  };

  const registerMessage = document.getElementById('registerMessage');

  if (!account.name || !account.email || !account.phone || !account.address || !account.city || !account.pin || !account.password) {
    registerMessage.textContent = 'Please complete all fields to create your account.';
    registerMessage.className = 'order-message error';
    return;
  }

  saveAccount(account);
  updateAccountUI();
  renderAccountSummary();
  prefillCheckoutForm();
  registerMessage.textContent = 'Account registered successfully! Your address details are now saved.';
  registerMessage.className = 'order-message success';
  form.reset();
}

function placeOrder(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const customerName = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const city = document.getElementById('customerCity').value.trim();
  const pin = document.getElementById('customerPin').value.trim();

  if (!customerName || !email || !phone || !address || !city || !pin) {
    elements.orderMessage.textContent = 'Please fill out all required information.';
    elements.orderMessage.className = 'order-message error';
    return;
  }

  if (!state.cart.length) {
    elements.orderMessage.textContent = 'Your cart is empty. Add a product before checkout.';
    elements.orderMessage.className = 'order-message error';
    return;
  }

  elements.orderMessage.textContent = `Order placed successfully for ${customerName}! Thank you for shopping with Carthub.`;
  elements.orderMessage.className = 'order-message success';

  state.cart = [];
  saveCart();
  updateCartCount();
  renderCart();
  renderCheckoutSummary();
  form.reset();
  document.getElementById('cancelOrderBtn').style.display = 'none';
  updateOrderActionButtons();
}

function submitReview(event) {
  event.preventDefault();

  const form = event.target.closest('.review-form');
  if (!form) return;

  const productId = Number(form.dataset.productId);
  const name = form.elements.reviewName.value.trim();
  const rating = Number(form.elements.reviewRating.value);
  const comment = form.elements.reviewComment.value.trim();

  if (!name || !comment) {
    showToast('Please enter your name and feedback.');
    return;
  }

  state.reviews.push({
    id: Date.now(),
    productId,
    name,
    rating,
    comment,
    createdAt: new Date().toISOString(),
  });

  saveReviews();
  const product = getProductById(productId);
  renderProductDetail(product);
  showToast('Thanks for your review!');
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-action]');
    const navButton = event.target.closest('[data-target]');

    if (actionButton) {
      const productId = actionButton.dataset.id;
      const action = actionButton.dataset.action;

      if (action === 'details') {
        navigateToProduct(productId);
      }

      if (action === 'add') {
        addToCart(productId, 1);
      }

      if (action === 'buy') {
        addToCart(productId, 1);
        showPage('cart');
      }

      if (action === 'add-detail') {
        const quantity = Number(document.getElementById('detailQtyValue').textContent);
        addToCart(productId, quantity);
      }

      if (action === 'buy-detail') {
        const quantity = Number(document.getElementById('detailQtyValue').textContent);
        addToCart(productId, quantity);
        showPage('checkout');
      }

      if (action === 'increase-detail') {
        const value = document.getElementById('detailQtyValue');
        value.textContent = Number(value.textContent) + 1;
      }

      if (action === 'decrease-detail') {
        const value = document.getElementById('detailQtyValue');
        const currentValue = Number(value.textContent);
        if (currentValue > 1) value.textContent = currentValue - 1;
      }

      if (action === 'increase-cart') {
        incrementCartItem(productId);
      }

      if (action === 'decrease-cart') {
        decrementCartItem(productId);
      }

      if (action === 'remove-cart') {
        removeCartItem(productId);
      }

      if (action === 'clear-cart') {
        clearCart();
      }

      if (action === 'wishlist-toggle') {
        toggleWishlist(productId);
      }
    }

    if (navButton) {
      const target = navButton.dataset.target;
      const scrollTarget = navButton.dataset.scroll;

      if (target === 'home') {
        showPage('home', scrollTarget || null);
      }

      if (target === 'cart') {
        showPage('cart');
      }

      if (target === 'wishlist') {
        showPage('wishlist');
      }

      if (target === 'account') {
        showPage('account');
      }

      if (target === 'checkout') {
        showPage('checkout');
      }
    }

    const categoryButton = event.target.closest('[data-category]');
    if (categoryButton) {
      currentCategory = categoryButton.dataset.category;
      renderCategories();
      renderProducts();
    }
  });

  document.addEventListener('submit', (event) => {
    if (event.target.closest('.review-form')) {
      submitReview(event);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      elements.toast.classList.remove('show');
    }
  });

  elements.headerSearch.addEventListener('input', handleHeaderSearch);
  elements.checkoutForm.addEventListener('submit', placeOrder);

  const cancelOrderBtn = document.getElementById('cancelOrderBtn');
  if (cancelOrderBtn) {
    cancelOrderBtn.addEventListener('click', cancelOrder);
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', registerAccount);
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutAccount);
  }
}

function init() {
  updateCartCount();
  renderCategories();
  renderProducts();
  renderCart();
  renderCheckoutSummary();
  renderAccountSummary();
  renderWishlist();
  prefillCheckoutForm();
  renderProductDetail(selectedProduct);
  updateOrderActionButtons();
  bindEvents();
  showPage('home');
}

init();
