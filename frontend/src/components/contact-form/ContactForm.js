import React from 'react'

function ContactForm() {
  return (
    <div className='flex flex-col max-w-[400px] px-10 gap-8 border py-6 bg-[#3F5574] text-white'>
      <div className='text-center text-4xl font-bold '>
        <h1>Get a Free Consultation</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <input placeholder='Full Name'
            className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none' />
        <input placeholder='Enter Email Address' 
            className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'/>
        <input placeholder='Mobile Number' 
            className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'/>
        <input placeholder='Area, City' 
            className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'/>
      </div>
      <button className='bg-orange-500 block p-2 rounded-md text-lg font-bold'>Get Quick Quote</button>
    </div>
  )
}

export default ContactForm
