/* eslint-disable no-unused-vars */
// DetectiveAgency.jsx
import * as Icons from "lucide-react";
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
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../css/home.css";
import AboutStats from "../components/AnimatedStat";
import {
  services,
  features,
  testimonials,
  process,
  aboutFeatures,
  contactInfo,
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

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 10);
  }, []);


  return (
    <div className="app">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title" >
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
      <section className="about " id="about">
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
            <div className="features-box con" data-aos="fade-up">
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
            <h2 className="section-title">
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
          <h2 className="section-title" >
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
            <h2 className="section-title" >
              Get In Touch
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Confidential consultation available 24/7
            </p>
            <div className="contact-content home-contact-content">
              {/* Contact Info (Left): Comes from the right */}
              <section className="contact-info-section">
       
                  <div className="contact-info-grid">
                    {contactInfo.slice(0,4).map((info, index) => {
                      const Icon = Icons[info.icon];

                      return (
                        <div
                          key={index}
                          className="info-card"
                          data-aos="fade-up"
                          data-aos-delay={index * 120}
                        >
                          <div className="info-icon">
                            <Icon size={28} />
                          </div>

                          <h3>{info.title}</h3>

                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="info-primary link-with-icon"
                            >
                              <Icon size={16} style={{ marginRight: "6px" }} />
                              {info.btn}
                            </a>
                          ) : (
                            <p className="info-primary">{info.primary}</p>
                          )}

                          <p className="info-secondary">{info.secondary}</p>
                          <p className="info-detail">{info.detail}</p>
                        </div>
                      );
                    })}
                  </div>
        
              </section>
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
            <button className="btn btn-primary-large" data-aos="zoom-in" data-aos-delay="300" onClick={() => window.location.href = "tel:+919977014334"}>Call Now: +91 99770 14334</button>


          </div>
        </div>
      </section>
    </div>
  );
}
