import React from "react";
import ItineraryDays from "./ItineraryDays";
import { useTranslation } from "react-i18next";

function Itinerary({ daysItinerary }) {
  const { t, i18n } = useTranslation();
  return (
    <div id="Itinerary" className=" mt-5">
      <div className="flex justify-between items-center">
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          {t("common:single.Itinerary")}
        </p>
        <span>
          {t("common:single.day")}: <span>({daysItinerary.length})</span>
        </span>
      </div>
      <ItineraryDays daysItinerary={daysItinerary} />
    </div>
  );
}

export default Itinerary;
