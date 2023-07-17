import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import LandMarksContainer from "../LandMark/LandMarksContainer";
import MapSaudiArabia from "../LandMark/MapSaudiArabia";
import { useTranslation } from "react-i18next";
function LandMarkSection({ regions }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-4 md:px-10">
      <div className=" grid grid-cols-1 gap-5 ">
        {/* <MapSaudiArabia /> */}
        <LandMarksContainer allregions={regions} />
      </div>
      <Link href={"/LandMarks"}>
        <div className=" group flex items-center mx-auto  gap-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor h-16 px-5 md:px-10 cursor-pointer mb-4  ">
          <button className=" font-medium font-sans text-[15px] text-white md:font-semibold md:text-lg">
            {t("common:home.See_More")}
          </button>
          <BsArrowUpRight className=" text-lg  text-white " />
        </div>
      </Link>
    </div>
  );
}

export default LandMarkSection;
