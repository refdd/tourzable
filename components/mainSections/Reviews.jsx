import React from "react";
import { AiFillStar } from "react-icons/ai";
import Partners from "../parts/Partners";
import ReviewsSlider from "../parts/ReviewsSlider";

function Reviews() {
  return (
    <div className=" container mx-auto px-4 bg-mainColor py-10">
      <div className="flex flex-col space-y-5 md:flex-row">
        {/* header review */}
        <div className="flex flex-col space-y-5 md:w-[50%] md:space-y-12 md:py-10 ">
          <p className="text-white text-3xl font-semibold font-sans capitalize">
            What our customers are saying us?
          </p>
          <p className="text-white text-[16px] font-sans capitalize font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
            justo.
          </p>
          <div className="flex  space-x-24 pt-2 md:pt-8">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-3xl font-sans text-white">
                13m+
              </span>
              <span className="text-white text-[16px] font-sans ">
                Happy People
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-3xl font-sans text-white">
                4.88
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-white text-[16px] font-sans ">
                  Overall rating
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
        <ReviewsSlider />
      </div>
      <Partners />
    </div>
  );
}

export default Reviews;
