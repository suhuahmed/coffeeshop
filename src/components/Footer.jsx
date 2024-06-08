import React from 'react'
import Container from './layer/Container'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <Container className='bg-amber-800 mt-20 py-14'>
        <div className='flex items-center gap-x-8 justify-center text-white text-2xl'>
        <FaFacebook />
        <AiFillInstagram />
        <FaTwitter />
        </div>
        <p className='pt-8 text-white flex md:mx-auto justify-center items-center mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Container>
    </div>
  )
}
export default Footer