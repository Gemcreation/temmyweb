import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-logo">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          TEMMY CLASSICAL
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Temmy Classical. Premium Female Bespoke Tailoring. All rights reserved.
        </div>

        <div className="social-links">
          <a href="#instagram">Instagram</a>
          <a href="#pinterest">Pinterest</a>
          <a href="#facebook">Facebook</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
