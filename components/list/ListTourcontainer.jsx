import React from "react";
import CardListTour from "../cards/CardListTour";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
function ListTourcontainer() {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 gap-5 md:gap-7">
        <div></div>
        <div>
          <CardListTour
            image={[Hotel2, Hotel3, Hotel]}
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
