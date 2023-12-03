"use client";

import Image from 'next/image';
import { CustomBtn } from '.';

const Hero = () => {
  const handleScroll = ()=>{
    const nextComponent = document.querySelector(".discoverScroll")
    if(nextComponent){
      nextComponent.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, rent a car—quick and super easy!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
        <CustomBtn 
        title = "Explore Cars"
        containerStyles = "bg-primary-blue rounded-full text-white min-w-[130px] mt-10 mb-4 hover:shadow-lg"
        handleClick = {handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
          src="/hero.png"
          alt='hero'
          fill
          className='object-contain'
          />
        </div>
          <div className='hero__image-overlay' />
      </div>

    </div>
  )
}

export default Hero