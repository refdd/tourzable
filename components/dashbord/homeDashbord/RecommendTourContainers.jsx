import React from "react";
import CardOffer from "../../cards/CardOffer";
import Hotel from "../../../public/assets/images/QaisariahSouq.jpg";
import Hotel2 from "../../../public/assets/images/QaisariahSouq.jpg";
import Hotel3 from "../../../public/assets/images/QaisariahSouq.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardTour from "@/components/cards/CardTour";
function RecommendTourContainers({ packages }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {packages?.map((tour) => (
          <SwiperSlide key={tour?.id}>
            <CardTour
              sigleImage={tour?.image}
              image={tour?.images}
              location={tour?.city?.desc}
              title={tour.title}
              description={tour.short_desc.substring(0, 150)}
              price={tour.best_price}
              duration={tour.duration}
              ratingNumber={tour.package_rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecommendTourContainers;
