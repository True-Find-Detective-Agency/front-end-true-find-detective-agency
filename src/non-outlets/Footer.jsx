import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import GetInTouch from "../utils/GetInTouch";

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
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={18} />
                  <div>
                    <p>+1 (555) 123-4567</p>
                    <p>Available 24/7</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <div>
                    <p>info@truefind.com</p>
                    <p>support@truefind.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <div>
                    <p>123 Mystery Lane, Suite 400</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
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

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer {
          background: #0a0a0a;
          color: #e0e0e0;
          border-top: 1px solid #2a2a2a;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          padding: 4rem 0 3rem;
        }

        .footer-section h3 {
          color: #DAA520;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: bold;
          color: #DAA520;
          margin-bottom: 1rem;
        }

        .footer-logo svg {
          color: #DAA520;
        }

        .footer-description {
          color: #999;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 4px;
          color: #DAA520;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #DAA520;
          color: #0a0a0a;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(218, 165, 32, 0.3);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #999;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #DAA520;
          padding-left: 5px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: start;
        }

        .contact-item svg {
          color: #DAA520;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-item p {
          color: #999;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .contact-item p:first-child {
          color: #c0c0c0;
          font-weight: 500;
        }

        .footer-bottom {
          border-top: 1px solid #2a2a2a;
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .footer-bottom-content p {
          color: #666;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-bottom-links a {
          color: #999;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-bottom-links a:hover {
          color: #DAA520;
        }

        .separator {
          color: #666;
        }

        .license-text {
          font-size: 0.85rem;
          color: #555;
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 3rem 0 2rem;
          }

          .footer-section {
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-item {
            justify-content: center;
            text-align: left;
          }

          .footer-bottom-content {
            gap: 1.5rem;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .footer-logo span {
            font-size: 0.95rem;
          }

          .social-links a {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;