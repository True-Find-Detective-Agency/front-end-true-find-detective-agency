import React, { useEffect } from 'react';
import { Shield, Award, Users, Eye, Target, CheckCircle } from 'lucide-react';
import "../css/about.css"
import AboutStats from '../components/AnimatedStat';
import { useNavigate } from 'react-router-dom';
import { achievements, team , values} from '../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const iconMap = {
  Shield: Shield,
  Eye: Eye,
  Target: Target,
  Award: Award,
};

function About() {
  const navTo = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <div className="about-page">

        {/* Hero Section */}
        <section className="about-hero" data-aos="fade-up">
          <div className="container">
            <h1 className="page-title" data-aos="fade-up">About True Find Detective Agency</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="150">
              Two Decades of Excellence in Private Investigation
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section" data-aos="fade-up">
          <div className="container">
            <div className="story-content">
              <div className="story-text" data-aos="fade-right">
                <h2>Our Story</h2>
                <p>
                  Founded in 2021, True Find Detective Agency was established with a singular
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

              <div data-aos="zoom-in">
                <AboutStats />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Our Core Values</h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="150">
              The principles that guide every investigation we undertake
            </p>

            <div className="value-gird-container">
              <div className="values-grid features-grid">
                {values.map((value, index) => {
                  const Icon = iconMap[value.icon];
                  return (
                    <div
                      key={index}
                      className="feature-card"
                      data-aos="flip-up"
                      data-aos-delay={index * 150}
                    >
                      <div className="feature-icon">
                        <Icon size={40} />
                      </div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  );
                })}
              </div>

              <div data-aos="fade-left">
                <img src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763190857/dsd_auxf8r.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Meet Our Leadership</h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="100">
              Experienced professionals dedicated to your case
            </p>

            <div className="team-grid">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="team-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                >
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
        <section className="achievements-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Our Achievements</h2>

            <div className="achievements-grid-container">
              <img
                src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763190170/achievment_mapmsd_r18tls.png"
                alt=""
                data-aos="fade-right"
              />

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="achievement-item"
                    data-aos="fade-left"
                    data-aos-delay={index * 150}
                  >
                    <CheckCircle size={24} />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" data-aos="zoom-in">
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2>Ready to Work With Us?</h2>
              <p>
                Let our experienced team help you uncover the truth.
                Contact us today for a confidential consultation.
              </p>
              <button className="cta-button" onClick={() => navTo("/contact")}>
                Get Started Today
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
