import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch from an API
    // For now, we'll use sample data
    const fetchProducts = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          const sampleProducts = [
            {
              id: 1,
              title: "Amul Butter",
              category: "Dairy",
              price: 30,
              quantity: "500 ml",
              description: "Fresh Amul butter, perfect for breakfast.",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/86446a.jpg"
            },
            {
              id: 2,
              title: "Lay's Magic Masala",
              category: "Snacks",
              price: 45,
              quantity: "150g",
              description: "Crispy potato chips with magic masala flavor.",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/24194a.jpg"
            },
            // Add more sample products here
          ];

          const productCategories = [...new Set(sampleProducts.map(p => p.category))];
          
          setProducts(sampleProducts);
          setCategories(productCategories);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  const value = {
    products,
    categories,
    loading,
    error,
    getProductById,
    getProductsByCategory
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};