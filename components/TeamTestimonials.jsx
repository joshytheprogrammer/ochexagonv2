"use client";

import { useEffect, useState } from "react";
import { fetchTeamTestimonials } from "../firebase/utils";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TeamTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTeamTestimonials();
        setTestimonials(data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  return (
    <div className="lg:px-20 lg:py-20 md:px-16 px-8 pt-12" data-aos="zoom-in">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center lg:mb-12 md:mb-12 mb-6">
        Our Team Say
      </h1>

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
        {[
          testimonials.map((testimony) => (
            <SwiperSlide className="py-3 lg:px-8 lg:pt-6">
              <div className="lg:pt-6 lg:pb-4 lg:px-5 mb-8 lg:mb-0 drop-shadow-2xl rounded-2xl w-auto relative">
                <p className="sm:text-2xl font">{testimony.data.testimony}</p>

                <h3 className="text-xl font-bold mt-4">
                  {testimony.data.name}
                </h3>
                <span className="font-semibold">{testimony.data.postHeld}</span>
              </div>
            </SwiperSlide>
          )),
        ]}
      </Swiper>
    </div>
  );
};

export default TeamTestimonials;
