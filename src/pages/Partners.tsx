
// pages/Partners.tsx
import React from 'react';
import '../App.css';

const Partners: React.FC = () => {
  const partners = [
    { id: 1, name: 'SURGENCE', logo: '/partners/surgence.png' },
    { id: 2, name: 'ARCADIA', logo: '/partners/arcadia.png' },
    { id: 3, name: 'MINTIFY', logo: '/partners/mintify.png' },
    { id: 4, name: 'SEEDIFY', logo: '/partners/seedify.png' },
    { id: 5, name: 'HORIZON LABS VENTURE', logo: '/partners/horizon.png' },
    { id: 6, name: 'MHL SOLUTIONS', logo: '/partners/mhl.png' },
  ];

  return (
    <div className="partners-page">
      <div className="page-header">
        <h1 className="page-title">OUR PARTNERS</h1>
      </div>
      
      <div className="partners-grid">
        {partners.map(partner => (
          <div key={partner.id} className="partner-card">
            <div className="partner-logo-container">
              <img 
                src={`/api/placeholder/100/100`} 
                alt={partner.name} 
                className="partner-logo" 
              />
            </div>
            <h3 className="partner-name">{partner.name}</h3>
          </div>
        ))}
      </div>
      
      <div className="footer-info">
        <p>/ © WEBTHREE 2024</p>
        <p>/ ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Partners;