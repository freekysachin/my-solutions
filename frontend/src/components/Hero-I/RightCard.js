import React from 'react'

function RightCard() {
  return (
    <section className='relative w-[98vh] h-[70vh] overflow-hidden'>

        <div
            className='absolute w-[50px] aspect-square
                   left-[5%] top-[8%] 
            '>
            <img 
                src='/assets/HeroSecond/EllipseBlueHard.svg'
                alt="Person"
            className="
                w-full h-full
                object-cover
                rounded-full
                "
            />

        </div>
        <div
            className='absolute w-[20px] aspect-square
                   left-[10%] top-[75%] 
            '>
            <img 
                src='/assets/HeroSecond/EllipseOrangeHard.svg'
                alt="Person"
            className="
                w-full h-full
                object-cover
                rounded-full
                "
            />

        </div>
        <div 
            className='absolute w-[330px] aspect-square
                    top-[17%] left-[11%]
            '> 
            <img 
                src='/assets/HeroSecond/Ellipse 11.svg'
                alt="Person"
            className="
                w-full h-full
                object-cover
                rounded-full
                "
            />
        </div>
        <div 
            className='absolute w-[240px] aspect-square
                    left-[55%] top-[5%]
            '>
            <img 
                src='/assets/HeroSecond/Ellipse 12.svg'
                alt="Person"
            className="
                w-full h-full
                object-cover
                rounded-full
                "
            />
        </div>
        <div 
            className='absolute w-[220px] aspect-square
                   left-[52%] top-[55%] 
            '>
            <img 
                src='/assets/HeroSecond/Ellipse 13.svg'
                alt="Person"
            className="
                w-full h-full
                object-cover
                rounded-full
                "
            />
        </div>
        
    </section>
  )
}

export default RightCard
