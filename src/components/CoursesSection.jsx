import React from 'react';

const courses = [
  {
    id: 1,
    title: "Edit Nâng Cao: Photoshop + AI Render",
    subtitle: "Thành thạo kỹ thuật chỉnh ảnh chuyên nghiệp · Tạo video từ AI · Render & Xuất file chuẩn Agency",
    duration: "22 buổi × 90 phút (33 giờ thực chiến)",
    format: "Học nhóm qua Zoom (Tối đa 12 học viên)",
    oldPrice: "9.500.000đ",
    price: "7.800.000đ",
    discount: "Giảm 1.700.000đ",
    icon: "ph-magic-wand",
    color: "blue"
  },
  {
    id: 2,
    title: "Designer 2D Chuyên Nghiệp",
    subtitle: "Học Photoshop từ đầu — Thành thạo trong 8 buổi — Không cần kinh nghiệm",
    duration: "8 buổi × 90 phút (12 giờ thực chiến)",
    format: "Học Online qua Zoom",
    oldPrice: "3.500.000đ",
    price: "2.800.000đ",
    discount: "Nhóm ≥ 3 người: 2.400.000đ",
    icon: "ph-bezier-curve",
    color: "purple"
  },
  {
    id: 3,
    title: "Edit Video CapCut PC",
    subtitle: "8 buổi Zoom + Tài liệu + Nhóm hỗ trợ Zalo (Kèm Footages, SFX, LUTs, Nhạc Free)",
    duration: "8 buổi × 90 phút",
    format: "Học Online qua Zoom (Cá nhân hoặc Nhóm)",
    oldPrice: "4.000.000đ",
    price: "2.500.000đ",
    discount: "Nhóm ≥ 3 người: 2.100.000đ",
    icon: "ph-video-camera",
    color: "orange"
  }
];

const CoursesSection = () => {
  return (
    <section className="courses-section" id="courses">
      <div className="courses-header">
        <h2 className="section-title">Khám Phá Các Khóa Học Tại LATIO</h2>
        <p className="section-subtitle">Nâng cấp kỹ năng thiết kế và chỉnh sửa video của bạn với lộ trình học chuẩn Agency.</p>
      </div>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className={`course-card card-${course.color}`}>
            <div className="course-icon-wrapper">
              <i className={`ph ${course.icon} course-icon`}></i>
            </div>
            
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <i className="ph ph-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <i className="ph ph-video-camera"></i>
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
              <button className="btn-course">
                Đăng ký ngay <i className="ph ph-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
