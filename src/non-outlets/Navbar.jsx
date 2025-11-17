import React, { useEffect, useState, } from "react";
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
  Share2,
  ChevronDown
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialDropdown, setSocialDropdown] = useState(false);
  const navTo = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setSocialDropdown(false);
  };

  const toggleMenu = () => setMenuOpen((p) => !p);
  const toggleSocialDropdown = (e) => {
    e.stopPropagation();
    setSocialDropdown((p) => !p);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) navbar?.classList.add("scrolled");
      else navbar?.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeIfOutside = (e) => {
      if (!e.target.closest(".social-dropdown-container")) {
        setSocialDropdown(false);
      }
    };

    if (socialDropdown) document.addEventListener("click", closeIfOutside);
    return () => document.removeEventListener("click", closeIfOutside);
  }, [socialDropdown]);

  // ENV LINKS
  const env = {
    whatsapp: "https://wa.me/919977014334",
    fb: "https://www.facebook.com/share/19uAsiQ4WB/",
    twitter: "https://x.com/truefind04?t=sdxnbn6KXw7-ipAgjdIqQg&s=08",
    instagram:
      "https://www.instagram.com/true_find_detective_agency__04?igsh=ZnZsanR3NjNyMWR2"
  };

  // SOCIAL ARRAY (desktop + mobile both use this)
  const socialLinks = [
    { name: "WhatsApp", icon: <FaWhatsapp size={18} />, url: env.whatsapp, color: "#25D366" },
    { name: "Facebook", icon: <FaFacebookF size={18} />, url: env.fb, color: "#1877F2" },
    { name: "Twitter", icon: <FaTwitter size={18} />, url: env.twitter, color: "#1DA1F2" },
    { name: "Instagram", icon: <FaInstagram size={18} />, url: env.instagram, color: "#E4405F" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img
            src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763182157/unnamed_imgupscaler.ai_V1_Fast__2K_a61c5i.png"
            alt="Logo"
            onClick={() => navTo("/")}
          />
        </div>

        {/* mobile toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}><Home size={18} /> Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}><Info size={18} /> About</Link></li>
          <li><Link to="/services" onClick={closeMenu}><Briefcase size={18} /> Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}><Phone size={18} /> Contact</Link></li>
          <li><Link to="/branches" onClick={closeMenu}><MapPin size={18} /> Branches</Link></li>
          <li><Link to="/why-us" onClick={closeMenu}><Shield size={18} /> Why Us</Link></li>

          {/* MOBILE SOCIAL DROPDOWN */}
          <li className="social-dropdown-mobile" onClick={toggleSocialDropdown}>
            <Link>   <Share2 size={18} /> Social Media
            <ChevronDown size={16} /></Link>
           
            {socialDropdown && (
              <div className="social-dropdown-menu-mobile">
                {socialLinks
                  .filter((s) => s.url)
                  .map((social, i) => (
                    <button
                      key={i}
                      className="social-dropdown-item"
                      onClick={() => {
                        window.open(social.url, "_blank");
                        closeMenu();
                      }}
                    >
                      <span className="social-icon" style={{ color: social.color }}>
                        {social.icon}
                      </span>
                      {social.name}
                    </button>
                  ))}
              </div>
            )}
          </li>
        </ul>

        {/* DESKTOP SOCIAL DROPDOWN */}
        <div className="social-dropdown-container">
          <button className="nav-call social-dropdown-trigger" onClick={toggleSocialDropdown}>
            <Share2 size={18} color="#fff" />
            <ChevronDown size={14} color="#fff" style={{ rotate: socialDropdown ? "180deg" : "0deg" }} />
          </button>

          {socialDropdown && (
            <div className="social-dropdown-menu">
              {socialLinks
                .filter((s) => s.url)
                .map((social, i) => (
                  <button
                    key={i}
                    className="social-dropdown-item"
                    onClick={() => {
                      window.open(social.url, "_blank");
                      setSocialDropdown(false);
                    }}
                  >
                    <span className="social-icon" style={{ color: social.color }}>
                      {social.icon}
                    </span>
                    {social.name}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
