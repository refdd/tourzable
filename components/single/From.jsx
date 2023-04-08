import React from "react";
import Inquery from "./Inquery";

function From() {
  return (
    <div className="container mx-auto px-4 pb-8 ">
      <div className=" bg-gray-50 rounded py-4 ">
        <div className="flex items-center space-x-2 py-2 px-4 border-b-2  ">
          <div className="flex items-center justify-center bg-MainYeloow py-2 px-5 rounded ">
            <button className="text-[16px] text-white font-sans font-medium capitalize">
              inquiry
            </button>
          </div>
          <div className="flex items-center justify-center bg-white py-2 px-5 rounded ">
            <button className="text-[16px] text-textPurple font-sans font-medium capitalize">
              check availability
            </button>
          </div>
        </div>
        <Inquery />
      </div>
    </div>
  );
}

export default From;
