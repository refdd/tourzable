import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import CardTour from "./CardTour";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function TourRow() {
  return (
    <div className="container mx-auto px-4 mb-11">
      <HeaderSections
        titel={"Recommended Hotels"}
        desc={"Interdum et malesuada fames ac ante ipsum"}
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel3, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel2, Hotel3]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel, Hotel3]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel3, Hotel2]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel, Hotel2]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel2, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel3, Hotel2]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel, Hotel3]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel2, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"The Montcalm At Brewery London"}
            description={"Lorem ipsum dolor sit amet consectetur."}
            price={23}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TourRow;
