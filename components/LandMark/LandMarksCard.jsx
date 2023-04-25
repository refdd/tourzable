import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
function LandMarksCard({ imaga, title, destination }) {
  return (
    <div className="flex flex-col space-y-4 ">
      {/* image */}
      <Link href={"/LandMarks/dumah-al-jandal-city"}>
        <div className=" group relative w-full h-[220px] md:h-[280px] overflow-hidden rounded-lg  shadow-lg shadow-[#5c2d9040] ">
          <Image
            src={imaga}
            fill
            loading="lazy"
            alt=""
            className="rounded group-hover:scale-110 transition-all ease-in-out "
          />
        </div>
      </Link>
      <div className="flex flex-col space-y-1">
        <Link href={"/LandMarks/dumah-al-jandal-city"}>
          <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
            {title}
          </p>
        </Link>
        <div className=" flex items-center space-x-3">
          <ImLocation2 className="text-lg text-mainColor" />
          <span className="text-MainYeloow text-[15px] font-sans capitalize">
            {destination}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandMarksCard;
