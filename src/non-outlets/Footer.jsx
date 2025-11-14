import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import GetInTouch from "../components/GetInTouch";
import "../css/footer.css";

function Footer() {
  return (
    <>
      <GetInTouch />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <Shield size={32} />
                <span>TRUE FIND DETECTIVE AGENCY</span>
              </div>
              <p className="footer-description">
                Professional investigative services with over 20 years of experience. 
                Discretion guaranteed, results delivered.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/why-us">Why Choose Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link to="/services/background-checks">Background Checks</Link></li>
                <li><Link to="/services/corporate">Corporate Investigation</Link></li>
                <li><Link to="/services/surveillance">Surveillance</Link></li>
                <li><Link to="/services/fraud">Fraud Detection</Link></li>
                <li><Link to="/services/missing-persons">Missing Persons</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 True Find Detective Agency. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link to="/privacy">Privacy Policy</Link>
                <span className="separator">|</span>
                <Link to="/terms">Terms of Service</Link>
                <span className="separator">|</span>
                <Link to="/disclaimer">Disclaimer</Link>
              </div>
              <p className="license-text">Licensed & Insured Private Investigation Agency</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
