import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

function Cards() {
  return (
    <div className='w-full h-auto  bg-white py-6 px-4  '>
        {/* CARDS */}
        
        <div className='mx-auto px-6 pt-64 md:pt-8 md:grid grid-cols-3 gap-8'>
            <div className='w-auto bg-[#181818] shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                src='/assets/icons/card1-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-4 uppercase'>Safety</h2>
            <p className='text-center text-white p-2'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them.</p>
            <Link href='/' className='text-red-500 text-center py-4 flex flex-row justify-center items-center gap-[0.5rem]'>
                Learn More
                <ArrowSmallRightIcon className='h-5 w-5 text-[#FB4552] ' /> 
            </Link>
        </div>

        <div className='w-auto bg-[#181818] shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                src='/assets/icons/card2-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-4 uppercase'>CONVENIENT</h2>
            <p className='text-center text-white p-2'> Our rides are timely and services easy to access
            Our are services cheap and help you plan on your transport with ease.</p>
            <Link href='/' className='text-red-500 text-center py-4 flex flex-row justify-center items-center gap-[0.5rem]'>
                Learn More
                <ArrowSmallRightIcon className='h-5 w-5 text-[#FB4552] ' /> 
            </Link>
        </div>

        <div className='w-auto bg-[#181818] shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                src='/assets/icons/card3-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-4 uppercase'>CUSTOMER FOCUS</h2>
            <p className='text-center text-white p-2'>We have services fit for the Kenyan economy and promos fit to  client&apos;s travel hours. Our technology is up to date and so are our services.</p>
            <Link href='/' className='text-red-500 text-center py-4 flex flex-row justify-center items-center gap-[0.5rem]'>
                Learn More
                <ArrowSmallRightIcon className='h-5 w-5 text-[#FB4552] ' /> 
            </Link>
        </div>

        
        </div>
    </div>
  )
}

export default Cards