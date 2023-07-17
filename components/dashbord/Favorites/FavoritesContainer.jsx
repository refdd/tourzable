import CardListTour from "@/components/cards/CardListTour";
import React from "react";
import Hotel from "../../../public/assets/images/QaisariahSouq.jpg";
import Hotel2 from "../../../public/assets/images/QaisariahSouq.jpg";
import Hotel3 from "../../../public/assets/images/QaisariahSouq.jpg";
function FavoritesContainer({ packages }) {
  console.log(packages[0]);
  return (
    <div className="flex flex-col  gap-6">
      {packages?.map((tour) => {
        return (
          tour.is_active && (
            <div key={tour.id}>
              <CardListTour
                image={tour?.images}
                location={tour?.city?.title}
                title={tour.title}
                description={tour?.short_desc?.substring(0, 150)}
                price={tour?.best_price}
                slug={tour.slug}
                sigleImage={tour?.image}
                duration={tour?.duration}
                reatingNumber={tour?.package_rating}
                pageType={tour?.pageType}
                visitedLocations={tour.visited_locations}
              />
            </div>
          )
        );
      })}
    </div>
  );
}

export default FavoritesContainer;
