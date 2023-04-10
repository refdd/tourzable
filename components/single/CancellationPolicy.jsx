import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function CancellationPolicy() {
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
        <div className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize flex flex-col  ">
          <span className="text-3xl py-5 text-textPurple font-semibold capitalize font-sans ">
            7 Days
          </span>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize py-1 ">
            Cancellation Policy:{" "}
          </p>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  py-1">
            The Cancellation Policies Listed Below Apply To All Reservations
            Unless The Tour Booked Has Specific Rates Or Fees Listed Under
            "Special Notes." Please Carefully Review The "Special Notes" Of Your
            Tour Prior To Booking.{" "}
          </p>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  py-1">
            The Cancellation Policies Listed Below Apply To All Reservations
            Unless The Tour Booked Has Specific Rates Or Fees Listed Under
          </p>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  py-1">
            The Cancellation Policies Listed Below Apply To All Reservations
          </p>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  py-1">
            No Refund Can Be Made If A Tourist Program Is Booked With The Phrase
            (The Amount Is Not Refundable).
          </p>
          <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  py-1">
            No Refund Can Be Made If The Amount Is Not Canceled Before The
            Specified Time. (Cancellation Policy)
          </p>
        </div>
      </div>
    </div>
  );
}

export default CancellationPolicy;
