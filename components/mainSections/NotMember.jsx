import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function NotMember() {
  return (
    <div className="container mx-auto px-4 bg-[#ebfcea] py-10">
      <div className="flex flex-col space-y-5">
        <p className="text-[26px] text-[#051036] font-sans capitalize font-semibold">
          Not a Member Yet?
        </p>
        <p className="text-[#051036] text-[16px] font-sans capitalize ">
          Join us! Our members can access savings of up to 50% and earn Trip
          Coins while booking
        </p>
        <div className="flex items-center space-x-4">
          <div className=" group flex items-center space-x-2 w-fit border hover:md:bg-[#3554d1] border-[#3554d1] rounded transition-all bg-transparent h-16 px-10 cursor-pointer  ">
            <button className="text-[#3554d1] font-medium font-sans text-[15px] group-hover:md:text-white">
              Sign In
            </button>
            <BsArrowUpRight className="text-[#3554d1] text-lg  group-hover:md:text-white " />
          </div>
          <div className=" group flex items-center space-x-2 w-fit rounded transition-all hover:md:bg-[#3554d1] bg-[#f8d448] h-16 px-10 cursor-pointer  ">
            <button className="text-[#051036] font-medium font-sans text-[15px] group-hover:md:text-white">
              Register
            </button>
            <BsArrowUpRight className="text-[#051036] text-lg  group-hover:md:text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotMember;
