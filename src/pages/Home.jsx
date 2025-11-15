/* eslint-disable no-unused-vars */
// DetectiveAgency.jsx
import React, { useEffect } from "react";
import {
  Search,
  Shield,
  Eye,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  UserRoundX,
} from "lucide-react";
import { GiWrappedHeart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

// AOS Library Imports (यदि आप App.jsx में Initialize नहीं करते हैं तो इन्हें यहाँ रखें)
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import "../css/home.css";
import AboutStats from "../components/AnimatedStat";
import {
  services,
  features,
  testimonials,
  process,
  aboutFeatures,
} from "../data/data";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";

// Map icon names to components
const iconMap = {
  GiWrappedHeart,
  Search,
  Shield,
  Eye,
  Users,
  Target,
  Phone,
  Clock,
  Award,
  CheckCircle,
  UserRoundX,
};

export default function Home() {
  const navTo = useNavigate();

  // (Note: Assuming AOS.init is correctly done in App.jsx or main entry file)

  return (
    <div className="app">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Our Services
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive investigative solutions tailored to your needs
          </p>
          <div className="services-grid home-services-grid">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                // Scroll Animation: Cards zoom in from the bottom
                <div
                  key={index}
                  className="service-card"
                  data-aos="zoom-in-up" // <-- Scroll Animation
                  data-aos-delay={index * 150} // Staggered delay
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0, 0, 0, 0.48)), url(${service.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="service-icon">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-details">{service.details}</p>
                </div>
              );
            })}
          </div>
          <button
            className="service-btn "
            onClick={() => navTo("/services")}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            All Services <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            {/* About Text: Comes from the right */}
            <div className="about-text-wrapper" data-aos="fade-right">
              <div className="about-text">
                <h2>Why Choose True Find?</h2>
                <p>
                  With over two decades of experience in private investigation,
                  our team of professional investigators brings unmatched
                  expertise to every case. We utilize modern investigative
                  techniques combined with traditional methods to deliver
                  results you can trust.
                </p>
                <p className="about-highlight">
                  Our commitment to excellence and client satisfaction has made
                  us a trusted name in the investigation industry. We handle
                  each case with the utmost care, professionalism, and
                  dedication.
                </p>
                <ul className="about-features">
                  {aboutFeatures.map((item, idx) => (
                    <li
                      key={idx}
                      data-aos="fade-up"
                      data-aos-delay={100 + idx * 50}
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats: Zooms in */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <AboutStats />
            </div>

            {/* Features Box: Flips up */}
            <div className="features-box" data-aos="fade-up">
              <div className="features-grid">
                {features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className="feature-card"
                      data-aos="flip-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="feature-icon">
                        {IconComponent && <IconComponent size={32} />}
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Box: Comes from the left */}
            <div data-aos="fade-left" data-aos-delay="200">
              <img
                src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763189014/mysterious-detective-reading-stockcake_kd4ojv.jpg"
                alt=""
              />
            </div>
          </div>
          <button
            className="service-btn"
            onClick={() => navTo("/why-us")}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            View in Detailed <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-wrapper">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">
              Our Investigation Process
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our systematic approach to delivering reliable results
            </p>
            <div className="process-timeline">
              {process.map((item, index) => (
                // Scroll Animation: Steps fade in
                <div
                  key={index}
                  className="process-item"
                  data-aos="fade-in"
                  data-aos-delay={index * 200}
                >
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
          <h2 className="section-title" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Real experiences from satisfied clients
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              // Scroll Animation: Testimonials fade down
              <div
                key={index}
                className="testimonial-card"
                data-aos="fade-down"
                data-aos-delay={index * 150}
              >
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
            onClick={() =>
              window.open("https://g.page/r/CToGJ1ZyK_KkEAI/review", "_blank")
            }
            data-aos="fade-up"
            data-aos-delay="500"
          >
            All reviews <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">
              Get In Touch
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Confidential consultation available 24/7
            </p>
            <div className="contact-content">
              {/* Contact Info (Left): Comes from the right */}
              <div className="contact-info">
                <div
                  className="contact-item"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 898 7883 739</p>
                    <span className="contact-note">Available 24/7</span>
                  </div>
                </div>
                <div
                  className="contact-item"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>info@truefind.com</p>
                    <span className="contact-note">
                      Response within 24 hours
                    </span>
                  </div>
                </div>
                <div
                  className="contact-item"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <MapPin size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>
                      123 Mystery Lane, Suite 400
                      <br />
                      New York, NY 10001
                    </p>
                    <span className="contact-note">By appointment only</span>
                  </div>
                </div>
              </div>
              {/* Contact Form (Right): Comes from the left */}
              <ContactForm data-aos="fade-left" data-aos-delay="200" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" data-aos="zoom-in">
        <div className="container">
          <div className="cta-content">
            <h2 data-aos="fade-up">Need Immediate Assistance?</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Our team is available 24/7 for urgent cases and emergency
              situations
            </p>
            <button
              className="btn btn-primary-large"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
