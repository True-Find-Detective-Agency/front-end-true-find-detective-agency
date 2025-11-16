import React, { useState } from 'react';
import { Search, Shield, Eye, FileSearch, Users, Briefcase, Home, Heart, Scale, Laptop, Camera, Lock, HeartCrack, FileWarning, UserSearch, Activity, Phone, UserCheck } from "lucide-react";

import "../css/services.css";

import { detailedServices } from '../data/data';

const iconMap = { Search, Shield, Eye, FileSearch, Users, Briefcase, Home, Heart, Scale, Laptop, Camera, Lock, HeartCrack, FileWarning, UserSearch, Activity, Phone, UserCheck };

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Select');

  const categories = ['Select', ...new Set(detailedServices.map(s => s.title))];

  const filteredServices = detailedServices.filter(service => {
    const q = searchQuery.toLowerCase();

    const textMatch =
      service.title.toLowerCase().includes(q) ||
      service.icon.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q);

    const featureMatch = service.features.some(f =>
      f.title.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q)
    );

    const matchesSearch = textMatch || featureMatch;
    const matchesCategory =
      selectedCategory === 'Select' || service.title === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="main-container">
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

        {/* Search & Filter Section */}
        <section className="search-filter-section">
          <div className="container">
            <div className="search-filter-wrapper">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select
                className="region-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <p className="results-count">
              Showing {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "service" : "services"}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            {filteredServices.length > 0 ? (
              <div className="services-grid">
                {filteredServices.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  const showMore = activeService === index;

                  return (
                    <div
                      className="service-item"
                      key={index}
                      style={{
                        backgroundImage: `url(${service.imgUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >


                      {index % 2 === 0 && (
                        <div className="service-img-box">
                          <img src={service.imgUrl} alt={service.title} />
                        </div>
                      )}

                      <div className="service-card" >
                        <div className="service-icon">
                          {Icon && <Icon size={40} />}
                        </div>

                        <h3>{service.title}</h3>
                        <p className="service-description">{service.description}</p>

                        {/* Always show first 4 features */}
                        <ul className="features-list">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx}>
                              <strong>{feature.title}:</strong> {feature.desc}
                            </li>
                          ))}
                        </ul>



                        {/* Extra Hidden Features */}
                        <div className={`service-details ${showMore ? "show" : ""}`}>
                          {showMore && (
                            <ul className="features-list">
                              {service.features.slice(4).map((feature, idx) => (
                                <li key={idx}>
                                  <strong>{feature.title}:</strong> {feature.desc}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {/* Show More Button */}
                        {service.features.length > 4 && (
                          <button
                            className="show-more-btn"
                            onClick={() => toggleService(index)}
                          >
                            {showMore ? "Show Less" : "Show More"}
                          </button>
                        )}
                      </div>


                      {index % 2 !== 0 && (
                        <div className="service-img-box">
                          <img src={service.imgUrl} alt={service.title} />
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-results">
                <Search size={64} />
                <h3>No services found</h3>
                <p>Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
