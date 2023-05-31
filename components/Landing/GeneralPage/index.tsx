import React from 'react';
import Image from 'next/image';

const GeneralPage = () => {
  return (
    <div className="">
      <div className='bg-white p-10'>
      <div className="flex justify-around">
        <div className="bg-black p-4 w-[424px] h-[437px] rounded-[25px]">
          <h2 className="text-white text-center">SAFETY</h2>
          <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
        </div>
        <div className="bg-black p-4">
          <h2 className="text-white text-center">CONVENIENT</h2>
          <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
        </div>
        <div className="bg-black p-4">
          <h2 className="text-white text-center">CUSTOMER FOCUS</h2>
          <button className="bg-red-500 text-red-100 px-4 py-2 mt-4">Learn More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GeneralPage;
