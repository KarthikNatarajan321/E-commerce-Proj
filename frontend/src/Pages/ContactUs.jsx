import React from 'react';
import './CSS/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 1234 Example St, City, Country</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
