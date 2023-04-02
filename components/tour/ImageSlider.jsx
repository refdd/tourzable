import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Hotel from "../../public/assets/images/3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";

export default function ImageSlider({ arrayOfImages }) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {arrayOfImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className=" hoverArrows relative w-full h-[250px] group/imagcard overflow-hidden">
              <Image
                src={img}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                loading="lazy"
                className="rounded group-hover/imagcard:scale-105 transition-all"
                alt="tour"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
