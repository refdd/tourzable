import Image from "next/image";
import React from "react";
import imageTour from "../../public/assets/images/gallery2.png";
function OrderTour() {
  return (
    <div className="container mx-auto px-4 py-3">
      <div className=" flex flex-col space-y-6 divide-y-2 border p-3 rounded shadow-lg shadow-shadowColorMain">
        {/* imaga and data */}
        <div className="flex flex-col space-y-5">
          {/* imaga and titel and code  */}
          <div className="flex items-center space-x-3">
            <div className="relative w-[150px] h-[90px] md:w-[240px] md:h-[120px] ">
              <Image
                src={imageTour}
                fill
                alt="tour Image"
                className="rounded-xl object-fill"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-900 font-sans capitalize font-medium ">
                Tabuk & Al Disah
              </span>
              <span className="text-sm text-textPurple font-sans capitalize font-normal ">
                Code : 42677961
              </span>
            </div>
          </div>
          {/* start date and end date */}
          <div className="flex   items-center  space-x-11  ">
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] font-medium text-textPurple capitalize font-sans">
                Tour Date
              </span>
              <span className="text-sm text-gray-600 font-sans font-normal">
                2023-04-19
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] font-medium text-textPurple capitalize font-sans">
                end Date
              </span>
              <span className="text-sm text-gray-600 font-sans font-normal">
                2023-04-20
              </span>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="flex   items-center  space-x-11 pt-5  ">
          <div className="flex flex-col space-y-1">
            <span className="text-[16px] font-medium text-mainColor capitalize font-sans">
              Start From
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-[16px] text-textPurple font-medium uppercase">
                usd
              </span>
              <span className="text-[20px] text-textPurple font-bold uppercase">
                {" "}
                733
              </span>
              <span className="text-xs font-sans text-mainLightColor capitalize font-thin">
                /Person
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-[16px] font-medium text-mainColor capitalize font-sans">
              Price For Group
            </span>
            <span className="text-sm text-MainYeloow font-sans font-normal">
              [25 - 30]
            </span>
          </div>
        </div>
        {/* alart */}
        <div className="p-4 rounded-md border border-[#bee5eb]  bg-MainYeloow ">
          <p className="text-[16px] font-medium text-mainColor capitalize font-sans">
            You Number Is Not Eligible With The Number Of People Limit, Don't
            Worry You Can Complete Your Order By Send{" "}
            <span> Quotation Request </span> And The Operator Will Send You An
            Offer ASAP
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderTour;
