import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

import "../css/navbar.css"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Shield size={32} />
            <span>TRUE FIND DETECTIVE AGENCY</span>
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/branches" onClick={() => setMenuOpen(false)}>Branches</Link></li>
            <li><Link to="/why-us" onClick={() => setMenuOpen(false)}>Why Us</Link></li>
          </ul>
        </div>
      </nav>


    </>
  );
}

export default Navbar;