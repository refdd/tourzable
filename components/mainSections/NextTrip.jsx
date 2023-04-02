import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import trip1 from "../../public/assets/images/trip1.png";
import trip2 from "../../public/assets/images/trip2.png";
import trip3 from "../../public/assets/images/trip3.png";
function NextTrip() {
  return (
    <div className="container mx-auto px-4">
      <HeaderSections
        titel={"Get inspiration for your next trip"}
        desc={"Interdum et malesuada fames"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-4">
          {/* image */}
          <div className=" group relative w-full h-[320px] overflow-hidden rounded ">
            <Image
              src={trip1}
              fill
              loading="lazy"
              alt=""
              className="rounded group-hover:scale-110 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
              10 European ski destinations you should visit this winter
            </p>
            <span className="text-[#697488] text-[15px] font-sans capitalize">
              April 06, 2022
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          {/* image */}
          <div className=" group relative w-full h-[320px] overflow-hidden rounded ">
            <Image
              src={trip2}
              fill
              loading="lazy"
              alt=""
              className="rounded group-hover:scale-110 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
              10 European ski destinations you should visit this winter
            </p>
            <span className="text-[#697488] text-[15px] font-sans capitalize">
              April 06, 2022
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          {/* image */}
          <div className=" group relative w-full h-[320px] overflow-hidden rounded ">
            <Image
              src={trip3}
              fill
              loading="lazy"
              alt=""
              className="rounded group-hover:scale-110 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
              10 European ski destinations you should visit this winter
            </p>
            <span className="text-[#697488] text-[15px] font-sans capitalize">
              April 06, 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextTrip;
