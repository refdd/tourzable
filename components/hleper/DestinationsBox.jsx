import Link from "next/link";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  GiEarthAfricaEurope,
  GiEarthAmerica,
  GiEarthAsiaOceania,
} from "react-icons/gi";

function DestinationsBox() {
  return (
    <div className="absolute top-[299%]  left-1/2 -translate-x-1/2 -translate-y-1/2  hidden group-hover/des:md:block z-20 w-[1100px] px-5">
      <div className="grid grid-cols-5 gap-11 py-5 px-5 bg-[#fffffff2] rounded-md">
        {/* asia */}
        <div className=" flex flex-col space-y-3 w-52">
          <GiEarthAsiaOceania className="text-5xl text-black" />
          <p className="text-lg text-mainColor font-medium font-sans capitalize">
            {" "}
            asia
          </p>
          <ul className="flex flex-col space-y-5">
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              <Link href={"/Destinations/Jordan"}>
                <span>Jordan</span>
              </Link>
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Dubai
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Nepal
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Bhutan
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Sri Lanka
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
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
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Egypt
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Morocco
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Tanzania Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Uganda Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Rwanda Safari
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
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
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Turkey
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Greece
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Spain
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
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
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Peru
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Mexico
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Argentina
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Chile
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
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
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Middle East Tours
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
              Middle East & Mediterranean Tours
            </li>
            <li className="text-sm text-gray-950 font-sans capitalize font-medium cursor-pointer">
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
