import React, { useState } from 'react';
import { Search, Shield, Eye, FileSearch, Users, Briefcase, Home, Heart, Scale, Laptop, Camera, Lock } from 'lucide-react';
import "../css/services.css"
const iconMap = {
  Search,
  Briefcase,
  Eye,
  FileSearch,
  Users,
  Heart,
  Laptop,
  Scale,
  Home,
  Lock,
  Camera,
  Shield,
};
import { detailedServices } from '../data/data';
function Services() {
  const [activeService, setActiveService] = useState(null);



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
              {detailedServices.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <div key={index}
                    className={`service-card ${activeService === index ? "active" : ""}`}
                    onClick={() => setActiveService(activeService === index ? null : index) }>
                    
                    <div className="service-icon">
                      {Icon && <Icon size={40} />}
                    </div>

                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <div
                      className={`service-details ${activeService === index ? "show" : ""
                        }`}
                    >
                      <h4>What's Included:</h4>
                      <ul className="features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <div className="service-price">{service.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


      </div>

    </>
  );
}

export default Services;