

import React from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';  // Import Link for navigation

const products = [
  { id: 1, name: 'Mobile', price: '$10', image: '/images/Mobile.jpg' },
  { id: 2, name: 'HeadPhone', price: '$20', image: '/images/HeadPhone.jpg' },
  { id: 3, name: 'Laptop', price: '$30', image: '/images/Laptop.jpg' },
  { id: 4, name: 'EarBuds', price: '$40', image: '/images/EarBuds.jpg' },
  { id: 5, name: 'PhotoFrames', price: '$50', image: '/images/PhotoFrames.jpg' },
  { id: 6, name: 'MobilePhone', price: '$60', image: '/images/MobilePhone.jpg' }
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <Link to="/" className="back-to-home-button">Back to Home</Link>
    </div>
  );
};

export default ProductPage;


