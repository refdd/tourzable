import React from "react";
import { BsArrowUpRight, BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

function HeaderSingle() {
  return (
    <div className="container mx-auto px-4 mt-9">
      {/* titel and rating */}
      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-2xl text[#051036] font-sans font-semibold capitalize ">
          Taif City Tour Cable Car Ride3
        </p>
        <div className="flex  space-x-2 text-MainYeloow text-sm">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        {/* rating*/}
        <div className=" flex items-center space-x-2">
          <span className="h-[30px] w-[30px] bg-MainYeloow font-semibold  text-mainColor rounded flex justify-center items-center">
            4.8
          </span>
          <span className="text-[#051036] font-medium font-sans text-sm ">
            Excaptional
          </span>
          <span className="text-[#697488] text-sm font-sans font-medium ">
            3,014 reviews
          </span>
        </div>
      </div>
      {/* location */}
      <div className="flex flex-col gap-3  mt-3 md:flex-row md:justify-between">
        <div className="flex items-center gap-2  flex-wrap ">
          <div className="flex items-start space-x-1 ">
            <ImLocation2 className=" text-[#697488] text-[16px] " />
            <p className="text-[#697488] text-[16px] font-sans capitalize">
              Riyadh
            </p>
          </div>
        </div>
        {/* price */}
        <div className="flex items-center space-x-4 ">
          <p className="text-sm text-[#051036] font-sans uppercase ">
            From <span className="font-medium text-[22px] ">Us$72</span>
          </p>
          {/* <div className="flex justify-start items-center space-x-2 font-medium text-[15px] rounded bg-mainColor text-white h-14 px-6 ">
            <button>Select Room </button>
            <BsArrowUpRight />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderSingle;
