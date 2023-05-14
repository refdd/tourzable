import Image from "next/image";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import landmark from "../../public/assets/images/listtour.webp";
import { useLayoutEffect } from "react";
const questions = [
  {
    id: 1,
    question: "Is it safe to visit Saudi ?",
    answer:
      "Overall The Rate Of Crime In Saudi Arabia Is Very Low And The Saudi Government Are Concerned To Secure All Tourists In The Country, There Is No Difference Between Women And Men As Tourists Regarding Safety. You Just Have To Abiding The Law And Follow The Common-Sense Rules And Respect The Local Customs",
  },
  {
    id: 2,
    question: "What should I avoid in Saudi Arabia?",
    answer:
      "Photographing In Government Buildings, Military Buildings, And Palaces Is Not Allowed. You Should Avoid Photographing Local People Specially Women. Binoculars Should Not Be Brought Into Saudi Arabia And May Be Confiscated At The Port Of Entry.",
  },
  {
    id: 3,
    question: "Can Americans travel to Saudi Arabia?",
    answer:
      "A Visa Is Required To Enter Saudi Arabia, And US Citizens Can Now Travel To Saudi Arabia For Tourism Purposes With An E Visa Obtained Online.",
  },
  {
    id: 4,
    question: "Why book with Tourzable.com?",
    answer:
      "Tourzable Is The First Saudi Travel Portal That Collect The Best Travel Offers From Travel Companies And Present It To The Travellers, We Offers A Wide Array Of Benefits To Our Clientele. Flexible Itineraries - Competitive Prices - Excellent Customer Service - Facilitated Payment - And Quality Assurance. So We Assure You A Unique And Insightful Travel Experience In Saudi.",
  },
];

function ItineraryDays({ daysItinerary }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto py-5 px-4 ">
      <div className="">
        {daysItinerary.map((q, index) => (
          <div key={q.id} className=" border mb-4 rounded shadow-lg py-5 px-3 ">
            <button
              className="flex  items-center justify-between px-3 w-full "
              onClick={() => handleClick(index)}
            >
              <div className="flex flex-col items-center justify-center h-[60px] w-[60px]  rounded-full bg-mainColor">
                <span className="text-[16px] text-white font-medium  font-sans">
                  {q.title.replace(/["\\]/g, "")}
                </span>
                <FaAngleUp className="text-[16px] text-white" />
              </div>
              <span className="text-[16px] font-sans capitalize text-textPurple">
                (Al-Ula / Madian Saleh)
              </span>
            </button>
            {activeIndex === index && (
              <div className=" flex flex-col space-y-3 min-h-0 ">
                <p className="text-[16px] font-sans text-textPurple capitalize font-semibold pt-3">
                  Day Description
                </p>
                <div className="mt-4 text-base text-gray-500 font-sans capitalize">
                  <div dangerouslySetInnerHTML={{ __html: q.desc }}></div>
                </div>
                <p className="text-[16px] font-sans text-textPurple capitalize font-semibold pt-3">
                  Landmarks
                </p>
                <div className="flex flex-col space-y-3">
                  {q?.landmarks?.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className=" w-14 ">
                        <div className=" flex items-center justify-center border-2 border-textPurple  w-10 h-10  rounded-full">
                          <span>1</span>
                        </div>
                      </div>
                      <div className="flex items-center relative rounded shadow-lg bg-[#eef3f7] p-3">
                        <div className="flex flex-col ">
                          <h4 className="text-xs font-sans text-textPurple  capitalize py-3">
                            {item.title}
                          </h4>
                          <hr />
                          <div className="text-xs font-sans capitalize text-[#555]">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.desc.substring(0, 90),
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="">
                          <Image
                            loader={() => {
                              return `${item.image}`;
                            }}
                            unoptimized={true}
                            src={item.image}
                            width={100}
                            height={100}
                            loading="lazy"
                            alt="landmarks"
                            className=" object-contain rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItineraryDays;
