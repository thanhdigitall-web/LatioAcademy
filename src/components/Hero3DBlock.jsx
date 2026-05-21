import React, { useState, useRef } from 'react';
import logo3d from '../assets/logo_clean.png';

const Hero3DBlock = () => {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [sheenStyle, setSheenStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt (max 12 degrees)
    const maxRotate = 12;
    const rotateX = ((centerY - y) / centerY) * maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    
    setTransform(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.04)`);
    
    // Dynamic sheen overlay
    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;
    setSheenStyle({
      opacity: 0.65,
      background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`
    });
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale(1)');
    setSheenStyle({ opacity: 0 });
  };

  return (
    <div className="hero-workbench-wrapper">
      {/* Glow effect behind the logo */}
      <div className="workbench-glow"></div>
      
      {/* Central Glassmorphic Logo Container */}
      <div className="workbench-center" style={{ perspective: '1000px' }}>
        <div 
          ref={containerRef}
          className="workbench-logo-glass"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transform: transform,
            transition: 'transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease'
          }}
        >
          {/* Glassmorphic Sheen Reflection */}
          <div 
            className="glass-sheen-overlay" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 6,
              transition: 'opacity 0.3s ease',
              ...sheenStyle
            }}
          />

          {/* Glowing Inner Parallax Ring */}
          <div className="logo-glass-inner-ring"></div>

          <img 
            src={logo3d} 
            alt="Latio Logo" 
            className="workbench-logo-img"
            style={{ 
              zIndex: 5, 
              transformStyle: 'preserve-3d', 
              transform: 'translateZ(25px)',
              transition: 'transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          />
        </div>
        {/* Decorative rotating orbit rings with sparkling satellites */}
        <div className="orbit-ring ring-1">
          <div className="orbit-satellite sat-1"></div>
          <div className="orbit-satellite sat-1-pulse"></div>
        </div>
        <div className="orbit-ring ring-2">
          <div className="orbit-satellite sat-2"></div>
        </div>
      </div>

      {/* Floating Course Software Logos */}
      <div className="floating-tool-bubble tool-ps">
        <div className="tool-inner-icon">Ps</div>
      </div>
      <div className="floating-tool-bubble tool-cc">
        <div className="tool-inner-icon">
          <svg viewBox="0 0 512 509.659" style={{ width: '32px', height: '32px' }}>
            <path fill="#0f1115" d="M116.971 2.475h278.058c62.971 0 114.494 51.522 114.494 114.494v275.722c0 62.971-51.523 114.493-114.494 114.493H116.971c-62.972 0-114.494-51.522-114.494-114.493V116.969c0-62.972 51.522-114.494 114.494-114.494z"/>
            <path fill="#fff" fillRule="nonzero" d="M109.095 181.505c-.123 8.897 0 17.813 0 26.71a5.41 5.41 0 003.225 4.917 23898.407 23898.407 0 0084.108 41.646c-27.832 13.672-55.563 27.526-83.353 41.259a5.938 5.938 0 00-4.081 4.876v26.771c1.854 18.195 15.823 32.817 33.913 35.503 3.509.326 7.02.266 10.529.266l155.85.001a45.08 45.08 0 0011.224-.92 40.825 40.825 0 0026.137-20.015 63.699 63.699 0 004.288-11.226c15.997 8.325 32.341 16.079 48.462 24.179.385.291.857.447 1.343.447a2.266 2.266 0 002.265-2.265v-.016-27.669a4.695 4.695 0 00-3.143-4.079l-135.323-67.112c45.203-22.431 90.412-44.876 135.63-67.335a4.573 4.573 0 002.754-4.082v-27.628a2.183 2.183 0 00-3.142-1.673l-49.135 24.363a42.189 42.189 0 00-6.388-14.917 40.613 40.613 0 00-30.097-17.422l-167.133-.001c-19.615.91-35.688 15.918-37.933 35.424v-.002z"/>
            <path fill="#fff" fillRule="nonzero" d="M140.049 181.689a10.082 10.082 0 019.345-5.55h161.545l.106-.001c5.066 0 9.368 3.72 10.096 8.734.205 2.714.102 5.428 0 8.162l-90.597 44.891c-30.608-15.018-61.03-30.22-91.535-45.339.142-3.632-.633-7.53 1.04-10.897zM139.009 317.095a24846.007 24846.007 0 0191.351-45.319c30.322 14.773 60.521 29.954 90.802 44.89-.204 3.918.755 8.162-1.305 11.773a10.085 10.085 0 01-8.755 5.08h-.082l-161.605.002-.277.002a10.202 10.202 0 01-9.007-5.411c-1.796-3.386-.98-7.345-1.122-11.017z"/>
            <path fill="#0f1115" fillRule="nonzero" d="M109.095 181.505c2.223-19.532 18.316-34.578 37.955-35.483l167.194-.001a40.612 40.612 0 0130.095 17.427 42.152 42.152 0 016.39 14.915l49.135-24.364a2.185 2.185 0 013.141 1.674v27.628l.001.096a4.571 4.571 0 01-2.837 4.229 177620.936 177620.936 0 00-135.63 67.336l135.324 66.948a4.695 4.695 0 013.142 4.08v27.685a2.266 2.266 0 01-3.613 1.821c-16.12-8.162-32.464-15.854-48.462-24.18a63.503 63.503 0 01-4.282 11.225 40.813 40.813 0 01-26.098 20.135 44.994 44.994 0 01-11.221.919l-155.833.003c-3.51 0-7.04 0-10.53-.266-18.089-2.705-32.049-17.363-33.869-35.565v-26.77a5.935 5.935 0 014.08-4.879c27.791-13.732 55.521-27.587 83.353-41.258a32412.61 32412.61 0 00-84.17-41.748 5.41 5.41 0 01-3.223-4.918c-.042-8.876-.185-17.792-.042-26.689zm30.975.184c-1.674 3.367-.898 7.263-1.041 10.896 30.608 15.12 60.99 30.321 91.536 45.339 30.185-14.963 60.384-29.927 90.596-44.89 0-2.714.123-5.428 0-8.162a10.203 10.203 0 00-10.096-8.734h-.106l-161.565.001a10.082 10.082 0 00-9.345 5.55h.021zm-1.041 135.406c.142 3.673-.654 7.631 1.122 11.039a10.204 10.204 0 009.284 5.405l161.667.002.081-.001c3.618 0 6.961-1.94 8.754-5.081 2.04-3.57 1.102-7.855 1.305-11.773-30.26-14.936-60.48-30.118-90.801-44.89a43915.126 43915.126 0 00-91.432 45.299h.02z"/>
          </svg>
        </div>
      </div>
      <div className="floating-tool-bubble tool-mj">
        <div className="tool-inner-icon">Mj</div>
      </div>
      <div className="floating-tool-bubble tool-pr">
        <div className="tool-inner-icon">Pr</div>
      </div>
      <div className="floating-tool-bubble tool-ai">
        <div className="tool-inner-icon">Ai</div>
      </div>
    </div>
  );
};

export default Hero3DBlock;
