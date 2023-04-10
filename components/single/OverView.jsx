import React from "react";
import { AiOutlineClose, AiOutlineStar } from "react-icons/ai";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
function OverView() {
  return (
    <div id="overview" className="">
      <div className=" border-b pb-4">
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Property highlights
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 py-4">
          <div className=" flex justify-center  items-center flex-col">
            <HiOutlineUserGroup className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Group Size
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              2-30
            </span>
          </div>

          <div className=" flex justify-center items-center flex-col">
            <AiOutlineStar className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Hotel Rate
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              5 stars
            </span>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <GiMeal className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Meals
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              Full Board
            </span>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <BsFillCalendar2WeekFill className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              duration
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              8 days
            </span>
          </div>
        </div>
        {/* overview  */}
        <div className="py-4 border-y flex flex-col space-y-4">
          <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
            Overview
          </p>
          <p className="text-[#051036] text-[15px] font-sans capitalize leading-[1.875] ">
            You can directly book the best price if your travel dates are
            available, all discounts are already included. In the following
            house description you will find all information about our listing.
            <br />
            <br />
            2-room terraced house on 2 levels. Comfortable and cosy furnishings:
            1 room with 1 french bed and radio. Shower, sep. WC. Upper floor:
            (steep stair) living/dining room with 1 sofabed (110 cm, length 180
            cm), TV. Exit to the balcony. Small kitchen (2 hot plates, oven,
          </p>
          <span className="text-mainColor text-[14px] underline font-medium font-sans capitalize">
            See More
          </span>
        </div>
        {/* price includes  */}
        <div className="flex flex-col gap-4 pt-4 md:flex-row">
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              Price Includes
            </p>
            <ul className="flex flex-col space-y-3 py-4">
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Tour Guide</p>
              </li>
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Private 4X4 Drive Car With Private Chauffeur</p>
              </li>
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Lunch And Dinner</p>
              </li>
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Drinks And Snacks</p>
              </li>
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Entrance Fees To Attractions</p>
              </li>
              <li className="flex items-center space-x-2">
                <FcCheckmark />
                <p>Breakfast At The Property</p>
              </li>
            </ul>
          </div>
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              NOT Includes
            </p>
            <ul className="flex flex-col space-y-3 py-4">
              <li className="flex items-center space-x-2">
                <AiOutlineClose className="text-lg text-red-600" />
                <p>Medical Insurance</p>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlineClose className="text-lg text-red-600" />
                <p>Airline Tickets</p>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlineClose className="text-lg text-red-600" />
                <p>All Personal Expenses</p>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlineClose className="text-lg text-red-600" />
                <p>Flight Equipment And Personal Clothing.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
