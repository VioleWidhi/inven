import React from 'react'

export default function Register() {
  return (
    <section className='min-h-screen flex items-center justify-center font-poppins p-6'>
      <div className='bg-bluey rounded-2xl shadow-lg p-5 items-center border border-primary h-[50%]'>
        <div className='px-8 py-2'>
          <h2 className='font-bold text-3xl md:text-4xl text-primary text-center'>Register</h2>
          <h2 className='font-bold text-3xl md:text-4xl text-primary text-center px-8'>Desain Poster</h2>
          <form action='' className='flex flex-col mt-4'>
            <label className='font-semibold text-white mt-2 mb-2'>Nama Tim</label>
            <input type='text' name='nama-tim' placeholder='Masukan nama tim anda' className='p-2 rounded-md border mb-6' />
            <label className='font-semibold text-white mb-2'>No. Telepon Ketua</label>
            <input type='text' name='no-telepon' placeholder='Masukan nomor telepon ketua tim' className='p-2 rounded-md border mb-6' />
            <label className='font-semibold text-white mb-2'>Instansi</label>
            <input type='text' name='instansi' placeholder='Masukan nama instansi tim anda' className='p-2 rounded-md border mb-6' />
            <label className='font-semibold text-white mb-2'>Username</label>
            <input type='text' name='username' placeholder='Masukan username tim anda' className='p-2 rounded-md border mb-6' />
            <label className='font-semibold text-white mb-2'>Password</label>
            <input type='password' name='password' placeholder='Masukan password tim anda' className='p-2 rounded-md border mb-6' />
            <button className='text-center border-2 border-primary text-white hover:bg-primary hover:text-blacky duration-300 py-3 px-4 rounded-lg mt-2 font-bold'>Login</button>
          </form>

          <p className='text-sm mt-4 text-white'>Sudah ada Akun? Login <span><a href='/' className='text-primary hover:opacity-60 duration-300'>Disini</a></span> </p>
        </div>
      </div>
    </section>
  )
}
