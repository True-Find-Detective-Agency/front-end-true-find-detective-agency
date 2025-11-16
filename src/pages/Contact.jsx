/* eslint-disable no-unused-vars */

import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import "../css/contact.css"
import ContactForm from '../components/ContactForm';

function Contact() {




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
    <div className="main-container">
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
              
<ContactForm />
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


    </div>
  );
}

export default Contact;