import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to link the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Zero Gravity Gym</h1>
      </div>
      <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/membership">Membership</Link></li>
        </ul>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
