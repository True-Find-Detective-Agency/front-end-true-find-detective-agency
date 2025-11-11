import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Search, Building } from 'lucide-react';
import "../css/branches.css";

import { branches, regions } from '../data/data';
function Branches() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  
  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         branch.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || branch.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="branches-page">
        {/* Hero Section */}
        <section className="branches-hero">
          <div className="container">
            <Building size={64} className="hero-icon" />
            <h1 className="page-title">Our Branches</h1>
            <p className="page-subtitle">
              Nationwide coverage with professional investigators in major cities across America
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
                  placeholder="Search by city or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="region-filter"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
            </div>
            <p className="results-count">
              Showing {filteredBranches.length} {filteredBranches.length === 1 ? 'branch' : 'branches'}
            </p>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="branches-grid-section">
          <div className="container">
            {filteredBranches.length > 0 ? (
              <div className="branches-grid">
                {filteredBranches.map((branch) => (
                  <div key={branch.id} className="branch-card">
                    <div className="branch-header">
                      <div className="branch-location">
                        <MapPin size={24} />
                        <div>
                          <h3>{branch.city}</h3>
                          <span className="branch-state">{branch.state}</span>
                        </div>
                      </div>
                      <div className="branch-badge">Est. {branch.established}</div>
                    </div>

                    <div className="branch-details">
                      <div className="detail-item">
                        <MapPin size={18} />
                        <div>
                          <strong>Address</strong>
                          <p>{branch.address}</p>
                          <p>{branch.city}, {branch.state} {branch.zip}</p>
                        </div>
                      </div>

                      <div className="detail-item">
                        <Phone size={18} />
                        <div>
                          <strong>Phone</strong>
                          <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                        </div>
                      </div>

                      <div className="detail-item">
                        <Mail size={18} />
                        <div>
                          <strong>Email</strong>
                          <a href={`mailto:${branch.email}`}>{branch.email}</a>
                        </div>
                      </div>

                      <div className="detail-item">
                        <Clock size={18} />
                        <div>
                          <strong>Hours</strong>
                          <p>{branch.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="branch-manager">
                      <strong>Branch Manager:</strong> {branch.manager}
                    </div>

                    <div className="branch-services">
                      <strong>Services Available:</strong>
                      <div className="services-tags">
                        {branch.services.map((service, index) => (
                          <span key={index} className="service-tag">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="branch-button">
                      <Navigation size={16} />
                      Get Directions
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <Search size={64} />
                <h3>No branches found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Coverage Map Section */}
        <section className="coverage-section">
          <div className="container">
            <h2 className="section-title">Nationwide Coverage</h2>
            <p className="section-subtitle">
              With 10 strategically located offices, we provide comprehensive investigative services across the United States
            </p>
            
            <div className="coverage-stats">
              <div className="coverage-stat">
                <div className="stat-number">10</div>
                <div className="stat-label">Office Locations</div>
              </div>
              <div className="coverage-stat">
                <div className="stat-number">50</div>
                <div className="stat-label">States Covered</div>
              </div>
              <div className="coverage-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Availability</div>
              </div>
              <div className="coverage-stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Investigators</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Can't Find a Branch Near You?</h2>
              <p>
                We work with trusted investigators nationwide. Contact our main office 
                and we'll connect you with the right professional for your case.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">Contact Main Office</button>
                <button className="cta-button secondary">Call: (555) 123-4567</button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default Branches;