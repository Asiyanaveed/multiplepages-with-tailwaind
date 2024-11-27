import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

function HeroSection() {
  return (
    <>
      <section>
        {/* Top Div */}
        <div className='flex flex-col xsm:flex-row'>
            {/* left div */}
            <div className='w-full xsm:w-1/2 py-[64px] px-[24px] xsm:px-0  xsm:py-[250px] flex justify-center items-center '>
            <div className=' w-full px-0 xsm:px-[80px]'>
                <h1 className='text-[40px] xsm:text-[56px] leading-[120%] font-bold  mb-[24px]'>Learn new skills online with ease</h1>
                <p className='text-[18px] leading-[150%] mb-[40px]'>Discover a wide range of courses covering a variety of  subjects, taught by expert instructors.</p>

                <Button className='mr-[16px]'>Start learning now</Button>
                <Button variant={'transparentBtn'}>Explore Courses</Button>

            </div>
            </div>

            {/* right div */}
            <div className='w-full xsm:w-1/2  xsm:h-[800px] flex justify-center items-center overflow-hidden '>
            <Image src="/heroimg.jpeg" alt="img" width={640} height={800} className='w-[428px] xsm:w-[640px] h-[400px] xsm:h-[800]'></Image>
            </div>
        </div>


        {/* Bottom Div */}
        <div className='w-full py-[48px] xsm:py-[80px] px-[24px] xsm:px-[8px] bg-[#F7F7F7] flex flex-col xsm:flex-row justify-between items-center gap-[24px] xsm:gap-0 '>
            <div className='w-[320px] text-[24px] font-bold leading-[140%] ml-[8px] mr-[64px]'>
            <h5>Trusted by 2000+ companies worldwide.</h5>
            </div>

            <div className='flex gap-[16px] xsm:gap-[19px] overflow-x-auto'>
                 <Image src="/hero1.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
                 <Image src="/hero2.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
                 <Image src="/hero3.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
                 <Image src="/hero4.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
                 <Image src="/hero5.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
                 <Image src="/hero6.png" alt="img" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
