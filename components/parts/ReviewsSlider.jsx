import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import CardReview from "../cards/CardReview";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function ReviewsSlider() {
  return (
    <div className="mt-4 px-6 overflow-hidden md:w-[50%] md:px-10 ">
      <div className=" md:w-[400px] md:mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewsSlider;
