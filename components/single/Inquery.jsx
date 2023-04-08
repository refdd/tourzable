import { TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { ImMan } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function Inquery() {
  const [number, setnumber] = useState("+1");
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
  const handleOnChange = (value) => {
    setnumber(value);
  };
  return (
    <form className="py-2 px-3 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {/* frist name  */}
        <div className="">
          <TextField
            fullWidth
            id="standard-basic"
            label="Frist Name"
            variant="standard"
            required
          />
        </div>
        {/* last name */}
        <div className="">
          <TextField
            required
            fullWidth
            id="standard-basic"
            label="Last Name"
            variant="standard"
          />
        </div>
        {/*email address */}
        <div className=" md:col-span-2">
          <TextField
            fullWidth
            type="email"
            id="standard-basic"
            label="Email Address"
            variant="standard"
            required
          />
        </div>
        {/*code andnumber */}
        <div className=" md:col-span-2 mt-5">
          <MuiPhoneNumber
            sx={{ "& svg": { height: "0.7em" } }}
            value={number}
            autoFormat={true}
            fullWidth
            defaultCountry="us"
            onChange={handleOnChange}
          />
        </div>
        {/* counter */}
        <div className="  md:col-span-2">
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
        {/*date*/}
        <div className=" mt-5  md:col-span-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                textField: { variant: "standard", fullWidth: true },
              }}
            />
          </LocalizationProvider>
        </div>
        {/*text message */}
        <div className=" mt-5  md:col-span-2">
          <textarea
            id="message"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Add your suggestions to modify the itinerary or add other features or any additional special request"
          ></textarea>
        </div>
        {/* buttonsent */}
        <div className=" md:col-span-2 ">
          <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
            <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
              send
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Inquery;
