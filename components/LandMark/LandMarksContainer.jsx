import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LandMarksCard from "./LandMarksCard";
import trip1 from "../../public/assets/images/QaisariahSouq.jpg";
import trip2 from "../../public/assets/images/Tarot Island.jpg";
import trip3 from "../../public/assets/images/eastern-province.jpg";
import { useStateContext } from "@/contexts/ContextProvider";
import axios from "axios";

function LandMarksContainer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [landmarks, setlandmarks] = useState(null);
  const open = Boolean(anchorEl);
  const { destination, setDestination } = useStateContext();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios
      .get(
        `http://new.tourzable.com/api/landmarks?city_id=${destination}&limit=4`
      )
      .then((response) => {
        setlandmarks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [destination]);

  console.log(landmarks);
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
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(15);
            }}
          >
            Eastern Province
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(1);
            }}
          >
            Riyadh
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(14);
            }}
          >
            Al-Qassim
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(14);
            }}
          >
            northern borders
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(14);
            }}
          >
            Al-jawf
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(6);
            }}
          >
            Ha'll
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(4);
            }}
          >
            Tabuk
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(22);
            }}
          >
            Medina
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(3);
            }}
          >
            Mecca
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(13);
            }}
          >
            Albahah
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(3);
            }}
          >
            Asir
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setDestination(3);
            }}
          >
            Nayjran
          </MenuItem>
        </Menu>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {landmarks?.map((landmark) => (
          <LandMarksCard
            key={landmark.id}
            imaga={landmark.image}
            title={landmark.title}
            destination={" Eastern Province"}
          />
        ))}
      </div>
    </div>
  );
}

export default LandMarksContainer;
