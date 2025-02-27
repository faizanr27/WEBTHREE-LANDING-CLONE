// pages/Home.tsx
import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="white-text">WE HELP </span>
            <span className="green-text">WEB3 </span>
            <span className="white-text">PROJECTS </span>
            <span className="white-text">LAUNCH.</span>
            <div className="eye-icon">
              <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="30" rx="40" ry="25" fill="white" />
                <circle cx="50" cy="30" r="15" fill="black" />
                <circle cx="55" cy="25" r="5" fill="white" />
              </svg>
            </div>
          </h1>
        </div>
      </section>
      
      <section className="mission">
        <div className="mission-content">
          <p className="mission-text">
            Our mission is to help ensure the <span className="highlight">integrity</span> of the 
            Web3 space continues to thrive by providing
            clients with a <span className="highlight">full suite of services</span> to assist
            them with the launch of their projects.
          </p>
        </div>
      </section>
      
      <section className="info-bar">
        <div className="info-item">
          <span className="green-text">/ BASED IN UNITED STATES</span>
          <span className="white-text">&amp; WORKING WORLDWIDE</span>
        </div>
        <div className="info-item">
          <span className="green-text">/ YEARS OF BLOCKCHAIN</span>
          <span className="white-text">EXPERIENCE</span>
        </div>
        <div className="info-item">
          <span className="green-text">/ ©2024 WEBTHREE</span>
          <span className="white-text">ALL RIGHTS RESERVED</span>
        </div>
      </section>
    </div>
  );
};

export default Home;

