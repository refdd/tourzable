import React, { useState } from "react";
import CheckAvailability from "./CheckAvailability";
import Inquery from "./Inquery";

function From({ idPackage }) {
  const [openFrom, setOpenFrom] = useState(false);
  return (
    <div className="container mx-auto px-4 pb-8 h-full ">
      <div className=" bg-gray-50 rounded py-4 md:sticky md:top-14 ">
        <div className="flex items-center space-x-2 py-2 px-4 border-b-2  ">
          <div
            onClick={() => {
              setOpenFrom(false);
            }}
            className={`flex items-center justify-center  py-2 px-5 rounded shadow-xl w-[50%]
             ${
               openFrom
                 ? " bg-white  text-textPurple"
                 : "text-white bg-MainYeloow "
             }`}
          >
            <button className="text-[16px]  font-sans font-medium capitalize">
              inquiry
            </button>
          </div>
          <div
            onClick={() => {
              setOpenFrom(true);
            }}
            className={`flex items-center justify-center   py-2 px-5 rounded shadow-xl ${
              openFrom
                ? "bg-MainYeloow text-white"
                : "bg-white  text-textPurple"
            } `}
          >
            <button className="text-[16px]  font-sans font-medium capitalize">
              check availability
            </button>
          </div>
        </div>
        {openFrom ? (
          <CheckAvailability idPackage={idPackage} />
        ) : (
          <Inquery idPackage={idPackage} />
        )}
      </div>
    </div>
  );
}

export default From;
