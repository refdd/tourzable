import React from "react";

function HeaderPages({ title, desc }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-8 md:py-10">
      <p className="text-[26px] text-mainColor font-sans capitalize font-semibold text-center">
        {title}
      </p>
      <p className="text-[16px] text-[#697488] font-sans  text-center ">
        {desc}
      </p>
    </div>
  );
}

export default HeaderPages;
