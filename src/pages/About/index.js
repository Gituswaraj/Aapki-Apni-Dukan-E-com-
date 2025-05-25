import React from 'react';
import './index.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Aapki Apni Dukan</h1>
                <p className="about-subtitle">Your Trusted Neighborhood Grocery Store Since 2018</p>
            </div>

            <section className="about-section">
                <h2>Our Story</h2>
                <div className="about-content">
                    <div className="about-image">
                        <div className="placeholder-image">Store Image</div>
                    </div>
                    <div className="about-text">
                        <p>Aapki Apni Dukan was founded in 2018 with a simple mission: to provide fresh, high-quality groceries to our local community at affordable prices. What started as a small family-owned store in Ranchi has now grown into a trusted name in grocery retail across Jharkhand.</p>
                        <p>Our journey began when our founder, Swaraj Kumar, noticed the lack of quality grocery options in his neighborhood. Determined to make a difference, he opened the first Aapki Apni Dukan store with just three employees and a commitment to customer satisfaction.</p>
                        <p>Today, we've expanded to multiple locations while maintaining our core values of freshness, quality, and community service. We're proud to be your local grocery partner, bringing the best products from farm to your table.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Our Mission & Vision</h2>
                <div className="mission-vision">
                    <div className="mission-box">
                        <h3>Mission</h3>
                        <p>To provide our customers with the freshest groceries, exceptional service, and a convenient shopping experience while supporting local farmers and producers.</p>
                    </div>
                    <div className="vision-box">
                        <h3>Vision</h3>
                        <p>To be the most trusted neighborhood grocery store, known for quality, sustainability, and community engagement, making healthy food accessible to all.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Our Values</h2>
                <div className="values-container">
                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Freshness</h3>
                        <p>We source the freshest products and maintain strict quality standards.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Community</h3>
                        <p>We support local producers and give back to our community.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">♻️</div>
                        <h3>Sustainability</h3>
                        <p>We're committed to environmentally responsible practices.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💯</div>
                        <h3>Integrity</h3>
                        <p>We operate with honesty and transparency in all we do.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <div className="member-image">👨‍💼</div>
                        <h3>Swaraj Kumar</h3>
                        <p className="member-title">Founder & CEO</p>
                        <p>With over 15 years in retail, Swaraj leads our company with passion and vision.</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">👩‍💼</div>
                        <h3>Priya Sharma</h3>
                        <p className="member-title">Operations Director</p>
                        <p>Priya ensures our stores run smoothly and maintain our high standards.</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">👨‍🌾</div>
                        <h3>Rajesh Patel</h3>
                        <p className="member-title">Procurement Manager</p>
                        <p>Rajesh works directly with farmers to source the freshest produce.</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">👩‍💻</div>
                        <h3>Anita Gupta</h3>
                        <p className="member-title">Technology Head</p>
                        <p>Anita leads our digital transformation and online shopping experience.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;