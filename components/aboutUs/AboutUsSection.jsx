import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import aboutusImage from "../../public/assets/images/aboutus.webp";
function AboutUsSection() {
  return (
    <div className="container mx-auto px-4 md:px-9">
      <HeaderSections
        titel={"AboutUs"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-9">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col space-y-1">
            <p className="text-2xl text-mainColor font-sans font-semibold capitalize">
              About Tourzable.com
            </p>
            <p className="text-[16px] text-[#697488] font-sans capitalize">
              {" "}
              Online Travel Marketplace And Inventory Management Solutions. We
              Are Specialized In
            </p>
          </div>
          <p className="text-[16px] text-[#051036] font-sans capitalize font-medium">
            Marketing Saudi Tour Packages And Activities · Providing Software
            System Solutions For Tourism Sector
          </p>
          <p className="text-[16px] text-[#051036] font-sans capitalize font-medium">
            As A Marketplace All Packages Are Provided By Approved Tour Operator
            Company In Saudi.
          </p>
          <p className="text-[16px] text-[#051036] font-sans capitalize font-medium">
            We Aim To Help Our "Partners" Tour Operators Manage And Grow Their
            Business.{" "}
          </p>
          <h4 className="text-lg text-textPurple font-sans font-medium capitalize">
            Our Vision
          </h4>
          <p className="text-[16px] text-[#051036] font-sans capitalize font-medium">
            The Leading And Preferred Online Marketplace For Tourist To Book
            Their Packages In ME. · Digitizing Tours And Activities Sector In
            Saudi Arabia
          </p>
          <p className="text-[16px] text-[#051036] font-sans capitalize font-medium">
            Tourzable.Com Is Owned By Diamond Road For E-Marketing Company
          </p>
        </div>
        {/* image */}
        <div className="">
          <div className="relative w-full h-[400px] md:h-[500px]  ">
            <Image
              src={aboutusImage}
              fill
              loading="lazy"
              alt="about us"
              className=" rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
