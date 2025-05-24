import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import './style.css';

const ManualEntry = () => {
  const { products } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    retailShop: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      quantity: '',
      category: '',
      retailShop: '',
      image: ''
    });
  };

  return (
    <div className="manual-entry-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="manual-entry-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 500g, 1L"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
            />
          </div>

          <div className="form-group">
            <label>Retail Shop</label>
            <input
              type="text"
              name="retailShop"
              value={formData.retailShop}
              onChange={handleChange}
              placeholder="Enter retail shop name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Item</button>
      </form>
    </div>
  );
};

export default ManualEntry;