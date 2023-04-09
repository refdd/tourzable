import { TextField } from "@mui/material";
import React from "react";

function LeaveReview() {
  return (
    <div className="container mx-auto px-4">
      <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
        Leave A Review
      </p>
      <form>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
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
