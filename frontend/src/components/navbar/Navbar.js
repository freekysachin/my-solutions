import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between m-4 px-12 items-center py-2'>
      <img src='/assets/logo.svg' className='h-8' />
      <div className='flex gap-12 text-center items-center'>
        <p className='text-center font-bold text-blue-700'>HOME</p>
        <p className='text-center font-bold'>PROJECTS</p>
        <p className='text-center font-bold'>TESTIMONIAL</p>
        <button className='border rounded-md px-6 py-1 bg-orange-500 text-white'>CONTACT</button>
      </div>
    </div>
  )
}

export default Navbar
