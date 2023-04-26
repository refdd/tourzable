import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSections from "../parts/HeaderSections";
import FraturedIcon1 from "../../public/assets/images/1.svg";
import FraturedIcon2 from "../../public/assets/images/2.svg";
import FraturedIcon3 from "../../public/assets/images/3.svg";
function WhyChooseUs({ homepage }) {
  return (
    <div
      className={
        homepage
          ? "container mx-auto  px-4  mt-[390px] md:mt-4"
          : "container mx-auto  px-4  mt-4"
      }
    >
      <HeaderSections
        titel={"Why Choose Us"}
        desc={"These popular destinations have a lot to offer"}
      />
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-3  ">
              <div className=" flex max-w-full w-full  justify-center items-center">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[100] h-[90]"
                  src={FraturedIcon1}
                  static
                  alt="features"
                  loading="lazy"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-2  ">
                <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
                  Best Price Guarantee
                </p>
                <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-3  ">
              <div className=" flex max-w-full w-full  justify-center items-center">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[100] h-[90]"
                  src={FraturedIcon2}
                  static
                  alt="features"
                  loading="lazy"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-2  ">
                <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
                  Easy & Quick Booking
                </p>
                <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3  ">
              <div className=" flex max-w-full w-full  justify-center items-center">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[100] h-[90]"
                  src={FraturedIcon3}
                  static
                  alt="features"
                  loading="lazy"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-2  ">
                <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
                  Customer Care 24/7
                </p>
                <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WhyChooseUs;
