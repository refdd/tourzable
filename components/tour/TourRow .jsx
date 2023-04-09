import React, { useState } from "react";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import CardTour from "../cards/CardTour";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const locationTour = [
  { id: 1, title: "Saudi" },
  { id: 2, title: "Dubai" },
  { id: 3, title: "Qatar" },
];
function TourRow() {
  const [activeId, setActiveId] = useState(null);
  const [toursall, settoursall] = useState([]);
  const handleClick = (id) => () => {
    const activeElement = locationTour.find((id) => id === id);
    activeElement && setActiveId(id);
  };
  return (
    <div className="container mx-auto px-4 mb-11 z-40">
      <ul className="flex pa justify-start items-start gap-2 mb-6 flex-wrap md:justify-center">
        {locationTour?.map(({ id, title }) => (
          <li
            onClick={handleClick(id)}
            key={id}
            className={
              activeId == id
                ? "h-12  px-2  border flex items-center justify-center rounded-lg bg-mainColor text-white cursor-pointer"
                : "  h-12 px-2  border flex items-center justify-center rounded-lg bg-MainYeloow text-mainColor cursor-pointer"
            }
          >
            <span className="text-lg  font-sans font-semibold capitalize">
              {title}
            </span>
          </li>
        ))}
      </ul>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1.3,
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
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
            duration={7}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TourRow;
