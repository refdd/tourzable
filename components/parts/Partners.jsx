import Image from "next/image";
import React from "react";
import partenersImage1 from "../../public/assets/images/partners/1 (1).svg";
import partenersImage2 from "../../public/assets/images/partners/2 (1).svg";
import partenersImage3 from "../../public/assets/images/partners/2.svg";
import partenersImage4 from "../../public/assets/images/partners/3.svg";
import partenersImage5 from "../../public/assets/images/partners/4.svg";
import partenersImage6 from "../../public/assets/images/partners/5.svg";
import partenersImage7 from "../../public/assets/images/partners/6.svg";
function Partners() {
  return (
    <div className="mt-5">
      <p className="text-white text-[15px] capitalize text-center">
        Trusted by the world’s best
      </p>
      <div className="grid grid-cols-3 gap-4 mt-5 md:grid-cols-6 md:gap-6 md:mt-7 ">
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage1}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage2}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage4}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage5}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage6}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[63px] flex justify-center items-center">
          <Image
            src={partenersImage1}
            fill
            alt="partners"
            className=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
