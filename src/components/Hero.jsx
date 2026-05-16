import React from 'react';
import Hero3DBlock from './Hero3DBlock';

const Hero = () => {
  return (
    <div className="hero-content-wrapper">
      <div className="hero-text">
        <div className="social-proof">
          <div className="stars">
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
          </div>
          Rated 4.9/5 by 2700+ customers
        </div>
        
        <h1 className="hero-headline">
          Work smarter, achieve faster
        </h1>
        
        <p className="hero-subheadline">
          Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.
        </p>
        
        <button className="btn-primary">
          Get Started Now
          <div className="icon-circle">
            <i className="ph ph-arrow-right"></i>
          </div>
        </button>
      </div>

      <div className="hero-visual">
        <Hero3DBlock />
      </div>
    </div>
  );
};

export default Hero;
