import React from "react";
import '../contact/style.css';

const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <section className="contact-section">
                <div className="contact-wrapper">
                    <div className="contact-header">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-description">Feel free to Contact!</p>
                    </div>
                    <div className="contact-form-container">
                        <div className="contact-form">
                            <div className="contact-form-input">
                                <label htmlFor="name" className="contact-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact-input"
                                />
                            </div>
                            <div className="contact-form-input">
                                <label htmlFor="email" className="contact-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact-input"
                                />
                            </div>
                            <div className="contact-form-input contact-textarea">
                                <label htmlFor="message" className="contact-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact-textarea-input"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="contact-form-submit">
                                <button className="contact-submit-button">Send Message</button>
                            </div>
                            <div className="contact-footer">
                                <a href="mailto:anumhussain875@gmail.com" className="contact-email">
                                    anumhussain875@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
