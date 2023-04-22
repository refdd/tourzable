import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FaCalendar,
  FaHeart,
  FaHome,
  FaQuestion,
  FaStar,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import Link from "next/link";
function SideBArDashbord() {
  return (
    <div className=" flex flex-col items-center bg-white sticky top-16 rounded-r-lg">
      <List>
        <ListItem>
          <Link href={"/dashboard"}>
            <ListItemButton>
              <ListItemIcon>
                <FaHome className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/dashboard/MyBooking"}>
            <ListItemButton>
              <ListItemIcon>
                <FaCalendar className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={" My Bookings"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/dashboard/CustomBooking"}>
            <ListItemButton>
              <ListItemIcon>
                <FaStar className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={" Custom Bookings "} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/dashboard/Inquiries"}>
            <ListItemButton>
              <ListItemIcon>
                <FaQuestion className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"  inquiries "} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/dashboard/wishlist"}>
            <ListItemButton>
              <ListItemIcon>
                <FaHeart className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={" Favorites  "} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/dashboard/Settings"}>
            <ListItemButton>
              <ListItemIcon>
                <AiFillSetting className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"  Settings "} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>
            <ListItemButton>
              <ListItemIcon>
                <MdLogout className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"  Logout "} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default SideBArDashbord;
