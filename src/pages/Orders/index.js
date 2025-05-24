import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './style.css';

const Orders = () => {
  const { currentUser } = useContext(AuthContext);
  
  // In a real app, you would fetch orders from an API
  const orders = []; // Empty for demo purposes
  
  if (!currentUser) {
    return (
      <div className="orders-container">
        <div className="not-logged-in">
          <h2>Please log in to view your orders</h2>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      
      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map(order => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p className="order-date">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="order-status">{order.status}</div>
              </div>
              
              <div className="order-items">
                {order.items.map(item => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p>Qty: {item.quantity}</p>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <div className="order-total">
                  <span>Total:</span>
                  <span>₹{order.total}</span>
                </div>
                <Link to={`/order/${order.id}`} className="view-details-btn">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-orders">
          <div className="empty-icon">📦</div>
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      )}
    </div>
  );
};

export default Orders;