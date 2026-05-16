import React from 'react';
import logo3d from '../assets/logo3d.jpg';

const Hero3DBlock = () => {
  return (
    <div className="hero-3d-container">
      <img 
        src={logo3d} 
        alt="Taskly 3D Logo" 
        className="hero-3d-image"
      />
      {/* Hiệu ứng bóng đổ phía dưới */}
      <div className="hero-3d-shadow"></div>
    </div>
  );
};

export default Hero3DBlock;
