import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

import ImageSlider from "../tour/ImageSlider";

function CardTour({
  image,
  location,
  title,
  description,
  price,
  duration,
  activitiey,
  blog,
  ratingNumber,
  sigleImage,
  homepage,
}) {
  return (
    <div className=" relative tourcard group flex flex-col space-y-3 border p-2 rounded-md shadow-lg shadow-[#9e6eae5e] ">
      {/* image card */}
      <div className=" overflow-hidden rounded">
        {/* <Image src={image} fill className="rounded" alt="tour" /> */}
        {image.length == 0 ? (
          <div className=" hoverArrows relative w-full h-[180px] group/imagcard overflow-hidden">
            <Image
              loader={() => {
                return `${sigleImage}`;
              }}
              unoptimized={true}
              src={sigleImage}
              fill
              sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
              className="rounded group-hover/imagcard:scale-105 transition-all"
              alt="tour"
            />
          </div>
        ) : (
          <ImageSlider arrayOfImages={image} homepage />
        )}

        {/* heart icon */}
        <div
          className="group/item absolute top-3 right-2 shadow-md h-[30px] w-[30px]  bg-white flex items-center justify-center 
            rounded-full transition-all hover:bg-[#3554d1] z-10
         "
        >
          <BiHeart className="text-sm text-black transition-all group-hover/item:text-white" />
        </div>
      </div>
      {/*duration */}
      {!blog && (
        <div className="absolute top-40 right-5 rounded bg-MainYeloow py-1 px-3 z-10  ">
          <p className="text-mainColor font-sans capitalize">{duration}</p>
        </div>
      )}
      {/* title */}
      <div className="">
        {/* location */}
        <p className="text-[#697488] text-sm font-sans font-normal capitalize mb-1">
          {location}
        </p>
        <p className="hover-underline-animation text-lg text-[#051036] font-medium font-serif capitalize md:h-[54px]">
          {title}
        </p>
      </div>
      <p className="text-gray-500 text-sm md:text-lg font-sans capitalize font-normal">
        {description}
      </p>
      {/* rating*/}
      <div className=" flex items-center space-x-2">
        <span className="h-[30px] w-[30px] bg-MainYeloow font-semibold  text-mainColor rounded flex justify-center items-center">
          {ratingNumber}
        </span>
        <span className="text-[#051036] font-medium font-sans text-sm ">
          Excaptional
        </span>
        <span className="text-[#697488] text-sm font-sans font-medium ">
        {   price - 1013 } sreviews
        </span>
      </div>
      {/* price */}
      <div className=" flex items-center space-x-1 text-lg font-sans font-medium ">
        <span className=" group-hover:text-mainColor text-[16px] transition-all text-[#051036]">
          Starting form
        </span>
        <span className="text-mainColor">${price}</span>
      </div>
    </div>
  );
}

export default CardTour;
