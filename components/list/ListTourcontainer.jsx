import React from "react";
import CardListTour from "../cards/CardListTour";
import Hotel from "../../public/assets/images/3.png";
import Hotel2 from "../../public/assets/images/2.png";
import Hotel3 from "../../public/assets/images/4.png";
import { useStateContext } from "@/contexts/ContextProvider";
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
              description={tour?.short_desc?.substring(0, 90)}
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
    </div>
  );
}

export default ListTourcontainer;
