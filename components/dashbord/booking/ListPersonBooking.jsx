import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import QRCode from "react-qr-code";
function ListPersonBooking({
  bookingPeople,
  traveler,
  handleOpenEditeBooking,
  handleEditeBooking,
}) {
  const [personidActive, setpersonidActive] = useState(null);
  const handleClick = (index) => {
    setpersonidActive(personidActive === index ? null : index);
  };
  return (
    <div>
      <div className="bg-white p-5 rounded-lg">
        <p className="text-lg font-sans font-medium text-mainColor capitalize">
          people registered
        </p>
        {bookingPeople.length == 0 ? (
          <p className="text-lg text-red-600 font-medium capitalize font-sans my-4">
            {" "}
            no people registered{" "}
          </p>
        ) : (
          <ul className="">
            {bookingPeople?.map((person, index) => (
              <li
                key={person.id}
                className="flex flex-col space-y-3 mt-4 py-2 px-4 border rounded-lg"
              >
                <div
                  onClick={() => {
                    handleClick(person.id);
                  }}
                  className={` flex items-center justify-between cursor-pointer  rounded-lg  ${
                    personidActive == person.id
                      ? "bg-white text-gray-900"
                      : "bg-mainColor text-white py-2 px-3"
                  }`}
                >
                  <div className="flex flex-1 items-center justify-around">
                    <p
                      className={`text-[17px] font-bold font-sans capitalize  `}
                    >
                      traveler: {person?.name}{" "}
                    </p>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        personidActive == person.id
                          ? "bg-mainColor"
                          : "bg-MainYeloow"
                      } `}
                    >
                      <span className="text-white text-[16px]">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <FiChevronDown
                    className={`text-2xl  ${
                      personidActive == person.id
                        ? "text-gray-900 rotate-180"
                        : "text-white"
                    }`}
                  />
                </div>
                {personidActive == person.id && (
                  <div className="grid grid-cols-1 gap-3  md:grid-cols-2">
                    {/* data list */}
                    <div className=" ">
                      <div className="grid grid-cols-1 gap-3">
                        <p className="text-gray-800 text-[15] font-medium capitalize font-sans">
                          name :
                          <span className=" text-smtext-gray-500">
                            {person?.name}
                          </span>
                        </p>
                        <p className="text-gray-800 text-[15] font-medium capitalize font-sans">
                          email :
                          <span className=" text-smtext-gray-500">
                            {person?.email}
                          </span>
                        </p>
                        <p className="text-gray-800 text-[15] font-medium capitalize font-sans">
                          id number :
                          <span className=" text-smtext-gray-500">
                            {person?.id_number}
                          </span>
                        </p>
                        <p className="text-gray-800 text-[15] font-medium capitalize font-sans">
                          passport number :
                          <span className=" text-smtext-gray-500">
                            {" "}
                            {person?.passport}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="h-auto mx-auto w-max-[64px] w-[200px]">
                        <QRCode
                          size={300}
                          style={{
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                          value={`name: ${person.name}  email : ${person.email}   id number : ${person?.id_number}  passport number :${person?.passport}`}
                          viewBox={`0 0 256 256`}
                        />
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        handleOpenEditeBooking();
                        handleEditeBooking(person);
                      }}
                      className="text-lg underline font-medium text-mainColor capitalize cursor-pointer"
                    >
                      <span>edit Traveler</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListPersonBooking;
