import React from 'react';
import './CSS/Help.css';

function Help() {
  return (
    <div className="help-page-container">
      <h1>Help Center</h1>
      <p>Welcome to our Help Center. Here, you'll find answers to frequently asked questions and ways to get in touch with us.</p>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I create an account?</h3>
            <p>To create an account, click on the "Sign Up" button on the top right corner of the page and follow the instructions.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards as well as PayPal.</p>
          </div>
          <div className="faq-item">
            <h3>How can I track my order?</h3>
            <p>Once your order is shipped, you'll receive a tracking number via email which you can use to track your package.</p>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you couldn't find the answer to your question in our FAQ section, feel free to contact us using the form below:</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Help;
