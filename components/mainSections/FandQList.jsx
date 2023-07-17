import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

function FandQList() {
  return (
    <div className="col-span-2 mt-12 px-5 hidden md:block ">
      <ul className=" flex flex-col py-1 px-2 bg-gray-50 rounded-md divide-y">
        <li className=" py-3 cursor-pointer">
          <Link className="flex items-center justify-between" href={"#General"}>
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                General
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
        <li className=" py-3 cursor-pointer">
          <Link className="flex items-center justify-between" href={"#Booking"}>
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                Booking
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
        <li className=" py-3 cursor-pointer">
          <Link
            className="flex items-center justify-between"
            href={"#Registration"}
          >
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                Registration
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
        <li className=" py-3 cursor-pointer">
          <Link
            className="flex items-center justify-between"
            href={"#Payments"}
          >
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                Payments
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
        <li className=" py-3 cursor-pointer">
          <Link className="flex items-center justify-between" href={"#Terms"}>
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                Terms & Conditions
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
        <li className=" py-3 cursor-pointer">
          <Link
            className="flex items-center justify-between"
            href={"#Requirements"}
          >
            <div className="flex items-center gap-2 ">
              <TiDocumentText className="text-lg text-mainColor " />
              <span className="text-sm text-gray-700 font-sans font-medium capitalize">
                Travel Requirements
              </span>
            </div>
            <FaAngleRight className="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FandQList;
