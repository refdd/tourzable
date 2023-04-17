import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
} from "@mui/material";
import bg from "../../public/assets/images/contactUs.webp";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MuiPhoneNumber from "material-ui-phone-number-2";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { BsPersonAdd } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import StarIcon from "@mui/icons-material/Star";
import {
  MdBedroomParent,
  MdChildFriendly,
  MdOutlinePersonRemoveAlt1,
} from "react-icons/md";
import CustomTextField from "../hleper/CustomTextField";
import { useRouter } from "next/router";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function FormCustomizeTour() {
  const [number, setnumber] = useState("+1");
  const [counter, setCounter] = useState("");
  const [Destination, setDestination] = useState("");
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const [room, setroom] = useState(0);
  const [infant, setinfant] = useState(0);
  const [ratingStar, setRatingStar] = useState(2);
  const [hover, setHover] = useState(-1);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const handleCountersChange = (event) => {
    setCounter(event.target.value);
  };
  const handlesetDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const handlesetStartDateChange = (date) => {
    setStartDate(date);
  };
  const handlesetEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
    if (type == "room") {
      setroom(room + 1);
    }
    if (type == "infant") {
      setinfant(infant + 1);
    }
  };
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
    if (type == "room" && room > 0) {
      setroom(room - 1);
    }
    if (type == "infant" && infant > 0) {
      setinfant(infant - 1);
    }
  };
  const startDayFormate = StartDate
    ? StartDate.format("DD-MM-YYYY")
    : StartDate;
  const endDayFormate = EndDate ? EndDate.format("DD-MM-YYYY") : EndDate;
  const methods = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log({
      ...data,
      number,
      counter,
      Destination,
      startdate: startDayFormate,
      enddate: endDayFormate,
      room,
      aduits,
      childs,
      infant,
      ratingStar,
      checked,
    });
    router.push("/Thank_you");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-top  py-20 mt-10"
    >
      <div className="container mx-auto px-4 md:w-[50%] ">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="border rounded-md py-4 px-5 shadow-xl bg-white bg-opacity-[0.6]"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {/* frist name  */}
              <div className="">
                <CustomTextField
                  required
                  name="firstName "
                  label="Frist Name "
                  type={"text"}
                />
              </div>
              {/* last name */}
              <div className="">
                <CustomTextField
                  required
                  name="lastName "
                  label="Last Name "
                  type={"text"}
                />
              </div>
              {/*code andnumber */}
              <div className=" mt-2 ">
                <MuiPhoneNumber
                  sx={{ "& svg": { height: "0.9rem" } }}
                  // slot={{}}
                  label="Country Code & Phone Num"
                  value={number}
                  autoFormat={true}
                  fullWidth
                  required
                  variant="standard"
                  defaultCountry="us"
                  onChange={handleOnChange}
                />
              </div>
              {/*email address */}
              <div className=" md:mt-2">
                <CustomTextField
                  required
                  name="email"
                  label="Email Address"
                  type="email"
                />
              </div>
              {/* start point */}
              <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Your Start Point
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={counter}
                    onChange={handleCountersChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/*Destination */}
              <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Your Destination/S
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={Destination}
                    onChange={handlesetDestinationChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/*start date*/}
              <div className=" ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={StartDate}
                    onChange={handlesetStartDateChange}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        label: "Start Date",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              {/*endDate date*/}
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={EndDate}
                    onChange={handlesetEndDateChange}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        label: "End Date",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              {/* counter */}
              <div className="  md:col-span-2">
                <div className=" grid grid-cols-2 gap-5 mt-5 md:mt-0">
                  {/* room */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <MdBedroomParent className="text-2xl text-MainYeloow" />
                      <span className="text-sm text-[#555] font-sans capitalize font-medium">
                        {" "}
                        Room Number
                      </span>
                    </div>
                    <div className="flex items-center px-1">
                      <div
                        onClick={() => {
                          handleAddCounter("room");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <BsPersonAdd />{" "}
                      </div>
                      <TextField
                        fullWidth
                        type="tel"
                        variant="standard"
                        value={room}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                      <div
                        onClick={() => {
                          handleremoveCounter("room");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <MdOutlinePersonRemoveAlt1 />{" "}
                      </div>
                    </div>
                  </div>
                  {/* abults */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <ImMan className="text-2xl text-MainYeloow" />
                      <span className="text-sm text-[#555] font-sans capitalize font-medium">
                        {" "}
                        NO Of Adults
                      </span>
                    </div>
                    <div className="flex items-center px-1">
                      <div
                        onClick={() => {
                          handleAddCounter("adults");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <BsPersonAdd />{" "}
                      </div>
                      <TextField
                        fullWidth
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
                  {/* Childs */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <FaChild className="text-2xl text-MainYeloow" />
                      <span className="text-sm text-[#555] font-sans capitalize font-medium">
                        {" "}
                        NO Of Childs
                      </span>
                    </div>
                    <div className="flex items-center px-1">
                      <div
                        onClick={() => {
                          handleAddCounter("childs");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <BsPersonAdd />{" "}
                      </div>
                      <TextField
                        fullWidth
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
                  {/* INFANT */}
                  <div className=" ">
                    <div className="flex flex-col space-y-2  ">
                      <div className="flex items-center">
                        <MdChildFriendly className="text-2xl text-MainYeloow" />
                        <span className="text-sm text-[#555] font-sans capitalize font-medium">
                          {" "}
                          INFANT
                        </span>
                      </div>
                      <div className="flex items-center px-1">
                        <div
                          onClick={() => {
                            handleAddCounter("infant");
                          }}
                          className="text-mainColor text-xl cursor-pointer"
                        >
                          <BsPersonAdd />{" "}
                        </div>
                        <TextField
                          fullWidth
                          type="tel"
                          variant="standard"
                          value={infant}
                          inputProps={{ style: { textAlign: "center" } }}
                        />
                        <div
                          onClick={() => {
                            handleremoveCounter("infant");
                          }}
                          className="text-mainColor text-xl cursor-pointer"
                        >
                          <MdOutlinePersonRemoveAlt1 />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rating */}
              <div className="">
                <p className="text-lg text-mainColor font-semibold font-sans capitalize py-1">
                  Rating
                </p>

                <div className="flex items-center gap-5">
                  <Rating
                    name="hover-feedback"
                    value={ratingStar}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setRatingStar(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {ratingStar !== null && (
                    <span className="text-[16px] text-mainColor font-sans capitalize font-medium">
                      {labels[hover !== -1 ? hover : ratingStar]}
                    </span>
                  )}
                </div>
              </div>
              {/*text message */}
              <div className=" mt-5  md:col-span-2">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Add your suggestions to modify the itinerary or add other features or any additional special request"
                  {...methods.register("message", { required: true })}
                ></textarea>
              </div>
              {/* check box */}
              <div className=" flex items-center ">
                <Checkbox
                  required
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className="text-sm font-sans font-medium text-gray-800 capitalize">
                  Agree Our{" "}
                  <span className="text-mainColor cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  And
                  <span className="text-mainColor cursor-pointer">
                    {" "}
                    Privacy{" "}
                  </span>
                </p>
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
        </FormProvider>
      </div>
    </div>
  );
}

export default FormCustomizeTour;
