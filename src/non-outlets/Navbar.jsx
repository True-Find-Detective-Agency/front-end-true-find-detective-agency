import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Menu, X, Home, Info, Briefcase,  MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


import "../css/navbar.css"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navTo = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763140388/unnamed_jqn7fm.png" onClick={() => navTo("/")} alt="" />

          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <Home size={18} style={{ marginRight: "6px" }} />
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                <Info size={18} style={{ marginRight: "6px" }} />
                About
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                <Briefcase size={18} style={{ marginRight: "6px" }} />
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Phone size={18} style={{ marginRight: "6px" }} />
                Contact
              </Link>
            </li>

            <li>
              <Link to="/branches" onClick={() => setMenuOpen(false)}>
                <MapPin size={18} style={{ marginRight: "6px" }} />
                Branches
              </Link>
            </li>

            <li>
              <Link to="/why-us" onClick={() => setMenuOpen(false)}>
                <Shield size={18} style={{ marginRight: "6px" }} />
                Why Us
              </Link>
            </li>

            <button className="nav-call" onClick={() => window.open("https://wa.me/919977014334", "_blank")}>
              <FaWhatsapp  size={18} color="#fff" style={{ marginRight: "6px" }} />
            </button>
          </ul>
          <button className="nav-call not-active" onClick={() => window.open("https://wa.me/919977014334", "_blank")}>
            <FaWhatsapp  size={18} color="#fff" style={{ marginRight: "6px" }} />
          </button>
        </div>
      </nav>


    </>
  );
}

export default Navbar;