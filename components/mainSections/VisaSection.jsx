import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiVisaFill } from "react-icons/ri";
import visaImage from "../../public/assets/images/visa.jpg";
function VisaSection({ visa }) {
  return (
    <div className="container mx-auto px-4 md:px-10 mt-10 bg-[#f8f8f8] md:py-7">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <p className="text-[#7d4091] font-medium text-[40px] capitalize font-sans ">
            Visa{" "}
          </p>

          <div
            className="text-[16px] text-gray-700 font-sans capitalize leading-[1.7]"
            dangerouslySetInnerHTML={{
              __html: visa?.desc,
            }}
          ></div>
          <Link href={"https://visa.visitsaudi.com/"}>
            <div className=" group flex items-center gap-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor py-2 px-5 md:px-10 cursor-pointer  ">
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
