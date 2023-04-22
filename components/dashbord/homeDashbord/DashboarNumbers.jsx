import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

function DashboarNumbers() {
  const { sideBar } = useStateContext();

  return (
    <div
      className={`container mx-auto px-4 ${sideBar ? "md:px-1 " : "md:px-10"}`}
    >
      <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
        <div className="flex items-center justify-between py-4 px-5 bg-white rounded-md shadow-lg">
          {/* content */}
          <div className="flex flex-col space-y-3">
            <span className="text-[16px] font-medium font-sans capitalize text-[#051036] ">
              My Bookings
            </span>
            <span className="font-semibold font-sans text-[26px] text-mainColor ">
              $12,800
            </span>
            <span className="text-[#697488] text-sm font-sans capitalize">
              Total Bookings
            </span>
          </div>
          {/* icon */}
          <div className=" flex justify-center items-center text-6xl text-mainColor">
            <GiSandsOfTime />
          </div>
        </div>
        {/* card */}
        <div className="flex items-center justify-between py-4 px-5 bg-white rounded-md shadow-lg">
          {/* content */}
          <div className="flex flex-col space-y-3">
            <span className="text-[16px] font-medium font-sans capitalize text-[#051036] ">
              Custom Bookings
            </span>
            <span className="font-semibold font-sans text-[26px] text-mainColor ">
              $12,800
            </span>
            <span className="text-[#697488] text-sm font-sans capitalize">
              Total Custom
            </span>
          </div>
          {/* icon */}
          <div className=" flex justify-center items-center text-6xl text-mainColor">
            <FaHandHoldingUsd />
          </div>
        </div>
        <div className="flex items-center justify-between py-4 px-5 bg-white rounded-md shadow-lg">
          {/* content */}
          <div className="flex flex-col space-y-3">
            <span className="text-[16px] font-medium font-sans capitalize text-[#051036] ">
              Favorites{" "}
            </span>
            <span className="font-semibold font-sans text-[26px] text-mainColor ">
              $12,800
            </span>
            <span className="text-[#697488] text-sm font-sans capitalize">
              Total Favorites
            </span>
          </div>
          {/* icon */}
          <div className=" flex justify-center items-center text-6xl text-mainColor">
            <MdFavorite />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboarNumbers;
