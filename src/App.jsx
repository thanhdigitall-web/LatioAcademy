import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="hero-wrapper">
      {/* Background Glows */}
      <div className="glow-bg">
        <div className="glow-ellipse-1"></div>
        <div className="glow-ellipse-2"></div>
      </div>

      <div className="container">
        <Navbar />
        <Hero />
        <CoursesSection />
        <TrustedBy />
      </div>
      <Footer />
    </div>
  );
};

export default App;
