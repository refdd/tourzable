import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsArrowUpRight, BsFillStarFill } from "react-icons/bs";

import ImageSlider from "../tour/ImageSlider";

function CardListTour({ slug, image, location, title, description, price }) {
  return (
    <Link href={`/list-Popular-Saudi-Tours/${slug}`}>
      <div className=" tourcard group flex flex-col space-y-2 border-b pb-3 md:flex-row  md:space-y-0 md:space-x-2">
        {/* image card */}
        <div className=" w-full h-[250px] relative overflow-hidden rounded md:w-[250px]">
          {/* <Image src={image} fill className="rounded" alt="tour" /> */}
          <ImageSlider arrayOfImages={image} />
          {/* typs tour will add from backend */}
          <div className="absolute top-3 left-2 rounded bg-[#051036] py-1 px-3  ">
            <p className="text-white font-sans capitalize">
              Breakfast included
            </p>
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
        {/* crnter */}
        <div className="flex flex-col space-y-2 md:w-[50%] md:space-y-5">
          {/* title */}
          <div className="">
            {/* location */}
            <p className=" text-lg text-[#051036] font-medium font-serif capitalize">
              {title}
            </p>
          </div>
          {/* location and rating */}
          <div className="flex items-center justify-between pr-2">
            {/* location */}
            <div className="flex space-x-3 items-center ">
              <span className="text-lg text-[#051036] font-medium font-serif capitalize underline">
                {location}
              </span>
            </div>
            {/* duration  */}
            <p className="text-[#697488] textt-sm font-sans capitalize ">
              8 nights, 2 adult{" "}
            </p>
          </div>
          <p className="text-gray-500 text-lg font-sans capitalize font-normal">
            {description}
          </p>

          {/* free cancellation */}
          <div className="flex flex-col ">
            <span className="text-[#008009] font-medium text-sm capitalize font-sans">
              Free cancellation
            </span>
            <span className="text-[#008009] font-normal text-sm capitalize font-sans">
              You can cancel later, so lock in this great price today.
            </span>
          </div>
          {/* featured */}
          <ul className="flex gap-3 items-center flex-wrap ">
            <li className="border border-[#dddddd] rounded-full px-5  ">
              <span className="text-sm text-[#051036] font-sans capitalize py-1  ">
                Breakfast
              </span>
            </li>
            <li className="border border-[#dddddd] rounded-full px-5  ">
              <span className="text-sm text-[#051036] font-sans capitalize py-1  ">
                WiFi
              </span>
            </li>
            <li className="border border-[#dddddd] rounded-full px-5  ">
              <span className="text-sm text-[#051036] font-sans capitalize py-1  ">
                Spa
              </span>
            </li>
            <li className="border border-[#dddddd] rounded-full px-5  ">
              <span className="text-sm text-[#051036] font-sans capitalize py-1  ">
                Bar
              </span>
            </li>
          </ul>
        </div>
        {/* right side */}
        <div className="  flex flex-col space-y-2 md:flex-1 ">
          {/* rating*/}
          <div className=" flex items-center space-x-2 md:flex-col md:space-x-0 md:space-y-1">
            <span className="h-[30px] w-[30px] bg-[#3554d1] font-semibold  text-white rounded flex justify-center items-center">
              4.8
            </span>
            <span className="text-[#051036] font-medium font-sans text-sm ">
              Excaptional
            </span>
            <span className="text-[#697488] text-sm font-sans font-medium ">
              3,014 reviews
            </span>
            <div className="flex items-start space-x-1 justify-center text-MainYeloow">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          {/* price */}
          <div className=" flex items-center space-x-1 text-lg font-sans font-medium  md:flex-col ">
            <span className=" group-hover:text-[#0d6efd] text-[16px] transition-all text-[#051036]">
              Starting form
            </span>
            <span className="text-[#0d6efd]">us ${price}</span>
            <p className=" text-[#697488] text-sm capitalize font-sans">
              +US$828 taxes
            </p>
          </div>
          {/* button */}
          <div className="flex items-center justify-center py-3 gap-3 bg-[#3554d1] rounded transition-all hover:md:bg-[#051036]">
            <button className="text-[15px] text-white font-sans font-medium capitalize">
              View Detail
            </button>
            <BsArrowUpRight className="text-white text-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardListTour;
