// DetectiveAgency.jsx
import React from 'react';
import {
  Search, Shield, Eye, Phone, Mail, MapPin, Award, Clock, Users, Target, CheckCircle, ArrowRight, Star, UserRoundX
} from 'lucide-react';
import "../css/home.css";
import { GiWrappedHeart } from "react-icons/gi";

import AboutStats from '../components/AnimatedStat';
import { services, features, testimonials, process, aboutFeatures } from '../data/data';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

// Map icon names to components
const iconMap = { GiWrappedHeart, Search, Shield, Eye, Users, Target, Phone, Clock, Award, CheckCircle, UserRoundX };

export default function Home() {

  const navTo = useNavigate();
  return (
    <div className="app">
      {/* Hero Section */}

      <HeroSection />
      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive investigative solutions tailored to your needs
          </p>
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className="service-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0, 0, 0, 0.48)), url(${service.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}

                >
                  <div className="service-icon">{IconComponent && <IconComponent size={40} />}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-details">{service.details}</p>

                </div>
              );
            })}
          </div>
          <button className="service-btn " onClick={() => navTo("/services")}>
            All Services <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">

            <div className="about-text-wrapper">
              <div className="about-text">
                <h2>Why Choose True Find?</h2>
                <p>
                  With over two decades of experience in private investigation,
                  our team of professional investigators brings unmatched expertise
                  to every case. We utilize modern investigative techniques combined with
                  traditional methods to deliver results you can trust.
                </p>
                <p className="about-highlight">
                  Our commitment to excellence and client satisfaction has made us
                  a trusted name in the investigation industry. We handle each case
                  with the utmost care, professionalism, and dedication.
                </p>
                <ul className="about-features">
                  {aboutFeatures.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div><AboutStats /></div>

            <div className="features-box">
              <div className="features-grid">
                {features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{IconComponent && <IconComponent size={32} />}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div >
              <img src="https://images.stockcake.com/public/8/f/b/8fbde810-1ad9-4216-879c-1de352da85f1_large/mysterious-detective-reading-stockcake.jpg" alt="" />
            </div>
          </div>
          <button className="service-btn" onClick={() => navTo("/why-us")}>
            View in Detailed <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-wrapper">
          <div className="container">
            <h2 className="section-title">Our Investigation Process</h2>
            <p className="section-subtitle">
              Our systematic approach to delivering reliable results
            </p>
            <div className="process-timeline">
              {process.map((item, index) => (
                <div key={index} className="process-item">
                  <div className="process-step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real experiences from satisfied clients</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#DAA520" color="#DAA520" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="service-btn"
            onClick={() => window.open("https://g.page/r/CToGJ1ZyK_KkEAI/review", "_blank")}
          >
            All reviews <ArrowRight size={16} />
          </button>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Confidential consultation available 24/7</p>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 898 7883 739</p>
                    <span className="contact-note">Available 24/7</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>info@truefind.com</p>
                    <span className="contact-note">Response within 24 hours</span>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>123 Mystery Lane, Suite 400<br />New York, NY 10001</p>
                    <span className="contact-note">By appointment only</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Our team is available 24/7 for urgent cases and emergency situations</p>
            <button className="btn btn-primary-large">Call Now: (555) 123-4567</button>
          </div>
        </div>
      </section>
    </div>
  );
}
