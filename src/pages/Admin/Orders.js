import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]); // In a real app, you would fetch from an API
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Filter orders by status
  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);
  
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-item">Dashboard</Link>
          <Link to="/admin/products" className="admin-nav-item">Products</Link>
          <Link to="/admin/orders" className="admin-nav-item active">Orders</Link>
          <Link to="/admin/users" className="admin-nav-item">Users</Link>
        </nav>
      </div>
      
      <div className="admin-content">
        <h1>Orders</h1>
        
        <div className="admin-filters">
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.customer.name}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>₹{order.total}</td>
                    <td>
                      <span className={`status-badge ${order.status}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="actions">
                      <button className="view-btn">View</button>
                      <select 
                        value={order.status}
                        onChange={(e) => {
                          // In a real app, you would update the order status via API
                          console.log(`Update order ${order.id} status to ${e.target.value}`);
                        }}
                        className="status-select"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;