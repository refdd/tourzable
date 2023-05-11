import React from "react";
import { AiOutlineClose, AiOutlineStar } from "react-icons/ai";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
function OverView({ min, max, duration, desc, includes, unincludes, board , hotel_rate }) {
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
              {min}-{max}
            </span>
          </div>

          <div className=" flex justify-center items-center flex-col">
            <AiOutlineStar className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Hotel Rate
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
             {hotel_rate}
            </span>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <GiMeal className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Meals
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              {board?.title}
            </span>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <BsFillCalendar2WeekFill className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              duration
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              {duration} days
            </span>
          </div>
        </div>
        {/* overview  */}
        <div className="py-4 border-y flex flex-col space-y-4">
          <div dangerouslySetInnerHTML={{ __html: desc }} className=""></div>
        
        </div>

        {/* price includes  */}
        <div className="flex flex-col gap-4 pt-4 md:flex-row">
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              Price Includes
            </p>
            <ul className="flex flex-col space-y-3 py-4">
              {includes?.map((item) => (
                <li key={item.id} className="flex items-center space-x-2">
                  <FcCheckmark />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              NOT Includes
            </p>
            <ul className="flex flex-col space-y-3 py-4">
              {unincludes?.map((item) => (
                <li key={item.id} className="flex items-center space-x-2">
                  <AiOutlineClose className="text-lg text-red-600" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
