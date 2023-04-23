import React from "react";
import DestinationsBox from "../hleper/DestinationsBox";
import HeaderVideo from "../parts/HeaderVideo";
import MainSearch from "../parts/MainSearch";
import MainNavBar from "./MainNavBar";

function MainHeader() {
  return (
    <div className="relative ">
      <HeaderVideo />
      <MainNavBar />

      {/* header contnet */}
      <div className="absolute top-[167%] md:top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  ">
        <p className="text-center text-xl text-white font-sans font-semibold md:text-5xl">
          Explore the best of Saudi Arabia
        </p>
        <p className=" text-sm text-center text-white font-sans mt-2 md:mt-5 md:text-xl mb-10 md:mb-0">
          Discover amzaing places at exclusive deals
        </p>
        <MainSearch />
      </div>
    </div>
  );
}

export default MainHeader;
