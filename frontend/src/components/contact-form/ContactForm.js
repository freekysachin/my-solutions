import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mob_no: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      let path = process.env.REACT_APP_API_URL + '/contact-form';
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Successfully registered!');
        setFormData({
          full_name: '',
          email: '',
          mob_no: '',
          city: '',
        });
      } else {
        alert(` ${result.message || 'Submission failed.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className='flex flex-col max-w-[400px] px-10 gap-8 border py-6 bg-[#3F5574] text-white'>
      <div className='text-center text-4xl font-bold'>
        <h1>Get a Free Consultation</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder='Full Name'
          className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email Address'
          className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'
        />
        <input
          name="mob_no"
          value={formData.mob_no}
          onChange={handleChange}
          placeholder='Mobile Number'
          className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'
        />
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder='Area, City'
          className='border rounded-md p-2 bg-transparent placeholder:font-bold placeholder:text-white focus:outline-none'
        />
      </div>
      <button
        onClick={handleSubmit}
        className='bg-orange-500 block p-2 rounded-md text-lg font-bold hover:bg-orange-600 transition'
      >
        Get Quick Quote
      </button>
    </div>
  );
}

export default ContactForm;
