import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSections from "../parts/HeaderSections";
import trip1 from "../../public/assets/images/trip1.png";
import trip2 from "../../public/assets/images/trip2.png";
import trip3 from "../../public/assets/images/trip3.png";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

function ReadAlso() {
  return (
    <div className="container mx-auto px-4">
      <HeaderSections titel={"read also"} />
      <div className="">
        <Swiper
          modules={[Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              {/* image */}
              <div className=" group relative w-full h-[220px] md:h-[320px] overflow-hidden rounded-lg  shadow-lg shadow-[#5c2d9040] ">
                <Image
                  src={trip1}
                  fill
                  loading="lazy"
                  alt=""
                  className="rounded group-hover:scale-110 transition-all ease-in-out "
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                  10 European ski destinations you should visit this winter
                </p>
                <span className="text-MainYeloow text-[15px] font-sans capitalize">
                  April 06, 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              {/* image */}
              <div className=" group relative w-full h-[220px] md:h-[320px]  overflow-hidden rounded shadow-lg shadow-[#5c2d9040]  ">
                <Image
                  src={trip2}
                  fill
                  loading="lazy"
                  alt=""
                  className="rounded group-hover:scale-110 transition-all ease-in-out"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                  10 European ski destinations you should visit this winter
                </p>
                <span className="text-MainYeloow text-[15px] font-sans capitalize">
                  April 06, 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              {/* image */}
              <div className=" group relative w-full h-[220px] md:h-[320px]  overflow-hidden rounded shadow-lg shadow-[#5c2d9040]  ">
                <Image
                  src={trip3}
                  fill
                  loading="lazy"
                  alt=""
                  className="rounded group-hover:scale-110 transition-all ease-in-out"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                  10 European ski destinations you should visit this winter
                </p>
                <span className="text-MainYeloow text-[15px] font-sans capitalize">
                  April 06, 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              {/* image */}
              <div className=" group relative w-full h-[220px] md:h-[320px]  overflow-hidden rounded shadow-lg shadow-[#5c2d9040]  ">
                <Image
                  src={trip3}
                  fill
                  loading="lazy"
                  alt=""
                  className="rounded group-hover:scale-110 transition-all ease-in-out"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                  10 European ski destinations you should visit this winter
                </p>
                <span className="text-MainYeloow text-[15px] font-sans capitalize">
                  April 06, 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              {/* image */}
              <div className=" group relative w-full h-[220px] md:h-[320px]  overflow-hidden rounded shadow-lg shadow-[#5c2d9040]  ">
                <Image
                  src={trip2}
                  fill
                  loading="lazy"
                  alt=""
                  className="rounded group-hover:scale-110 transition-all ease-in-out"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                  10 European ski destinations you should visit this winter
                </p>
                <span className="text-MainYeloow text-[15px] font-sans capitalize">
                  April 06, 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ReadAlso;
