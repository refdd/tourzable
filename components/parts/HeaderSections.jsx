import React from "react";

function HeaderSections({ titel, desc }) {
  return (
    <div className="flex flex-col my-10 space-y-3 justify-center items-center md:my-14">
      <p className="text-2xl font-semibold text-[#051036] font-sans capitalize md:text-3xl  text-center">
        {titel}
      </p>
      <p className="text-lg text-gray-600 capitalize font-sans font-normal text-center">
        {desc}
      </p>
    </div>
  );
}

export default HeaderSections;
