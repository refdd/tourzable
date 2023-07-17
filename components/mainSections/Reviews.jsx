import React from "react";
import { AiFillStar } from "react-icons/ai";
import Partners from "../parts/Partners";
import ReviewsSlider from "../parts/ReviewsSlider";
import { useTranslation } from "react-i18next";

function Reviews({ reviews, allPartners }) {
  const { t, i18n } = useTranslation();
  return (
    <div className=" container mx-auto px-4 bg-mainColor py-10">
      <div className="flex flex-col space-y-5 md:flex-row">
        {/* header review */}
        <div className="flex flex-col space-y-5 md:w-[50%] md:space-y-12 md:py-10 ">
          <p className="text-white text-3xl font-semibold font-sans capitalize">
            {t("common:home.reviewsHeader")}
          </p>
          <p className="text-white text-[16px] font-sans capitalize font-normal ">
            {t("common:home.reviewsDesc")}
          </p>
          <div className="flex  gap-24 pt-2 md:pt-8">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-3xl font-sans text-white">
                13m+
              </span>
              <span className="text-white text-[16px] font-sans ">
                {t("common:home.Happy_People")}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-3xl font-sans text-white">
                4.88
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-white text-[16px] font-sans ">
                  {t("common:home.Overall_rating")}
                </span>
                <div className="flex text-white">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review Slider */}
        <ReviewsSlider reviews={reviews} />
      </div>
      {!allPartners?.length == 0 && <Partners allPartners={allPartners} />}
    </div>
  );
}

export default Reviews;
