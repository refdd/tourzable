import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import gallery1 from "../../public/assets/images/gallery1.png";
import gallery2 from "../../public/assets/images/gallery2.png";
import gallery3 from "../../public/assets/images/gallery3.png";
import { BiHeart } from "react-icons/bi";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
function GallerySlider({ openGallery, setOpenGallery, allGallery }) {
  return (
    <div
      className={`fixed top-0  left-0  h-screen w-screen bg-[#0000009e] z-[20000] ${
        openGallery ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-16 right-12  z-[30000]  ">
        <div
          onClick={() => {
            setOpenGallery(false);
          }}
          className=" w-11 h-11 bg-white rounded-full  flex justify-center items-center cursor-pointer"
        >
          <CgClose className="text-mainColor text-2xl  " />
        </div>
      </div>
      <div className=" container mx-auto px-44  absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {allGallery?.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-[400px] md:h-[600px]  ">
                <Image
                  loader={() => {
                    return `${image.file}`;
                  }}
                  unoptimized={true}
                  src={image.file}
                  priority
                  fill
                  alt=""
                  className="rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GallerySlider;
