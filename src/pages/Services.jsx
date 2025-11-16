import React, { useState, useEffect } from 'react';
import {
  Search, Shield, Eye, FileSearch, Users, Briefcase, Home,
  Heart, Scale, Laptop, Camera, Lock, HeartCrack,
  FileWarning, UserSearch, Activity, Phone, UserCheck
} from "lucide-react";

import "../css/services.css";
import { detailedServices } from '../data/data';

import AOS from "aos";
import "aos/dist/aos.css";

const iconMap = {
  Search, Shield, Eye, FileSearch, Users, Briefcase, Home, Heart,
  Scale, Laptop, Camera, Lock, HeartCrack, FileWarning,
  UserSearch, Activity, Phone, UserCheck
};

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Select');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

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
        <section className="services-hero" data-aos="fade-up">
          <div className="container">
            <h1 className="page-title" data-aos="fade-up">Our Services</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="150">
              Professional investigative solutions tailored to your specific needs
            </p>
          </div>
        </section>

        {/* Search Filter */}
        <section className="search-filter-section">
          <div className="container" data-aos="fade-up">
            <div className="search-filter-wrapper">
              <div className="search-box" data-aos="fade-right">
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
                data-aos="fade-left"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <p className="results-count" data-aos="zoom-in">
              Showing {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "service" : "services"}
            </p>
          </div>
        </section>

        {/* Services List */}
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
                      data-aos="fade-up"
                      data-aos-delay={index * 120}
                      style={{
                        backgroundImage: `url(${service.imgUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >

                      {/* Image left – alternate */}
                      {index % 2 === 0 && (
                        <div className="service-img-box" data-aos="fade-right">
                          <img src={service.imgUrl} alt={service.title} />
                        </div>
                      )}

                      {/* Main Card */}
                      <div className="service-card" data-aos="zoom-in">
                        <div className="service-icon">
                          {Icon && <Icon size={40} />}
                        </div>

                        <h3>{service.title}</h3>
                        <p className="service-description">{service.description}</p>

                        {/* First 4 features */}
                        <ul className="features-list" data-aos="fade-up">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx}>
                              <strong>{feature.title}:</strong> {feature.desc}
                            </li>
                          ))}
                        </ul>

                        {/* More features */}
                        <div className={`service-details ${showMore ? "show" : ""}`}>
                          {showMore && (
                            <ul className="features-list" data-aos="fade-up">
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
                            data-aos="fade-up"
                          >
                            {showMore ? "Show Less" : "Show More"}
                          </button>
                        )}
                      </div>

                      {/* Image Right – alternate */}
                      {index % 2 !== 0 && (
                        <div className="service-img-box" data-aos="fade-left">
                          <img src={service.imgUrl} alt={service.title} />
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-results" data-aos="zoom-in">
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
