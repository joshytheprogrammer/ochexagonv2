import React from 'react'

const Testimonials = () => {
  return (
    <div className='sm:px-24 lg:py-24 py-12 px-8 font flex flex-col xl:flex-row justify-between'>
      <div className='flex flex-col justify-center'>
        <p className='font-semibold text-lg mb-8 lg:block hidden'>TESTIMONIALS</p>

        <h1 className='text-4xl md:text-6xl sm:max-w-[600px] mb-4 font-bold'>What People Say About Us.</h1>
      </div>

      <div className='lg:py-12 lg:px-[120px]'>
        <div className='lg:p-8 lg:border-2 drop-shadow-2xl rounded-2xl w-[500px]'>
            <p className='sm:text-lg'>
              When it comes to importation, marketing and processing industrial chemicals, equipment and laboratory items. There is no better name than O. C HEXAGON NIGERIA LIMITED.
            </p>
            <span className='font-black block my-2'>Ugonnaya</span>
            <span className='font-semibold block'>Lagos, Nigeria</span>
        </div>
      </div>

    </div>
  )
}

export default Testimonials