import Image from "next/image";
import React from "react";
import avatar from "../../public/assets/images/attractive-g1ed8274c6_640.jpg";

function CardReview() {
  return (
    <div className="bg-white py-8 flex flex-col space-y-6 px-9 rounded md:space-y-12 md:py-10">
      <p className="text-[#3554d1] font-medium text-[16px] font-sans capitalize ">
        Hotel Equatorial Melaka
      </p>
      <p className="text-[#051036] text-[16px] font-medium font-sans capitalize">
        "Our family was traveling via bullet train between cities in Japan with
        our luggage - the location for this hotel made that so easy. Agoda price
        was fantastic."
      </p>
      <div className="flex items-center space-x-8 border-t pt-4">
        <div className="relative h-20 w-20 ">
          <Image
            loading="lazy"
            className=" rounded-full object-fill shadow-md"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            src={avatar}
            alt="review"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-[15px] font-medium text-[#051036] font-sans capitalize">
            Courtney Henry
          </span>
          <span className="text-[#697488] text-sm font-sans capitalize">
            Web Designer
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
