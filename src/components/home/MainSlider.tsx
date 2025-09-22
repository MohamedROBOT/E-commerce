"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import slider1 from "@/assets/images/slider-image-1.jpeg";
import slider2 from "@/assets/images/slider-image-2.jpeg";
import slider3 from "@/assets/images/slider-image-3.jpeg";
import Image from "next/image";
const swiperOptions = {
  
  modules:[Pagination, Autoplay],
  pagination: {
          clickable: true,
          
          bulletClass: 'swiper-pagination-bullet !size-4 border-2',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-500 border-white'
        },
        autoplay: {
          
          disableOnInteraction: false,
        },
};

const images = [
  {
    path: slider1.src,
    label: "slider1",
  },
  {
    path: slider2.src,
    label: "slider2",
  },
  {
    path: slider3.src,
    label: "slider3",
  },
];
export default function MainSlider() {
  return (
    <div className="container  mx-auto">
      <Swiper {...swiperOptions}>
        {images.map((image, index) => {
          return <SwiperSlide key={index}  className="bg-purple-500">
            <Image priority  src={image.path} alt={image.label} width={1920} height={355}  className="w-full h-[21.5rem] object-cover"/>
          </SwiperSlide>

        })}
      </Swiper>
    </div>
  );
}
