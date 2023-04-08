import { TextField } from "@mui/material";
import React from "react";

function Inquery() {
  return (
    <form className="py-2 px-3 ">
      <div className="grid grid-cols-1 gap-4">
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
        {/* last name */}
        <div className="">
          <TextField
            fullWidth
            type="email"
            id="standard-basic"
            label="Email Address"
            variant="standard"
            required
          />
        </div>
      </div>
    </form>
  );
}

export default Inquery;
