import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { CiPlay1 } from "react-icons/ci";
import gallery1 from "../../public/assets/images/gallery1.png";
import gallery2 from "../../public/assets/images/gallery2.png";
import gallery3 from "../../public/assets/images/gallery3.png";
import GallerySlider from "./GallerySlider";
function SingleGalleryContainer({ image, days }) {
  const [openGallery, setOpenGallery] = useState(false);
  const [allGallery, setAllGallery] = useState([]);
  useEffect(() => {
    let newArray;
    const lanmarks = days?.map((item) => {
      return item.landmarks;
    });
    const filterLandMarkIsEmpty = lanmarks?.filter(
      (item) => !item?.length == 0
    );
    const alllImage = () => {
      filterLandMarkIsEmpty.map((item) => {
        item.map((i) => {
          newArray = [...i.images];
          // console.log(newArray);
          setAllGallery(newArray);
        });
      });
    };
    alllImage();
    setAllGallery(newArray);
  }, []);
  console.log(allGallery);
  return (
    <div className="container mx-auto px-4 md:px-10 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={!allGallery ? "col-span-2" : "col-span-1"}>
          <div
            className={
              !allGallery
                ? "relative w-full h-[300px] md:h-[500px] "
                : "relative w-full h-[300px] md:h-full"
            }
          >
            <Image
              loader={() => {
                return `${image}`;
              }}
              unoptimized={true}
              src={image}
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
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
        <div className="hidden grid-cols-1 md:grid-cols-2 gap-4 md:grid">
          {allGallery?.slice(0, 4)?.map((item, index) => (
            <div className="" key={item.id}>
              <div className="relative w-full h-[300px] md:h-[210px] ">
                <Image
                  loader={() => {
                    return `${item.file}`;
                  }}
                  unoptimized={true}
                  src={item.file}
                  fill
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                  alt=""
                  loading="lazy"
                  className="rounded"
                />
                {/*  See All  */}
                {index == 3 && (
                  <div
                    onClick={() => {
                      setOpenGallery(true);
                    }}
                    className="group/item absolute bottom-4 right-4 shadow-md h-[50px] w-fit px-5 rounded cursor-pointer bg-white flex items-center justify-center 
                          transition-all hover:bg-[#3554d1] z-10"
                  >
                    <span className="text-[15px] font-sans group-hover/item:text-white text-mainColor font-medium capitalize">
                      See All
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <GallerySlider
        allGallery={allGallery}
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
    </div>
  );
}

export default SingleGalleryContainer;
