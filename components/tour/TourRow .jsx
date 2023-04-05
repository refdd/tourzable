import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import CardTour from "../cards/CardTour";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function TourRow() {
  return (
    <div className="container mx-auto px-4 mb-11 z-40">
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
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="jeddah"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel3, Hotel]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel2, Hotel3]}
            location="Al Ula"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel3, Hotel2]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel, Hotel2]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel2, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel3, Hotel2]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel2, Hotel, Hotel3]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel3, Hotel2, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour
            image={[Hotel, Hotel, Hotel]}
            location="Westminster Borough, London"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attraction"
            }
            price={999}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TourRow;
