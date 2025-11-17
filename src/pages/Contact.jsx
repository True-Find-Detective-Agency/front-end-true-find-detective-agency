/* eslint-disable no-unused-vars */

import * as Icons from "lucide-react";
import "../css/contact.css";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { contactInfo } from "../data/data";

function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <div className="contact-page">

        <section className="contact-hero" data-aos="fade-up">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle" data-aos-delay="100">
              Reach out for a confidential discussion. Our team is available round the clock to assist you.
            </p>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => {
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
          </div>
        </section>




        {/* Main Contact Section */}
        <section className="main-contact-section">
          <div className="container">
            <div className="contact-content">
              <div data-aos="fade-right">
                <ContactForm />
              </div>

              <div className="additional-info" data-aos="fade-left">
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
                    After submitting your inquiry, one of our investigators will contact you within 24 hours.
                  </p>
                </div>

                <div className="info-box urgent-box">
                  <h3>Emergency Cases</h3>
                  <p>For urgent help, call our 24/7 hotline:</p>
                  <a href="tel:+15551234567" className="emergency-phone">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">Visit Our Office</h2>
            <div className="map-placeholder" data-aos="zoom-in">
              <Icons.MapPin size={48} />
              <p>123 Mystery Lane, Suite 400<br />New York, NY 10001</p>
              <p className="map-note">By appointment only - Call ahead to schedule</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Contact;
