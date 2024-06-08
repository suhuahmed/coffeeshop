import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import { FaArrowRight } from "react-icons/fa";

const Third = () => {
  return (
    <div className='pt-4'>
        <Container>
        <h1 className='text-orange-900 font-semibold text-4xl md:text-7xl py-10 md:py-20 flex justify-center'>About us</h1>
        <div className='md:flex md:gap-x-14 gap-x-0'>
        <div className="image w-60 mx-auto md:w-2/4">
        <Image className='w-full' src="../src/assets/third.jpg"/>
        </div>
        <div className="likha md:w-2/4 flex items-center justify-center ">
        <div className="address md:max-w-[600px] max-w-[370px] md:flex flex-wrap md:flex-nowrap ">
            <div>
              <p className='font-medium text-3xl mx-auto flex justify-center py-4 md:py-0'>Find Us Here</p>
                <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.390743330842!2d90.49672352432188!3d23.
                 626173643536042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10f2e4b60f5%3A0x87beeecd7f88883
                 !2sChashara%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1717412326035!5m2!1sen!2sbd" 
                 height="450" width="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
            <p className='py-8 pl-6'>Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit
               amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p className='pl-6 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit
               amet Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor</p>
              <button className='group hover:bg-black border border-transparent 
          relative font-Manrope text-[#1B1C2B] hover:text-white transition-all duration-500
          md:py-2 md:px-12 py-1 px-11 bg-[#FCD980] rounded-full flex mx-auto'>Learn More
          <FaArrowRight className='absolute right-10  top-1/2 translate-y-[-50%] opacity-0 group-hover:opacity-100
          group-hover:right-4 text-base md:text-xl transition-all duration-500 text-[white]'/>
          </button>

            </div>
            </div>

        </div>

        </div>
        </Container>
    </div>
  )
}

export default Third