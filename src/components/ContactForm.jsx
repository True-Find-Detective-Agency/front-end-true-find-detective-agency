import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MessageSquare, Send } from 'lucide-react';
import "../css/contactForm.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', caseType: '', urgency: '', message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        console.log(formData)

        e.preventDefault();
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
                // setFormData({ name: '', email: '', phone: '', caseType: '', urgency: '', message: '' });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("❌ Failed to send message. Try again later.");
            });
    };

    return (
        <div className="contact-form-wrapper">
            <div className="form-header">
                <MessageSquare size={32} />
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Case Type *</label>
                        <select name="caseType" value={formData.caseType} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="background-check">Background Check</option>
                            <option value="corporate">Corporate Investigation</option>
                            <option value="surveillance">Surveillance</option>
                            <option value="fraud">Fraud</option>
                            <option value="missing-person">Missing Person</option>
                        </select>
                    </div>
                </div>


                <div className="form-group">
                    <label>Urgency *</label>
                    <select name="urgency" value={formData.urgency} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="emergency">Emergency</option>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Case Details *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">
                    <Send size={20} /> Submit Inquiry
                </button>
            </form>

            <p className="privacy-note">🔒 All communications are encrypted and confidential</p>
        </div>
    );
}

export default ContactForm;
