import React from 'react';
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="craft">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">OUR CRAFT</span>
          <h2 className="title">A Gallery of Sophistication</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src={gallery1}
              // src="https://images.unsplash.com/photo-1594552072238-b8a337834571?q=80&w=800&auto=format&fit=crop" 
              alt="Bespoke Wedding Dress Detail" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src={gallery2}
              // src="https://images.unsplash.com/photo-1582295525492-4afdffebecc9?q=80&w=800&auto=format&fit=crop" 
              alt="Elegant Evening Gown" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src={gallery3}
              // src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop" 
              alt="Luxury Fabric Detail" 
            />
          </div>
          <div className="gallery-item">
            <img
              src={gallery4} 
              // src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop" 
              alt="Tailored Suits on Mannequins" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
