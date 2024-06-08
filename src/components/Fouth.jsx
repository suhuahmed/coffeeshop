import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {HiOutlineArrowRight} from 'react-icons/hi'


function SampleNextArrow(props){
    const { className, style ,onClick} = props;
    return(
      <div
      className="h-6 w-6 md:h-12 md:w-12 bg-amber-700  flex justify-center items-center absolute right-0 z-10 top-1/2 translate-y-[-30%] rounded-full"
      onClick={onClick}
      >
      <HiOutlineArrowRight className='text-white '/>
      </div>
    );
  }
  
  function SamplePrevArrow(props){
    const { className, style ,onClick} = props;
    return(
      <div
      className="h-6 w-6 md:h-12 md:w-12 bg-amber-700 flex justify-center items-center absolute left-0 z-10 top-1/2 translate-y-[-30%] rounded-full"
      onClick={onClick}
      >
      <HiOutlineArrowLeft className='text-white '/>
      </div>
  
    );
  }
  
  const Fouth = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>
    };
  
  return (
    <div className='pt-4'>
        <Container>
        <h1 className='text-orange-900 font-semibold text-4xl md:text-7xl py-7 md:py-20 flex justify-center'>Our Services</h1>
        <Slider {...settings}>
         
        <div className=' md:px-5 px-3'>
            <Image  src="../src/assets/fourth.jpg"/>

        </div>
        <div className='md:px-5 px-3'>
            <Image src="../src/assets/fourth.jpg"/>

        </div>
        <div className='md:px-5 px-3 '>
            <Image  src="../src/assets/fourth.jpg"/>

        </div>
        <div className='md:px-5 px-3'>
            <Image  src="../src/assets/fourth.jpg"/>

        </div>
        <div className='md:px-5 px-3'>
            <Image  src="../src/assets/fourth.jpg"/>

        </div>
        <div className='md:px-5 px-3'>
            <Image  src="../src/assets/fourth.jpg"/>

        </div>
      
        </Slider>
        </Container>
    </div>
  )
}

export default Fouth