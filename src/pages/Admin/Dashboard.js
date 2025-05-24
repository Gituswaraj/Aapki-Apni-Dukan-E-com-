import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Admin.css';

const AdminDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // In a real app, you would check if the user has admin privileges
  const isAdmin = true; // For demo purposes
  
  if (!currentUser) {
    return (
      <div className="admin-container">
        <div className="not-authorized">
          <h2>Not Authorized</h2>
          <p>Please log in to access the admin dashboard.</p>
          <button onClick={() => navigate('/login')} className="auth-button">Login</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-item active">Dashboard</Link>
          <Link to="/admin/products" className="admin-nav-item">Products</Link>
          <Link to="/admin/orders" className="admin-nav-item">Orders</Link>
          <Link to="/admin/users" className="admin-nav-item">Users</Link>
        </nav>
      </div>
      
      <div className="admin-content">
        <h1>Dashboard</h1>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-value">24</div>
            <div className="stat-label">Total Orders</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">156</div>
            <div className="stat-label">Products</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">₹12,450</div>
            <div className="stat-label">Revenue</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">42</div>
            <div className="stat-label">Customers</div>
          </div>
        </div>
        
        <div className="dashboard-sections">
          <div className="dashboard-section">
            <h2>Recent Orders</h2>
            <div className="empty-state">
              <p>No recent orders to display.</p>
            </div>
          </div>
          
          <div className="dashboard-section">
            <h2>Popular Products</h2>
            <div className="empty-state">
              <p>No product data available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;