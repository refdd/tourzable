import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

function FilterDesktop() {
  const [value, setValue] = useState([0, 100]);
  const [place, setplace] = useState();
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePlace = (e) => {
    setplace(e.target.value);
  };
  const handleSearch = () => {
    router.push({ pathname: path, query: { search: place } });
  };
  return (
    <div className="container mx-auto px-4 pt-7">
      <div className="flex flex-col space-y-5">
        {/* search */}
        <div className="">
          <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
            Search by tour name
          </p>
          <div className=" py-6 border-b">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="ex: Al Ula Tour Package"
              placeholder="Search"
              multiline
              value={place}
              onChange={handlePlace}
            />
          </div>
        </div>
        {/* deals */}
        <div className="">
          <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
            Your Start Point
          </p>
          <ul className=" flex flex-col space-y-1  py-5  border-b">
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel control={<Checkbox />} label="Riyadh" />
              </div>
              {/* <span>92</span> */}
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel control={<Checkbox />} label="Tabuk" />
              </div>
              {/* <span>92</span> */}
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel control={<Checkbox />} label="Abha" />
              </div>
              {/* <span>92</span> */}
            </li>
            <li className="flex items-center justify-between">
              <div className="">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Al-Ula / Madian Saleh"
                />
              </div>
              {/* <span>92</span> */}
            </li>
          </ul>
        </div>
        {/* Popular Filters */}
        <div className="">
          <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
            number of Days
          </p>
          <ul className=" flex flex-col space-y-1  py-5  border-b">
            <li className="flex items-center justify-between">
              <div className="">
                <TextField
                  label="Days number"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        ex: 6 days
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
        {/* Nightly Price */}
        <div className="">
          <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
            Price Range
          </p>
          <div className="flex flex-col space-y-1  py-5  border-b">
            <Typography id="range-slider" gutterBottom>
              ${value[0]} - ${value[1]}
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={1000}
              sx={{
                "& .MuiSlider-thumb": {
                  color: "#5C2D90",
                },
                "& .MuiSlider-track": {
                  color: "#FFD440",
                },
                "& .MuiSlider-rail": {
                  color: "#acc4e4",
                },
                "& .MuiSlider-active": {
                  color: "green",
                },
              }}
            />
          </div>
        </div>
        {/*  */}
        {/* Nightly Price */}
        <div className="">
          <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
            Star Rating
          </p>
          <ul className="flex flex-wrap gap-2  py-5  border-b">
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-mainColor transition-all hover:text-white hover:bg-mainColor
               cursor-pointer  "
            >
              <span>3</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-mainColor transition-all hover:text-white hover:bg-mainColor
               cursor-pointer  "
            >
              <span>4</span>
            </li>
            <li
              className="flex justify-center items-center bg-[#3554d10d] rounded-full py-1 px-5
              text-[15px] font-medium  text-mainColor transition-all hover:text-white hover:bg-mainColor
               cursor-pointer  "
            >
              <span>5</span>
            </li>
          </ul>
        </div>
        {/* button Search */}
        <div
          className="flex justify-center items-center space-x-1
         bg-mainColor rounded py-3 text-white text-lg transition-all hover:bg-[#051036] hover:text-white"
        >
          <BiSearch className="" />
          <button onClick={handleSearch}>search</button>
        </div>
      </div>
    </div>
  );
}

export default FilterDesktop;
