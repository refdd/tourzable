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
import NoDataFounded from "../hleper/NoDataFounded";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function LandMarksContainer({ allregions }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [landmarks, setlandmarks] = useState(null);
  const { t, i18n } = useTranslation();

  const open = Boolean(anchorEl);
  const { destination, setDestination } = useStateContext();
  const router = useRouter();
  const { locale } = router;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios
      .get(
        `https://new.tourzable.com/api/${locale}/landmarks?region_id=${destination}&limit=4`
      )
      .then((response) => {
        setlandmarks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [destination, locale]);
  // console.log(landmarks);
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
          {t("common:home.Location")}
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
          {allregions?.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => {
                handleClose();
                setDestination(item.id);
              }}
            >
              {item.desc}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4">
        {landmarks?.length == 0 ? (
          <NoDataFounded />
        ) : (
          landmarks?.map((landmark) => (
            <LandMarksCard
              key={landmark.id}
              image={landmark.images}
              title={landmark.title}
              destination={landmark.city.title}
              slug={landmark.slug}
            />
          ))
        )}
        {}
      </div>
    </div>
  );
}

export default LandMarksContainer;
