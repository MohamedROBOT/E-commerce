"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";
import { ICategory } from "@/interfaces/category.interface";
import Image from "next/image";
export default function CategoriesSlider({
  categories,
}: {
  categories: ICategory[];
}) {
  const swiperOptions = {
    modules: [Pagination, ],
    pagination: {
      clickable: true,

      bulletClass: "swiper-pagination-bullet !size-4 border-2",
      bulletActiveClass:
        "swiper-pagination-bullet-active !bg-red-500 border-white",
    },

  

    slidesPerView: 1,
    breakpoints: {
            640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
            992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
            1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
            1200: {
      slidesPerView: 6,
      spaceBetween: 40
    },
    }
// slider have breakpoints too for assignment brooooo
  };
  return (
    <Swiper className="categories-slider mb-17.5" {...swiperOptions}>
      {categories.map((category) => {
        return (
          <SwiperSlide key={category._id} className="cursor-grabbing">
           <div className= "mb-3 bg-gray-200 flex flex-col justify-center items-center text-center">
             <Image
              priority
              src={category.image}
              alt={category.name}
              width={1920}
              height={355}
              
              className="size-[20rem] object-contain  mb-5"
              
            />
           </div>
                       <h2 className="text-center font-bold ">{category.name}</h2>

          </SwiperSlide>
          
        );
      })}
    </Swiper>
  );
}
