import { Grid, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import DateRangePicker from "./DateRangePicker";
import { useStateContext } from "../../contexts/ContextProvider";
import { format } from "date-fns";
const countries = [
  { id: 1, label: "United States", value: "USA" },
  { id: 2, label: "Canada", value: "CAN" },
  { id: 3, label: "Mexico", value: "MEX" },
  { id: 4, label: "Argentina", value: "ARG" },
  { id: 5, label: "Brazil", value: "BRA" },
  { id: 6, label: "Chile", value: "CHL" },
  { id: 7, label: "Colombia", value: "COL" },
];

function SearcHome() {
  const { dateRange, setDateRange } = useStateContext();
  const [location, setLocation] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ ...data, location });

  const formattedStartDate = format(dateRange.startDate, "EEE dd MMM");
  const formattedEndDate = format(dateRange.endDate, "EEE dd MMM");
  return (
    <div className="w-[90%] bg-white rounded-md mt-10 mx-auto  md:rounded-[100px] shadow-lg border md:border-0 md:shadow-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row  md:divide-x space-y-4 py-5 px-6 md:py-0"
      >
        <div className=" md:w-[40%] md:px-3">
          <div className="felx flex-col justify-center md:mt-2">
            <InputLabel>Location</InputLabel>
            <Select
              variant="standard"
              value={location}
              fullWidth
              onChange={(e) => setLocation(e.target.value)}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <em className="text-gray-500 my-4 capitalize">
                      tour landmark
                    </em>
                  );
                }
                const reasit = countries.filter(
                  (item) => item.value == selected
                );
                console.log(reasit[0].label);
                return reasit[0].label;
              }}
              displayEmpty
            >
              <MenuItem disabled value="">
                <em>tour landmark</em>
              </MenuItem>
              {countries.map((item) => (
                <MenuItem key={item.id} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="relative md:w-[40%] md:px-3">
          <div className="flex flex-col space-y-1 border-b pb-4">
            <p className="font-medium text-sm font-sans text-[#051036] ">
              Check in - Check out
            </p>
            <p className="text-[#697488] text-sm font-light  ">
              {formattedStartDate}- {formattedEndDate}
            </p>
          </div>

          {/* <DateRangePicker /> */}
        </div>
        <div
          className="  group flex space-x-1 justify-center transition-all items-center bg-secondColor
         hover:md:bg-mainLightColor rounded py-5  md:flex-1  md:px-3 md:h-12 md:rounded-[100px] "
        >
          <BiSearch className="text-white text-lg" />
          <button className="text-lg text-white font-sans  font-medium">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearcHome;
