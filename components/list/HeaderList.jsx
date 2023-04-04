import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsUpDown } from "react-icons/tb";
import FilterDesktop from "./FilterDesktop";
function HeaderList() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className=" container mx-auto px-4  pt-3 bg-white  ">
      <div className="flex flex-col space-y-3 border-b pb-7 md:flex-row md:items-center md:justify-between md:px-6 ">
        <p className="font-medium text-lg font-sans capitalize text-[#051036]">
          3,269 properties <span className="font-normal"> in Europe</span>{" "}
        </p>
        <div className="flex items-center space-x-7">
          {/* sort */}
          <div className=" group flex  h-10 px-5 rounded-full bg-[#3554d10d]  space-x-2 items-center cursor-pointer transition-all hover:md:bg-[#3554d1] ">
            <TbArrowsUpDown className="text-lg text-[#3554d1] group-hover:text-white" />
            <button className="font-medium text-[15px] font-sans capitalize text-[#3554d1]  group-hover:text-white">
              Sort
            </button>
          </div>
          <div
            onClick={() => {
              setOpenFilter(true);
            }}
            className="   flex  md:hidden h-10 px-5 rounded-full bg-[#3554d10d]  space-x-2 items-center cursor-pointer "
          >
            <TbArrowsUpDown className="text-lg text-[#3554d1]" />
            <button className="font-medium text-[15px] font-sans capitalize text-[#3554d1]">
              Filter
            </button>
          </div>
        </div>
      </div>
      {openFilter ? (
        <div
          onClick={() => {
            setOpenFilter(false);
          }}
          className=" md:hidden block  cursor-pointer fixed top-0 left-0 bg-white py-40 w-full z-50 overflow-y-scroll h-screen overflow-x-hidden"
        >
          <div className=" px-4 -mt-10 text-xl shadow-lg h-[50px] w-[50px] flex justify-center items-center rounded-full mx-4">
            <AiOutlineClose />
          </div>
          <FilterDesktop />
        </div>
      ) : undefined}
    </div>
  );
}

export default HeaderList;
