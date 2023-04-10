import { tr } from "date-fns/locale";
import Link from "next/link";
import React from "react";

function TapsTour() {
  return (
    <div className="fixed top-1 left-0  w-full z-[10000]">
      <div className=" container mx-auto px-4  py-5 border-b shadow-lg  bg-white">
        <div className="flex flex-col gap-3">
          <ul className="flex items-center gap-3 flex-wrap ">
            <li className="  text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#overview"} scroll={false}>
                <span>Overview</span>
              </Link>
            </li>
            <li className=" text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#Itinerary"} scroll={false}>
                <span>Itinerary</span>
              </Link>
            </li>
            <li className=" text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#Additional"} scroll={false}>
                <span>Additional </span>
              </Link>
            </li>
            <li className=" text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#Cancellation"} scroll={false}>
                <span>Cancellation </span>
              </Link>
            </li>
            <li className=" text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#Terms"} scroll={false}>
                <span>Terms </span>
              </Link>
            </li>
            <li className=" text-sm md:text-[15px] font-medium capitalize font-sans text-textPurple cursor-pointer">
              <Link href={"#Reviews"} scroll={false}>
                <span>Reviews</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TapsTour;
