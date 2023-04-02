import React from "react";
import HeaderVideo from "../parts/HeaderVideo";
import MainSearch from "../parts/MainSearch";
import NavBar from "./NavBar";

function MainHeader() {
  return (
    <div className="relative overflow-hidden">
      <HeaderVideo />
      <NavBar />
      {/* header contnet */}
      <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  ">
        <p className="text-center text-3xl text-white font-sans font-semibold md:text-5xl">
          Explore the best of Saudi Arabia
        </p>
        <p className=" text-lg text-center text-white font-sans mt-2 md:mt-5 md:text-xl">
          Discover amzaing places at exclusive deals
        </p>
        <MainSearch />
      </div>
    </div>
  );
}

export default MainHeader;
