/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Search } from "lucide-react";
import "../css/branches.css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { branches, env, regions } from "../data/data";
import LocationButton from "../components/LocationButton";
import { AnimatedStat } from "../components/AnimatedStat";

import AOS from "aos";
import "aos/dist/aos.css";

function Branches() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const coverageRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // AOS Setup
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  // Intersection Observer for Stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (coverageRef.current) observer.observe(coverageRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.state.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "all" || branch.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="main-container">
      <div className="branches-page">

        {/* HERO SECTION */}
        <section className="branches-hero" data-aos="fade-up">
          <div className="container">
            <h1 className="page-title" data-aos="fade-up">Our Branches</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Nationwide coverage with professional investigators in major cities across India
            </p>
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section className="search-filter-section">
          <div className="container">
            <div className="search-filter-wrapper">

              <div className="search-box" data-aos="fade-right">
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
                data-aos="fade-left"
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>

            </div>

            <p className="results-count" data-aos="zoom-in">
              Showing {filteredBranches.length}{" "}
              {filteredBranches.length === 1 ? "branch" : "branches"}
            </p>
          </div>
        </section>

        {/* BRANCHES GRID */}
        <section className="branches-grid-section">
          <div className="container">

            {filteredBranches.length > 0 ? (
              <div className="branches-grid">

                {filteredBranches.map((branch, index) => (
                  <div
                    key={branch.id}
                    className="branch-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >

                    {/* INFO COLUMN */}
                    <div className="branch-content" data-aos="fade-right">
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
                          {branch.services.map((service, svcIdx) => (
                            <span key={svcIdx} className="service-tag">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <LocationButton lat={branch.lat} lng={branch.lng} />
                    </div>

                    {/* IMAGES CAROUSEL */}
                    <div className="branch-img-box" data-aos="fade-left">
                      <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 1200 }}
                        speed={900}
                        modules={[Autoplay]}
                      >
                        {branch.images.map((img) => (
                          <SwiperSlide key={img}>
                            <img src={img} alt={branch.city} className="branch-img" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                  </div>
                ))}

              </div>
            ) : (
              <div className="no-results" data-aos="zoom-in">
                <Search size={64} />
                <h3>No branches found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}

          </div>
        </section>

        {/* COVERAGE NUMBERS */}
        <section className="coverage-section" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Nationwide Coverage</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              With {env.branchCount} strategically located offices, we provide full nationwide coverage
            </p>

            <div className="coverage-stats" ref={coverageRef}>

              <div className="coverage-stat" data-aos="zoom-in">
                <AnimatedStat target={env.branchCount} startAnimation={startAnimation} />
                <div className="stat-label">Office Locations</div>
              </div>

              <div className="coverage-stat" data-aos="zoom-in">
                <AnimatedStat target={env.stateCovered} startAnimation={startAnimation} />
                <div className="stat-label">States Covered</div>
              </div>

              <div className="coverage-stat" data-aos="zoom-in">
                <AnimatedStat target={24} suffix="/7" startAnimation={startAnimation} />
                <div className="stat-label">Availability</div>
              </div>

              <div className="coverage-stat" data-aos="zoom-in">
                <AnimatedStat target={env.teamExperts} suffix="+" startAnimation={startAnimation} />
                <div className="stat-label">Investigators</div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" data-aos="fade-up">
          <div className="container">
            <div className="cta-content" data-aos="zoom-in">
              <h2>Can't Find a Branch Near You?</h2>
              <p>
                We work with trusted investigators nationwide. Contact our main office
                and we'll connect you with the best expert for your case.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">Contact Main Office</button>
                <button className="cta-button secondary">Call: (555) 123-4567</button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Branches;
