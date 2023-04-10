import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function LeaveReview() {
  const [openReview, setOpenReview] = useState(false);
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div id="Reviews" className="container mx-auto px-4 mt-5">
      <div
        onClick={() => {
          setOpenReview(!openReview);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          Leave A Review
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  ${
            openReview ? "rotate-180" : " rotate-0"
          }`}
        />
      </div>

      <form>
        <div
          className={` grid-cols-1 gap-5 md:grid-cols-2 border transition-all rounded-md p-3 shadow-lg mt-5  ${
            openReview ? "grid" : "hidden "
          }`}
        >
          {/* frist name  */}
          <div className="">
            <TextField
              fullWidth
              id="standard-basic"
              label="Full Name"
              variant="standard"
              required
            />
          </div>
          {/*email address */}
          <div className=" md:col-span-1">
            <TextField
              fullWidth
              type="email"
              id="standard-basic"
              label="Email Address"
              variant="standard"
              required
            />
          </div>
          {/* package Review */}
          <div className="md:col-span-1">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Package Review
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Package Review"
              >
                <MenuItem value="">
                  <em>star</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Operator Review*/}
          <div className="md:col-span-1">
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Operator Review
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Operator Review"
              >
                <MenuItem value="">
                  <em>star</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/*text message */}
          <div className=" mt-5  md:col-span-2">
            <p>Comment</p>
            <textarea
              id="message"
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LeaveReview;
