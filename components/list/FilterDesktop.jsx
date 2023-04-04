import {
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

function FilterDesktop() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container mx-auto px-4 pt-7">
      <div className="flex flex-col space-y-5">
        {/* search */}
        <div className="">
          <p className=" font-medium text-lg text-[#051036] font-sans capitalize ">
            Search by property name
          </p>
          <div className=" py-6 border-b">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="e.g Best Western"
              placeholder="Search"
              multiline
            />
          </div>
        </div>
        {/* deals */}
        <div className="">
          <p className=" font-medium text-lg text-[#051036] font-sans capitalize ">
            Search by property name
          </p>
          <ul className=" flex flex-col space-y-1  py-5  border-b">
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Free cancellation"
                />
              </div>
              {/* <span>92</span> */}
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Reserve now, pay at stay"
                />
              </div>
              {/* <span>92</span> */}
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="
                  Properties with special offers"
                />
              </div>
              {/* <span>92</span> */}
            </li>
          </ul>
        </div>
        {/* Popular Filters */}
        <div className="">
          <p className=" font-medium text-lg text-[#051036] font-sans capitalize ">
            Popular Filters
          </p>
          <ul className=" flex flex-col space-y-1  py-5  border-b">
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Breakfast Included"
                />
              </div>
              <span>92</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel control={<Checkbox />} label="Romantic" />
              </div>
              <span>45</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="
                  Airport Transfer"
                />
              </div>
              <span>21</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="
                  WiFi Included"
                />
              </div>
              <span>68</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel control={<Checkbox />} label="5 Star" />
              </div>
              <span>679</span>
            </li>
          </ul>
        </div>
        {/* Nightly Price */}
        <div className="">
          <p className=" font-medium text-lg text-[#051036] font-sans capitalize ">
            Popular Filters
          </p>
          <div className="flex flex-col space-y-1  py-5  border-b">
            <Typography id="range-slider" gutterBottom>
              $0 - $700
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />
          </div>
        </div>
        {/*  */}
        {/* Nightly Price */}
        <div className="">
          <p className=" font-medium text-lg text-[#051036] font-sans capitalize ">
            Star Rating
          </p>
          <ul className="flex flex-wrap gap-2  py-5  border-b">
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-[#3554d1] transition-all hover:text-white hover:bg-[#3554d1]
               cursor-pointer  "
            >
              <span>1</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-[#3554d1] transition-all hover:text-white hover:bg-[#3554d1]
               cursor-pointer  "
            >
              <span>2</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-[#3554d1] transition-all hover:text-white hover:bg-[#3554d1]
               cursor-pointer  "
            >
              <span>3</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-[#3554d1] transition-all hover:text-white hover:bg-[#3554d1]
               cursor-pointer  "
            >
              <span>4</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-[#3554d1] transition-all hover:text-white hover:bg-[#3554d1]
               cursor-pointer  "
            >
              <span>5</span>
            </li>
          </ul>
        </div>
        {/* button Search */}
        <div
          className="flex justify-center items-center space-x-1
         bg-[#3554d1] rounded py-3 text-white text-lg transition-all hover:bg-[#051036] hover:text-white"
        >
          <BiSearch className="" />
          <button>search</button>
        </div>
      </div>
    </div>
  );
}

export default FilterDesktop;
