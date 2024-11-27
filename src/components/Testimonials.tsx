
import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

function Testimonials() {
  return (
    <>
      <section className='w-full px-[24px] xsm:px-[64px] py-[112px]'>
        <h1 className='my_h1 mb-[24px]'>Customer testimonials</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className='w-full flex flex-row gap-[32px] overflow-x-auto'>
          {/* card */}

          {[...Array(3)].map((_, index)=>(
            <div className='shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black mt-[80px]' key={index}>
            <div className='flex gap-1 mb-[24px]'>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
            </div>
            <p className='mb-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Rerum provident voluptates tempore nisi modi numquam voluptate, maxime dignissimos magnam aperiam!</p>

             <div className='flex gap-[20px]'>
              <div className='w-[56px] h-[56px] rounded-full overflow-hidden'>
                <Image src="/testi1.png" alt="img" width={56} height={56}></Image>
              </div>
              <div className='h-full  flex flex-col'>
                <p className='font-bold'>James Nduku</p>
                <p>Software Developer</p>
              </div>
             </div>
        </div>
          ))}
            
        </div>
      </section>
    </>
  )
}

export default Testimonials
