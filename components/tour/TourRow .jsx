import React, { useState } from "react";

import CardTour from "../cards/CardTour";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const locationTour = [
  { id: 1, title: "Saudi" },
  { id: 2, title: "Dubai" },
  { id: 3, title: "Qatar" },
];
function TourRow({ tours, destinations }) {
  const [activeId, setActiveId] = useState(null);
  const { t, i18n } = useTranslation();

  const { direction } = useStateContext();
  const handleClick = (id) => () => {
    const activeElement = locationTour.find((id) => id === id);
    activeElement && setActiveId(id);
  };
  return (
    <div className="container mx-auto px-4 mb-11 z-40">
      <ul className="flex pa justify-start items-start gap-2 mb-6 flex-wrap md:justify-center">
        {destinations?.map(({ id, title }) => (
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
        {tours?.map((tour) => (
          <SwiperSlide key={tour?.id}>
            <CardTour
              sigleImage={tour?.image}
              image={tour?.images}
              location={tour?.city?.desc}
              title={tour.title}
              description={tour.short_desc.substring(0, 90)}
              price={tour.best_price}
              duration={tour.duration}
              ratingNumber={tour.package_rating}
              typePackage={tour.type.slug}
              slug={tour.slug}
              tourType={tour.type.title}
              tourId={tour.id}
              is_requested={tour?.is_requested}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={"packages"}>
        <div className="  group flex items-center mx-auto  space-x-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor h-16 px-5  mt-10 md:px-10 cursor-pointer  ">
          <button className=" font-medium font-sans text-[15px] text-white md:font-semibold md:text-lg">
            {t("common:home.See_More")}
          </button>
          <BsArrowUpRight className=" text-lg  text-white " />
        </div>
      </Link>
    </div>
  );
}

export default TourRow;
