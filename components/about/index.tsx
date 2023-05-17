import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  return (
    <div className="about-section" style={{
      border: '4px ridge',
      borderRadius: '5px',
      borderColor: '#aa3840',
      padding: '20px',
      maxWidth: '45%',
      backgroundColor: '#222222'
    }}>
      <h2 className="about-title"style={{
        color: 'white',
        fontSize: '30px',
        margin:'20px',
      }}>About Us</h2>
      <p className="about-content"style={{
        color: 'white',
        fontSize: '12px',
        margin:'30px',
      }}
      >The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya. With 2 million registered boda riders in Kenya, this business produces ksh.370 million each day. Despite this strong figure this business is less controlled by the government, making it a renegade industry. At SONGA, we are attempting to dispel this misconception by providing secure, convenient, and economical trips that leave the consumer with the impression that THIS IS MADE FOR ME.</p>
      <button className="learn-more-button"style={{
      border: '2px ridge',
      borderRadius: '5px',
      borderColor: '#aa3840',
      left:'15px',
      right:'15px',
      padding: '10px',
      border: 'onset',
      maxWidth: '55%',
      backgroundColor: '#2C2A2A',
      color:'white',
    }}
     onClick={() => window.location.href = 'https://example.com'}>Learn More
      <FontAwesomeIcon icon={faArrowRight} size="2xs" color="#FB4552" />
     </button>
    </div>
  );
};

export default AboutSection;
