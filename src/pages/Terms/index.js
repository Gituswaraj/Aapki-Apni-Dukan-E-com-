import React from 'react';
import './index.css';

const Terms = () => {
    return (
        <div className="terms-container">
            <div className="terms-header">
                <h1>Terms of Service</h1>
                <p className="terms-subtitle">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <h2>Introduction</h2>
                    <p>Welcome to Aapki Apni Dukan. These Terms of Service ("Terms") govern your use of our website, mobile application, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.</p>
                </section>

                <section className="terms-section">
                    <h2>Eligibility</h2>
                    <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>
                </section>

                <section className="terms-section">
                    <h2>Account Registration</h2>
                    <p>To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                    <p>You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                </section>

                <section className="terms-section">
                    <h2>Ordering and Payment</h2>
                    <p><strong>Orders:</strong> When you place an order through our Services, you are making an offer to purchase the products you have selected. We reserve the right to accept or decline your order for any reason.</p>
                    <p><strong>Prices and Availability:</strong> All prices displayed on our Services are in Indian Rupees (INR) and are inclusive of applicable taxes. We strive to ensure that all information on our Services, including product descriptions, prices, and availability, is accurate. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice.</p>
                    <p><strong>Payment:</strong> We accept various payment methods as indicated on our Services. By providing a payment method, you represent and warrant that you are authorized to use the designated payment method and that the payment information you provide is true and accurate.</p>
                    <p><strong>Cancellations and Refunds:</strong> Orders may be canceled within 30 minutes of placing them. After this time, the order goes into processing and cannot be changed. Refunds will be processed according to our Refund Policy.</p>
                </section>

                <section className="terms-section">
                    <h2>Delivery</h2>
                    <p>We deliver to areas within Ranchi city limits. Delivery times are estimates and are not guaranteed. We are not responsible for delays caused by factors beyond our control, such as weather conditions, traffic, or other unforeseen circumstances.</p>
                    <p>You are responsible for ensuring that the delivery address you provide is accurate and that someone is available to receive the delivery during the selected time slot.</p>
                </section>

                <section className="terms-section">
                    <h2>Product Quality and Returns</h2>
                    <p>We strive to provide high-quality products. If you are not satisfied with a product you receive, please contact us within 24 hours of delivery (6 hours for perishable items). Returns and exchanges are subject to our Return Policy.</p>
                </section>

                <section className="terms-section">
                    <h2>Intellectual Property</h2>
                    <p>All content on our Services, including text, graphics, logos, images, and software, is the property of Aapki Apni Dukan or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws.</p>
                    <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.</p>
                </section>

                <section className="terms-section">
                    <h2>User Conduct</h2>
                    <p>You agree not to use our Services:</p>
                    <ul className="terms-list">
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                        <li>To impersonate or attempt to impersonate Aapki Apni Dukan, an Aapki Apni Dukan employee, another user, or any other person or entity</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm Aapki Apni Dukan or users of the Services</li>
                        <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services are stored, or any server, computer, or database connected to the Services</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, Aapki Apni Dukan shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.</p>
                </section>

                <section className="terms-section">
                    <h2>Indemnification</h2>
                    <p>You agree to defend, indemnify, and hold harmless Aapki Apni Dukan, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>
                </section>

                <section className="terms-section">
                    <h2>Changes to Terms</h2>
                    <p>We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.</p>
                </section>

                <section className="terms-section">
                    <h2>Governing Law</h2>
                    <p>These Terms and your use of the Services shall be governed by and construed in accordance with the laws of India, without giving effect to any choice or conflict of law provision or rule.</p>
                </section>

                <section className="terms-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <div className="contact-details">
                        <p>Aapki Apni Dukan</p>
                        <p>123 Main Street, Ranchi, Jharkhand 834001</p>
                        <p>Email: legal@aapkiapnidukan.com</p>
                        <p>Phone: +91 123-456-7890</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Terms;