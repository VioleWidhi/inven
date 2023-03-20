import {React, useEffect} from 'react'
import girls1 from '../assets/girls1.png'
import girls2 from '../assets/girls2.png'
import girls3 from '../assets/girls3.png'
import dividerUp from '../assets/divider-up.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Testimonial() {
  useEffect(() => {
    document.documentElement.style.setProperty("--swiper-theme-color", "#FFCC31")
  }, [])

  const testimoni = [
    {
      id: 1,
      nama: 'Bagus Deva',
      position: 'Juara 2 Lomba Software Development Invention 2021',
      picture: girls1,
      caption: 'Mengikuti perlombaan Software Development di INVENTION 2021 dapat mengasah kemampuan saya dalam bidang Software Engineering karena kami diminta untuk membuat software berdasarkan tema yang ada dan pastinya melihat keadaan di masyarakat juga agar software yang kami buat dapat berguna bagi masyarakat. Ketika mengikuti INVENTION 2021, selain fokus dalam pembuatan software yang digunakan untuk lomba, saya juga mendapatkan ilmu tentang Startup pada sesi sharing session yang dibawakan INSPIX Technologies dan Kuy Kerja.',
    },
    {
      id: 2,
      nama: 'Redoxon',
      position: 'Juara 2 Lomba Software Development Invention 2021',
      picture: girls2,
      caption: 'Lomba Poster Invention ini dapat mengembangkan kemampuan berpikir kritis melalui tema yang diangkat. Penuangan gagasan melalui poster tak hanya tentang pesan yang diberikan, tetapi juga tentang warna yang direpresentasikan oleh pesan. Lomba yang diselenggarakan oleh Himakom ini merupakan lomba yang direkomendasikan untuk diikuti, dari segi penjurian dan penilaian juga dilakukan dengan maksimal sehingga tidak ada kecurangan yang terjadi. So, tunggu apa lagi… Ayo ikut Lomba Poster Invention!.',
    },
    {
      id: 3,
      nama: 'Maria DB',
      position: 'Juara 2 Lomba Software Development Invention 2021',
      picture: girls3,
      caption: 'Mengikuti perlombaan Software Development di INVENTION 2021 dapat mengasah kemampuan saya dalam bidang Software Engineering karena kami diminta untuk membuat software berdasarkan tema yang ada dan pastinya melihat keadaan di masyarakat juga agar software yang kami buat dapat berguna bagi masyarakat. Ketika mengikuti INVENTION 2021, selain fokus dalam pembuatan software yang digunakan untuk lomba, saya juga mendapatkan ilmu tentang Startup pada sesi sharing session yang dibawakan INSPIX Technologies dan Kuy Kerja.'
    }
  ]

  
  

  return (
    <section id='testimonial' className='pt-20 font-poppins'>
      <div className='container'>
        <img src={dividerUp} className='w-full' alt='' />

        <div className='text-center mb-10'>
          <h1 className='text-primary pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>Testimonial</h1>
          <h3 className='text-white pt-2 md:pt-4 text-md font-medium md:text-lg'>What They Say About Invention</h3>
        </div>
        
        {/* Card Content */}
        <div className=''>
          <Swiper breakpoints={{1400: {slidesPerView: 2.1,}, 968: {slidesPerView: 1.8,}, 768: {slidesPerView: 1.4,}, 300: {slidesPerView: 1,}}} slidesPerView={2.1} navigation={true} swiperbuttonnext modules={[Navigation]} speed={600} loop={true} className="mySwiper">
            {testimoni.map((items) => (
              <SwiperSlide key={items.id}>
              <div className='bg-graying p-8 rounded-md max-w-[90%] mx-auto border border-primary min-h-[85vh]'>
                <img src={items.picture} className='w-1/4 rounded-full border-2 border-primary mx-auto' alt='girl1' />
                <h2 className='text-white text-xl md:text-2xl font-bold text-center pt-5'>{items.nama}</h2>
                <h4 className='text-sm md:text-md font-semibold text-center text-slate-400'>{items.position}</h4>
                <p className='max-w-[400px] mx-auto text-texting pt-5 text-sm leading-relaxed text-justify font-extralight'>{items.caption}</p>
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
