import CardListTour from "@/components/cards/CardListTour";
import React from "react";
import Hotel from "../../../public/assets/images/3.png";
import Hotel2 from "../../../public/assets/images/2.png";
import Hotel3 from "../../../public/assets/images/4.png";
function FavoritesContainer() {
  return (
    <div className="flex flex-col  gap-6">
      <CardListTour
        image={[Hotel2, Hotel3, Hotel]}
        location="Riyadh"
        title={"Explore Alula Tour Package"}
        description={
          "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions history, civilization, beauty and visiting its attractions "
        }
        price={999}
        slug={"taif-city-tour-cable-car-ride3"}
      />
      <CardListTour
        image={[Hotel2, Hotel3, Hotel]}
        location="Riyadh"
        title={"Explore Alula Tour Package"}
        description={
          "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions history, civilization, beauty and visiting its attractions "
        }
        price={999}
        slug={"taif-city-tour-cable-car-ride3"}
      />
      <CardListTour
        image={[Hotel2, Hotel3, Hotel]}
        location="Riyadh"
        title={"Explore Alula Tour Package"}
        description={
          "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions history, civilization, beauty and visiting its attractions "
        }
        price={999}
        slug={"taif-city-tour-cable-car-ride3"}
      />
    </div>
  );
}

export default FavoritesContainer;
