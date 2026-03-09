import React from 'react';

const Consultation = () => {
  return (
    <section className="consultation-section" id="appointment">
      <div className="container">
        <div className="consultation-wrapper">
          
          {/* Left Content */}
          <div className="consultation-content">
            <div className="section-title-wrapper" style={{ marginBottom: '24px' }}>
              <span className="subtitle">EXCLUSIVE ACCESS</span>
              <h2 className="title">Private Consultation</h2>
              <p className="description">
                Experience the luxury of a personalized fitting. Join us for a private consultation to discuss your vision, fabric choices, and silhouette requirements.
              </p>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Akobo Ojurin, Ibadan, Oyo State.</span>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>owolabimonsurat87@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="consultation-form-card">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input type="text" id="name" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input type="tel" id="phone" placeholder="+234 ..." />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="service">SERVICE TYPE</label>
                <select id="service">
                  <option value="bespoke-gown">Bespoke Gown</option>
                  <option value="traditional">Traditional Attire</option>
                  <option value="style-consulting">Style Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">PREFERRED DATE</label>
                <input type="date" id="date" />
              </div>

              <button type="button" className="submit-btn" onClick={() => alert('Appointment feature coming soon!')}>
                BOOK APPOINTMENT
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Consultation;
