import React from "react";
import ItineraryDays from "./ItineraryDays";

function Itinerary() {
  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Itinerary
        </p>
        <span>
          Days: <span>(4)</span>
        </span>
      </div>
      <ItineraryDays />
    </div>
  );
}

export default Itinerary;
