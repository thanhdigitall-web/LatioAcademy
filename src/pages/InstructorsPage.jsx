import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const instructorsData = [
  {
    id: 1,
    name: "Duy Long (Long Designer)",
    role: "Lead Graphic Designer & Art Director",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Giám đốc sáng tạo tự do (Freelance Art Director), từng thiết kế bộ nhận diện thương hiệu cho hơn 50+ nhãn hàng. Có niềm đam mê sâu sắc trong việc kết hợp hội họa truyền thống và công nghệ AI để tạo ra các tác phẩm đột phá.",
    color: "purple",
    image: "https://latio.vn/wp-content/uploads/2023/05/Long-des.png",
    skills: ["Adobe Photoshop & Illustrator", "UI/UX Design & Branding", "Midjourney & Stable Diffusion", "Tư duy Bố cục & Màu sắc"],
    socials: {
      facebook: "https://facebook.com",
      behance: "https://behance.net",
      dribbble: "https://dribbble.com"
    },
    courses: [
      { name: "Designer 2D Chuyên Nghiệp", link: "/courses#design" },
      { name: "Photoshop & AI Creative Nâng Cao", link: "/courses#edit-advanced" }
    ]
  },
  {
    id: 2,
    name: "Văn Luận (Luan Media)",
    role: "Senior Performance Marketer",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Chuyên gia tối ưu hóa quảng cáo chuyển đổi, từng trực tiếp tối ưu hóa ngân sách hàng tỷ đồng/tháng. Đã xây dựng và chuyển giao quy trình vận hành quảng cáo SOP cho hàng chục doanh nghiệp SMEs tại Việt Nam.",
    color: "green",
    image: "https://latio.vn/wp-content/uploads/2023/05/Luan-media.png",
    skills: ["Facebook & TikTok Ads", "Conversion Rate Optimization", "Attributions & Tracking", "Xây dựng Phễu Marketing"],
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    courses: [
      { name: "Facebook & TikTok Ads", link: "/courses#ads" },
      { name: "Facebook Ads Nâng Cao", link: "/courses#ads-advanced" }
    ]
  },
  {
    id: 3,
    name: "Tiến Đạt (Dat Media)",
    role: "Head of Video Production & Editor",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Từng là Trưởng phòng sản xuất hình ảnh tại các Agency danh tiếng tại Đà Nẵng và HCM. Đứng sau nhiều chiến dịch video viral triệu view trên TikTok & Facebook cho các thương hiệu lớn.",
    color: "orange",
    image: "https://latio.vn/wp-content/uploads/2023/05/Dat-media.png",
    skills: ["CapCut PC & Premiere Pro", "After Effects & Motion", "AI Video Workflow (Runway, Kling)", "Xây dựng Kênh TikTok"],
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      behance: "https://behance.net"
    },
    courses: [
      { name: "Edit Video CapCut Thực Chiến", link: "/courses#edit" }
    ]
  }
];

const InstructorsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="instructors-page animate-fade-in">
      <style>{`
        .instructors-page,
        .instructors-page * {
          font-family: 'Be Vietnam Pro', sans-serif !important;
        }
      `}</style>
      {/* Background glow effects specifically for this page */}
      <div className="instructors-glow-under color-blue"></div>
      <div className="instructors-glow-under color-purple"></div>

      <div className="instructors-header">
        <span className="instructors-badge-pill">ĐỘI NGŨ CHUYÊN GIA THỰC CHIẾN</span>
        <h1 className="instructors-title">
          Gặp Gỡ Đội Ngũ <span className="brand-accent">Giảng Viên</span>
        </h1>
        <p className="instructors-subtitle">
          Những người trực tiếp đứng lớp, đồng hành và hỗ trợ bạn từ số 0 cho đến khi làm được sản phẩm chuẩn Agency.
        </p>
      </div>

      {/* Accordion Layout Container */}
      <div className="instructors-accordion-container" onMouseLeave={() => setActiveIndex(null)}>
        {instructorsData.map((instructor, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={instructor.id} 
              className={`instructor-accordion-item card-theme-${instructor.color} ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="card-ambient-glow"></div>
              
              {/* Background circular highlight */}
              <div className="accordion-bg-glow"></div>

              {/* Portrait Image Container */}
              <div className="accordion-portrait-wrapper">
                <div className={`portrait-gradient-bg avatar-bg-${instructor.color}`}>
                  <img src={instructor.image} alt={instructor.name} className="accordion-portrait-image" />
                  <div className="portrait-inner-shadow"></div>
                </div>
              </div>

              {/* Collapsed State Title Overlay */}
              <div className="accordion-collapsed-overlay">
                <span className={`collapsed-badge badge-bg-${instructor.color}`}>
                  {instructor.experience}
                </span>
                <h3 className="collapsed-name">{instructor.name}</h3>
                <p className="collapsed-role">{instructor.role.split('&')[0]}</p>
                <div className="collapsed-hover-indicator">
                  <i className="ph ph-hand-pointing"></i> <span>Xem hồ sơ</span>
                </div>
              </div>

              {/* Expanded State Content Info Area */}
              <div className="accordion-expanded-content">
                <div className="expanded-header">
                  <span className={`instructor-exp-badge badge-bg-${instructor.color}`}>
                    <i className="ph ph-briefcase"></i> {instructor.experience}
                  </span>
                  <h2 className="expanded-name">{instructor.name}</h2>
                  <p className="expanded-role">{instructor.role}</p>
                </div>

                <p className="expanded-bio">{instructor.bio}</p>

                <div className="expanded-divider"></div>

                {/* Skills Section */}
                <div className="expanded-section">
                  <h4>Kỹ năng cốt lõi</h4>
                  <div className="expanded-skills-tags">
                    {instructor.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={`skill-tag-item tag-color-${instructor.color}`}>
                        <i className="ph ph-check-circle"></i> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Courses Section */}
                <div className="expanded-section">
                  <h4>Lớp học phụ trách</h4>
                  <div className="expanded-courses-tags">
                    {instructor.courses.map((course, cIdx) => (
                      <Link 
                        key={cIdx} 
                        to={course.link} 
                        className={`course-link-badge course-theme-border-${instructor.color}`}
                        onClick={(e) => e.stopPropagation()} // Prevent trigger parent accordion expand click
                      >
                        <i className="ph ph-graduation-cap"></i> {course.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="expanded-divider"></div>

                {/* Social links */}
                <div className="expanded-footer">
                  <span className="connect-label">Kết nối:</span>
                  <div className="expanded-socials">
                    {instructor.socials.facebook && (
                      <a href={instructor.socials.facebook} target="_blank" rel="noopener noreferrer" className="ins-social-link fb" onClick={(e) => e.stopPropagation()}>
                        <i className="ph ph-facebook-logo"></i>
                      </a>
                    )}
                    {instructor.socials.linkedin && (
                      <a href={instructor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="ins-social-link ln" onClick={(e) => e.stopPropagation()}>
                        <i className="ph ph-linkedin-logo"></i>
                      </a>
                    )}
                    {instructor.socials.behance && (
                      <a href={instructor.socials.behance} target="_blank" rel="noopener noreferrer" className="ins-social-link bh" onClick={(e) => e.stopPropagation()}>
                        <i className="ph ph-behance-logo"></i>
                      </a>
                    )}
                    {instructor.socials.dribbble && (
                      <a href={instructor.socials.dribbble} target="_blank" rel="noopener noreferrer" className="ins-social-link db" onClick={(e) => e.stopPropagation()}>
                        <i className="ph ph-dribbble-logo"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Banner at the Bottom */}
      <div className="instructors-cta-box">
        <div className="cta-overlay-glow"></div>
        <div className="cta-content">
          <h2>Sẵn Sàng Bứt Phá Kỹ Năng Cùng Chúng Tôi?</h2>
          <p>Nhận ngay tư vấn lộ trình học phù hợp nhất với năng lực và mục tiêu nghề nghiệp của bạn hoàn toàn miễn phí.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-cta-primary">
              Đăng ký tư vấn ngay <i className="ph ph-paper-plane-tilt"></i>
            </Link>
            <Link to="/courses" className="btn-cta-secondary">
              Xem chi tiết các khóa học <i className="ph ph-book-open"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;