import React from 'react'
import header from '../assets/headerlogo.png'
import robotleft from '../assets/robot-kiri.png'
import robotright from '../assets/robot-kanan.png'
import bgStringLeft from '../assets/bg-string-left.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id='hero' className='w-full flex flex-col justify-center h-screen font-poppins'>
      <div className='absolute top-0 mt-5'>
        <img src={bgStringLeft} className='opacity-80' alt='bg-string-left' />
      </div>
      <div className="container">
        <div className='mt-20 lg:mt-32'>
          <div className='flex flex-col items-center'>
            <img src={header} className='w-72 md:w-[580px] z-20' alt='name' />
          </div>
          <div className='flex items-center justify-center max-w-full mt-2 '>
            {/* <img src={robotleft} className='hidden lg:inline w-40 lg:mr-2' alt='robot-left' /> */}
            <Link to='/login' className='text-center border border-primary rounded-xl px-8 py-2 lg:px-16 lg:py-4 text-primary font-bold text-lg lg:text-2xl hover:bg-primary hover:text-blacky transition duration-200 hover:cursor-pointer z-20'>Get Started</Link>
            {/* <img src={robotright} className='hidden w-40 lg:inline lg:ml-2' alt='robot-right' /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
