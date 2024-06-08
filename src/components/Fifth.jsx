import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import { CiBadgeDollar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Fifth = () => {
  return (
    <div className='pt-4'>
        <Container>
          <h1 className='text-orange-900 font-semibold text-4xl md:text-7xl py-8 md:py-20 flex justify-center'> Our Menu</h1>
          <div className='flex md:gap-x-7 gap-x-3'>
            <div className='group relative overflow-hidden'>
              <Image className='relative w-full' src="../src/assets/fifth.jpg"/>
              <div className='overlay group bottom-0 h-[50%] w-full absolute bg-[rgb(28,30,83,0.42)] transition-all duration-700
               items-center flex justify-center flex-col translate-x-[100%] group-hover:translate-x-0 text-white'>
                <p className=' items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium text-sm md:text-xl'>See Price
                <CiBadgeDollar className='md:text-2xl text-xl font-extrabold'/></p>
                <p className='md:pt-4 pt-2 items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium text-sm md:text-xl'>Add To Cart
                <CiShoppingCart className='md:text-2xl text-xl md:font-extrabold'/></p>
              </div>
            </div>


            <div className='group relative overflow-hidden'>
              <Image className='relative w-full' src="../src/assets/fifth.jpg"/>
              <div className='overlay group bottom-0 h-[50%] w-full absolute bg-[rgb(28,30,83,0.42)] transition-all duration-700
               items-center flex justify-center flex-col translate-x-[100%] group-hover:translate-x-0 text-white'>
                <p className='items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium md:text-xl text-sm'>See Price
                <CiBadgeDollar className='md:text-2xl text-xl font-extrabold'/></p>
                <p className='md:pt-4 pt-2 items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium text-sm md:text-xl'>Add To Cart
                <CiShoppingCart className='md:text-2xl text-xl md:font-extrabold'/></p>
              </div>
            </div>


            <div className='group relative overflow-hidden'>
              <Image className='relative w-full' src="../src/assets/fifth.jpg"/>
              <div className='overlay group bottom-0 h-[50%] w-full absolute bg-[rgb(28,30,83,0.42)] transition-all duration-700
               items-center flex justify-center flex-col translate-x-[100%] group-hover:translate-x-0 text-white'>
                <p className='items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium md:text-xl text-sm'>See Price
                <CiBadgeDollar className='md:text-2xl text-xl font-extrabold'/></p>
                <p className='md:pt-4 pt-2 items-center flex justify-center md:gap-x-6 gap-x-2 md:font-medium text-sm md:text-xl'>Add To Cart
                <CiShoppingCart className='md:text-2xl text-xl md:font-extrabold'/></p>
              </div>
            </div>



            </div>
        </Container>
    </div>
  )
}

export default Fifth