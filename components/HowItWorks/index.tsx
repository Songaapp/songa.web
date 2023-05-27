import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/assets/icons/image1.png';

const HowItWorks = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="text-lg mt-4">User (Passenger) Journey:</p>
        <ol className="list-decimal ml-8 mt-4">
          <li>Download the app from the Play Store.</li>
          <li>Sign up to become a user.</li>
          <li>Top up their wallet with SONGA points.</li>
          <li>Request rides using SONGA points from their wallet.</li>
        </ol>
        <p className="text-lg mt-8">Rider Journey:</p>
        <ol className="list-decimal ml-8 mt-4">
          <li>Vetted by SONGA management to become a rider.</li>
          <li>Access the rider interface of the app.</li>
          <li>Pick ride requests from passengers.</li>
          <li>Get paid using SONGA points.</li>
          <li>Redeem the earned points for Kenyan Shillings.</li>
        </ol>
      </div>
    </div>
  );
};

export default HowItWorks;
