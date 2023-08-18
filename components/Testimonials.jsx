"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = ({ testimonials }) => {

  return (    
       <div className='sm:px-24 lg:py-24 py-12 px-8 font flex flex-col lg:flex-row justify-between'>
       <div className='flex flex-col justify-center'>
          <p className='font-semibold text-lg mb-8 lg:block hidden'>TESTIMONIALS</p>

          <h1 className='text-4xl text-center lg:text-left md:text-6xl sm:max-w-[600px] mb-12 font-bold'>
            What People Say About Us.
          </h1>
      </div>

      <div className="max-w-[600px]">
        <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className=""
          >

            {[testimonials.map((testimony) => (
              <SwiperSlide className='py-3 lg:p-8 '>
                <div className='lg:p-8 lg:border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl w-auto relative text-center lg:text-left'>
                <Image 
                  src={testimony.src}
                  alt={testimony.id}
                  className="absolute -top-[24px] -left-[30px] border-2 rounded-full hidden lg:block"
                />

                <p className='sm:text-lg'>
                  {testimony.testimony}
                </p>

                <h3 className="text-xl font-bold mt-4">{testimony.name}</h3>
                <span className='font-semibold'>{testimony.location}</span>
                </div>
              </SwiperSlide>
            ))]
            }

          </Swiper>
      </div>
    </div>
  )
}

export default Testimonials