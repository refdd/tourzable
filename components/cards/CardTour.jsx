import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

import ImageSlider from "../tour/ImageSlider";

function CardTour({ image, location, title, description, price }) {
  return (
    <div className=" tourcard group flex flex-col space-y-3">
      {/* image card */}
      <div className=" w-full h-[250px] relative overflow-hidden rounded">
        {/* <Image src={image} fill className="rounded" alt="tour" /> */}
        <ImageSlider arrayOfImages={image} />
        {/* typs tour will add from backend */}
        <div className="absolute top-3 left-2 rounded bg-[#051036] py-1 px-3  ">
          <p className="text-white font-sans capitalize">Breakfast included</p>
        </div>
        {/* heart icon */}
        <div
          className="group/item absolute top-3 right-2 shadow-md h-[30px] w-[30px]  bg-white flex items-center justify-center 
            rounded-full transition-all hover:bg-[#3554d1]
         "
        >
          <BiHeart className="text-sm text-black transition-all group-hover/item:text-white" />
        </div>
      </div>

      {/* title */}
      <div className="">
        {/* location */}
        <p className="text-[#697488] text-sm font-sans font-normal capitalize mb-1">
          {location}
        </p>
        <p className="hover-underline-animation text-lg text-[#051036] font-medium font-serif capitalize">
          {title}
        </p>
      </div>
      <p className="text-gray-500 text-lg font-sans capitalize font-normal">
        {description}
      </p>
      {/* rating*/}
      <div className=" flex items-center space-x-2">
        <span className="h-[30px] w-[30px] bg-[#3554d1] font-semibold  text-white rounded flex justify-center items-center">
          4.8
        </span>
        <span className="text-[#051036] font-medium font-sans text-sm ">
          Excaptional
        </span>
        <span className="text-[#697488] text-sm font-sans font-medium ">
          3,014 reviews
        </span>
      </div>
      {/* price */}
      <div className=" flex items-center space-x-1 text-lg font-sans font-medium ">
        <span className=" group-hover:text-[#0d6efd] text-[16px] transition-all text-[#051036]">
          Starting form
        </span>
        <span className="text-[#0d6efd]">
          us
          {price}
        </span>
      </div>
    </div>
  );
}

export default CardTour;
