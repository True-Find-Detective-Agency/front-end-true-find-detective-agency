import React from 'react';
import { Shield, Award, Clock, Lock, Target, Users, CheckCircle, Star, TrendingUp, FileCheck, Headphones, Globe } from 'lucide-react';
import "../css/whyUs.css"

function WhyUs() {
  const mainReasons = [
    {
      icon: <Shield size={48} />,
      title: "Licensed & Certified",
      description: "All our investigators are fully licensed, insured, and certified by national investigative associations. We operate within legal boundaries and maintain the highest professional standards."
    },
    {
      icon: <Award size={48} />,
      title: "20+ Years Experience",
      description: "With over two decades in the industry, we've handled thousands of cases across various specializations. Our experience means we know how to get results efficiently and effectively."
    },
    {
      icon: <Lock size={48} />,
      title: "Complete Confidentiality",
      description: "Your privacy is paramount. We use encrypted communications, secure file storage, and strict confidentiality protocols to ensure your case remains completely private."
    },
    {
      icon: <Target size={48} />,
      title: "98% Success Rate",
      description: "Our proven track record speaks for itself. We've successfully resolved over 2,000 cases with a 98% satisfaction rate, delivering actionable results when it matters most."
    },
    {
      icon: <Clock size={48} />,
      title: "24/7 Availability",
      description: "Emergencies don't wait for business hours. Our team is available around the clock to respond to urgent cases and provide immediate assistance when you need it."
    },
    {
      icon: <Users size={48} />,
      title: "Expert Team",
      description: "Our team includes former law enforcement, military intelligence, forensic specialists, and legal experts. Each investigator brings unique skills and decades of combined experience."
    }
  ];

  const advantages = [
    {
      icon: <FileCheck size={32} />,
      title: "Court-Admissible Evidence",
      description: "Professional documentation that meets legal standards"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Advanced Technology",
      description: "State-of-the-art investigative tools and software"
    },
    {
      icon: <Headphones size={32} />,
      title: "Dedicated Support",
      description: "Personal case manager assigned to every client"
    },
    {
      icon: <Globe size={32} />,
      title: "Nationwide Coverage",
      description: "Network of investigators across all 50 states"
    },
    {
      icon: <Star size={32} />,
      title: "Transparent Pricing",
      description: "Clear quotes with no hidden fees or surprises"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with satisfaction guarantee"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Corporate Client",
      rating: 5,
      text: "True Find helped us uncover internal fraud that was costing our company thousands monthly. Their professionalism and discretion were outstanding. Highly recommended!"
    },
    {
      name: "Michael R.",
      role: "Individual Client",
      rating: 5,
      text: "After months of searching for my missing sister, True Find located her in just two weeks. Their compassion and dedication gave my family closure. Forever grateful."
    },
    {
      name: "Jennifer L.",
      role: "Legal Professional",
      rating: 5,
      text: "As an attorney, I've worked with many investigation firms. True Find consistently delivers thorough, court-ready evidence. They're my go-to for all case investigations."
    }
  ];

  const comparisonData = [
    { feature: "Licensed Investigators", us: true, others: "Some" },
    { feature: "24/7 Availability", us: true, others: false },
    { feature: "Free Consultation", us: true, others: "Varies" },
    { feature: "Dedicated Case Manager", us: true, others: false },
    { feature: "Court-Admissible Reports", us: true, others: "Sometimes" },
    { feature: "Nationwide Coverage", us: true, others: "Limited" },
    { feature: "Advanced Technology", us: true, others: "Basic" },
    { feature: "Transparent Pricing", us: true, others: false }
  ];

  return (
    <>
      <div className="whyus-page">
        {/* Hero Section */}
        <section className="whyus-hero">
          <div className="container">
            <h1 className="page-title">Why Choose True Find?</h1>
            <p className="page-subtitle">
              The difference is in our commitment, expertise, and proven results
            </p>
          </div>
        </section>

        {/* Main Reasons Section */}
        <section className="main-reasons-section">
          <div className="container">
            <h2 className="section-title">What Sets Us Apart</h2>
            <div className="reasons-grid">
              {mainReasons.map((reason, index) => (
                <div key={index} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Cases Solved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Investigators</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="advantages-section">
          <div className="container">
            <h2 className="section-title">Additional Advantages</h2>
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-card">
                  <div className="advantage-icon">{advantage.icon}</div>
                  <h4>{advantage.title}</h4>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="comparison-section">
          <div className="container">
            <h2 className="section-title">True Find vs Others</h2>
            <p className="section-subtitle">See how we compare to typical investigation agencies</p>
            
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
                    {row.us === true ? (
                      <CheckCircle size={24} className="check-icon" />
                    ) : (
                      row.us
                    )}
                  </div>
                  <div className="table-cell">
                    {row.others === true ? (
                      <CheckCircle size={24} className="check-icon-gray" />
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
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#DAA520" color="#DAA520" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="guarantee-section">
          <div className="container">
            <div className="guarantee-content">
              <Shield size={64} />
              <h2>Our Commitment to You</h2>
              <p>
                We stand behind every investigation with our satisfaction guarantee. 
                If we don't deliver the results we promise, we'll work until we do - 
                at no additional cost to you. Your trust is our most valuable asset, 
                and we're committed to earning it every single day.
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

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Experience the True Find Difference</h2>
              <p>
                Join thousands of satisfied clients who chose professionalism, 
                discretion, and results. Contact us today for your free consultation.
              </p>
              <button className="cta-button">Get Started Today</button>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default WhyUs;