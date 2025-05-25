import React from 'react';
import './index.css';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <div className="privacy-header">
                <h1>Privacy Policy</h1>
                <p className="privacy-subtitle">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div className="privacy-content">
                <section className="privacy-section">
                    <h2>Introduction</h2>
                    <p>At Aapki Apni Dukan, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    <p>Please read this privacy policy carefully before using our services.</p>
                </section>

                <section className="privacy-section">
                    <h2>Information We Collect</h2>
                    <p>We collect several types of information from and about users of our website, including:</p>
                    <ul className="privacy-list">
                        <li><strong>Personal Information:</strong> Name, email address, postal address, phone number, and payment information when you create an account, place an order, or contact us.</li>
                        <li><strong>Order Information:</strong> Details about the products you purchase, delivery address, and payment method.</li>
                        <li><strong>Technical Information:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                        <li><strong>Usage Information:</strong> Information about how you use our website, products, and services.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>How We Use Your Information</h2>
                    <p>We use your information for the following purposes:</p>
                    <ul className="privacy-list">
                        <li>To process and deliver your orders</li>
                        <li>To manage your account and provide you with customer support</li>
                        <li>To personalize your shopping experience</li>
                        <li>To improve our website, products, and services</li>
                        <li>To communicate with you about promotions, new products, and other news</li>
                        <li>To ensure the security of our website and comply with legal obligations</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>How We Share Your Information</h2>
                    <p>We may share your personal information with:</p>
                    <ul className="privacy-list">
                        <li><strong>Service Providers:</strong> Third parties who provide services on our behalf, such as payment processing, delivery, and marketing.</li>
                        <li><strong>Business Partners:</strong> Trusted third parties with whom we partner to offer certain products, services, or promotions.</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                </section>

                <section className="privacy-section">
                    <h2>Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
                </section>

                <section className="privacy-section">
                    <h2>Data Security</h2>
                    <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
                    <p>However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
                </section>

                <section className="privacy-section">
                    <h2>Your Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    <ul className="privacy-list">
                        <li>Request access to your personal data</li>
                        <li>Request correction of your personal data</li>
                        <li>Request erasure of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request restriction of processing your personal data</li>
                        <li>Request transfer of your personal data</li>
                        <li>Right to withdraw consent</li>
                    </ul>
                    <p>If you wish to exercise any of these rights, please contact us using the details provided below.</p>
                </section>

                <section className="privacy-section">
                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.</p>
                    <p>You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.</p>
                </section>

                <section className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                    <div className="contact-details">
                        <p>Aapki Apni Dukan</p>
                        <p>123 Main Street, Ranchi, Jharkhand 834001</p>
                        <p>Email: privacy@aapkiapnidukan.com</p>
                        <p>Phone: +91 123-456-7890</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Privacy;