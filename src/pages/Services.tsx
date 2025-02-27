// pages/Services.tsx
import React from 'react';
import '../App.css';
import { Code, FileText, Blocks } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <h1 className="page-title">OUR SERVICES</h1>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <Blocks color="#9eff00" size={50} />
          </div>
          <h2 className="service-title">PLATFORM DESIGN & DEVELOPMENT</h2>
          <p className="service-description">
            We develop custom Web3/Web2 platforms delivering secure, scalable, and innovative solutions. Our expertise ensures seamless blockchain integration with a focus on user experience and future ready architecture. From Social and DeFi applications, to decentralized platforms, we bring your vision to life.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FileText color="#9eff00" size={50} />
          </div>
          <h2 className="service-title">SMART CONTRACT CRAFTING</h2>
          <p className="service-description">
            Trust our experienced team to develop secure, efficient, and fully-functional smart contracts tailored to your specific requirements, enabling smooth and automated transactions within the decentralized ecosystem.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <Code color="#9eff00" size={50} />
          </div>
          <h2 className="service-title">CUSTOM / BESPOKE DEVELOPMENT</h2>
          <p className="service-description">
            Our custom development services cater to your project's unique needs, ensuring the delivery of tailor-made solutions that drive your vision forward and position you for success in the web3 world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
