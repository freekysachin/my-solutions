import React from 'react'
import RightCard from '../Hero-I/RightCard'

function HeroSecond() {
  return (
    <div className='w-full flex justify-between gap-2 relative'>

        {/* left Card */}
        <div className="space-y-6 flex-1 text-center flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-700 text-justify pl-20 leading-tight">
                Not Your Average Realtor
            </h1>
            <p className='text-justify pl-20'>
                we go beyond simply showing you listings—we become your dedicated partner
                 in finding a home that truly reflects your lifestyle and ambitions. 
                 Instead of cookie‑cutter service, 
                 we tailor every step of the buying or selling process to your unique needs, 
                 whether it’s negotiating the best deal, sourcing off‑market opportunities, 
                 or staging your property to maximize its value.
            </p>
        </div>

        {/* Right Card */}
        <RightCard className="flex-none w-[500px] h-[400px] relative" />
    </div>
  )
}

export default HeroSecond
