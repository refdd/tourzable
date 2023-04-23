import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  GiEarthAfricaEurope,
  GiEarthAmerica,
  GiEarthAsiaOceania,
} from "react-icons/gi";

function DestinationsBox() {
  return (
    <div className="absolute top-[370%]  left-1/2 -translate-x-1/2 -translate-y-1/2  hidden group-hover/des:md:block z-20 w-[1100px] px-5">
      <div className="grid grid-cols-5 gap-11 py-5 px-5 bg-[#fffffff2] rounded-md">
        {/* asia */}
        <div className=" flex flex-col space-y-3 w-52">
          <GiEarthAsiaOceania className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            asia
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Jordan
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Dubai
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Nepal
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Bhutan
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Sri Lanka
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Oman
            </li>
          </ul>
          <div className=" border-t pt-1 w-fit">
            <button className="text-mainColor text-sm font-sans font-semibold capitalize">
              Show more
            </button>
          </div>
        </div>
        {/* afeica */}
        <div className=" flex flex-col space-y-3 w-52">
          <GiEarthAfricaEurope className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            Africa
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Egypt
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Morocco
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Tanzania Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Uganda Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Rwanda Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Tunisia
            </li>
          </ul>
          <div className=" border-t pt-1 w-fit">
            <button className="text-mainColor text-sm font-sans font-semibold capitalize">
              Show more
            </button>
          </div>
        </div>
        {/* Europe */}
        <div className=" flex flex-col space-y-3 w-52">
          <GiEarthAfricaEurope className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            Europe
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Turkey
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Greece
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Spain
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Italy
            </li>
          </ul>
          <div className=" border-t pt-1 w-fit">
            <button className="text-mainColor text-sm font-sans font-semibold capitalize">
              Show more
            </button>
          </div>
        </div>
        {/* Latin America */}
        <div className=" flex flex-col space-y-3 w-52">
          <GiEarthAmerica className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            Latin America
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Peru
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Mexico
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Argentina
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Chile
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Costa Rica
            </li>
          </ul>
          <div className=" border-t pt-1 w-fit">
            <button className="text-mainColor text-sm font-sans font-semibold capitalize">
              Show more
            </button>
          </div>
        </div>
        {/* Latin America */}
        <div className=" flex flex-col space-y-3 w-52">
          <AiOutlineGlobal className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            Multi-Country Trips
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Middle East Tours
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Middle East & Mediterranean Tours
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium">
              Middle East & Africa Tours
            </li>
          </ul>
          <div className=" border-t pt-1 w-fit">
            <button className="text-mainColor text-sm font-sans font-semibold capitalize">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationsBox;
