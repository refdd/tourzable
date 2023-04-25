import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiVisaFill } from "react-icons/ri";
import visaImage from "../../public/assets/images/visa.jpg";
function VisaSection() {
  return (
    <div className="container mx-auto px-4 md:px-10 mt-10 bg-[#f8f8f8] md:py-7">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <p className="text-[#7d4091] font-medium text-[40px] capitalize font-sans ">
            Visa{" "}
          </p>
          <p className="text-[16px] text-gray-700 font-sans capitalize leading-[1.7]">
            Saudi Arabia Is Opening Its Doors To The World Through Its New
            Tourist Visa. Through The Fast And Easy-To-Use Online Portal,
            International Visitors From 49 Eligible Countries Can Apply For An
            EVisa And Discover The Warm Hospitality Of Saudi People The Rich
            Heritage, Vibrant Culture, And Diverse And Breathtaking Landscapes;
            From The Mountains Of Abha To The Beaches Of The Red Sea To The
            Shifting Sands Of The Empty Quarter. The EVisa Will Be A One-Year,
            Multiple Entry Visa, Allowing Tourists To Spend Up To 90 Days In The
            Country. It Covers Tourism-Related Activities And Umrah (Excluding
            Hajj Season) And Excludes Other Activities Such As Studying.
          </p>
          <Link href={"https://visa.visitsaudi.com/"}>
            <div className=" group flex items-center space-x-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor py-2 px-5 md:px-10 cursor-pointer  ">
              <RiVisaFill className="text-[#fff] text-lg  group-hover:md:text-white " />
              <button className="text-[#fff] font-medium font-sans text-[15px] group-hover:md:text-white">
                Get Visa
              </button>
            </div>
          </Link>
        </div>
        <div className="">
          <div className="relative w-full h-[330px] ">
            <Image
              src={visaImage}
              fill
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              loading="lazy"
              alt="visa"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaSection;
