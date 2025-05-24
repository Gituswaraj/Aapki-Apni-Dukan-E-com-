import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import ProductBuy from '../../Components/ProductBuy';
import './style.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { getProductById } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, getProductById]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        <div className="product-images">
          <div className="main-image-container">
            <img src={product.image} alt={product.title} className="main-image" />
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-category">{product.category}</div>
          <div className="product-description">{product.description}</div>
          
          {/* Use the ProductBuy component here */}
          <ProductBuy product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;