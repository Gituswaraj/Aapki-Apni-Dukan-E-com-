import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './style.css';

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');

  if (!currentUser) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <h2>Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <h3>{currentUser.name || 'User'}</h3>
          <p>{currentUser.email}</p>
        </div>
        
        <div className="profile-tabs">
          <div 
            className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </div>
          <div 
            className={`profile-tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            My Orders
          </div>
          <div 
            className={`profile-tab ${activeTab === 'addresses' ? 'active' : ''}`}
            onClick={() => setActiveTab('addresses')}
          >
            Saved Addresses
          </div>
          <div 
            className="profile-tab logout"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>Profile Information</h2>
            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={currentUser.name || ''} readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={currentUser.email || ''} readOnly />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" value={currentUser.phone || 'Not provided'} readOnly />
              </div>
              <button className="edit-profile-btn">Edit Profile</button>
            </div>
          </div>
        )}
        
        {activeTab === 'orders' && (
          <div className="profile-section">
            <h2>My Orders</h2>
            <div className="empty-state">
              <p>You haven't placed any orders yet.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'addresses' && (
          <div className="profile-section">
            <h2>Saved Addresses</h2>
            <div className="empty-state">
              <p>You don't have any saved addresses.</p>
              <button className="add-address-btn">Add New Address</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;