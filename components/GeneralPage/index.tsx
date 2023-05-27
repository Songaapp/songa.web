import React from 'react';

const GeneralPage = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="bg-black p-4">
        <h2 className="text-white text-center">SAFETY</h2>
        <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
      </div>
      <div className="bg-black p-4">
        <h2 className="text-white text-center">CONVINIENT</h2>
        <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
      </div>
      <div className="bg-black p-4">
        <h2 className="text-white text-center">CUSTOMER FOCUS</h2>
        <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default GeneralPage;
