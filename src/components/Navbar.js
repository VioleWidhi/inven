import {React, useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navLogo from '../assets/navbarlogo.png'
import { Link as LinkRoll } from 'react-scroll';
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };


  return (
    <header className='absolute top-0 left-0 z-50 flex w-full items-center bg-transparent font-poppins'>
      <div className='container'>
        <div className='relative flex items-center justify-between'>

          {/* Desktop View */}

          {/* logo Invention */}
          <div className='px-4'>
            <a href='/' className='block py-8'>
              <img src={navLogo} className='w-28 md:w-44' alt='logo' />
            </a>
          </div>

          {/* navMenu */}
          <ul className='hidden md:flex'>
            <li className=' text-white'>
              <LinkRoll to='about-us' spy={true} smooth={true} offset={15} duration={500} className='mx-3 text-sm hover:underline hover:underline-offset-8 font-medium hover:font-bold hover:text-primary hover:cursor-pointer'>About Us</LinkRoll>
              <LinkRoll to='competition' spy={true} smooth={true} offset={100} duration={500} className='mx-3 text-sm hover:underline hover:underline-offset-8 font-medium hover:font-bold hover:text-primary hover:cursor-pointer'>Competition</LinkRoll>
              <LinkRoll to='testimonial' spy={true} smooth={true} offset={200} duration={500} className='mx-3 text-sm hover:underline hover:underline-offset-8 font-medium hover:font-bold hover:text-primary hover:cursor-pointer'>Testimonial</LinkRoll>
              <LinkRoll to='contact-person' spy={true} smooth={true} offset={60} duration={500} className='mx-3 text-sm hover:underline hover:underline-offset-8 font-medium hover:font-bold hover:text-primary hover:cursor-pointer'>Contact</LinkRoll>
            </li>
          </ul>

          {/* login&register */}
          <div className='hidden md:flex'>
            <Link to="/login" className='border border-primary text-sm font-medium text-primary rounded-md px-6 py-2 mx-2 hover:bg-primary hover:cursor-pointer hover:text-blacky duration-300 transition'>Login</Link>
            <Link to="/register" className='border border-primary text-sm font-medium text-primary rounded-md px-6 py-2 mx-2 hover:bg-primary hover:cursor-pointer hover:text-blacky duration-300 transition'>Register</Link>
          </div>


          {/* hamburgerMenu */}
          <div className='md:hidden flex items-center px-4 z-60 text-center'>
            <button onClick={handleNav} className='absolute right-4 block duration-300'>
              {nav ? (<AiOutlineClose className='text-primary' size={30} />) : (<AiOutlineMenu className='text-primary' size={30} />)}
            </button>
            <ul className={nav ? 'border rounded-b-lg absolute right-px top-full w-full bg-bluey border-primary py-10 duration-500 ease-in-out' : 'fixed left-[-100%] duration-500 ease-in-out'}>
              <li className=''>
                <LinkRoll to='about-us' spy={true} smooth={true} offset={15} duration={500} className='mx-8 block py-3 text-base text-white hover:cursor-pointer hover:text-primary font-medium hover:font-bold hover:underline hover:underline-offset-8'>About Us</LinkRoll>
                <LinkRoll to='competition' spy={true} smooth={true} offset={15} duration={500} className='mx-8 block py-3 text-base text-white hover:cursor-pointer hover:text-primary font-medium hover:font-bold hover:underline hover:underline-offset-8'>Competition</LinkRoll>
                <LinkRoll to='testimonial' spy={true} smooth={true} offset={15} duration={500} className='mx-8 block py-3 text-base text-white hover:cursor-pointer hover:text-primary font-medium hover:font-bold hover:underline hover:underline-offset-8'>Testimonial</LinkRoll>
                <LinkRoll to='contact-person' spy={true} smooth={true} offset={15} duration={500} className='mx-8 block py-3 text-base text-white hover:cursor-pointer hover:text-primary font-medium hover:font-bold hover:underline hover:underline-offset-8'>Contact Person</LinkRoll>
              </li>
              <div className='mt-5 flex flex-col items-center'>
                <Link to="/login" className='w-3/5 hover:cursor-pointer hover:text-blacky text-white py-2 border hover:bg-primary border-primary rounded-md text-base mx-8 m-1 font-medium '>Login</Link>
                <Link to="/register" className='w-3/5 hover:cursor-pointer hover:text-blacky text-white py-2 border hover:bg-primary border-primary rounded-md text-base mx-8 m-1 font-medium '>Register</Link>
              </div>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}
