import Image from "next/image";
import React from "react";

function CardReview({ title, comment, imageAuther, autherName, autherJob }) {
  return (
    <div className="bg-white py-8 flex flex-col space-y-6 px-9 rounded md:space-y-12 md:py-10">
      <p className="text-[#051036] font-medium text-[16px] font-sans capitalize ">
        {title}
      </p>
      <p className="text-[#051036] text-[16px] font-medium font-sans capitalize">
        {comment}
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
            src={imageAuther}
            alt="review"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-[15px] font-medium text-[#051036] font-sans capitalize">
            {autherName}
          </span>
          <span className="text-[#697488] text-sm font-sans capitalize">
            {autherJob}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
