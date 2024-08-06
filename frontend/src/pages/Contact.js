import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-content">
                <hgroup>
                    <h2>Contact Us</h2>
                    <h3>Feel free to get in touch with us.</h3>
                </hgroup>
                <p>Send us an email if you have any questions!</p>
                <form className="contact-form">
                    <label htmlFor="email">Your Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Your Email Address" required />
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" required />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    <label htmlFor="message">Your Message Here</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message Here" required></textarea>
                    <button type="submit" className="button primary">Send</button>
                </form>
            </div>
            <div className="contact-image">
                <img src="https://plus.unsplash.com/premium_vector-1711987589978-171fa8d26254?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
            </div>
        </div>
    );
}

export default Contact;
