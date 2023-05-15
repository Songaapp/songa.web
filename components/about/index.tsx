import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Us</h2>
      <p className="about-content">The BODABODA sector is one of the most important contributions to the Kenyan economy. On average,
        8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya. With 2 million registered
        boda riders in Kenya, this business produces ksh.370 million each day. Despite this strong figure this business is less 
        controlled by the government, making it a renegade industry. At SONGA, we are attempting to dispel this misconception 
        by providing secure, convenient, and economical trips that leave the consumer with the impression that THIS IS MADE FOR ME.</p>
      <button className="learn-more-button" onClick={() => window.location.href = 'https://example.com'}>Learn More</button>
    </div>
  );
};

export default AboutSection;
