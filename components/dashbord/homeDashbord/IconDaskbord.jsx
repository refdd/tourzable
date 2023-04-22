import { useStateContext } from "@/contexts/ContextProvider";
import { Button, Drawer } from "@mui/material";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import ListDashbord from "./ListDashbord";

function IconDaskbord() {
  const { navDashbord, setnavDashbord, toggleDrawer } = useStateContext();
  return (
    <div>
      <div
        onClick={toggleDrawer()}
        className=" text-3xl  text-white cursor-pointer"
      >
        <BiMenuAltLeft />
      </div>

      <Drawer anchor={"left"} open={navDashbord} onClose={toggleDrawer()}>
        <ListDashbord anchor={"left"} />
      </Drawer>
    </div>
  );
}

export default IconDaskbord;
