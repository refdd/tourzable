import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";
import subsribe from "../../public/assets/images/subsribe.png";
function Subscribe() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col md:flex-row">
        {/* image */}
        <div className=" group relative w-full h-[200px] rounded-t-md  md:h-[390px] overflow-hidden md:w-[500px] ">
          <Image src={subsribe} fill loading="lazy" alt="" className="t" />
        </div>
        {/* contnet */}
        <div className="flex flex-col space-y-4 p-8 bg-[#f5f5f5] md:flex-1 md:px-10 md:space-y-14">
          {/* icon */}
          <BsEnvelopePaper className="text-[#051036] text-5xl" />
          <div className="flex flex-col space-y-2 md:space-y-8">
            <p className="text-[24px] text-[#051036] font-semibold font-sans capitalize">
              Your Travel Journey Starts Here
            </p>
            <p className="font-sans text-[#051036] capitalize ">
              Sign up and we'll send the best deals to you
            </p>
            <form className="flex flex-col space-y-3 md:space-y-9">
              <TextField
                id="outlined-multiline-flexible"
                label="your Mail"
                multiline
                maxRows={4}
              />
              <div className=" group flex justify-start items-center transition-all py-3 px-7 hover:md:bg-[#3554d1] bg-[#f8d448] rounded">
                <button className="text-[15px] font-medium  transition-all group-hover:md:text-white font-sans text-[#051036]  ">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
