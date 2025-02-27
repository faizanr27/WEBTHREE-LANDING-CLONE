// pages/Clients.tsx
import React from 'react';
import '../App.css';

const Clients: React.FC = () => {
  const clients = [
    { id: 1, name: 'GODJIRA GEN 2', image: '/clients/godjira.png' },
    { id: 2, name: 'APELIST', image: '/clients/apelist.png' },
    { id: 3, name: 'HELIX METAVERSE', image: '/clients/helix.png' },
  ];

  return (
    <div className="clients-page">
      <div className="page-header">
        <h1 className="page-title">OUR CLIENTS</h1>
      </div>
      
      <div className="clients-grid">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <div className="client-image-container">
              <img 
                src={`/api/placeholder/300/400`} 
                alt={client.name} 
                className="client-image" 
              />
            </div>
            <div className="client-name-tag">{client.name}</div>
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

export default Clients;
