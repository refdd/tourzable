import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import HeaderSections from "../parts/HeaderSections";
import CardTour from "../cards/CardTour";

function RelatedTours({ blog }) {
  return (
    <>
      <div
        className={
          blog ? "container mx-auto px-4 md:hidden" : "container mx-auto px-4"
        }
      >
        <HeaderSections titel={"Related Tours"} />
        <Swiper
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
        </Swiper>
      </div>
      {/* in deskTop in blog single */}
      <div
        className={
          blog
            ? "container mx-auto px-4 block "
            : "container mx-auto px-4 hidden"
        }
      >
        <HeaderSections titel={"Related Tours"} />

        <div className="grid grid-cols-1 gap-4">
          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="jeddah"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
            duration={7}
            blog
          />

          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="jeddah"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
            duration={7}
            blog
          />

          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="jeddah"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
            duration={7}
            blog
          />

          <CardTour
            image={[Hotel, Hotel2, Hotel3]}
            location="jeddah"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={999}
            duration={7}
            blog
          />
        </div>
      </div>
    </>
  );
}

export default RelatedTours;
