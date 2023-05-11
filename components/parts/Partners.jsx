import Image from "next/image";
import React from "react";
function Partners({ allPartners }) {
  return (
    <div className="mt-5">
      <p className="text-white text-[15px] capitalize text-center">
        Trusted by the world’s best
      </p>
      <div className="grid grid-cols-3 gap-4 mt-5 md:grid-cols-6 md:gap-6 md:mt-7 ">
        {allPartners?.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[90px] flex justify-center items-center"
          >
            <Image
              loader={() => {
                return `${item.icon}`;
              }}
              unoptimized={true}
              src={item.icon}
              fill
              alt="partners"
              className=""
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
