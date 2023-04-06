import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { CiPlay1 } from "react-icons/ci";
import gallery1 from "../../public/assets/images/gallery1.png";
import gallery2 from "../../public/assets/images/gallery2.png";
import gallery3 from "../../public/assets/images/gallery3.png";
function SingleGalleryContainer() {
  return (
    <div className="container mx-auto px-4 md:px-10 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <div className="relative w-full h-[300px] md:h-full ">
            <Image
              src={gallery1}
              fill
              alt=""
              loading="lazy"
              className="rounded"
            />
            {/* heart icon */}
            <div
              className="group/item absolute top-3 right-2 shadow-md h-[40px] w-[40px]  bg-white flex items-center justify-center 
            rounded-full transition-all hover:bg-[#3554d1] z-10
         "
            >
              <BiHeart className="text-lg text-black transition-all group-hover/item:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <div className="relative w-full h-[300px] md:h-[210px] ">
              <Image
                src={gallery2}
                fill
                alt=""
                loading="lazy"
                className="rounded"
              />
              {/* heart icon */}
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[300px] md:h-[210px] ">
              <Image
                src={gallery3}
                fill
                alt=""
                loading="lazy"
                className="rounded"
              />
              {/* heart icon */}
              <div
                className="group/item absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md h-[40px] w-[40px]  bg-white flex items-center justify-center 
            rounded-full transition-all hover:bg-[#3554d1] z-10
         "
              >
                <CiPlay1 className="text-lg text-black transition-all group-hover/item:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[300px] md:h-[210px] ">
              <Image
                src={gallery1}
                fill
                alt=""
                loading="lazy"
                className="rounded"
              />
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[300px] md:h-[210px] ">
              <Image
                src={gallery3}
                fill
                alt=""
                loading="lazy"
                className="rounded"
              />
              {/* heart icon */}
              <div
                className="group/item absolute bottom-4 right-4 shadow-md h-[50px] w-fit px-5 rounded cursor-pointer bg-white flex items-center justify-center 
           transition-all hover:bg-[#3554d1] z-10
         "
              >
                <span className="text-[15px] font-sans group-hover/item:text-white text-mainColor font-medium capitalize">
                  See All 90 Photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleGalleryContainer;
