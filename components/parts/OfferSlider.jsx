import React from "react";
import CardOffer from "../cards/CardOffer";
import HeaderSections from "./HeaderSections";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
function OfferSlider({ offers }) {
  return (
    <div>
      <HeaderSections
        titel={"Last Minute Travel Deals"}
        desc="BOOK NOW AND SAVE"
      />
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
        {offers?.map((offer) => (
          <SwiperSlide key={offer.id}>
            <CardOffer
              image={offer.images}
              location={offer.city.desc}
              title={offer.title}
              description={offer.short_desc.substring(0, 90)}
              price={offer.best_price}
              sigleImage={offer.image}
              discount={offer.discount}
              ratingNumber={offer.package_rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OfferSlider;
