import React from "react";
import MainNavBar from "../mainSections/MainNavBar";
import bg from "../../public/assets/images/tourList.jpg";
function MainHeaderList() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" relative overflow-hidden  md:h-screen w-full bg-no-repeat md:bg-fixed bg-cover bg-top  py-[110px]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000026]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full text-center  ">
        <p className="text-3xl text-white font-sans font-semibold capitalize md:text-5xl">
          SAUDI ARABIA TOURS
        </p>
      </div>
      <MainNavBar />
    </div>
  );
}

export default MainHeaderList;
