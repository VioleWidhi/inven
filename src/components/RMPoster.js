import React from 'react'
import logo from '../assets/sectionlogo.png'
import dividerUp from '../assets/divider-up.png'
import dividerDown from '../assets/divider-down.png'

export default function RMPoster() {
  const ketentuan = [
    {
      id: 1,
      no: '1',
      caption: 'Peserta merupakan mahasiswa atau pelajar aktif tingkat SMA/SMK/Sederajat di seluruh provinsi yang ada di Indonesia dan telah mengikuti mekanisme pendaftaran pada website resmi INVENTION Udayana yaitu invention-udayana.com.'
    },
    {
      id: 2,
      no: '2',
      caption: 'Peserta harus melunasi biaya pendaftaran sesuai dengan prosedur yang ditentukan pada bagian "Mekanisme Pendaftaran".'
    },
    {
      id: 3,
      no: '3',
      caption: 'Lomba bersifat perorangan (individu).'
    },
    {
      id: 4,
      no: '4',
      caption: 'Satu orang peserta hanya diizinkan untuk mendaftarkan satu buah karya.'
    },
    {
      id: 5,
      no: '5',
      caption: 'Peserta wajib mengikuti prosedur dan peraturan yang telah ditentukan oleh panitia INVENTION 2022.'
    }
  ]

  const timelines = [
    {
      id: 1,
      tanggal: '31 Juli - 14 Agustus 2022',
      judul: 'Pendaftaran dan Pembayaran Gelombang I',
    },
    {
      id: 2,
      tanggal: '15 Agustus - 28 Agustus 2022',
      judul: 'Pendaftaran dan Pembayaran Gelombang II',
    },
    {
      id: 3,
      tanggal: '30 Agustus 2022',
      judul: 'Technical Meeting',
    },
    {
      id: 4,
      tanggal: '31 Agustus - 14 September 2022',
      judul: 'Pengumpulan Karya Penyisihan',
    },
    {
      id: 5,
      tanggal: '14 September - 28 September 2022',
      judul: 'Penyisihan Lomba',
    },
    {
      id: 6,
      tanggal: '29 September - 5 Oktober 2022',
      judul: 'Konfirmasi Finalis',
    },
    {
      id: 7,
      tanggal: '5 Oktober - 10 Oktober 2022',
      judul: 'Pengumpulan Berkas Final',
    },
    {
      id: 8,
      tanggal: '11 Oktober - 18 Oktober 2022',
      judul: 'Voting Karya Terfavorit',
    },
    {
      id: 9,
      tanggal: '29 Oktober 2022',
      judul: 'Grand Final',
    },
    {
      id: 10,
      tanggal: '30 Oktober 2022',
      judul: 'Pembagian e-certificate',
    },
    
  ]


  return (
    <section className='font-poppins'>
      {/* About Contest */}
      <div className='container pt-10'>
        <h1 className='text-white text-center pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>About <span className='text-primary'>Design Poster</span> </h1>
        <div className='flex flex-wrap mt-12'>
            {/* Logo */}
            <div className='w-full self-center md:w-2/5' data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src={logo} className='mx-auto md:mx-0 md:ml-20 w-2/5 md:w-3/5' alt='logo' />
              </div>
            </div>

            {/* p */}
            <div className='w-full self-center md:w-3/5 mt-5 max-w-xl' data-aos="fade-left" data-aos-duration="1000">
              <p className='text-sm text-slate-300 leading-loose text-justify md:mr-10 md:text-lg'>Poster Design merupakan salah satu kompetisi tingkat nasional dalam ajang INVENTION 2022 yang diselenggarakan oleh Program Studi Informatika, Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Udayana. Kompetisi ini ditujukan bagi pelajar aktif tingkat SMA/SMK/Sederajat dan mahasiswa aktif perguruan tinggi di seluruh Indonesia dalam membuat desain poster yang menarik dengan mengeksplorasi ide-ide kreatif dan inovatif dalam menyelesaikan permasalahan-permasalahan yang ada di lingkungan sekitar mereka. Perlombaan Poster Design INVENTION 2022 mengusung tema “Innovation for Education”. </p>
            </div>
        </div>
      </div>
      
      {/* Ketentuan Peserta */}
      <div className='container pt-20'>
        <img src={dividerUp} className='w-full' alt='' />
        <h1 className='text-white text-center pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>Ketentuan Peserta</h1>
        <div className='ml-8 mr-8 mt-10 space-y-6'>
          {ketentuan.map((items) => (
            <div key={items.id} className='relative'>
            <div className='absolute'>
              <p className='text-center font-bold text-2xl text-primary'>{items.no + ''}</p>
            </div>
            <div className='ml-12'>
              <p className='text-slate-300 text-lg'>{items.caption}</p>
            </div>
          </div>
          ))}
        </div>
      </div>



      {/* Timeline Contest */}
      <div className='container pt-20'>
        <img src={dividerDown} className='w-full' alt='' />
        <h1 className='text-primary text-center pt-10 md:pt-20 text-3xl font-bold md:text-5xl'>Timeline</h1>

        <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-20'>
          {timelines.map((items) => (
            (items.id % 2 === 1 ?
              <div className='flex flex-row-reverse md:contents'>
                <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto md:ml-auto md:mr-0 shadow-md md:text-right'>
                  <h3 className='font-semibold text-lg mb-1 text-primary'>{items.tanggal}</h3>
                  <h5 className='leading-tight text-texting'>{items.judul}</h5>
                </div>
                <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                  <div className='h-full w-6 flex items-center justify-center'>
                    <div className='h-full w-1 bg-primary pointer-events-none'></div>
                  </div>
                  <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-texting shadow'></div>
                </div>
              </div> :
              <div className='flex md:contents'> 
                <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                  <div className='h-full w-6 flex items-center justify-center'>
                    <div className='h-full w-1 bg-primary pointer-events-none'></div>
                  </div>
                  <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-texting shadow'></div>
                </div>
                <div className='col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md md:text-left'>
                  <h3 className='font-semibold text-lg mb-1 text-primary'>{items.tanggal}</h3>
                  <h5 className='leading-tight text-texting'>{items.judul}</h5>
                </div>
              </div>
            
            )
          ))}
        </div>


        {/* <div className='mx-auto w-full grid grid-cols-9 mt-10'>
          <div className='col-span-4 w-full h-full'>
            <div className='w-full h-full rounded-md p-2 md:pl-4 text-right'>
              <h5 className='text-white text-lg font-medium py-2'></h5>
              <h3 className='text-slate-300 text-xl'>Pendaftaran Gelombang 1</h3>
            </div>
          </div>
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-indigo-300'></div>
            <div className='absolute h-6 w-6 rounded-full bg-indigo-400 z-10'></div>
          </div>
          <div className='col-span-4 w-full h-full'></div>
          
          <div className='col-span-4 w-full h-full'></div>
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-indigo-300'></div>
            <div className='absolute h-6 w-6 rounded-full bg-indigo-400 z-10'></div>
          </div>
          
          <div className='col-span-4 w-full h-full'>
            <div className='w-full h-full rounded-md p-2 md:pl-4'>
              <h5 className='text-white text-lg font-medium py-2'>Judul</h5>
              <h3 className='text-slate-300 text-xl'>Pendaftaran Gelombang 1</h3>
            </div>
          </div>
        
        </div> */}
          
      </div>
        
      

    </section>
  
    
  )
}
