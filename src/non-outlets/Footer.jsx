import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import GetInTouch from "../components/GetInTouch";
import "../css/footer.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2021;

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
    <>
      <GetInTouch />

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-content">

            {/* ABOUT */}
            <div
              className="footer-section"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="footer-logo">
                <img
                  src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763133066/ChatGPT_Image_Nov_13_2025_11_28_05_PM-Photoroom_samgrp.png"
                  alt=""
                />
              </div>

              <p className="footer-description">
                Professional investigative services with over {years}+ years of
                experience. Discretion guaranteed, results delivered.
              </p>

              <div className="social-links">
                <a href="#"><Facebook size={20} /></a>
                <a href="#"><Twitter size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div
              className="footer-section"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/why-us">Why Choose Us</Link></li>
                <li><Link to="/branches">Branches</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div
              className="footer-section"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link to="/services">Background Checks</Link></li>
                <li><Link to="/services">Corporate Investigation</Link></li>
                <li><Link to="/services">Surveillance</Link></li>
                <li><Link to="/services">Fraud Detection</Link></li>
                <li><Link to="/services">Missing Persons</Link></li>
                <li><Link to="/services">Matrimonial Investigation</Link></li>
              </ul>
            </div>

          </div>

          {/* BOTTOM */}
          <div
            className="footer-bottom-content"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>&copy; 2025 True Find Detective Agency. All rights reserved.</p>
            <p className="license-text">
              Licensed & Insured Private Investigation Agency
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
