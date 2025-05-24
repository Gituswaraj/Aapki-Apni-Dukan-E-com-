import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const OrderSuccess = () => {
  // Generate a random order number for demo purposes
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="order-success-container">
      <div className="order-success-card">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p className="order-number">Order #{orderNumber}</p>
        <p className="success-message">
          Thank you for your purchase. We've received your order and will begin processing it right away.
          You will receive an email confirmation shortly.
        </p>
        
        <div className="order-details">
          <h2>Order Details</h2>
          <div className="detail-row">
            <span>Order Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="detail-row">
            <span>Payment Method:</span>
            <span>Credit Card</span>
          </div>
          <div className="detail-row">
            <span>Shipping Address:</span>
            <span>123 Main St, Anytown, AN 12345</span>
          </div>
        </div>
        
        <div className="success-actions">
          <Link to="/orders" className="view-orders-btn">View My Orders</Link>
          <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;