import React from 'react';

const TrustedBy = () => {
  return (
    <div className="tools-section">
      <div className="tools-title">CÔNG CỤ THỰC HÀNH CHUYÊN NGHIỆP</div>
      <div className="tools-grid-row">
        <div className="tool-badge badge-ps">
          <div className="tool-icon-box">Ps</div>
          <span className="tool-name">Adobe Photoshop</span>
        </div>
        <div className="tool-badge badge-cc">
          <div className="tool-icon-box">Cc</div>
          <span className="tool-name">CapCut PC</span>
        </div>
        <div className="tool-badge badge-mj">
          <div className="tool-icon-box">Mj</div>
          <span className="tool-name">AI Midjourney</span>
        </div>
        <div className="tool-badge badge-pr">
          <div className="tool-icon-box">Pr</div>
          <span className="tool-name">Premiere Pro</span>
        </div>
        <div className="tool-badge badge-ai">
          <div className="tool-icon-box">Ai</div>
          <span className="tool-name">Illustrator</span>
        </div>
      </div>
      
      <div className="partners-row">
        <span className="partners-label">Đối tác tuyển dụng học viên:</span>
        <div className="partner-tags">
          <span className="partner-tag">Latio Digital</span>
          <span className="partner-tag">Schannel Agency</span>
          <span className="partner-tag">VTV Production</span>
          <span className="partner-tag">Arena Studio</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
