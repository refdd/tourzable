import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

function CheckAvailability() {
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
  };
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  return (
    <form className="py-2 px-3 ">
      <div className="grid grid-cols-2 gap-4 ">
        {/*date*/}
        <div className=" mt-5 ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                textField: {
                  variant: "standard",
                  fullWidth: true,
                  label: "Start Day",
                },
              }}
            />
          </LocalizationProvider>
        </div>
        <div className=" mt-5 ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                textField: {
                  variant: "standard",
                  fullWidth: true,
                  label: "End Day",
                },
              }}
            />
          </LocalizationProvider>
        </div>
        {/* counter */}
        <div className=" col-span-2 border-y-2 py-4">
          <div className=" grid grid-cols-2 gap-3 mt-5">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <ImMan className="text-2xl text-MainYeloow" />
                <span className="text-sm text-[#555] font-sans capitalize font-medium">
                  {" "}
                  NO Of Adults
                </span>
              </div>
              <div className="flex items-center px-5">
                <div
                  onClick={() => {
                    handleAddCounter("adults");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <BsPersonAdd />{" "}
                </div>
                <TextField
                  type="tel"
                  variant="standard"
                  value={aduits}
                  inputProps={{ style: { textAlign: "center" } }}
                />
                <div
                  onClick={() => {
                    handleremoveCounter("adults");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <MdOutlinePersonRemoveAlt1 />{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <FaChild className="text-2xl text-MainYeloow" />
                <span className="text-sm text-[#555] font-sans capitalize font-medium">
                  {" "}
                  NO Of Childs
                </span>
              </div>
              <div className="flex items-center px-5">
                <div
                  onClick={() => {
                    handleAddCounter("childs");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <BsPersonAdd />{" "}
                </div>
                <TextField
                  type="tel"
                  variant="standard"
                  value={childs}
                  inputProps={{ style: { textAlign: "center" } }}
                />
                <div
                  onClick={() => {
                    handleremoveCounter("childs");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <MdOutlinePersonRemoveAlt1 />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* buttonsent */}
        <div className=" col-span-2 ">
          <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
            <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
              Check availability
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CheckAvailability;
