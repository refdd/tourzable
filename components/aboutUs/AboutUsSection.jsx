import Image from "next/image";
import React from "react";
import HeaderSections from "../parts/HeaderSections";
import aboutusImage from "../../public/assets/images/aboutus.webp";
function AboutUsSection({ aboutUs }) {
  return (
    <div className="container mx-auto px-4 md:px-9">
      <HeaderSections
        titel={"AboutUs"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-9">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col space-y-1">
            <div
              dangerouslySetInnerHTML={{
                __html: aboutUs?.desc,
              }}
            ></div>
          </div>
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
