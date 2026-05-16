import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Taskly</h2>
            <p className="footer-tagline">Nâng tầm kỹ năng, bứt phá sự nghiệp cùng LATIO Academy.</p>
            <div className="social-links">
              <a href="#"><i className="ph ph-facebook-logo"></i></a>
              <a href="#"><i className="ph ph-instagram-logo"></i></a>
              <a href="#"><i className="ph ph-youtube-logo"></i></a>
              <a href="#"><i className="ph ph-tiktok-logo"></i></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-col">
              <h3>Khóa học</h3>
              <ul>
                <li><a href="#">Photoshop Nâng Cao</a></li>
                <li><a href="#">Designer 2D</a></li>
                <li><a href="#">Edit Video CapCut</a></li>
                <li><a href="#">Lộ trình Agency</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Hỗ trợ</h3>
              <ul>
                <li><a href="#">Liên hệ</a></li>
                <li><a href="#">Chính sách hoàn tiền</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Cộng đồng học viên</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Liên hệ</h3>
              <ul>
                <li><i className="ph ph-phone"></i> 0868 651 224</li>
                <li><i className="ph ph-envelope"></i> latiodigital@gmail.com</li>
                <li><i className="ph ph-map-pin"></i> 86 Đoàn Văn Cừ, Đà Nẵng</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 LATIO Academy & Taskly. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
