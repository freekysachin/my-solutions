import React from 'react'

function ContactForm() {
  return (
    <div>
      <div></div>
      <div>
        <input placeholder='Full Name' />
        <input placeholder='Enter Email Address'/>
        <input placeholder='Mobile Number'/>
        <input placeholder='Area, City'/>
      </div>
      <button className='bg-orange-500'>Get Quick Quote</button>
    </div>
  )
}

export default ContactForm
