import React from 'react';
import { Shield, Award, Users, Eye, Target, CheckCircle } from 'lucide-react';
import "../css/about.css"
import AboutStats from '../components/AnimatedStat';

function About() {
  const values = [
    {
      icon: <Shield size={40} />,
      title: "Integrity",
      description: "We operate with the highest ethical standards and complete transparency"
    },
    {
      icon: <Eye size={40} />,
      title: "Discretion",
      description: "Your privacy and confidentiality are our top priorities in every case"
    },
    {
      icon: <Target size={40} />,
      title: "Precision",
      description: "Meticulous attention to detail ensures accurate and reliable results"
    },
    {
      icon: <Award size={40} />,
      title: "Excellence",
      description: "Committed to delivering superior investigative services every time"
    }
  ];

  const team = [
    {
      name: "Robert Harrison",
      role: "Chief Investigator",
      experience: "25+ Years Experience",
      specialization: "Corporate Fraud & Criminal Investigation"
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Detective",
      experience: "18+ Years Experience",
      specialization: "Surveillance & Background Checks"
    },
    {
      name: "Michael Chen",
      role: "Forensic Analyst",
      experience: "15+ Years Experience",
      specialization: "Digital Forensics & Cyber Investigation"
    }
  ];

  const achievements = [
    "Licensed Private Investigation Agency",
    "Certified by National Association of Private Investigators",
    "Over 2000 Successfully Resolved Cases",
    "98% Client Satisfaction Rate",
    "24/7 Emergency Response Team",
    "Court-Admissible Evidence Collection"
  ];

  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="page-title">About True Find Detective Agency</h1>
            <p className="page-subtitle">
              Two Decades of Excellence in Private Investigation
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 2005, True Find Detective Agency was established with a singular 
                  mission: to provide professional, reliable, and discreet investigative services 
                  to individuals and businesses across the nation.
                </p>
                <p>
                  What started as a small operation with three dedicated investigators has grown 
                  into one of the most respected detective agencies in the country. Our success 
                  is built on a foundation of integrity, expertise, and an unwavering commitment 
                  to uncovering the truth.
                </p>
                <p>
                  Today, we serve hundreds of clients annually, from individuals seeking peace 
                  of mind to corporations protecting their interests. Every case we handle 
                  receives the same level of dedication and professionalism that has become 
                  our trademark.
                </p>
              </div>
              <AboutStats />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The principles that guide every investigation we undertake
            </p>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="section-description">
              Experienced professionals dedicated to your case
            </p>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-avatar">
                    <Users size={50} />
                  </div>
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-experience">{member.experience}</div>
                  <p className="team-specialization">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="container">
            <h2 className="section-title">Our Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <CheckCircle size={24} />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Work With Us?</h2>
              <p>
                Let our experienced team help you uncover the truth. 
                Contact us today for a confidential consultation.
              </p>
              <button className="cta-button">Get Started Today</button>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default About;