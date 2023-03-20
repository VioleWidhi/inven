import React from 'react'
import dividerUp from '../assets/divider-up.png'
import logo from '../assets/sectionlogo.png'
import 'aos/dist/aos.css';

export default function About() {
  return (
    <section id='about-us' className='pt-20 font-poppins'>
        <div className='container'>
          <img src={dividerUp} className='w-full' alt='' />
          <h1 className='text-white text-center pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>About <span className='text-primary'>Us</span> </h1>
          <div className='flex flex-wrap mt-10'>
            {/* Logo */}
            <div className='w-full self-end md:w-2/5' data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src={logo} className='mx-auto md:mx-0 md:ml-20 w-2/5 md:w-3/5' alt='logo' />
              </div>
            </div>

            {/* p */}
            <div className='w-full self-center md:w-3/5 mt-5 max-w-xl' data-aos="fade-left" data-aos-duration="1000">
              <p className='text-sm text-texting leading-loose text-justify md:mr-10 md:text-lg'><span className='text-primary'>Informatics Festival and Competition</span> (INVENTION) merupakan rangkaian acara perlombaan tahunan yang diadakan oleh Himpunan Mahasiswa Ilmu Komputer Universitas Udayana. INVENTION tahun ini terdiri dari dua cabang perlombaan yaitu <span className='text-primary'>Web Design</span> dan <span className='text-primary'>Desain Poster</span> yang bertujuan untuk menjadi wadah dan memberikan kesempatan kepada pelajar SMA/SMK/Sederajat serta Mahasiswa se-Indonesia untuk menyampaikan ide dan gagasan mereka terhadap permasalahan di bidang IT.</p>
            </div>
          </div>


        </div>
      </section>
  )
}
