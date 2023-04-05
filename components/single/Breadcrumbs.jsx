import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { BiHome, BiListMinus } from "react-icons/bi";
import { GiFlyingTrout } from "react-icons/gi";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import GrainIcon from "@mui/icons-material/Grain";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" className="" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          {/* <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          <BiHome className="text-lg " />

          <span className="text-lg ml-2 capitalize "> Home</span>
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/list-Popular-Saudi-Tours"
        >
          {/* <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          <BiListMinus className="text-lg" />
          <span className="text-lg ml-2 capitalize ">
            {" "}
            list Popular Saudi Tours
          </span>
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {/* <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          <GiFlyingTrout />

          <span className="text-lg ml-2 capitalize ">
            {" "}
            taif city tour cable car ride3
          </span>
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
