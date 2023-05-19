import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

function FilterDesktop({ regions }) {
  const [priceRang, setpriceRang] = useState([0, 100]);
  const [location, setLocation] = useState("");
  const [nameOfpackage, setnameOfpackage] = useState();
  const [starNumber, setstarNumber] = React.useState(4);
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;
  const methods = useForm();

  const handleChange = (event, newValue) => {
    setpriceRang(newValue);
  };
  const handlePlace = (e) => {
    setnameOfpackage(e.target.value);
  };

  const onSubmit = (data) => {
    router.push({
      pathname: path,
      query: {
        search: data.search,
        days_count: data.days,
        price_range_from: priceRang[0],
        price_range_to: priceRang[1],
      },
    });
    console.log({
      ...data,
      location,
      minPrice: priceRang[0],
      maxPrice: priceRang[1],
      starNumber,
    });
  };
  return (
    <div className="container mx-auto px-4 pt-7">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          {/* search */}
          <div className="">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              Search by tour name
            </p>
            <div className=" py-6 border-b">
              <Controller
                name={"search"}
                control={methods.control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type={"text"}
                    {...field}
                    label="ex: Al Ula Tour Package"
                    fullWidth
                    variant="outlined"
                    id="outlined-required"
                  />
                )}
              />
            </div>
          </div>
          {/* deals */}
          <div className=" flex flex-col space-y-3">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              Your Start Point
            </p>
            <Select
              variant="outlined"
              value={location}
              fullWidth
              onChange={(e) => setLocation(e.target.value)}
              renderValue={(selected) => {
                if (selected?.length === 0) {
                  return (
                    <em className="text-gray-500 my-4 capitalize">
                      tour location
                    </em>
                  );
                }
                const reasit = regions.filter((item) => item.id == selected);
                // console.log(reasit[0].title);
                return reasit[0].title;
              }}
              displayEmpty
            >
              <MenuItem disabled value="">
                <em>tour landmark</em>
              </MenuItem>
              {regions.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* Popular Filters */}
          <div className="">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              number of Days
            </p>
            <ul className=" flex flex-col space-y-1  py-5  border-b">
              <li className="flex items-center justify-between">
                <div className="">
                  {/* <TextField
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
                  /> */}
                  <Controller
                    name={"days"}
                    control={methods.control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        type={"number"}
                        {...field}
                        label="Days number"
                        fullWidth
                        variant="outlined"
                        id="outlined-required"
                      />
                    )}
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
                ${priceRang[0]} - ${priceRang[1]}
              </Typography>
              <Slider
                value={priceRang}
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
          <div className=" flex flex-col space-y-3">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              Star Rating
            </p>

            <Rating
              name="simple-controlled"
              value={starNumber}
              onChange={(event, newValue) => {
                setstarNumber(newValue);
              }}
            />
          </div>
          {/* button Search */}
          <div
            className="flex justify-center items-center space-x-1
         bg-mainColor rounded py-3 text-white text-lg transition-all hover:bg-[#051036] hover:text-white"
          >
            <BiSearch className="" />
            <button>search</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FilterDesktop;
