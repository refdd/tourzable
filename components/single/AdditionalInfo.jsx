import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";

function AdditionalInfo({ noteContent }) {
  const [openAdditionl, setOpenAdditionl] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div id="Additional" className="container mx-auto px-4 ">
      <div
        onClick={() => {
          setOpenAdditionl(!openAdditionl);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          {t("common:single.additional_info")}
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  
          `}
        />
      </div>
      <div
        className={`border rounded-md p-4 shadow-lg mt-4 ${
          openAdditionl ? " block" : "hidden "
        }`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: noteContent,
          }}
        ></div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
