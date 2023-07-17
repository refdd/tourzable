import { Box, Button, Modal, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import AcceptForm from "./AcceptForm";
import RejectForm from "./RejectForm";
import SendInquiryForm from "./SendInquiryForm";

function GuideOrdersSection({ tourOrdersRequests }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [accept, setAccept] = React.useState(false);
  const [reject, setReject] = React.useState(false);
  const [inquery, setInquery] = React.useState(false);
  const handleOpenAccept = () => setAccept(true);
  const handleCloseAccept = () => setAccept(false);
  const handleOpenReject = () => setReject(true);
  const handleCloseReject = () => setReject(false);
  const handleOpenInquery = () => setInquery(true);
  const handleCloseInquery = () => setInquery(false);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };

  return (
    <div>
      <div className="bg-white px-5 py-8 rounded-lg">
        <p className="text-lg text-mainColor font-medium font-sans capitalize text-center">
          orders Tour guide
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {tourOrdersRequests?.map((order) => (
            <div key={order?.id} className="bg-slate-200 rounded-lg p-3 h-fit">
              <ul className="flex flex-col space-y-3">
                <li className="">
                  <p className="text-[16px] font-sans  capitalize text-gray-600  file:">
                    name :
                    <span className="font-bold text-gray-800">
                      {order?.tour_order?.title}
                    </span>
                  </p>
                </li>
                <li className="">
                  <p className="text-[16px] font-sans  capitalize text-gray-600  file:">
                    start date :
                    <span className="font-bold text-gray-800">
                      {order?.tour_order?.start_date}
                    </span>
                  </p>
                </li>
                <li className="">
                  <p className="text-[16px] font-sans  capitalize text-gray-600  file:">
                    end date :
                    <span className="font-bold text-gray-800">
                      {order?.tour_order?.end_date}
                    </span>
                  </p>
                </li>
                <li className="">
                  <p className="text-[16px] font-sans  capitalize text-gray-600  file:">
                    transportation type :
                    <span className="font-bold text-gray-800">
                      {order?.tour_order?.transportation_type}
                    </span>
                  </p>
                </li>
                <li className="">
                  <p className="text-[16px] font-sans  capitalize text-gray-600  file:">
                    group nationality :
                    <span className="font-bold text-gray-800">
                      {order?.tour_order?.group_nationality}
                    </span>
                  </p>
                </li>
              </ul>

              {/* button opitional */}
              <div
                onClick={() => {
                  handleClick(order?.id);
                }}
                className=" flex items-center cursor-pointer justify-center mt-2 bg-blue-300 rounded-lg py-2"
              >
                <p className=" text-center capitalize text-lg font-medium text-gray-900 ">
                  option
                </p>
                <BiChevronDown className="text-[30px] " />
              </div>
              {activeIndex == order.id && (
                <div className="flex flex-col   justify-center py-4 space-y-3">
                  <div className="bg-mainColor py-3 px-7 rounded-lg  cursor-pointer flex items-center gap-3">
                    <button
                      onClick={handleOpenAccept}
                      className="text-sm font-sans font-medium capitalize text-white"
                    >
                      accept
                    </button>
                    <AiFillCheckCircle className="text-white text-[20px]" />
                  </div>
                  <div className="bg-MainYeloow py-3 px-7 rounded-lg  cursor-pointer flex items-center gap-3">
                    <button
                      onClick={handleOpenReject}
                      className="text-sm font-sans font-medium capitalize text-gray-900"
                    >
                      reject
                    </button>
                    <AiFillCloseCircle className="text-gray-900 text-[20px]" />
                  </div>
                  <div className=" border border-mainColor py-3 px-7 rounded-lg  cursor-pointer flex items-center gap-3">
                    <button
                      onClick={handleOpenInquery}
                      className="text-sm font-sans font-medium capitalize text-gray-700"
                    >
                      send inquiry
                    </button>
                    <AiFillQuestionCircle className="text-gray-700 text-[20px]" />
                  </div>
                </div>
              )}
              <Modal open={accept} onClose={handleCloseAccept}>
                <AcceptForm
                  handleCloseAccept={handleCloseAccept}
                  idOrder={order?.id}
                />
              </Modal>
              <Modal open={reject} onClose={handleCloseReject}>
                <RejectForm
                  handleCloseReject={handleCloseReject}
                  idOrder={order?.id}
                />
              </Modal>
              <Modal open={inquery} onClose={handleCloseInquery}>
                <SendInquiryForm
                  handleCloseInquery={handleCloseInquery}
                  idOrder={order?.id}
                />
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuideOrdersSection;
