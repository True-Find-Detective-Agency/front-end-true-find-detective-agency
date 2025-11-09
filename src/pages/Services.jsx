import React, { useState } from 'react';
import { Search, Shield, Eye, FileSearch, Users, Briefcase, Home, Heart, Scale, Laptop, Camera, Lock } from 'lucide-react';
import "../css/services.css"
function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Search size={48} />,
      title: "Background Checks",
      description: "Comprehensive background investigations for personal and professional purposes",
      features: [
        "Employment verification",
        "Criminal record checks",
        "Education verification",
        "Credit history analysis",
        "Reference verification",
        "Social media screening"
      ],
      price: "Starting at $299"
    },
    {
      icon: <Briefcase size={48} />,
      title: "Corporate Investigation ",
      description: "Protect your business with thorough corporate investigative services",
      features: [
        "Employee misconduct investigations",
        "Corporate fraud detection",
        "Due diligence investigations",
        "Intellectual property theft",
        "Competitor intelligence",
        "Asset verification"
      ],
      price: "Starting at $799"
    },
    {
      icon: <Eye size={48} />,
      title: "Surveillance Services",
      description: "Professional surveillance with detailed documentation and evidence",
      features: [
        "Mobile surveillance",
        "Fixed location monitoring",
        "Video and photo documentation",
        "GPS tracking (legal)",
        "Activity logs and reports",
        "Court-admissible evidence"
      ],
      price: "Starting at $599"
    },
    {
      icon: <FileSearch size={48} />,
      title: "Fraud Investigation",
      description: "Uncover fraud and financial irregularities with expert analysis",
      features: [
        "Insurance fraud investigation",
        "Workers' compensation fraud",
        "Financial fraud detection",
        "Identity theft cases",
        "Asset searches",
        "Forensic accounting support"
      ],
      price: "Starting at $699"
    },
    {
      icon: <Users size={48} />,
      title: "Missing Persons",
      description: "Locate missing individuals with compassionate and thorough investigation",
      features: [
        "Skip tracing services",
        "Database searches",
        "Witness interviews",
        "Social network analysis",
        "International searches",
        "Reunification assistance"
      ],
      price: "Starting at $499"
    },
    {
      icon: <Heart size={48} />,
      title: "Matrimonial Investigation",
      description: "Discreet investigations for marital concerns and custody cases",
      features: [
        "Infidelity investigations",
        "Prenuptial background checks",
        "Child custody support",
        "Asset discovery",
        "Cohabitation verification",
        "Dating background checks"
      ],
      price: "Starting at $549"
    },
    {
      icon: <Laptop size={48} />,
      title: "Digital Forensics",
      description: "Advanced digital investigation and cyber crime analysis",
      features: [
        "Computer forensics",
        "Mobile device analysis",
        "Email investigation",
        "Data recovery",
        "Cyber stalking cases",
        "Social media forensics"
      ],
      price: "Starting at $899"
    },
    {
      icon: <Scale size={48} />,
      title: "Legal Support",
      description: "Investigative services for legal proceedings and attorneys",
      features: [
        "Witness location and interviews",
        "Evidence gathering",
        "Scene investigation",
        "Expert testimony",
        "Case file preparation",
        "Deposition support"
      ],
      price: "Starting at $649"
    },
    {
      icon: <Home size={48} />,
      title: "Property Investigation",
      description: "Comprehensive property and real estate investigations",
      features: [
        "Property history research",
        "Tenant screening",
        "Neighborhood analysis",
        "Lease violation investigation",
        "Property damage assessment",
        "HOA compliance checks"
      ],
      price: "Starting at $399"
    },
    {
      icon: <Lock size={48} />,
      title: "Security Consulting",
      description: "Expert security assessments and risk management solutions",
      features: [
        "Vulnerability assessments",
        "Security system design",
        "Risk analysis",
        "Employee security training",
        "Threat evaluation",
        "Emergency protocols"
      ],
      price: "Starting at $999"
    },
    {
      icon: <Camera size={48} />,
      title: "Process Serving",
      description: "Professional and reliable legal document delivery services",
      features: [
        "Court document serving",
        "Skip trace serving",
        "Rush service available",
        "Proof of service affidavits",
        "Multiple attempt service",
        "Nationwide coverage"
      ],
      price: "Starting at $99"
    },
    {
      icon: <Shield size={48} />,
      title: "Personal Protection",
      description: "Executive protection and personal security services",
      features: [
        "Close protection officers",
        "Threat assessment",
        "Secure transportation",
        "Event security",
        "Travel security planning",
        "24/7 protection details"
      ],
      price: "Custom Quote"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Contact us for a free, confidential consultation to discuss your case and needs"
    },
    {
      step: "02",
      title: "Case Evaluation",
      description: "Our team evaluates your case and develops a customized investigation plan"
    },
    {
      step: "03",
      title: "Investigation",
      description: "Licensed investigators conduct thorough research and gather evidence"
    },
    {
      step: "04",
      title: "Reporting",
      description: "Receive detailed reports with findings, evidence, and recommendations"
    }
  ];

  return (
    <>
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Professional investigative solutions tailored to your specific needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-card ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(activeService === index ? null : index)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className={`service-details ${activeService === index ? 'show' : ''}`}>
                    <h4>What's Included:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="service-price">{service.price}</div>
                  </div>
                  
                  <button className="service-toggle">
                    {activeService === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title">Our Investigation Process</h2>
            <p className="section-subtitle">
              A systematic approach to delivering results
            </p>
            
            <div className="process-timeline">
              {process.map((item, index) => (
                <div key={index} className="process-item">
                  <div className="process-step">{item.step}</div>
                  <div className="process-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2 className="section-title">Why Choose True Find?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Licensed Professionals</h3>
                <p>All investigators are fully licensed, insured, and highly experienced</p>
              </div>
              <div className="benefit-card">
                <h3>Confidential Service</h3>
                <p>Complete discretion and confidentiality guaranteed on every case</p>
              </div>
              <div className="benefit-card">
                <h3>24/7 Availability</h3>
                <p>Emergency services available around the clock for urgent cases</p>
              </div>
              <div className="benefit-card">
                <h3>Court-Admissible Evidence</h3>
                <p>Professional documentation suitable for legal proceedings</p>
              </div>
              <div className="benefit-card">
                <h3>Transparent Pricing</h3>
                <p>Clear, upfront pricing with no hidden fees or surprises</p>
              </div>
              <div className="benefit-card">
                <h3>Proven Track Record</h3>
                <p>98% success rate with over 2000 cases successfully resolved</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>
                Contact us today for a free consultation. Our team is ready to help 
                you uncover the truth with professional and discreet service.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">Request Consultation</button>
                <button className="cta-button secondary">Call Now: (555) 123-4567</button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default Services;