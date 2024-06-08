import React from 'react'
import Container from './layer/Container'
import { FaArrowRight } from "react-icons/fa";

const Six = () => {
  return (
    <div className='pt-7'>
        <Container className='pt-16'>
        <div className='flex md:justify-between flex-wrap'>
          <div className="likha md:w-2/4 ml-3 md:ml-0">
         <h3 className='text-orange-900 font-medium md:font-semibold justify-center flex text-2xl md:text-4xl'>Contact With Us</h3>
         <p className='md:py-16 py-4 text-base md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde recusandae magnam, 
        assumenda quibusdam velit saepe eos, aspernatur nostrum, quod alias aperiam cupiditate eveniet. </p>
        <p className='pb-5 md:pb-14 text-base md:text-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde recusandae magnam, 
        assumenda quibusdam velit saepe eos, aspernatur nostrum, quod alias aperiam cupiditate eveniet. </p>
        <button className='group hover:bg-black border border-transparent 
          relative font-Manrope text-[#1B1C2B] hover:text-white transition-all duration-500
          md:py-3 md:px-14 py-1 px-11 bg-[#FCD980] rounded-full flex mx-auto'>Learn More
          <FaArrowRight className='absolute right-10  top-1/2 translate-y-[-50%] opacity-0 group-hover:opacity-100
          group-hover:right-4 text-base md:text-xl transition-all duration-500 text-[white]'/>
          </button>

        </div>

            <div className="form md:max-w-[600px] max-w-[350px] bg-amber-800 py-4 md:py-[70px] md:px-[180px] px-14 text-white items-center mt-8">
            <p className='font-medium text-3xl pb-4'>Contact With Us</p>
            <div className='gap-y-10 flex flex-col'>
            <input className='py-3 px-12 rounded-lg text-black' type='text' placeholder='Your Name'/>
            <input className='py-3 px-12 rounded-lg text-black' type='text' placeholder='Your Email'/>
            <input className='py-3 px-12 rounded-lg text-black' type='text' placeholder='Your Number'/>
            </div>
            <div className='pt-7'>
            <button className='rounded-lg text-amber-800 items-center justify-center bg-white py-3 px-8
             mx-auto flex font-medium'>Sbumit Here</button>
            </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Six

//md:flex md:gap-20 flex flex-col md:flex-row justify-center items-center

//md:max-w-[600px] max-w-[370px]