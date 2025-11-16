import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MessageSquare, Send } from 'lucide-react';
import "../css/contactForm.css";

import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        caseType: '', 
        urgency: '', 
        message: ''
    });

    // ⭐ Init AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true
        });
        AOS.refresh();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        emailjs.send(
            "service_71z6gcq",
            "template_t4q32wo",
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                caseType: formData.caseType,
                urgency: formData.urgency,
                message: formData.message
            },
            "eYQVVxy1H0EJ4rpAQ"
        )
        .then(() => {
            alert("✅ Message sent successfully!");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("❌ Failed to send message. Try again later.");
        });
    };

    return (
        <div 
            className="contact-form-wrapper"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="form-header" data-aos="fade-down">
                <MessageSquare size={32} />
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form 
                className="contact-form" 
                onSubmit={handleSubmit}
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                <div className="form-row">
                    <div className="form-group" data-aos="fade-right">
                        <label>Full Name *</label>
                        <input 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group" data-aos="fade-left">
                        <label>Email *</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group" data-aos="fade-right">
                        <label>Phone *</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group" data-aos="fade-left">
                        <label>Case Type *</label>
                        <select 
                            name="caseType" 
                            value={formData.caseType} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select</option>
                            <option value="background-check">Background Check</option>
                            <option value="corporate">Corporate Investigation</option>
                            <option value="surveillance">Surveillance</option>
                            <option value="fraud">Fraud</option>
                            <option value="missing-person">Missing Person</option>
                        </select>
                    </div>
                </div>

                <div className="form-group" data-aos="fade-up">
                    <label>Urgency *</label>
                    <select 
                        name="urgency" 
                        value={formData.urgency} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select</option>
                        <option value="emergency">Emergency</option>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>

                <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                    <label>Case Details *</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="submit-button"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                >
                    <Send size={20} /> Submit Inquiry
                </button>
            </form>

            <p 
                className="privacy-note"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                🔒 All communications are encrypted and confidential
            </p>
        </div>
    );
}

export default ContactForm;
