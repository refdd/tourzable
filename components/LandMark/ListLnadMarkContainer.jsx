import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LandMarksCard from "./LandMarksCard";
import trip1 from "../../public/assets/images/QaisariahSouq.jpg";
import trip2 from "../../public/assets/images/Tarot Island.jpg";
import trip3 from "../../public/assets/images/eastern-province.jpg";

function ListLnadMarkContainer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-0 md:col-span-5 py-6">
      <div className=" flex justify-end">
        <Button
          id="basic-button"
          variant="outlined"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className={
            "text-lg text-mainColor capitalize  font-medium border-mainColor"
          }
          //   sx={{ fontSize: "17px" , textTransform:"capitalize" , color:"" }}
        >
          Destinations
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Eastern Province</MenuItem>
          <MenuItem onClick={handleClose}>Riyadh</MenuItem>
          <MenuItem onClick={handleClose}>Al-Qassim</MenuItem>
          <MenuItem onClick={handleClose}>northern borders</MenuItem>
          <MenuItem onClick={handleClose}>Al-jawf</MenuItem>
          <MenuItem onClick={handleClose}>Ha'll</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Tabuk</MenuItem>
          <MenuItem onClick={handleClose}>Medina</MenuItem>
          <MenuItem onClick={handleClose}>Mecca</MenuItem>
          <MenuItem onClick={handleClose}>Albahah</MenuItem>
          <MenuItem onClick={handleClose}>Asir</MenuItem>
          <MenuItem onClick={handleClose}>Nayjran</MenuItem>
        </Menu>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        <LandMarksCard
          imaga={trip1}
          title={"Al-Bayaa House (The House Of Allegiance )"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip1}
          title={"Al-Bayaa House (The House Of Allegiance )"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip2}
          title={"Tarot Island "}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip3}
          title={"King Abdulaziz World Cultural Center Ithra"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip1}
          title={"Al-Bayaa House (The House Of Allegiance )"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip1}
          title={"Al-Bayaa House (The House Of Allegiance )"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip3}
          title={"King Abdulaziz World Cultural Center Ithra"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip3}
          title={"King Abdulaziz World Cultural Center Ithra"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip1}
          title={"Al-Bayaa House (The House Of Allegiance )"}
          destination={" Eastern Province"}
        />
        <LandMarksCard
          imaga={trip2}
          title={"Tarot Island "}
          destination={" Eastern Province"}
        />
      </div>
    </div>
  );
}

export default ListLnadMarkContainer;
