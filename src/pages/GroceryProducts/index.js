import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './style.css';

const GroceryProducts = () => {
  const { addToCart } = useContext(CartContext);
  
  // Sample grocery products
  const groceryProducts = [
    {
      id: 101,
      title: "Real Fruit Power Masala Mixed Fruit Juice",
      category: "Beverages",
      price: 120,
      image: "https://m.media-amazon.com/images/I/61eDXs9QPML.jpg",
      description: "A refreshing mixed fruit juice with a hint of masala."
    },
    {
      id: 102,
      title: "Organic Brown Rice",
      category: "Grains",
      price: 85,
      image: "https://m.media-amazon.com/images/I/71Y56-ZGdHL._SL1500_.jpg",
      description: "Premium quality organic brown rice."
    },
    {
      id: 103,
      title: "Extra Virgin Olive Oil",
      category: "Cooking Oils",
      price: 450,
      image: "https://m.media-amazon.com/images/I/61oPIzxKBaL._SL1500_.jpg",
      description: "Cold-pressed extra virgin olive oil from Mediterranean olives."
    },
    {
      id: 104,
      title: "Organic Honey",
      category: "Sweeteners",
      price: 350,
      image: "https://m.media-amazon.com/images/I/61KJeIFwRtL._SL1500_.jpg",
      description: "Pure organic honey collected from wildflower fields."
    },
    {
      id: 105,
      title: "Whole Wheat Pasta",
      category: "Pasta",
      price: 75,
      image: "https://m.media-amazon.com/images/I/71Rj3InxQlL._SL1500_.jpg",
      description: "Nutritious whole wheat pasta for a healthy meal."
    },
    {
      id: 106,
      title: "Basmati Rice",
      category: "Grains",
      price: 180,
      image: "https://m.media-amazon.com/images/I/61Ym1bwpMRL._SL1500_.jpg",
      description: "Premium aged basmati rice with aromatic flavor."
    }
  ];

  // State to track quantity for each product
  const [quantities, setQuantities] = useState(
    groceryProducts.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities({
        ...quantities,
        [productId]: newQuantity
      });
    }
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: quantities[product.id]
    });
    
    // Show notification
    alert(`${quantities[product.id]} ${product.title} added to cart!`);
  };

  return (
    <div className="grocery-container">
      <h1>Grocery Products</h1>
      
      <div className="grocery-grid">
        {groceryProducts.map((product) => (
          <div key={product.id} className="grocery-card">
            <div className="grocery-image-container">
              <img src={product.image} alt={product.title} className="grocery-image" />
            </div>
            
            <div className="grocery-details">
              <h3 className="grocery-title">{product.title}</h3>
              <p className="grocery-category">{product.category}</p>
              <p className="grocery-price">₹{product.price.toFixed(2)}</p>
              
              <div className="quantity-control">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                  disabled={quantities[product.id] <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{quantities[product.id]}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                >
                  +
                </button>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-cart-container">
        <Link to="/cart" className="view-cart-btn">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default GroceryProducts;