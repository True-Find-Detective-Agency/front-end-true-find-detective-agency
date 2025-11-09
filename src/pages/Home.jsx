
import { Search, Shield, Eye, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import "../css/home.css"
import bg from "../assets/home banner.mp4"

export default function DetectiveAgency() {


  const services = [
    {
      icon: <Search size={40} />,
      title: "Background Checks",
      description: "Comprehensive background investigations for personal and corporate needs"
    },
    {
      icon: <Shield size={40} />,
      title: "Corporate Investigation",
      description: "Fraud detection, employee screening, and business intelligence"
    },
    {
      icon: <Eye size={40} />,
      title: "Surveillance",
      description: "Professional surveillance services with detailed reporting"
    }
  ];

  return (
    <div className="app">

      {/* Hero Section */}
      <section className="hero" id="home">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={bg} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Uncovering Truth in the Shadows</h1>
            <p className="hero-subtitle">
              Professional investigative services with over 20 years of experience.
              Discretion guaranteed, results delivered.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive investigative solutions tailored to your needs
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-btn">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Us?</h2>
              <p>
                With over two decades of experience in private investigation,
                our team of licensed professionals brings unmatched expertise
                to every case. We utilize cutting-edge technology combined with
                traditional investigative techniques to deliver results.
              </p>
              <ul className="about-features">
                <li>✓ Licensed & Insured Investigators</li>
                <li>✓ 24/7 Availability</li>
                <li>✓ Complete Confidentiality</li>
                <li>✓ Court-Admissible Evidence</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Cases Solved</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Confidential consultation available 24/7
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>info@shadowseek.com</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>123 Mystery Lane, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Tell us about your case..." rows="5"></textarea>
              <button className="btn btn-primary" onClick={() => alert('Message sent! We will contact you soon.')}>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}