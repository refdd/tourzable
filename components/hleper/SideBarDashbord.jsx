import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
import { useSession, signOut } from "next-auth/react";

function SideBArDashbord() {
  const { data: session } = useSession();

  const [guide, setGuide] = useState(false);
  useEffect(() => {
    if (session?.user?.is_TourGuide) {
      setGuide(true);
    } else {
      setGuide(false);
    }
  }, [session]);
  return (
    <div className=" flex flex-col items-center bg-white sticky top-16 rounded-r-lg">
      {guide ? (
        <List>
          <ListItem>
            <Link href={"/dashboard/guide-orders"}>
              <ListItemButton>
                <ListItemIcon>
                  <FaHome className="text-2xl text-mainColor" />
                </ListItemIcon>
                <ListItemText primary={"Guide Orders "} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"/dashboard/calenderGuide"}>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon className="text-2xl text-mainColor" />
                </ListItemIcon>
                <ListItemText primary={" calender Guide  "} />
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
          <ListItem
            onClick={() => {
              signOut({
                callbackUrl: `${window.location.origin}/Login`,
              });
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <MdLogout className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"  Logout "} />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
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
            <Link href={"/dashboard/mybooking"}>
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
          <ListItem
            onClick={() => {
              signOut({
                callbackUrl: `${window.location.origin}/Login`,
              });
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <MdLogout className="text-2xl text-mainColor" />
              </ListItemIcon>
              <ListItemText primary={"  Logout "} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </div>
  );
}

export default SideBArDashbord;
