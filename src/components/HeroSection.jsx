import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/heroSection.css";

import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  const navTo = useNavigate();

  // ⭐ Init AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="hero" id="home">
      <video autoPlay muted loop playsInline className="hero-video">
        <source
          src="https://res.cloudinary.com/dmqa8d6yq/video/upload/v1762684383/home_banner_bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="container">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Revealing the Truth, One Case at a Time
          </h1>

          <h2
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Trusted. Discreet. Professional.
          </h2>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            True Find Detective Agency has delivered confidential investigations
            with proven results. Your truth matters — we’ll help you uncover it.
          </p>

          <div
            className="hero-buttons"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <button
              className="btn btn-primary-large"
              onClick={() => navTo("/contact")}
            >
              Let’s Connect
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => navTo("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
