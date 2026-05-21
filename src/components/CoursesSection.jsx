import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Edit Video CapCut Thực Chiến",
    subtitle: "Tự dựng video ngắn triệu view và xây dựng kênh TikTok viral chỉ sau 8 buổi học.",
    duration: "8 buổi × 90 phút",
    format: "Học Online qua Zoom",
    oldPrice: "3.500.000đ",
    price: "2.500.000đ",
    discount: "Đăng ký nhóm ≥ 3: 2.100.000đ",
    icon: "ph-video-camera",
    color: "orange"
  },
  {
    id: 2,
    title: "Photoshop & AI Creative",
    subtitle: "Thành thạo Photoshop chuyên sâu & đón đầu kỷ nguyên AI để nâng tầm thu nhập.",
    parentCourse: "NẬNG CAO SAU EDIT CAPCUT",
    duration: "22 buổi × 90 phút (33 giờ thực chiến)",
    format: "Zoom nhóm (Tối đa 12 học viên)",
    oldPrice: "9.500.000đ",
    price: "7.800.000đ",
    discount: "Tặng kho tài nguyên độc quyền",
    icon: "ph-magic-wand",
    color: "blue"
  },
  {
    id: 3,
    title: "Designer 2D Chuyên Nghiệp",
    subtitle: "Làm chủ Photoshop từ số 0 và tự thiết kế ấn phẩm truyền thông chuẩn Agency.",
    duration: "8 buổi × 90 phút",
    format: "Học Online qua Zoom",
    oldPrice: "3.500.000đ",
    price: "2.800.000đ",
    discount: "Đăng ký nhóm ≥ 3: 2.400.000đ",
    icon: "ph-bezier-curve",
    color: "purple"
  },
  {
    id: 5,
    title: "Adobe Photoshop Nâng Cao + AI",
    subtitle: "Làm chủ Photoshop nâng cao & tích hợp AI Tools để tối ưu 80% thời gian thiết kế.",
    parentCourse: "NẬNG CAO SAU DESIGN 2D",
    duration: "16 buổi × 90 phút (24 giờ thực hành)",
    format: "Zoom nhóm (Tối đa 12 học viên)",
    oldPrice: "8.500.000đ",
    price: "6.500.000đ",
    discount: "Tặng Asset Pack 500+ Mockup",
    icon: "ph-paint-brush",
    color: "rose"
  },
  {
    id: 4,
    title: "Facebook & TikTok Ads Chuyên Nghiệp",
    subtitle: "Học chạy quảng cáo Facebook/TikTok từ đầu — Tự tin quản lý ngân sách & tối ưu ROAS trong 8 buổi.",
    duration: "8 buổi × 90 phút",
    format: "Học Online qua Zoom",
    oldPrice: "4.000.000đ",
    price: "3.200.000đ",
    discount: "Đăng ký nhóm ≥ 3: 2.700.000đ",
    icon: "ph-megaphone",
    color: "green"
  },
  {
    id: 6,
    title: "Facebook Ads Nâng Cao",
    subtitle: "Làm chủ việc phân tích chỉ số, chẩn đoán lỗi quảng cáo qua 5 tầng và xây dựng hệ thống SOP tối ưu chuyên sâu.",
    parentCourse: "NÂNG CAO SAU ADS CƠ BẢN",
    duration: "12 buổi × 90 phút (18 giờ thực hành)",
    format: "Online 1-on-1 qua Zoom",
    oldPrice: "12.000.000đ",
    price: "9.500.000đ",
    discount: "Lịch học linh hoạt 1-1",
    icon: "ph-presentation-chart",
    color: "teal"
  }
];

const getCourseHash = (color) => {
  if (color === 'orange') return 'edit';
  if (color === 'blue') return 'edit-advanced';
  if (color === 'purple') return 'design';
  if (color === 'rose') return 'design-advanced';
  if (color === 'green') return 'ads';
  if (color === 'teal') return 'ads-advanced';
  return '';
};

const CoursesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.courses-section .reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="courses-section" id="courses">
      <div className="courses-header reveal-on-scroll">
        <div className="courses-tag-badge">LỘ TRÌNH ĐÀO TẠO THỰC CHIẾN</div>
        <h2 className="section-title">
          Khám Phá Các Khóa Học <span className="brand-accent">Tại LATIO</span>
        </h2>
        <p className="section-subtitle">Nâng cấp kỹ năng thiết kế và chỉnh sửa video của bạn với lộ trình học chuẩn Agency.</p>
      </div>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className={`course-card card-${course.color} reveal-on-scroll`}>
            {/* Ambient card background glow */}
            <div className="card-ambient-glow"></div>

            <div className="course-icon-wrapper">
              <i className={`ph ${course.icon} course-icon`}></i>
            </div>
            
            <div className="course-content">
              {course.parentCourse && (
                <span className="course-parent-badge">
                  <i className="ph ph-sparkles"></i> {course.parentCourse}
                </span>
              )}
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <i className="ph ph-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <i className="ph ph-chalkboard-teacher"></i>
                  <span>{course.format}</span>
                </div>
              </div>
            </div>
            
            <div className="course-footer">
              <div className="course-pricing">
                <div className="price-old">{course.oldPrice}</div>
                <div className="price-current">
                  {course.price}
                  <span className="price-discount">{course.discount}</span>
                </div>
              </div>
              <Link to={`/courses#${getCourseHash(course.color)}`} className="btn-course">
                Xem chi tiết <i className="ph ph-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
