import Image from "next/image";
import React from "react";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import AppImage from "../../public/assets/images/apps.webp";
function DownLoadApp() {
  return (
    <div className=" container mx-auto px-4 mt-10 pt-6  md:px-10 pb-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* content  */}
        <div className="flex flex-col space-y-4 md:space-y-8">
          <p className=" text-3xl text-mainColor font-sans capitalize font-semibold ">
            Download the App
          </p>
          <p className="text-[#051036] text-[16px] font-sans capitalize ">
            Book in advance or last-minute with tourzable. Receive instant
            confirmation. Access your booking info offline.
          </p>
          {/* buttons */}
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-4 ">
            <div className="flex items-center gap-4 bg-mainColor rounded-lg  w-fit px-7 py-3">
              <BsApple className="text-white text-2xl" />
              <div className="flex flex-col ">
                <span className="text-white text-[14px] font-sans capitalize">
                  Download on the
                </span>
                <span className="text-white font-medium text-[15px] font-sans ">
                  Apple Store
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-mainColor rounded-lg  w-fit px-7 py-3">
              <BsGooglePlay className="text-white text-2xl" />
              <div className="flex flex-col ">
                <span className="text-white text-[14px] font-sans capitalize">
                  Get in on
                </span>
                <span className="text-white font-medium text-[15px] font-sans ">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="relative w-full h-[180px] pt-6 md:h-[280px] ">
          <Image
            src={AppImage}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            loading="lazy"
            alt="appStore"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default DownLoadApp;
