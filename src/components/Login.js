import React from 'react'
import robotRight from '../assets/robot-kanan.png'

export default function Login() {
  return (
    <section id='login' className='min-h-screen flex items-center justify-center font-poppins'>
      <div className='bg-bluey flex rounded-2xl shadow-lg max-w-3xl p-5 items-center border border-primary'>
        <div className='sm:w-1/2 px-8 py-4'>
          <h2 className='font-bold text-center text-3xl md:text-4xl text-primary'>Login</h2>
          <form action='' className='flex flex-col mt-4'>
            <label className='font-semibold text-white mt-2 mb-2'>Username</label>
            <input type='text' name='username' placeholder='Username' className='p-2 rounded-md border mb-6' />
            <label className='font-semibold text-texting mb-2'>Password</label>
            <input type='password' name='password' placeholder='Password' className='p-2 rounded-md border mb-6' />
            <button className='text-center border-2 border-primary text-white hover:bg-primary hover:text-blacky py-3 px-4 rounded-lg mt-2 font-bold duration-300'>Login</button>
          </form>
          <p className='text-sm mt-4 text-texting'>Belum ada Akun? Daftar <span><a href='/' className='text-primary hover:opacity-60 duration-300'>Disini</a></span> </p>
        </div>
        <div className='sm:block hidden w-1/2'>
          <img src={robotRight} className='w-4/5' alt='' />
        </div>
      </div>
    </section>
  )
}
