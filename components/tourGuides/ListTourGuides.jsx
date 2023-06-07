import React, { useState } from "react";
import CardTourGuide from "../cards/CardTourGuide";

function ListTourGuides({ allTourGuides }) {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleSelect = (index, isSelected) => {
    if (isSelected) {
      setSelectedIndices([...selectedIndices, index]);
    } else {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    }
  };
  //   console.log(selectedIndices);
  return (
    <div className="container mx-auto px-4  ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
        {allTourGuides?.map((guide) => (
          <CardTourGuide
            guideImage={guide?.logo}
            key={guide.id}
            qualification={guide.qualification}
            guideName={guide.name}
            slugGuide={guide.slug}
            index={guide.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className=" mt-8 ">
        <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
          <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
            tour guide request
          </span>
        </button>
      </div>
    </div>
  );
}

export default ListTourGuides;
