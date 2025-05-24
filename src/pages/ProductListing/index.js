import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import './style.css';

const ProductListing = () => {
  const productContext = useContext(ProductContext);
  const { addToCart } = useContext(CartContext) || { addToCart: () => {} };
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  
  // Use products from context or initialize with empty array
  const products = productContext?.products || [];
  const loading = productContext?.loading || false;
  const error = productContext?.error || null;

  useEffect(() => {
    // Check if fetchProducts exists before calling it
    if (productContext && typeof productContext.fetchProducts === 'function') {
      productContext.fetchProducts();
    } else {
      console.log('fetchProducts function is not available in ProductContext');
    }
  }, [productContext]);

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product, 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (productContext && typeof productContext.fetchProducts === 'function') {
      productContext.fetchProducts({ category });
    }
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    if (productContext && typeof productContext.fetchProducts === 'function') {
      productContext.fetchProducts({ 
        sort: option, 
        category: selectedCategory !== 'all' ? selectedCategory : null 
      });
    }
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-listing-container">
      <div className="product-listing-header">
        <h1>Our Products</h1>
        <div className="sort-options">
          <span className="sort-label">Sort by:</span>
          <select className="sort-select" value={sortOption} onChange={handleSortChange}>
            <option value="newest">Newest</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <h3 className="filter-title">Categories</h3>
          <div className="filter-options">
            <div 
              className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All
            </div>
            <div 
              className={`filter-option ${selectedCategory === 'fruits' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('fruits')}
            >
              Fruits
            </div>
            <div 
              className={`filter-option ${selectedCategory === 'vegetables' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('vegetables')}
            >
              Vegetables
            </div>
            <div 
              className={`filter-option ${selectedCategory === 'dairy' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('dairy')}
            >
              Dairy
            </div>
            <div 
              className={`filter-option ${selectedCategory === 'bakery' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('bakery')}
            >
              Bakery
            </div>
          </div>
        </div>
      </div>

      <div className="product-count">
        Showing {products.length} products
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id || product.id} className="product-card">
            <Link to={`/products/${product._id || product.id}`}>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
            </Link>
            <div className="product-category">
              {product.category}
            </div>
            <Link to={`/products/${product._id || product.id}`}>
              <h3 className="product-title">{product.title}</h3>
            </Link>
            <div className="product-price">₹{product.price}</div>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {products.length === 0 && !loading && (
        <div className="no-products">
          <p>No products found. Try a different category or search term.</p>
          <button onClick={() => handleCategoryChange('all')} className="reset-filters-btn">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListing;