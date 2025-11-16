import React from "react";
import { Shield, Award, Clock, Lock, Target, Users, CheckCircle, Star, TrendingUp, FileCheck, Headphones, Globe, ArrowRight } from "lucide-react";

import "../css/whyUs.css";

import { mainReasons, advantages, testimonials, comparisonData } from "../data/data";
import AboutStats from "../components/AnimatedStat"

const iconMap = {
  Shield: <Shield size={48} />,
  Award: <Award size={48} />,
  Lock: <Lock size={48} />,
  Target: <Target size={48} />,
  Clock: <Clock size={48} />,
  Users: <Users size={48} />,
  FileCheck: <FileCheck size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Headphones: <Headphones size={32} />,
  Globe: <Globe size={32} />,
  Star: <Star size={32} />,
  CheckCircle: <CheckCircle size={32} />
};

function WhyUs() {
  return (
    <div className="main-container">
      <div className="whyus-page">
        {/* Hero */}
        <section className="whyus-hero">
          <div className="container">
            <h1 className="page-title">Why Choose True Find?</h1>
            <p className="page-subtitle">
              The difference is in our commitment, expertise, and proven results
            </p>
          </div>
        </section>

        {/* Main Reasons */}
        <section className="main-reasons-section">
          <div className="container">
            <h2 className="section-title">What Sets Us Apart</h2>
            <div className="reasons-grid">
              {mainReasons.map((item, i) => (
                <div key={i} className="reason-card">
                  <div className="reason-icon">{iconMap[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-banner">
          <div className="container">
            <AboutStats />
          </div>
        </section>

        {/* Advantages */}
        <section className="advantages-section">
          <div className="container">
            <h2 className="section-title">Additional Advantages</h2>
            <div className="advantages-grid">
              {advantages.map((adv, index) => (
                <div key={index} className="advantage-card">
                  <div className="advantage-icon">{iconMap[adv.icon]}</div>
                  <h4>{adv.title}</h4>
                  <p>{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="comparison-section">
          <div className="container">
            <h2 className="section-title">True Find vs Others</h2>
            <p className="section-subtitle">
              See how we compare to other investigation agencies
            </p>

            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell">Feature</div>
                <div className="header-cell highlight">True Find</div>
                <div className="header-cell">Other Agencies</div>
              </div>

              {comparisonData.map((row, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell">{row.feature}</div>

                  <div className="table-cell highlight">
                    {row.us === true ? <CheckCircle size={24} /> : row.us}
                  </div>

                  <div className="table-cell">
                    {row.others === true ? (
                      <CheckCircle size={24} />
                    ) : row.others === false ? (
                      <span className="cross">✗</span>
                    ) : (
                      row.others
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real experiences from our clients</p>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#DAA520" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="service-btn"
              onClick={() =>
                window.open("https://g.page/r/CToGJ1ZyK_KkEAI/review", "_blank")
              }
            >
              All reviews <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Guarantee */}
        <section className="guarantee-section">
          <div className="container">
            <div className="guarantee-content">
              <Shield size={64} />
              <h2>Our Commitment to You</h2>
              <p>
                We stand behind our work. If results are not delivered,
                we continue working with no extra cost.
              </p>

              <div className="guarantee-features">
                <div className="guarantee-item">
                  <CheckCircle size={24} />
                  <span>100% Confidential</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle size={24} />
                  <span>Legal Compliance</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle size={24} />
                  <span>Professional Results</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle size={24} />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Experience the True Find Difference</h2>
              <p>Contact us today for your free consultation.</p>
              <button className="cta-button">Get Started Today</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyUs;
