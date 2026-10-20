import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const [navCourses, setNavCourses] = useState([]);

  useEffect(() => {
    fetch('https://latioacademyserver-production.up.railway.app/api/courses')
      .then(res => res.json())
      .then(data => {
        const visibleCourses = data.filter(c => c.showInNavbar);
        setNavCourses(visibleCourses);
      })
      .catch(err => console.error("Error fetching courses for navbar:", err));
  }, []);

  const toggleDropdown = (e) => {
    // Only toggle dropdown behavior on mobile view (width <= 768px)
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Hover handlers for desktop dropdown
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 150);
    }
  };

  // Click a course in dropdown -> navigate to /courses and smooth scroll to that course
  const handleCourseClick = (courseId) => {
    closeMobileMenu();
    setIsHovered(false);

    const targetHash = `course-${courseId}`;

    if (location.pathname === '/courses') {
      // Already on courses page — just scroll
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        flashHighlight(el);
      }
    } else {
      // Navigate then scroll after page loads
      navigate(`/courses#${targetHash}`);
    }
  };

  const flashHighlight = (el) => {
    el.style.transition = 'box-shadow 0.5s ease';
    el.style.boxShadow = '0 0 40px rgba(14, 165, 233, 0.55)';
    setTimeout(() => {
      el.style.boxShadow = '';
    }, 2000);
  };

  // Auto-close menu on location changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const isDropdownVisible = isDropdownOpen || isHovered;

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <Link to="/" className="nav-brand font-brand" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
        LATIO <span className="brand-accent">ACADEMY</span>
      </Link>
      
      <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Trang chủ</Link>
        
        {/* Dropdown Menu for Khóa học */}
        <div
          className={`nav-dropdown ${isDropdownVisible ? 'dropdown-open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/courses"
            className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            Khóa học <i className={`ph ph-caret-down nav-caret ${isDropdownVisible ? 'rotated' : ''}`}></i>
          </Link>
          <div className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
            {navCourses.length > 0 ? (
              navCourses.map(course => (
                <button
                  key={course._id}
                  className={`dropdown-item ${course.color || 'orange'}`}
                  onClick={() => handleCourseClick(course._id)}
                >
                  <div className="dropdown-icon-wrapper">
                    <i className={`ph ${course.icon || 'ph-video-camera'}`}></i>
                  </div>
                  <div className="dropdown-info">
                    <span className="dropdown-title">{course.titlePrefix || course.title}</span>
                    <span className="dropdown-desc">{course.titleSuffix || ''}</span>
                  </div>
                </button>
              ))
            ) : (
              <div style={{padding: '10px 20px', color: '#64748b'}}>Đang cập nhật...</div>
            )}
          </div>
        </div>

        <Link to="/instructors" className={`nav-link ${location.pathname === '/instructors' ? 'active' : ''}`} onClick={closeMobileMenu}>Giảng viên</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Liên hệ</Link>
      </div>

      <div className="nav-actions">
        <Link to="/contact" className="btn-signup" style={{ textDecoration: 'none' }}>
          Đăng ký ngay <i className="ph ph-arrow-right"></i>
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

