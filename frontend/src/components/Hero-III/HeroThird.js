import React from 'react'

function HeroThird() {
  return (
    <div className='flex justify-center px-12'>
      <div className='flex flex-col items-center text-center gap-6'>
        <div className='text-center'><h1 className='text-blue-500 font-bold text-3xl'>Why Choose Us?</h1></div>
        <div className='flex justify-between gap-32 '>
            <div className='flex flex-col items-center text-center gap-2'>
                <img src='/assets/HeroThird/home.svg' className='w-[100px]'/>
                <h1 className='text-center text-blue-500 font-bold text-2xl'>Potential ROI</h1>
                <p className=''>Whether you're looking to buy a new property or renovate your current home for sale,
            we’ll work to ensure greater total returns for you.</p>
            </div>
            <div className='flex flex-col items-center text-center gap-2'>
                <img src='/assets/HeroThird/paintbrush-2.svg' className='w-[100px]'/>
                <h1 className='text-center text-blue-500 font-bold text-2xl'>Design</h1>
                <p>Our designers and interior design experts help guide through design options and 
            cost modeling to maximize the home experience.</p>
            </div>
            <div className='flex flex-col items-center text-center gap-2'>
                <img src='/assets/HeroThird/circle-dollar-sign.svg' className='w-[100px]'/>
                <h1 className='text-center text-blue-500 font-bold text-2xl'>Marketing</h1>
                <p>Staying competitive, perfect and responsive — sophisticated digital marketing plans
            accompany every listing to meet today's buyers.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroThird
