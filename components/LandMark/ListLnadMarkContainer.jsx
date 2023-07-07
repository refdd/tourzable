import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LandMarksCard from "./LandMarksCard";
import { useRouter } from "next/router";

function ListLnadMarkContainer({ regions, landmarks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelAddRedions = (regionId) => {
    router.push({
      pathname: path,
      query: {
        region: regionId,
      },
    });
  };
  // console.log(landmarks[0]);
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
          location
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
          {regions?.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => {
                handleClose();
                handelAddRedions(item.id);
              }}
            >
              {item.desc}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        {landmarks?.map((landmark) => (
          <LandMarksCard
            key={landmark?.id}
            image={landmark?.images}
            title={landmark?.title}
            destination={landmark?.city?.title}
            slug={landmark?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListLnadMarkContainer;
