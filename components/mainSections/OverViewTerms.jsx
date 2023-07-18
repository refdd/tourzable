import React from "react";
import HeaderSections from "../parts/HeaderSections";

function OverViewTerms({ data }) {
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
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.desc,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewTerms;
