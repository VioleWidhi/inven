import React from 'react'
import dividerDown from '../assets/divider-down.png'
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import 'aos/dist/aos.css';

export default function Contact() {
  return (
    <section id='contact-person' className='pt-20 pb-20 font-poppins'>
      <div className='container'>
        <img src={dividerDown} className='w-full' alt='' />
        <div className='text-center mb-10'>
          <h1 className='text-primary pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>Contact Person</h1>
          <h4 className='text-white pt-2 md:pt-4 text-md font-medium md:text-lg '>Untuk teknis dan informasi selengkapnya bisa hubungi kami melalui kontak dibawah ini.</h4>
        </div>

        <div className='md:flex border-2 border-primary rounded-md md:p-5' data-aos='zoom-in' data-aos-duration='1000'>

          {/* Sponsorship */}
          <div className='m-8 md:m-2 rounded-lg md:w-1/3'>
            <h2 className='text-center text-primary text-2xl font-bold p-2'>Sponsorship</h2>
            <SiWhatsapp size={75} className='text-white mx-auto m-4' />
            <h4 className='text-center text-white text-lg font-medium pt-2'>Bagus Ari</h4>
            <h5 className='text-center text-white text-md font-normal pb-4'>081 339 585 537</h5>
          </div>

          {/* Email */}
          <div className='m-8 md:m-2 rounded-lg md:w-1/3'>
            <h2 className='text-center text-primary text-2xl font-bold p-2'>Email</h2>
            <SiGmail size={75} className='text-white mx-auto m-4' />
            <h4 className='text-center text-white text-lg font-medium pt-2'>Invention Udayana</h4>
            <h5 className='text-center text-white text-md font-normal pb-4'>invention.udayana@gmail.com</h5>
          </div>

          {/* Competition */}
          <div className='m-8 md:m-2 rounded-lg md:w-1/3'>
            <h2 className='text-center text-primary text-2xl font-bold p-2'>Competition</h2>
            <SiWhatsapp size={75} className='text-white mx-auto m-4' />
            <h4 className='text-center text-white text-lg font-medium pt-2'>Bagus Ari</h4>
            <h5 className='text-center text-white text-md font-normal pb-4'>081 339 585 537</h5>
          </div>

        </div>
      </div>
    </section>
  )
}
