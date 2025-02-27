// pages/Contact.tsx
import React, { useState } from 'react';
import '../App.css';
import { PhoneCall } from 'lucide-react';

const Contact: React.FC = () => {
  const [telegram, setTelegram] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ telegram, message });
    // Reset form
    setTelegram('');
    setMessage('');
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-image">
          <img 
            src="/api/placeholder/600/600" 
            alt="Question mark" 
            className="question-mark-image" 
          />
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">05. TELEGRAM</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your username..."
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">06. MESSAGE</label>
              <textarea
                className="form-textarea"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
              ></textarea>
            </div>
            
            <div className="form-buttons">
              <button type="button" className="book-call-btn">
                <PhoneCall size={18} />
                <span>BOOK A CALL</span>
              </button>
              
              <button type="submit" className="send-enquiry-btn">
                SEND ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="footer-banner">
        <h1 className="footer-title">WEBTHREE</h1>
      </div>
    </div>
  );
};

export default Contact;