import React from 'react';
import headerLogo from "../assets/images/temmyLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src={headerLogo} className="site-header" alt="logo" />
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
