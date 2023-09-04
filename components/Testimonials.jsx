"use client";

import { useEffect, useState } from "react";
import { fetchTestimonials } from "../firebase/utils";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  return (
    <div className="lg:px-24 lg:py-24 md:px-20 py-12 px-8 font flex flex-col xl:flex-row justify-between">
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-lg mb-8 xl:block hidden">
          TESTIMONIALS
        </p>

        <h1 className="text-4xl text-center xl:text-left md:text-6xl xl:max-w-[600px] mb-12 font-bold">
          What People Say About Us.
        </h1>
      </div>

      <div className="xl:max-w-[600px]">
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          {[
            testimonials.map((testimonial) => (
              <SwiperSlide className="py-3 lg:p-8 ">
                <div className="xl:p-8 xl:border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl w-auto relative text-center xl:text-left">
                  <p className="lg:text-lg ">{testimonial.data.testimony}</p>

                  <h3 className="text-xl font-bold mt-4">
                    {testimonial.data.name}
                  </h3>
                  <span className="font-semibold">
                    {testimonial.data.location}
                  </span>
                </div>
              </SwiperSlide>
            )),
          ]}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
