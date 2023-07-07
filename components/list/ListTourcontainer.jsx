import React, { useEffect, useState } from "react";
import CardListTour from "../cards/CardListTour";

import { useStateContext } from "@/contexts/ContextProvider";
import SeeMore from "../hleper/SeeMore";
function ListTourcontainer({ tours, pageType }) {
  const { ViewTours, loadMore, sortBy, setSortBy } = useStateContext();
  const [sortedItems, setSortedItems] = useState([tours]);
  // const [sortBy, setSortBy] = useState("price");
  useEffect(() => {
    const sortItems = () => {
      switch (sortBy) {
        case "minDay":
          return [...tours]?.sort((a, b) => {
            const dayA = parseInt(a.duration.split(" ")[0]);
            const dayB = parseInt(b.duration.split(" ")[0]);
            return dayA - dayB;
          });
        case "maxPrice":
          return [...tours]?.sort((a, b) => a.best_price - b.best_price);
        case "minPrice":
          return [...tours]?.sort((a, b) => b.best_price - a.best_price);
        case "maxDay":
          return [...tours]?.sort((a, b) => {
            const dayA = parseInt(a.duration.split(" ")[0]);
            const dayB = parseInt(b.duration.split(" ")[0]);
            return dayB - dayA;
          });
        default:
          return tours;
      }
    };

    setSortedItems(sortItems());
  }, [sortBy, setSortBy, tours]);
  // console.log(tours[0]);

  return (
    <div className="container mx-auto px-4 mt-6">
      <div
        className={
          ViewTours
            ? "grid grid-cols-3 gap-5 md:gap-3"
            : "grid grid-cols-1 gap-5 md:gap-7"
        }
      >
        {sortedItems?.slice(0, loadMore)?.map((tour) => {
          return (
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
                pageType={pageType}
                visitedLocations={tour.visited_locations}
              />
            </div>
          );
        })}
      </div>
      {!sortedItems?.length == 0 && <SeeMore />}
    </div>
  );
}

export default ListTourcontainer;
