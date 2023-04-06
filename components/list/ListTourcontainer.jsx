import React from "react";
import CardListTour from "../cards/CardListTour";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import { useStateContext } from "@/contexts/ContextProvider";
function ListTourcontainer() {
  const { ViewTours, setViewTours } = useStateContext();

  return (
    <div className="container mx-auto px-4 mt-6">
      <div
        className={
          ViewTours
            ? "grid grid-cols-2 gap-5 md:gap-7"
            : "grid grid-cols-1 gap-5 md:gap-7"
        }
      >
        <div>
          <CardListTour
            image={[Hotel2, Hotel3, Hotel]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
            slug={"taif-city-tour-cable-car-ride3"}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel3, Hotel2, Hotel]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
        <div>
          <CardListTour
            slug={"taif-city-tour-cable-car-ride3"}
            image={[Hotel, Hotel2, Hotel3]}
            location="Riyadh"
            title={"Explore Alula Tour Package"}
            description={
              "Two days of fun in AlUla's history, civilization, beauty and visiting its attractions"
            }
            price={23}
          />
        </div>
      </div>
    </div>
  );
}

export default ListTourcontainer;
