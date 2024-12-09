import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import home1 from "../../../assets/home.png";
import home2 from "../../../assets/home.png";
import home3 from "../../../assets/home.png";
import home4 from "../../../assets/home.png";
import home5 from "../../../assets/home.png";

export default function Sliding() {
  const images = [home1, home2, home3, home4, home5]; 

  return (
    <div className='w-full bg-gradient-to-bl h-screen  from-purple-300 via-gray-200 to-green-200'>
    <div className='mx-auto    pt-28 space-y-10 items-center flex flex-col  w-2/3'>
      <div className='text-5xl font-bold text-center' style={{
            WebkitTextStroke: "1px white", 
          }}>Think Upschooling <br /> Think Sircle</div>
      <div className='font-semibold text-gray-700'>Dreams In Action</div>
      <div className="relative w-full lg:px-20 lg:mx-auto md:px-10 lg:py-8 mb-5 phone:px-5 ">
        <div className="w-full mx-auto">
           <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            breakpoints={{
              10: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper-container"
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="relative w-full md:h-72 lg:h-[22rem] phone:h-56"
              >
                <img
                  loading="lazy"
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover rounded-md w-full phone:h-56 md:h-72 lg:h-[22rem]"
                />
              </SwiperSlide>
            ))}
          </Swiper> 
        </div>
      </div>
    </div>
    </div>
  );
}
