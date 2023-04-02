import React, { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Button } from "@mui/material";
import SearcHome from "./SearcHome";
function MainSearch() {
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  useEffect(() => {
    setIsClicked({ Packages: true });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-20">
      {/* search types */}
      <ul className="flex items-center space-x-8 md:space-x-10 ">
        <li
          onClick={() => handleClick("Packages")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.Packages ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            Packages
          </span>
          {isClicked.Packages ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("Activities")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.Activities ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            Activities
          </span>
          {isClicked.Activities ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("UmrahPlus")}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.UmrahPlus ? "text-[#3554D1] " : "text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            Umrah Plus
          </span>
          {isClicked.UmrahPlus ? (
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
