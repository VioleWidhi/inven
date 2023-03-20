import React from 'react'
import bgStringRight from '../assets/bg-string-right.png'
import dividerDown from '../assets/divider-down.png'
import robotRight from '../assets/robot-kanan.png'
import robotLeft from '../assets/robot-kiri.png'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

export default function Competitions() {
  return (
    <section id='competition' className='pt-20 font-poppins' >
      <div className='absolute mt-5 -z-10'>
        <img src={bgStringRight} className='opacity-50' alt='' />
      </div>
      <div className='container'>
        <img src={dividerDown} className='w-full' alt='' />
        <h1 className='text-white text-center mt-10 md:pt-20 text-3xl font-bold md:text-5xl'>The <span className='text-primary'>Competition</span></h1>

        <div className='flex mt-10 flex-wrap md:flex-nowrap justify-center'>

          {/* Poster Design */}
          <div className='flex flex-col bg-graying rounded-xl shadow-lg w-full m-6 overflow-hidden border border-primary' data-aos="fade-right" data-aos-duration="1000">
            <img src={robotRight} className='w-1/2 m-6 mx-auto' alt='robot1' />
            <h2 className='text-center px-2 pb-5 text-primary font-bold text-2xl md:text-4xl'>POSTER DESIGN</h2>
            <p className='text-center px-2 mx-10 pb-10 leading-loose text-texting text-base'>Tingkat Pelajar SMA/SMK/Sederajat dan Mahasiswa se-Indonesia</p>

            <div className='flex flex-col pb-10'>
              <a href='/' className='text-center border border-primary text-primary px-6 py-4 mx-20 m-2 rounded-md text-base md:text-lg font-bold hover:cursor-pointer hover:bg-primary hover:text-blacky transition duration-200'>Guide Book</a>
              <a href='/posterdesain' className='text-center border border-primary text-primary px-6 py-4 mx-20 m-2 rounded-md text-base md:text-lg font-bold hover:cursor-pointer hover:bg-primary hover:text-blacky transition duration-200'>Read More</a>
            </div>
          </div>

          {/* Web Design */}
          <div className='flex flex-col bg-graying rounded-xl shadow-lg w-full m-6 overflow-hidden border border-primary' data-aos="fade-left" data-aos-duration="1000">
            <img src={robotLeft} className='w-1/2 m-6 mx-auto' alt='robot1' />
            <h2 className='text-center px-2 pb-5 text-primary font-bold text-2xl md:text-4xl'>WEB DESIGN</h2>
            <p className='text-center px-2 mx-10 pb-10 leading-loose text-texting text-base max-'>Tingkat Pelajar SMA/SMK/Sederajat dan Mahasiswa se-Indonesia</p>

            <div className='flex flex-col pb-10'>
              <a href='/' className='text-center border border-primary text-primary px-6 py-4 mx-20 m-2 rounded-md text-base md:text-lg font-bold hover:cursor-pointer hover:bg-primary hover:text-blacky transition duration-300'>Guide Book</a>
              <a href='/' className='text-center border border-primary text-primary px-6 py-4 mx-20 m-2 rounded-md text-base md:text-lg font-bold hover:cursor-pointer hover:bg-primary hover:text-blacky transition duration-300'>Read More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
