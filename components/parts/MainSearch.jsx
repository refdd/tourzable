import React, { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Button } from "@mui/material";
import SearcHome from "./SearcHome";
function MainSearch() {
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  useEffect(() => {
    setIsClicked({ hote: true });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-20">
      {/* search types */}
      <ul className="flex items-center space-x-8 md:space-x-10 ">
        <li
          onClick={() => handleClick("hote")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.hote ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            hote
          </span>
          {isClicked.hote ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("tour")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.tour ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            tour
          </span>
          {isClicked.tour ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("acitivty")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.acitivty ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            acitivity
          </span>
          {isClicked.acitivty ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("HolidayRentals")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.HolidayRentals ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            holiday Rentals
          </span>
          {isClicked.HolidayRentals ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
      </ul>
      <SearcHome />
    </div>
  );
}

export default MainSearch;
