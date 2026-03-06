import React from 'react';

const Expertise = () => {
  return (
    <section className="expertise-section section-padding" id="services">
      <div className="container">
        <div className="expertise-header">
          <div className="left">
            <div className="section-title-wrapper" style={{ marginBottom: 0 }}>
              <span className="subtitle">OUR EXPERTISE</span>
              <h2 className="title">Exquisite Craftsmanship for the Modern Woman</h2>
            </div>
          </div>
          <p className="right">
            Every stitch is a testament to our dedication to luxury and Nigerian cultural heritage.
          </p>
        </div>

        <div className="expertise-grid">
          {/* Card 1 */}
          <div className="expertise-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3>Bespoke Gowns</h3>
            <p>
              Custom-made evening wear and red-carpet masterpieces designed to accentuate your unique silhouette.
            </p>
            <a href="#collections" className="explore-link">EXPLORE MORE &gt;</a>
          </div>

          {/* Card 2 */}
          <div className="expertise-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z" />
              </svg>
            </div>
            <h3>Traditional Attire</h3>
            <p>
              Masterfully crafted Aso Ebi, Iro, and Buba using the world's finest luxury fabrics and intricate lace.
            </p>
            <a href="#collections" className="explore-link">EXPLORE MORE &gt;</a>
          </div>

          {/* Card 3 */}
          <div className="expertise-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5a5.5 5.5 0 013.096 10.047 9.005 9.005 0 015.9 8.18l.004.273H3a9.005 9.005 0 015.9-8.45A5.5 5.5 0 0112 2.5zM12 4a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </div>
            <h3>Style Consulting</h3>
            <p>
              Personalized wardrobe guidance and fabric selection to refine your signature feminine style for any occasion.
            </p>
            <a href="#appointment" className="explore-link">EXPLORE MORE &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
