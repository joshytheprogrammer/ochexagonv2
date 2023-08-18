"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Clients = ({testimonials}) => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12">

        <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-12 mb-6">Our Clients Say</h1>


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
          className="text-center"
        >

          {[testimonials.map((testimony) => (
            <SwiperSlide className='py-3 lg:p-8'>
              <div className='lg:p-8 lg:border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl w-auto relative'>
            
              <p className='sm:text-2xl font'>
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
  )
}

export default Clients