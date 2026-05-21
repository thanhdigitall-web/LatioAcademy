import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Edit Video CapCut Thực Chiến",
    titlePrefix: "Edit Video CapCut",
    titleSuffix: "Thực Chiến",
    tagType: "KHÓA HỌC VIDEO",
    tagName: "CAPCUT",
    overheadTag: "SAU 8 BUỔI HỌC",
    contentTitlePrefix: "Tự dựng video triệu view & ",
    contentTitleHighlight: "kênh TikTok viral",
    subtitle: "Tự dựng video ngắn triệu view và xây dựng kênh TikTok viral chỉ sau 8 buổi học.",
    description: "Khóa học đi từ cơ bản đến chuyên sâu về CapCut PC. Nắm bắt xu hướng video ngắn, công thức Hook 3s thu hút người xem và ứng dụng các tính năng AI mạnh mẽ để tạo ra những video triệu view.",
    duration: "8 buổi × 90 phút",
    format: "Online qua Zoom",
    oldPrice: "3.500.000đ",
    price: "2.500.000",
    discount: "Nhóm ≥3 người: 2.100.000đ",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 7,
    footerBenefits: ["Học thực hành 100%", "Có video replay"],
    icon: "ph-video-camera",
    color: "orange",
    features: [
      "Kỹ thuật cắt ghép, Transition, Speed Ramp",
      "Edit TikTok công thức Hook viral",
      "Chỉnh màu Color Grading & Lồng tiếng AI",
      "Thực hành Chroma Key, AI Avatar & Masking",
      "Xây dựng Portfolio 5 video chất lượng cao"
    ]
  },
  {
    id: 2,
    title: "Photoshop & AI Creative Nâng Cao",
    titlePrefix: "Photoshop & AI",
    titleSuffix: "Creative",
    tagType: "KHÓA CHUYÊN SÂU",
    tagName: "PHOTOSHOP & AI",
    parentCourse: "Nâng cao sau Edit CapCut",
    overheadTag: "SAU 22 BUỔI HỌC",
    contentTitlePrefix: "Master Photoshop & bứt phá giới hạn cùng ",
    contentTitleHighlight: "kỷ nguyên AI",
    subtitle: "Thành thạo Photoshop chuyên sâu & đón đầu kỷ nguyên AI để nâng tầm thu nhập.",
    description: "Khóa học Masterclass dành cho những ai muốn đi sâu vào con đường thiết kế chuyên nghiệp. Khai thác sức mạnh của Midjourney, Stable Diffusion và Runway để bứt phá giới hạn sáng tạo.",
    duration: "22 buổi × 90 phút",
    format: "Zoom nhóm (Tối đa 12 HV)",
    oldPrice: "9.500.000đ",
    price: "7.800.000",
    discount: "Tặng kho tài nguyên độc quyền",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 3,
    footerBenefits: ["Học thực hành 100%", "Hỗ trợ sửa bài 1-1"],
    icon: "ph-magic-wand",
    color: "blue",
    features: [
      "Photoshop: Retouch & Compositing chuẩn Studio",
      "AI Image: Midjourney v6, Stable Diffusion, Firefly",
      "AI Video: Runway Gen-3, Pika, Kling AI",
      "Full Workflow: Từ ý tưởng đến Video Marketing",
      "Hoàn thiện 10 tác phẩm Portfolio & kỹ năng Freelance"
    ]
  },
  {
    id: 3,
    title: "Designer 2D Chuyên Nghiệp",
    titlePrefix: "Designer 2D",
    titleSuffix: "Chuyên Nghiệp",
    tagType: "KHÓA NỀN TẢNG",
    tagName: "DESIGN 2D",
    overheadTag: "SAU 8 BUỔI HỌC",
    contentTitlePrefix: "Làm chủ Photoshop từ số 0 & thiết kế ",
    contentTitleHighlight: "chuẩn Agency",
    subtitle: "Làm chủ Photoshop từ số 0 và tự thiết kế ấn phẩm truyền thông chuẩn Agency.",
    description: "Khóa học nền tảng tuyệt vời cho người mới bắt đầu. Không cần kinh nghiệm, bạn sẽ được cầm tay chỉ việc để tự thiết kế ra các sản phẩm truyền thông thực tế chuẩn Agency.",
    duration: "8 buổi × 90 phút",
    format: "Online qua Zoom",
    oldPrice: "3.500.000đ",
    price: "2.800.000",
    discount: "Nhóm ≥3 người: 2.400.000đ",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 5,
    footerBenefits: ["Học thực hành 100%", "Cam kết đầu ra"],
    icon: "ph-bezier-curve",
    color: "purple",
    features: [
      "Làm chủ toàn bộ công cụ cốt lõi Photoshop",
      "Tự thiết kế Banner, Poster, Thumbnail YouTube",
      "Tư duy Bố cục, Xử lý màu sắc và Ánh sáng",
      "Xuất file đúng tiêu chuẩn In ấn & Digital Marketing",
      "Sở hữu Portfolio 5+ dự án thực tế để đi xin việc"
    ]
  },
  {
    id: 5,
    title: "Adobe Photoshop Nâng Cao + AI",
    titlePrefix: "Adobe Photoshop",
    titleSuffix: "Nâng Cao + AI",
    tagType: "KHÓA CHUYÊN SÂU",
    tagName: "PHOTOSHOP & AI",
    parentCourse: "Nâng cao sau Design 2D",
    overheadTag: "SAU 16 BUỔI HỌC",
    contentTitlePrefix: "Từ thành thạo công cụ đến ",
    contentTitleHighlight: "thiết kế chuyên nghiệp",
    subtitle: "Làm chủ Photoshop nâng cao & tích hợp AI Tools để tối ưu 80% thời gian thiết kế.",
    description: "Khóa học chuyên sâu dành cho các Designer muốn bứt phá giới hạn. Làm chủ các kỹ thuật retouching, compositing nâng cao và ứng dụng Generative AI (Firefly, Midjourney, Stable Diffusion) vào workflow thực tế.",
    duration: "16 buổi × 90 phút",
    format: "Zoom nhóm (Tối đa 12 HV)",
    oldPrice: "8.500.000đ",
    price: "6.500.000",
    discount: "Tặng Asset Pack 500+ Mockup",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 4,
    footerBenefits: ["Học thực hành 100%", "Hỗ trợ Zalo 3 tháng"],
    icon: "ph-paint-brush",
    color: "rose",
    features: [
      "Smart Object & Retouching Studio nâng cao",
      "Compositing ghép ảnh tự nhiên & Color Grading",
      "Adobe Firefly 3, Generative Fill & Neural Filters",
      "Midjourney & ControlNet Stable Diffusion chuyên sâu",
      "Hoàn thiện Portfolio 8 tác phẩm thiết kế lên Behance"
    ]
  },
  {
    id: 4,
    title: "Facebook & TikTok Ads Chuyên Nghiệp",
    titlePrefix: "Facebook & TikTok Ads",
    titleSuffix: "Chuyên Nghiệp",
    tagType: "KHÓA CHUYÊN SÂU",
    tagName: "ADS MARKETING",
    overheadTag: "SAU 8 BUỔI HỌC",
    contentTitlePrefix: "Tự chạy Ads ra đơn & tối ưu ",
    contentTitleHighlight: "ROAS vượt trội",
    subtitle: "Học chạy quảng cáo Facebook/TikTok từ đầu — Tự tin quản lý ngân sách & tối ưu ROAS trong 8 buổi.",
    description: "Khóa học thực chiến giúp bạn tự chạy quảng cáo chuẩn từ A-Z. Nắm vững kỹ thuật target, tối ưu nội dung quảng cáo và phân tích số liệu để nâng cao hiệu suất bán hàng.",
    duration: "8 buổi × 90 phút",
    format: "Online qua Zoom",
    oldPrice: "4.000.000đ",
    price: "3.200.000",
    discount: "Nhóm ≥3 người: 2.700.000đ/học viên",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 6,
    footerBenefits: ["Học thực hành 100%", "Hỗ trợ tài khoản Ads"],
    icon: "ph-megaphone",
    color: "green",
    features: [
      "Setup chiến dịch chuẩn: Campaign → Ad Set → Ads",
      "Target chuẩn xác: Custom Audiences & Lookalike",
      "Thiết kế Ad Copy & Creative chuyển đổi cao",
      "Đọc chỉ số (CTR, CPM, CPL, ROAS) để tối ưu",
      "Quản lý ngân sách & kỹ thuật scale Ads hiệu quả"
    ]
  },
  {
    id: 6,
    title: "Facebook Ads Nâng Cao",
    titlePrefix: "Facebook Ads",
    titleSuffix: "Nâng Cao",
    tagType: "KHÓA CHUYÊN SÂU",
    tagName: "ADS MARKETING",
    parentCourse: "Nâng cao sau Ads cơ bản",
    overheadTag: "SAU 12 BUỔI HỌC",
    contentTitlePrefix: "Trở thành Senior Strategist bằng ",
    contentTitleHighlight: "phân tích dữ liệu & tối ưu",
    subtitle: "Làm chủ việc phân tích chỉ số, chẩn đoán lỗi quảng cáo qua 5 tầng và xây dựng hệ thống SOP tối ưu chuyên sâu.",
    description: "Khóa học 1-on-1 được thiết kế riêng giúp bạn giải quyết triệt để các vấn đề: quảng cáo đắt, không ra đơn, không scale được ngân sách. Học cách đọc dữ liệu để đưa ra quyết định tối ưu chính xác.",
    duration: "12 buổi × 90 phút",
    format: "Online 1-on-1 qua Zoom",
    oldPrice: "12.000.000đ",
    price: "9.500.000",
    discount: "Lịch học linh hoạt 1-1",
    urgencyText: "Đăng ký ngay!",
    spotsLeft: 3,
    footerBenefits: ["Học thực hành 100%", "Kèm 1-1 linh hoạt"],
    icon: "ph-presentation-chart",
    color: "teal",
    features: [
      "Deconstruct KPIs: Đo lường Hold/Hook Rate & CVR thực",
      "Attribution & Event Measurement sau iOS 14.5",
      "Phân tích chuẩn đoán tài khoản quảng cáo qua 5 tầng",
      "ABO/CBO Scaling & Luật tối ưu ngân sách tự động",
      "Thiết lập hệ thống SOP vận hành chiến dịch nâng cao"
    ]
  }
];

const CoursesPage = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <div className="courses-page animate-fade-in">
      <div className="courses-page-header">
        <h1 className="page-title">Hệ Thống <span className="brand-accent">Khóa Học</span></h1>
        <p className="page-subtitle">Chọn lộ trình phù hợp để bắt đầu hành trình sáng tạo của bạn cùng LATIO Academy.</p>
      </div>

      <div className="courses-zigzag-list">
        {courses.map((course, index) => (
          <React.Fragment key={course.id}>
            <div 
              id={
                course.color === 'orange' ? 'edit' : 
                course.color === 'blue' ? 'edit-advanced' : 
                course.color === 'purple' ? 'design' : 
                course.color === 'rose' ? 'design-advanced' : 
                course.color === 'green' ? 'ads' : 
                course.color === 'teal' ? 'ads-advanced' : ''
              } 
              className={`course-row-card reveal-on-scroll ${index % 2 !== 0 ? 'row-reverse' : ''}`}
            >

            {/* Ticket Card Visual Block */}
            <div className={`course-ticket-card theme-${course.color}`}>
              {/* Header Bar */}
              <div className="ticket-header">
                <div className="ticket-header-left">
                  <span className={`ticket-dot bg-${course.color}-solid`}></span>
                  <span className="ticket-brand">LATIO ACADEMY</span>
                </div>
                <i className={`ph ${course.icon} ticket-header-icon`}></i>
              </div>

              {/* Body */}
              <div className="ticket-body">
                <div className="ticket-tags">
                  <span className={`tag-type bg-${course.color}-solid`}>{course.tagType}</span>
                  <span className="tag-name">{course.tagName}</span>
                  {course.parentCourse && (
                    <span className="tag-parent-course">
                      <i className="ph ph-arrow-circle-up-right"></i> {course.parentCourse}
                    </span>
                  )}
                </div>

                <h2 className="ticket-title-main">
                  {course.titlePrefix} <span className={`text-${course.color}`}>{course.titleSuffix}</span>
                </h2>

                <div className="ticket-meta">
                  <span><i className="ph ph-clock"></i> {course.duration}</span>
                  <span className="meta-separator">•</span>
                  <span><i className="ph ph-desktop"></i> {course.format}</span>
                </div>

                <div className="ticket-divider-line"></div>

                <div className="ticket-pricing">
                  <div className="price-label">HỌC PHÍ ĐẦU TƯ</div>
                  <div className="price-old">{course.oldPrice}</div>
                  <div className="price-current">
                    {course.price}<span className="currency-symbol">đ</span>
                  </div>
                </div>

                <div className={`ticket-discount-box border-${course.color} bg-${course.color}-light-soft`}>
                  {course.discount}
                </div>

                <div className={`ticket-urgency-banner bg-${course.color}-light text-${course.color}`}>
                  <span className={`urgency-dot bg-${course.color}-solid`}></span>
                  <span>{course.urgencyText}</span>
                </div>

                {/* <button className="ticket-action-btn">
                  GIỮ CHỖ NGAY <i className="ph ph-arrow-right"></i>
                </button> */}
              </div>

              {/* Footer Bar */}
              <div className="ticket-footer">
                {course.footerBenefits.map((benefit, idx) => (
                  <span key={idx} className="footer-benefit-item">
                    <i className={`ph ph-check text-${course.color}`}></i> {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Block */}
            <div className={`course-row-content theme-${course.color}`}>
              {course.parentCourse && (
                <div className="parent-course-banner">
                  <i className={`ph ph-sparkles text-${course.color === 'rose' ? 'purple' : course.color === 'teal' ? 'green' : 'orange'}`}></i>
                  <span>Khóa nâng cao tiếp nối sau khóa <strong>{
                    course.color === 'rose' ? 'Designer 2D Chuyên Nghiệp' : 
                    course.color === 'teal' ? 'Facebook & TikTok Ads Chuyên Nghiệp' : 
                    'Edit CapCut'
                  }</strong></span>
                </div>
              )}
              <div className="content-overhead-tag">
                <span className={`overhead-line bg-${course.color}-solid`}></span>
                <span className="overhead-text">{course.overheadTag}</span>
              </div>

              <h2 className="content-title-main">
                {course.contentTitlePrefix}
                <span className={`content-title-underline underline-${course.color}`}>
                  {course.contentTitleHighlight}
                </span>
              </h2>

              <div className="content-meta-row">
                <div className="content-meta-badge">
                  <i className={`ph ph-clock text-${course.color}`}></i>
                  <span>{course.duration}</span>
                </div>
                <div className="content-meta-badge">
                  <i className={`ph ph-desktop text-${course.color}`}></i>
                  <span>{course.format}</span>
                </div>
              </div>

              <div className="content-features-header-wrapper">
                <h4 className="content-features-header">NỘI DUNG CỐT LÕI</h4>
                <span className="content-features-header-line"></span>
              </div>

              <div className="content-features-row">
                <ul>
                  {course.features.map((feat, idx) => (
                    <li key={idx} className="content-feature-item">
                      <span className="content-feature-number">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="content-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="content-action-row">
                <div className="content-buttons-group">
                  <button className="btn-content-enroll">
                    GIỮ CHỖ NGAY <i className="ph ph-arrow-right"></i>
                  </button>
                  <button className="btn-content-schedule">
                    XEM LỊCH KHAI GIẢNG
                  </button>
                </div>
                <div className={`content-spots-left text-${course.color}`}>
                  <i className="ph ph-fire-simple"></i> Còn {course.spotsLeft} chỗ
                </div>
              </div>
            </div>

            </div>
            
            {index === 0 && (
              <div className="course-connector-arrow">
                <svg viewBox="0 0 1000 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="connector-svg">
                  <path d="M 200 10 C 250 70, 750 70, 800 130" stroke="#f97316" strokeWidth="3.5" strokeDasharray="8 6" strokeLinecap="round"/>
                  <path d="M 800 130 L 786 125 M 800 130 L 802 116" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
                <div className="connector-label">
                  <i className="ph ph-sparkles"></i> LỘ TRÌNH LÊN CẤP AI CREATIVE
                </div>
              </div>
            )}
            
            {index === 2 && (
              <div className="course-connector-arrow theme-purple">
                <svg viewBox="0 0 1000 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="connector-svg">
                  <path d="M 200 10 C 250 70, 750 70, 800 130" stroke="#a855f7" strokeWidth="3.5" strokeDasharray="8 6" strokeLinecap="round"/>
                  <path d="M 800 130 L 786 125 M 800 130 L 802 116" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
                <div className="connector-label">
                  <i className="ph ph-sparkles"></i> LỘ TRÌNH LÊN CẤP DESIGN ADVANCED
                </div>
              </div>
            )}
            
            {index === 4 && (
              <div className="course-connector-arrow theme-green">
                <svg viewBox="0 0 1000 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="connector-svg">
                  <path d="M 200 10 C 250 70, 750 70, 800 130" stroke="#10b981" strokeWidth="3.5" strokeDasharray="8 6" strokeLinecap="round"/>
                  <path d="M 800 130 L 786 125 M 800 130 L 802 116" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
                <div className="connector-label">
                  <i className="ph ph-sparkles"></i> LỘ TRÌNH LÊN CẤP SENIOR BUYER
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
