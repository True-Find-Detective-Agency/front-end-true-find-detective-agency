import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import "../css/contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    urgency: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting True Find Detective Agency. We will review your case and get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      caseType: '',
      urgency: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Available 24/7",
      detail: "Emergency hotline available"
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      primary: "info@truefind.com",
      secondary: "support@truefind.com",
      detail: "Response within 24 hours"
    },
    {
      icon: <MapPin size={28} />,
      title: "Office Location",
      primary: "123 Mystery Lane, Suite 400",
      secondary: "New York, NY 10001",
      detail: "By appointment only"
    },
    {
      icon: <Clock size={28} />,
      title: "Business Hours",
      primary: "24/7 Emergency Services",
      secondary: "Office: Mon-Fri 9AM-6PM",
      detail: "Weekend consultations available"
    }
  ];

  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch for a confidential consultation. We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p className="info-primary">{info.primary}</p>
                  <p className="info-secondary">{info.secondary}</p>
                  <p className="info-detail">{info.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="main-contact-section">
          <div className="container">
            <div className="contact-content">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <MessageSquare size={32} />
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible</p>
                </div>

                <div className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="caseType">Case Type *</label>
                      <select
                        id="caseType"
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a case type</option>
                        <option value="background-check">Background Check</option>
                        <option value="corporate">Corporate Investigation</option>
                        <option value="surveillance">Surveillance</option>
                        <option value="fraud">Fraud Investigation</option>
                        <option value="missing-person">Missing Person</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">Urgency Level *</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select urgency level</option>
                      <option value="emergency">Emergency - Immediate Response Needed</option>
                      <option value="urgent">Urgent - Within 24 Hours</option>
                      <option value="normal">Normal - Within 2-3 Days</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Case Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your case. All information is kept strictly confidential."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="button" 
                    className="submit-button"
                    onClick={handleSubmit}
                  >
                    <Send size={20} />
                    Submit Inquiry
                  </button>

                  <p className="privacy-note">
                    🔒 All communications are encrypted and strictly confidential
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="additional-info">
                <div className="info-box">
                  <h3>Why Contact Us?</h3>
                  <ul>
                    <li>✓ Free initial consultation</li>
                    <li>✓ 24/7 emergency response</li>
                    <li>✓ Confidential case evaluation</li>
                    <li>✓ Transparent pricing</li>
                    <li>✓ Licensed professionals</li>
                    <li>✓ No obligation quote</li>
                  </ul>
                </div>

                <div className="info-box">
                  <h3>What to Expect</h3>
                  <p>
                    After submitting your inquiry, one of our experienced investigators 
                    will review your case and contact you within 24 hours. We'll discuss 
                    your needs, answer any questions, and provide a detailed plan of action.
                  </p>
                </div>

                <div className="info-box urgent-box">
                  <h3>Emergency Cases</h3>
                  <p>
                    For urgent matters requiring immediate attention, please call our 
                    24/7 emergency hotline:
                  </p>
                  <a href="tel:+15551234567" className="emergency-phone">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2 className="section-title">Visit Our Office</h2>
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>123 Mystery Lane, Suite 400<br/>New York, NY 10001</p>
              <p className="map-note">By appointment only - Call ahead to schedule</p>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}

export default Contact;