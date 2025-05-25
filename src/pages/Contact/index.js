import React, { useState } from 'react';
import './index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill in all required fields.'
            });
            return;
        }

        // Here you would typically send the form data to your backend
        // For now, we'll just simulate a successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! We will get back to you soon.'
        });

        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p className="contact-subtitle">We'd love to hear from you! Reach out with any questions or feedback.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <h2>Get In Touch</h2>
                    
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h3>Visit Us</h3>
                                <p>Aapki Apni Dukan</p>
                                <p>123 Main Street</p>
                                <p>Ranchi, Jharkhand 834001</p>
                                <p>India</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <h3>Call Us</h3>
                                <p>Customer Service: +91 123-456-7890</p>
                                <p>Order Support: +91 123-456-7891</p>
                                <p>Business Inquiries: +91 123-456-7892</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-details">
                                <h3>Email Us</h3>
                                <p>Customer Support: support@aapkiapnidukan.com</p>
                                <p>Orders: orders@aapkiapnidukan.com</p>
                                <p>Careers: careers@aapkiapnidukan.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">🕒</div>
                            <div className="contact-details">
                                <h3>Business Hours</h3>
                                <p>Monday - Saturday: 8:00 AM - 9:00 PM</p>
                                <p>Sunday: 9:00 AM - 6:00 PM</p>
                                <p>Online Orders: 24/7</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-map">
                        <h3>Our Location</h3>
                        <div className="map-placeholder">
                            <p>Google Maps will be integrated here</p>
                            <p className="map-note">Interactive map showing our store location in Ranchi, Jharkhand</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    
                    {formStatus.submitted && (
                        <div className="form-success-message">
                            {formStatus.message}
                        </div>
                    )}
                    
                    {formStatus.error && (
                        <div className="form-error-message">
                            {formStatus.message}
                        </div>
                    )}
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Phone Number (Optional)"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Message Subject (Optional)"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="6"
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;