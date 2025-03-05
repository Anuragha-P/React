
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

const validUsername = 'user123';
const validPassword = 'password123';


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();

  
  if (username === validUsername && password === validPassword) {
    window.location.href = 'catalog.html';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});


const productCatalog = document.getElementById('productCatalog');


const products = [
  { name: 'Product 1', description: 'Description for product 1', image: 'https://via.placeholder.com/150' },
  { name: 'Product 2', description: 'Description for product 2', image: 'https://via.placeholder.com/150' },
  { name: 'Product 3', description: 'Description for product 3', image: 'https://via.placeholder.com/150' },
  { name: 'Product 4', description: 'Description for product 4', image: 'https://via.placeholder.com/150' },
];


if (productCatalog) {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button class="btn">Add to Cart</button>
    `;

    productCatalog.appendChild(productDiv);
  });
}


const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
}



