import React,{ useEffect, useState} from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import { Link, NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  let [show , setShow] = useState()
 
  useEffect(()=>{
   function resize() {
    if (window.innerWidth < 1024) {
      setShow(false)
    }else{
      setShow(true)
    }
   }
   resize()
  window.addEventListener("resize" , resize)
  
  },[])
  
  let handleClick = ()=>{
  setShow(!show)
  }
  
      
      return (
    <>
    <nav className='w-full fixed bg-yellow-700 z-40'>
        <Container className="flex items-center justify-between bg-yellow-700">
          
          <Image className='h-12 w-12  md:h-24 md:w-24' href='' src="../src/assets/bLogo.png"/>

            <div className={`flex gap-x-12 items-center absolute md:static top-full bg-yellow-700 
          flex-col md:flex-row w-full md:w-auto py-4 md:py-0 gap-y-3 md:gap-y-0 opacity-0 
            ${show? "opacity-100 visible transition-all duration-500":"invisible transition-all duration-500"}`}>
            <ul className='flex  gap-x-8 items-center flex-col md:flex-row gap-y-1 md:gap-y-0 text-orange-900   '>
                <li className='hover:text-white'><NavLink to='/home'>Home</NavLink></li>
                <li className='hover:text-white'><NavLink to='/about'>About</NavLink></li>
                <li className='hover:text-white'><NavLink to='/services'>Services</NavLink></li>
                <li className='hover:text-white'><NavLink to='/menu'>Menu</NavLink></li>
                <li className='hover:text-white'><NavLink to='/contact'>Contact Us</NavLink></li>

            </ul>
            <button className=' text-amber-900 font-semibold md:py-2 px-4 bg-yellow-700 rounded-full border border-yellow-900
        hover:text-white hover:bg-transparent hover:border hover:border-white lg:ml-16'>Order Online</button>

          </div>


          <div className=' text-white md:hidden mr-3 md:mr-0 cursor-pointer block'>
          <button onClick={handleClick}>{show ?<RxCross2/>:<FaBars/> }</button>
        </div>



        </Container>
    </nav>
    </>
  )
}

export default Navbar