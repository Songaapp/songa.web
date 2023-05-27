import Image from 'next/image';
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

export const Hero = () => {
  return (
    <div className="bg-primary">
      <div className="relative bg-primary h-[80vh]">
        <div className="absolute top-0">
          <Image src="/assets/images/bike.png" className="h-full" width={350} height={20} alt="motorcycle" />
        </div>
        <div className="flex h-full justify-around text-white">
          <div className="flex justify-start items-center">
            <Image src="/assets/images/FLAG.png" width={365} height={629} alt="Kenyan flag" />
          </div>

          <div className="px-10 flex-col space-y-16 items-center justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl uppercase font-bold text-red-500">Digitizing the</h1>
              <h1 className="text-4xl italic uppercase font-bold">Bodaboda</h1>
              <h1 className="text-4xl italic uppercase font-bold text-green-600">Industry</h1>
              <Image src="/assets/images/line.png" width={379.5} height={104} alt="logo" />
            </div>
            <p className="text-white text-sm w-[611px]">
              The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya.
              With 2 million registered boda riders in Kenya, this business produces Ksh. 370 million each day.
            </p>
            <button className="rounded-lg border-[#FB4552] w-[270px] h-[53px] border-2 flex items-center justify-center space-x-3">
              Learn More
              <ArrowRightIcon className="h-5 w-5 text-[#FB4552] ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

