import React from "react";
import HeaderSections from "../parts/HeaderSections";

function OverViewTerms() {
  return (
    <div className="container mx-auto px-4 md:px-10 mt-10">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-9">
        <ul className="flex flex-col space-y-4 border rounded shadow-sm py-6 px-7 md:col-span-2 md:h-fit md:mt-28 md:sticky md:top-20">
          <li className=" text-lg text-textPurple font-sans capitalize font-medium cursor-pointer">
            <span>General Terms of Use</span>
          </li>
          <li className=" text-lg text-textPurple font-sans capitalize font-medium cursor-pointer">
            <span>Privacy policy</span>
          </li>
          <li className=" text-lg text-textPurple font-sans capitalize font-medium cursor-pointer">
            <span>Cookie Policy</span>
          </li>
          <li className=" text-lg text-textPurple font-sans capitalize font-medium cursor-pointer">
            <span>Best Price Guarantee</span>
          </li>
        </ul>
        <div className=" md:col-span-7">
          <HeaderSections titel={"Terms And Conditions"} />
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col space-y-3">
              {/* header */}
              <p className=" text-[16px] text-mainColor font-medium font-sans capitalize ">
                1. Your Agreement
              </p>
              <p className="text-[#051036] text-[15px] font-sans capitalize leading-[1.875] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              {/* header */}
              <p className=" text-[16px] text-mainColor font-medium font-sans capitalize ">
                2. Change of Terms of Use
              </p>
              <p className="text-[#051036] text-[15px] font-sans capitalize leading-[1.875] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              {/* header */}
              <p className=" text-[16px] text-mainColor font-medium font-sans capitalize ">
                3. Access and Use of the Services
              </p>
              <p className="text-[#051036] text-[15px] font-sans capitalize leading-[1.875] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewTerms;
