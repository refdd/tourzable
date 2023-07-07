import React, { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Button } from "@mui/material";
import SearcHome from "./SearcHome";
import { useTranslation } from "react-i18next";
function MainSearch({ regions }) {
  const { t, i18n } = useTranslation();
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  useEffect(() => {
    setIsClicked({ Packages: true });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-20 ">
      {/* search types */}
      <ul className="flex items-center gap-8 md:gap-10">
        <li
          onClick={() => handleClick("Packages", 1)}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.Packages
                ? "text-[#3554D1] "
                : " text-mainColor md:text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            {t("common:home.package")}
          </span>
          {isClicked.Packages ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full md:bg-white  bg-mainLightColor " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("Activities", 2)}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.Activities
                ? "text-[#3554D1] "
                : " text-mainColor md:text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            {t("common:home.actives")}
          </span>
          {isClicked.Activities ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full md:bg-white  bg-mainLightColor " />
          ) : (
            ""
          )}
        </li>
        <li
          onClick={() => handleClick("UmrahPlus", 3)}
          className="relative flex justify-center items-center"
        >
          <span
            className={`${
              isClicked.UmrahPlus
                ? "text-[#3554D1] "
                : " text-mainColor md:text-white"
            } font-sans text-[15px] font-medium cursor-pointer capitalize md:text-xl`}
          >
            {t("common:home.umrah")}
          </span>
          {isClicked.UmrahPlus ? (
            <span className="absolute -bottom-2 left-0 h-[1px] w-full md:bg-white  bg-mainLightColor " />
          ) : (
            ""
          )}
        </li>
      </ul>
      <SearcHome regions={regions} />
    </div>
  );
}

export default MainSearch;
