import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M20 5C11.729 5 5 11.729 5 20C5 28.271 11.729 35 20 35C28.271 35 35 28.271 35 20C35 11.729 28.271 5 20 5Z" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="2" fill="white" />
          <circle cx="28" cy="15" r="2" fill="white" />
          <circle cx="12" cy="15" r="2" fill="white" />
          <circle cx="15" cy="28" r="2" fill="white" />
          <circle cx="25" cy="28" r="2" fill="white" />
          <path d="M20 18L28 15" stroke="white" strokeWidth="1" />
          <path d="M20 18L12 15" stroke="white" strokeWidth="1" />
          <path d="M20 22L15 28" stroke="white" strokeWidth="1" />
          <path d="M20 22L25 28" stroke="white" strokeWidth="1" />
        </g>
      </svg>
      <div className="logo-text">
        <span className="logo-main">WEBTHREE</span>
        <span className="logo-sub">CONSULTING & AUDITING</span>
      </div>
    </div>
  );
};

export default Logo;

