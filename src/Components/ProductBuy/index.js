import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './style.css';

const ProductBuy = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show notification that item was added
    alert(`${quantity} ${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="product-buy-container">
      <div className="product-price-container">
        <span className="product-price">₹{product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="product-old-price">₹{product.oldPrice.toFixed(2)}</span>
        )}
        {product.discount && (
          <span className="product-discount">{product.discount}% Off</span>
        )}
      </div>

      <div className="product-stock">
        {product.inStock ? (
          <span className="in-stock">In Stock</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>

      <div className="quantity-selector">
        <button 
          className="quantity-btn" 
          onClick={handleDecreaseQuantity}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input 
          type="number" 
          className="quantity-input" 
          value={quantity} 
          readOnly 
        />
        <button 
          className="quantity-btn" 
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>

      <div className="product-actions">
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
        <button 
          className="buy-now-btn"
          onClick={handleBuyNow}
          disabled={!product.inStock}
        >
          Buy Now
        </button>
      </div>

      <div className="product-delivery">
        <p>Free delivery available</p>
        <p>30-day return policy</p>
      </div>
    </div>
  );
};

export default ProductBuy;