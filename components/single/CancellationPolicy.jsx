import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function CancellationPolicy({ Cancellation_Policy }) {
  const [openPlicy, setOpenPlicy] = useState(false);
  return (
    <div id="Cancellation" className="container mx-auto px-4  mt-5">
      <div
        onClick={() => {
          setOpenPlicy(!openPlicy);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Cancellation Policy
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  
      `}
        />
      </div>
      <div
        className={`border rounded-md p-4 shadow-lg mt-4 ${
          openPlicy ? " block" : "hidden "
        }`}
      >
        <div className="text-[16px] leading-[28px] md:text-lg font-sans flex flex-col  ">
          <span className="text-3xl py-5 text-textPurple font-semibold capitalize font-sans ">
            {Cancellation_Policy.title}
          </span>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize py-1 ">
            Cancellation Policy:{" "}
          </p>
          <div className="text-[16px] leading-[28px] md:text-lg font-sans  capitalize  py-1">
            <div
              dangerouslySetInnerHTML={{
                __html: Cancellation_Policy.desc,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancellationPolicy;
