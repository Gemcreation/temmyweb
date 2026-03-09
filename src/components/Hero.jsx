import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">PREMIUM BESPOKE TAILORING</span>
          <h1 className="hero-title">
            The Art of <span className="highlight">Feminine Elegance</span>
          </h1>
          <p className="hero-description">
            Experience the pinnacle of premium female bespoke tailoring
            in Nigeria. Where cultural heritage meets contemporary
            sophistication for the modern woman.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">VIEW COLLECTIONS</button>
            <button className="btn-secondary">OUR STORY</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
