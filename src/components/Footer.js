import React from 'react'
import { FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function () {
  return (
    <footer className='pt-20 pb-10 bg-bluey font-poppins'>
      <div className='container'>

        <div className='flex flex-wrap w-full'>

          {/* Contact */}
          <div className='w-full px-4 mb-12 font-medium md:w-1/3 text-white'>
            <h3 className='font-bold text-3xl mb-5 text-primary'>Contact Us</h3>
            <p className='mb-2'>invention.udayana@gmail.com</p>
            <p className='mb-2'>Universitas Udayana Lt. 2 Gedung BD Kampus Informatika Universitas Udayana</p>
            <p className='mb-2'>Bukit Jimbaran, Bali</p>
          </div>

          {/* Artikel */}
          <div className='w-full px-4 mb-12 md:w-1/3 font-medium text-white'>
            <h3 className='font-bold text-3xl text-primary mb-5'>Artikel</h3>
            <ul className=''>
              <li>
                <a href='/' target='_blank' rel='noreferrer' className='inline-block text-base hover:text-primary mb-2'>
                  Cara Mudah Membuat Website Pertamamu (Tanpa Koding!)
                </a>
              </li>
              <li>
                <a href='/' target='_blank' rel='noreferrer' className='inline-block text-base hover:text-primary mb-2'>
                  7 Cara Praktis Membuat Web Portofolio Sendiri, Tanpa Koding!
                </a>
              </li>
            </ul>
          </div>

          {/* Tautan */}
          <div className='w-full px-4 mb-12 md:w-1/3 font-semibold text-white'>
            <h3 className='font-bold text-3xl text-primary mb-5'>Tautan</h3>
            <ul className=''>
              <li>
                <a href='/' className='inline-block text-base hover:cursor-pointer hover:text-primary mb-2'>
                  Home
                </a>
              </li>
              <li>
                <Link to='about-us' spy={true} smooth={true} offset={15} duration={500} className='inline-block text-base hover:cursor-pointer hover:text-primary mb-2'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='competition' spy={true} smooth={true} offset={15} duration={500} className='inline-block text-base hover:cursor-pointer hover:text-primary mb-2'>
                  Competition
                </Link>
              </li>
              <li>
                <Link to='testimonial' spy={true} smooth={true} offset={15} duration={500} className='inline-block text-base hover:cursor-pointer hover:text-primary mb-2'>
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to='contact-person' spy={true} smooth={true} offset={15} duration={500} className='inline-block text-base hover:cursor-pointer hover:text-primary mb-2'>
                  Contact Person
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full border-t-2 opacity-80 border-white pt-10 rounded-sm'>
          <div className='flex items-center justify-center'>
            <a href='https://www.instagram.com/invention.udayana/' target='_blank' rel='noreferrer' className='w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-white hover:border-primary' >
              <FaInstagram className='text-white hover:text-primary' size={20} />
            </a>
            <a href='https://www.linkedin.com/company/himaifuniversitasudayana/' target='_blank' rel='noreferrer' className='w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-white hover:border-primary' >
              <FaLinkedin className='text-white hover:text-primary' size={20} />
            </a>
            <a href='https://goo.gl/maps/puVDjnJ3MmFGmgvM6' target='_blank' rel='noreferrer' className='w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-white hover:border-primary' >
              <FaMapMarkerAlt className='text-white hover:text-primary' size={20} />
            </a>
          </div>
        </div>

        <div className='w-full pt-10'>
          <h5 className='text-white text-center text-base'>© <span className='text-primary'>Invention 2023</span> • All Right Reserved</h5>
        </div>

      </div>
    </footer>
  )
}
