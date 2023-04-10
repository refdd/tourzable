import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function TermsAndConditions() {
  const [openTaC, setOpenTaC] = useState(false);
  return (
    <div id="Terms" className="container mx-auto px-4 mt-5 ">
      <div
        onClick={() => {
          setOpenTaC(!openTaC);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Terms And Conditions
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  
            `}
        />
      </div>
      <div
        className={`border rounded-md p-4 shadow-lg mt-4 ${
          openTaC ? " block" : "hidden "
        }`}
      >
        <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  ">
          This Package Is Subject To Saudi MT Rules And Regulations. This
          Package Is Changeable Upon Request The Appropriate Shoes And Clothes
          Must Be Worn According To The Nature Of The Place Being Visited Beach
          Wear Must Be Brought During The Cruises Included Kindly Be Informed
          That We Are Not Holding Any Rooms So The Above Mentioned Will Be
          Subject To Availability At The Time Of Actual Booking And Given Rates
          May Change. Please Be Informed That The Above-Mentioned Rates Are Not
          Valid During Official Holidays Such As Eid Al-Adha, Eid Al-Fitr,
          Spring, And New Year Holidays It Is Also Possible That Some Of The
          Attractions Referred To In The Program Are Not Available At The Time
          Of Implementation, So Another Option Will Be Available To Visit
          According To The Instructions Of The Tour Guide Accompanying The
          Group. If You Want To Change Any Of The Program’s Attractions, Please
          Inform Us 48 Hours Before The Start Of The Trip. No Change To The
          Program Is Permitted During Implementation Except After The Approval
          Of The Tour Guide Accompanying The Group.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
