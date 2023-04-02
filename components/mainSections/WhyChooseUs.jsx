import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import FraturedIcon1 from "../../public/assets/images/1.svg";
import FraturedIcon2 from "../../public/assets/images/2.svg";
import FraturedIcon3 from "../../public/assets/images/3.svg";
function WhyChooseUs() {
  return (
    <div className="container mx-auto  px-4">
      <HeaderSections
        titel={"Why Choose Us"}
        desc={"These popular destinations have a lot to offer"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3  ">
          <div className=" flex max-w-full w-full  justify-center items-center">
            <Image
              width={100}
              height={90}
              src={FraturedIcon1}
              static
              alt="features"
              loading="lazy"
            />
          </div>
          {/* content */}
          <div className="flex flex-col space-y-2  ">
            <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
              Best Price Guarantee
            </p>
            <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3  ">
          <div className=" flex max-w-full w-full  justify-center items-center">
            <Image
              width={100}
              height={90}
              src={FraturedIcon2}
              static
              alt="features"
              loading="lazy"
            />
          </div>
          {/* content */}
          <div className="flex flex-col space-y-2  ">
            <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
              Easy & Quick Booking
            </p>
            <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3  ">
          <div className=" flex max-w-full w-full  justify-center items-center">
            <Image
              width={100}
              height={90}
              src={FraturedIcon3}
              static
              alt="features"
              loading="lazy"
            />
          </div>
          {/* content */}
          <div className="flex flex-col space-y-2  ">
            <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
              Customer Care 24/7
            </p>
            <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
