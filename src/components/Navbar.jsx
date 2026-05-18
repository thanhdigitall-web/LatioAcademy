import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand font-brand">
        LATIO <span className="brand-accent">ACADEMY</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Trang chủ</a>
        <a href="#courses" className="nav-link">Khóa học</a>
        <a href="#" className="nav-link">Cảm nhận</a>
        <a href="#" className="nav-link">Liên hệ</a>
      </div>
      <div className="nav-actions">
        <button className="btn-signup">
          Đăng ký ngay <i className="ph ph-arrow-right"></i>
        </button>
        <button className="mobile-menu-btn">
          <i className="ph ph-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
