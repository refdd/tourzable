import Image from "next/image";
import React from "react";

function OverViewTourGuide({
  nameTourGuide,
  imagePersonal,
  imageLicese,
  Qualification,
  QualificationPath,
  languages,
  cities,
}) {
  return (
    <div className="container mx-auto px-4 md:px-9">
      <div className="grid grid-cols-1 gap-4 py-5">
        {/* name */}
        <div className=" bg-slate-100 px-3 py-3 rounded-lg flex flex-col gap-3">
          <p className="text-gray-900 text-lg font-sans capitalize font-bold">
            Tour guide Name
          </p>
          <p className="text-mainColor text-lg font-sans capitalize font-medium">
            {nameTourGuide}
          </p>
        </div>
        {/* images */}
        <div className="grid grid-cols-1 gap-4 bg-slate-100 px-3 py-3 rounded-lg shadow-xl md:grid-cols-2 ">
          <div className="">
            <p className="text-lg text-mainLightColor font-bold capitalize font-sans">
              personal photo
            </p>
            <div className="relative w-full h-[300px]">
              <Image
                loader={() => {
                  return `${imagePersonal}`;
                }}
                unoptimized={true}
                src={imagePersonal}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                loading="lazy"
                alt="personal photo"
                className="object-cover"
              />
            </div>
          </div>
          <div className="">
            <p className="text-lg text-mainLightColor font-bold capitalize font-sans">
              tour guide license
            </p>
            <div className="relative w-full h-[300px]">
              <Image
                loader={() => {
                  return `${imageLicese}`;
                }}
                unoptimized={true}
                src={imageLicese}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                loading="lazy"
                alt="personal photo"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Qualification */}
        <div className="bg-slate-100 px-3 py-3 rounded-lg flex flex-col gap-4">
          <p className="text-mainColor font-sans font-medium capitalize text-lg">
            Qualification : <span className="font-bold">{Qualification}</span>
          </p>
          <p className="text-mainColor font-sans font-medium capitalize text-lg">
            qualification path :{" "}
            <span className="font-bold">{QualificationPath}</span>
          </p>
        </div>
        {/* languages */}
        <div className="bg-slate-100 px-3 py-3 rounded-lg flex flex-col gap-4">
          <p className="text-mainColor font-sans font-medium capitalize text-lg">
            Languages
          </p>
          <div className="flex items-center flex-wrap space-x-10">
            {/* {languages?.map((language, index) => (
              <p
                key={index}
                className="font-sans text-gray-500 text-sm capitalize"
              >
                Arabic
              </p>
            ))} */}
            <p className="font-sans text-gray-500 text-sm capitalize">Arabic</p>
            <p className="font-sans text-gray-500 text-sm capitalize">French</p>
            <p className="font-sans text-gray-500 text-sm capitalize">
              English
            </p>
            <p className="font-sans text-gray-500 text-sm capitalize">Test</p>
          </div>
        </div>
        {/* cites */}
        <div className="bg-slate-100 px-3 py-3 rounded-lg flex flex-col gap-4">
          <p className="text-mainColor font-sans font-medium capitalize text-lg">
            Cities
          </p>

          <div className="grid grid-cols-2 gap-5">
            {cities?.map((citie) => (
              <p
                key={citie.id}
                className="font-sans text-gray-500 text-sm capitalize"
              >
                {citie?.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-8 ">
        <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
          <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
            tour guide request
          </span>
        </button>
      </div>
    </div>
  );
}

export default OverViewTourGuide;
