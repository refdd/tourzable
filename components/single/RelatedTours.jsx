import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Hotel from "../../public/assets/images/QaisariahSouq.jpg";
import Hotel2 from "../../public/assets/images/gallery2.png";
import Hotel3 from "../../public/assets/images/Tarot Island.jpg";
import HeaderSections from "../parts/HeaderSections";
import CardTour from "../cards/CardTour";

function RelatedTours({ blog, packages }) {
  return (
    <>
      <div
        className={
          blog
            ? "container mx-auto px-4 md:hidden block"
            : "container mx-auto px-4 "
        }
      >
        <HeaderSections titel={"Related Tours"} />
        <Swiper
          dir="ltr"
          modules={[Pagination]}
          className="mySwiper"
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
        >
          {packages?.map((item) => (
            <SwiperSlide key={item.id}>
              <CardTour
                sigleImage={item?.image}
                image={item?.images}
                location={item?.city?.desc}
                title={item.title}
                description={item.short_desc.substring(0, 90)}
                price={item.best_price}
                duration={item.duration}
                ratingNumber={item.package_rating}
                typePackage={item.type.slug}
                slug={item.slug}
                tourType={item.type.title}
                tourId={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* in deskTop in blog single */}
      <div
        className={
          blog
            ? "container mx-auto px-4 hidden md:block "
            : "container mx-auto px-4 block"
        }
      >
        <HeaderSections titel={"Related Tours"} />

        <div className="grid grid-cols-1 gap-4">
          {packages?.map((item) => (
            <CardTour
              key={item.id}
              sigleImage={item?.image}
              image={item?.images}
              location={item?.city?.desc}
              title={item.title}
              description={item.short_desc.substring(0, 90)}
              price={item.best_price}
              duration={item.duration}
              ratingNumber={item.package_rating}
              typePackage={item.type.slug}
              slug={item.slug}
              tourType={item.type.title}
              tourId={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RelatedTours;
