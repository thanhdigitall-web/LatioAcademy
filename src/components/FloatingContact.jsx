import React from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href="tel:0868651224" 
        className="contact-btn phone-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Gọi điện ngay"
      >
        <div className="contact-tooltip">0868.651.224</div>
        <i className="ph ph-phone-call"></i>
      </a>
      
      <a 
        href="https://zalo.me/0868651224" 
        className="contact-btn zalo-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat qua Zalo"
      >
        <div className="contact-tooltip">Zalo: 0868.651.224</div>
        {/* Zalo doesn't have a phosphor icon by default, we can use a custom SVG or just a chat icon. A custom text 'Z' or SVG is best */}
        <span className="zalo-text">Zalo</span>
      </a>
      
      <a 
        href="https://www.facebook.com/Khoahocmarketing.43?locale=vi_VN" 
        className="contact-btn fb-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat qua Facebook"
      >
        <div className="contact-tooltip">Facebook Latio</div>
        <i className="ph-fill ph-facebook-logo"></i>
      </a>
    </div>
  );
};

export default FloatingContact;
