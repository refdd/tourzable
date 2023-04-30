import React from "react";
import ItineraryDays from "./ItineraryDays";

function Itinerary({ daysItinerary }) {
  return (
    <div id="Itinerary" className=" mt-5">
      <div className="flex justify-between items-center">
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Itinerary
        </p>
        <span>
          Days: <span>({daysItinerary.length})</span>
        </span>
      </div>
      <ItineraryDays daysItinerary={daysItinerary} />
    </div>
  );
}

export default Itinerary;
