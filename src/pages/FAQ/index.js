import React, { useState } from 'react';
import './index.css';

const FAQ = () => {
    // State to track which FAQ items are expanded
    const [expandedItems, setExpandedItems] = useState({});

    // Toggle FAQ item expansion
    const toggleItem = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // FAQ data organized by categories
    const faqData = {
        general: [
            {
                id: 'general-1',
                question: 'What is Aapki Apni Dukan?',
                answer: 'Aapki Apni Dukan is a neighborhood grocery store that provides fresh, high-quality groceries and daily essentials. We offer both in-store shopping and online ordering with home delivery options.'
            },
            {
                id: 'general-2',
                question: 'What are your store hours?',
                answer: 'Our physical stores are open Monday through Saturday from 8:00 AM to 9:00 PM, and Sundays from 9:00 AM to 6:00 PM. Our online store is available 24/7 for your convenience.'
            },
            {
                id: 'general-3',
                question: 'Do you have multiple store locations?',
                answer: 'Yes, we currently have three store locations in Ranchi. You can find the addresses and contact information for each store on our Contact page.'
            },
            {
                id: 'general-4',
                question: 'Do you offer any loyalty programs or discounts?',
                answer: 'Yes, we offer the "Apna Circle" loyalty program where you earn points on every purchase. We also have weekly specials, seasonal discounts, and special offers for senior citizens and students.'
            }
        ],
        ordering: [
            {
                id: 'ordering-1',
                question: 'How can I place an order online?',
                answer: 'You can place an order through our website or mobile app. Simply browse our products, add items to your cart, and proceed to checkout. You\'ll need to create an account or log in to complete your purchase.'
            },
            {
                id: 'ordering-2',
                question: 'Is there a minimum order value for online purchases?',
                answer: 'Yes, there is a minimum order value of ₹200 for online purchases. Orders below this amount will incur a small service fee of ₹30.'
            },
            {
                id: 'ordering-3',
                question: 'Can I modify or cancel my order after it\'s placed?',
                answer: 'You can modify or cancel your order within 30 minutes of placing it. After that, the order goes into processing and cannot be changed. Please contact our customer service immediately if you need to make changes.'
            },
            {
                id: 'ordering-4',
                question: 'How do I check the status of my order?',
                answer: 'You can check your order status by logging into your account and visiting the "My Orders" section. You will also receive email and SMS updates about your order status.'
            }
        ],
        delivery: [
            {
                id: 'delivery-1',
                question: 'What are your delivery areas?',
                answer: 'We currently deliver to all areas within Ranchi city limits. We\'re continuously expanding our delivery network to serve more locations.'
            },
            {
                id: 'delivery-2',
                question: 'How much does delivery cost?',
                answer: 'Delivery is free for orders above ₹500. For orders between ₹200 and ₹500, a delivery fee of ₹40 is applicable.'
            },
            {
                id: 'delivery-3',
                question: 'What are your delivery timings?',
                answer: 'We offer delivery slots from 8:00 AM to 8:00 PM. You can select your preferred delivery slot during checkout. Express delivery (within 2 hours) is available for an additional fee of ₹60.'
            },
            {
                id: 'delivery-4',
                question: 'What if I\'m not available to receive my delivery?',
                answer: 'If you\'re not available at the time of delivery, our delivery person will try to contact you. If unreachable, they\'ll wait for up to 10 minutes. After that, you\'ll need to reschedule the delivery, which may incur an additional fee.'
            }
        ],
        products: [
            {
                id: 'products-1',
                question: 'Where do you source your products from?',
                answer: 'We source our products from local farmers, regional suppliers, and trusted national brands. Our fruits and vegetables are primarily sourced from local farms to ensure freshness.'
            },
            {
                id: 'products-2',
                question: 'Do you sell organic products?',
                answer: 'Yes, we have a dedicated section for organic products, including fruits, vegetables, grains, and dairy. All our organic products are certified by recognized organic certification bodies.'
            },
            {
                id: 'products-3',
                question: 'What if I receive a damaged or expired product?',
                answer: 'We have a strict quality control process, but if you receive a damaged or expired product, please contact us within 24 hours of delivery. We\'ll arrange for a replacement or refund.'
            },
            {
                id: 'products-4',
                question: 'Do you offer any specialty or imported products?',
                answer: 'Yes, we have a selection of specialty and imported products in our stores. If you\'re looking for a specific product that we don\'t currently stock, you can request it through our customer service.'
            }
        ],
        returns: [
            {
                id: 'returns-1',
                question: 'What is your return policy?',
                answer: 'We accept returns within 24 hours of delivery for most products. Perishable items must be reported within 6 hours of delivery. The product must be unused and in its original packaging.'
            },
            {
                id: 'returns-2',
                question: 'How do I initiate a return?',
                answer: 'To initiate a return, log into your account, go to "My Orders," select the order and item you wish to return, and follow the return instructions. Alternatively, you can contact our customer service.'
            },
            {
                id: 'returns-3',
                question: 'How long does it take to process a refund?',
                answer: 'Once we receive and verify the returned item, refunds are processed within 3-5 business days. The amount will be credited back to your original payment method.'
            },
            {
                id: 'returns-4',
                question: 'Can I exchange an item instead of returning it?',
                answer: 'Yes, you can exchange items of equal value. For exchanges, please contact our customer service with your order details and the item you wish to exchange.'
            }
        ],
        payment: [
            {
                id: 'payment-1',
                question: 'What payment methods do you accept?',
                answer: 'We accept various payment methods including credit/debit cards, UPI, net banking, mobile wallets, and cash on delivery. All online transactions are secure and encrypted.'
            },
            {
                id: 'payment-2',
                question: 'Is it safe to use my credit card on your website?',
                answer: 'Yes, our website uses industry-standard SSL encryption to protect your payment information. We do not store your credit card details on our servers.'
            },
            {
                id: 'payment-3',
                question: 'Do you offer cash on delivery?',
                answer: 'Yes, we offer cash on delivery for orders up to ₹3,000. Please note that our delivery personnel may not carry change for large denominations, so please keep exact change ready.'
            },
            {
                id: 'payment-4',
                question: 'What happens if my payment fails during checkout?',
                answer: 'If your payment fails, your order will not be processed. You can try again with the same or a different payment method. If the amount was deducted despite the failure, it will be automatically refunded within 5-7 business days.'
            }
        ]
    };

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>Frequently Asked Questions</h1>
                <p className="faq-subtitle">Find answers to common questions about our products, services, and policies.</p>
            </div>

            <div className="faq-search">
                <input 
                    type="text" 
                    placeholder="Search for questions..."
                    className="faq-search-input"
                />
                <button className="faq-search-button">Search</button>
            </div>

            <div className="faq-categories">
                {Object.entries(faqData).map(([category, questions]) => (
                    <div key={category} className="faq-category">
                        <h2 className="category-title">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <div className="faq-items">
                            {questions.map((item) => (
                                <div 
                                    key={item.id} 
                                    className={`faq-item ${expandedItems[item.id] ? 'expanded' : ''}`}
                                >
                                    <div 
                                        className="faq-question"
                                        onClick={() => toggleItem(item.id)}
                                    >
                                        <h3>{item.question}</h3>
                                        <span className="toggle-icon">
                                            {expandedItems[item.id] ? '−' : '+'}
                                        </span>
                                    </div>
                                    {expandedItems[item.id] && (
                                        <div className="faq-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="faq-contact">
                <h2>Still have questions?</h2>
                <p>If you couldn't find the answer to your question, please don't hesitate to contact us.</p>
                <div className="faq-contact-buttons">
                    <a href="/contact" className="contact-button">Contact Us</a>
                    <a href="tel:+911234567890" className="phone-button">Call Customer Service</a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;