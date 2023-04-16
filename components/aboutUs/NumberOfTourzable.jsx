import React from "react";

function NumberOfTourzable() {
  return (
    <div className="container mx-auto px-4 md:px-9 py-8">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 ">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span className="text-3xl text-mainColor font-sans font-semibold capitalize md:text-5xl">
            4,958
          </span>
          <span className="text-sm text-[#697488] font-sans capitalize">
            Destinations
          </span>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span className="text-3xl text-mainColor font-sans font-semibold capitalize md:text-5xl">
            2,869
          </span>
          <span className="text-sm text-[#697488] font-sans capitalize">
            Total Properties
          </span>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span className="text-3xl text-mainColor font-sans font-semibold capitalize md:text-5xl">
            2M
          </span>
          <span className="text-sm text-[#697488] font-sans capitalize">
            Happy customers
          </span>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span className="text-3xl text-mainColor font-sans font-semibold capitalize md:text-5xl">
            574,974
          </span>
          <span className="text-sm text-[#697488] font-sans capitalize">
            Our Volunteers
          </span>
        </div>
      </div>
    </div>
  );
}

export default NumberOfTourzable;
