import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Aapki Apni Dukan</h3>
            <p className="footer-description">
              Your one-stop shop for fresh groceries and daily essentials delivered right to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><Link to="/products/fruits">Fruits</Link></li>
              <li><Link to="/products/vegetables">Vegetables</Link></li>
              <li><Link to="/products/dairy">Dairy</Link></li>
              <li><Link to="/products/bakery">Bakery</Link></li>
              <li><Link to="/products/beverages">Beverages</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <address className="contact-info">
              <p> Grocery Store</p>
              <p>Ranchi, Jharkhand</p>
              <p>Email: info@ApkiApniDukan.com</p>
              <p>Phone: +91 123-456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Aapki Apni Dukan. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;