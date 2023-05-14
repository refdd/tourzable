import React from "react";
import CardListTour from "../cards/CardListTour";

import { useStateContext } from "@/contexts/ContextProvider";
import SeeMore from "../hleper/SeeMore";
function ListTourcontainer({ tours, pageType }) {
  const { ViewTours, setViewTours } = useStateContext();
  return (
    <div className="container mx-auto px-4 mt-6">
      <div
        className={
          ViewTours
            ? "grid grid-cols-3 gap-5 md:gap-3"
            : "grid grid-cols-1 gap-5 md:gap-7"
        }
      >
        {tours?.map((tour) => (
          <div key={tour.id}>
            <CardListTour
              image={tour?.images}
              location={tour?.city?.title}
              title={tour.title}
              description={tour?.short_desc}
              price={tour?.best_price}
              slug={tour.slug}
              sigleImage={tour?.image}
              duration={tour?.duration_to_book}
              reatingNumber={tour?.package_rating}
              pageType={pageType}
            />
          </div>
        ))}
      </div>
      <SeeMore />
    </div>
  );
}

export default ListTourcontainer;
