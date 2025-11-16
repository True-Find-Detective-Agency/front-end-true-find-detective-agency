import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  MapPin,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navTo = useNavigate();

  // ⭐ Init AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) navbar?.classList.add("scrolled");
      else navbar?.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar" data-aos="fade-down" data-aos-delay="100">
        <div className="nav-container">

          <div className="nav-logo">
            <img
              src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763182157/unnamed_imgupscaler.ai_V1_Fast__2K_a61c5i.png"
              onClick={() => navTo("/")}
              alt=""
            />
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} onClick={closeMenu} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li data-aos="fade-right" data-aos-delay="200">
              <Link to="/" onClick={closeMenu}>
                <Home size={18} style={{ marginRight: "6px" }} />
                Home
              </Link>
            </li>

            <li data-aos="fade-right" data-aos-delay="250">
              <Link to="/about" onClick={closeMenu}>
                <Info size={18} style={{ marginRight: "6px" }} />
                About
              </Link>
            </li>

            <li data-aos="fade-right" data-aos-delay="300">
              <Link to="/services" onClick={closeMenu}>
                <Briefcase size={18} style={{ marginRight: "6px" }} />
                Services
              </Link>
            </li>

            <li data-aos="fade-right" data-aos-delay="350">
              <Link to="/contact" onClick={closeMenu}>
                <Phone size={18} style={{ marginRight: "6px" }} />
                Contact
              </Link>
            </li>

            <li data-aos="fade-right" data-aos-delay="400">
              <Link to="/branches" onClick={closeMenu}>
                <MapPin size={18} style={{ marginRight: "6px" }} />
                Branches
              </Link>
            </li>

            <li data-aos="fade-right" data-aos-delay="450">
              <Link to="/why-us" onClick={closeMenu}>
                <Shield size={18} style={{ marginRight: "6px" }} />
                Why Us
              </Link>
            </li>

            <button
              className="nav-call"
              onClick={() => window.open("https://wa.me/919977014334", "_blank")}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaWhatsapp size={18} color="#fff" style={{ marginRight: "6px" }} />
            </button>
          </ul>

          {/* Desktop WhatsApp */}
          <button
            className="nav-call not-active"
            onClick={() => window.open("https://wa.me/919977014334", "_blank")}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaWhatsapp size={18} color="#fff" style={{ marginRight: "6px" }} />
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
