import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Sample product data for development
const sampleProducts = [
  {
    id: 1,
    title: "Real Fruit Power Masala Mixed Fruit Juice",
    category: "Beverages",
    price: 120,
    image: "https://www.shutterstock.com/image-illustration/shopping-basket-food-drinks-full-600nw-2131772405.jpg",
    description: "A refreshing mixed fruit juice with a hint of masala."
  },
  {
    id: 2,
    title: "Fresh Organic Apples",
    category: "Fruits",
    price: 80,
    image: "https://www.shutterstock.com/image-illustration/shopping-basket-food-drinks-full-600nw-2131772405.jpg",
    description: "Crisp and juicy organic apples."
  },
  // Add more sample products as needed
];

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch products from API or use sample data
  const fetchProducts = async (filters = {}) => {
    setLoading(true);
    setError(null); // Clear any previous errors
    
    try {
      // For development, use sample data with proper error handling
      let filteredProducts = [...sampleProducts];
      
      if (filters.category && filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(
          product => product.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
      
      if (filters.sort) {
        switch (filters.sort) {
          case 'price-low-to-high':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-high-to-low':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
          default:
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        }
      }

      // Simulate API call with proper error handling
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      if (!Array.isArray(filteredProducts) || filteredProducts.length === 0) {
        throw new Error('No products found');
      }

      setProducts(filteredProducts);
      setLoading(false);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to fetch products. Please try again.');
      setProducts([]); // Clear products on error
      setLoading(false);
    }
  };

  // Function to get a single product by ID
  const getProductById = (productId) => {
    return sampleProducts.find(product => product.id.toString() === productId.toString());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ 
      products, 
      loading, 
      error, 
      fetchProducts,
      getProductById
    }}>
      {children}
    </ProductContext.Provider>
  );
};