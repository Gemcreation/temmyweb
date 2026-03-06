import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          TEMMY CLASSICAL
        </a>
        <ul className="nav-links">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#craft">Our Craft</a></li>
          <li><a href="#appointment">Book Appointment</a></li>
        </ul>
        <button className="consult-btn">CONSULT NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;
