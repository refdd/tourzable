import { Checkbox, FormControlLabel } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function CardTourGuide({
  guideImage,
  qualification,
  guideName,
  index,
  onSelect,
  slugGuide,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(index, !isSelected);
  };

  return (
    <div className="flex flex-col  shadow-md">
      {/* image */}
      <Link href={`tour_guides/${slugGuide}`}>
        <div className=" relative w-full h-[280px] rounded-md overflow-hidden">
          <Image
            loader={() => {
              return `${guideImage}`;
            }}
            unoptimized={true}
            src={guideImage}
            alt="Tour Guide"
            fill
            className="rounded-md"
            loading="lazy"
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          />
          <div className="absolute top-3 right-3">
            <div className="bg-mainColor py-2 px-4 rounded-md">
              <span className="text-white font-sans text-sm font-medium">
                {qualification}
              </span>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div>
        </div>
      </Link>
      {/* title */}
      <div className=" flex gap-3 px-4 py-2 justify-between rounded-b-md">
        <Link href={`tour_guides/${slugGuide}`}>
          <h1 className="text-lg text-mainLightColor font-sans font-medium cursor-pointer">
            {guideName}
          </h1>
        </Link>
        <div className="flex items-center">
          <FormControlLabel
            className={` ${
              isSelected ? "bg-mainColor" : "bg-MainYeloow "
            } px-8 py-2 rounded-md text-white `}
            control={
              <Checkbox
                checked={isSelected}
                onChange={handleSelect}
                sx={{ display: "none" }}
              />
            }
            label="Selected"
          />
        </div>
      </div>
    </div>
  );
}

export default CardTourGuide;
