import TableBooking from "@/components/dashbord/booking/TableBooking";
import TableData from "@/components/dashbord/booking/TableData";
import FavoritesTour from "@/components/dashbord/Favorites/FavoritesTour";
import DashbordNavBar from "@/components/dashbord/homeDashbord/DashbordNavBar";
import SideBArDashbord from "@/components/hleper/SideBarDashbord";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";

function Wishlist() {
  const { sideBar } = useStateContext();

  return (
    <div className="bg-[#f5f5f5]">
      <DashbordNavBar />
      <div className="pt-14 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"dashboard"}
        />
      </div>
      <HeaderPages
        title={"Wishlist"}
        desc={"Lorem ipsum dolor sit amet, consectetur."}
      />
      <div className=" grid grid-cols-1 gap-7 md:grid-cols-8 md:gap-1">
        <div
          className={
            !sideBar
              ? " sm:hidden  block col-span-2"
              : "sm:hidden md:block  hidden col-span-2"
          }
        >
          <SideBArDashbord />
        </div>
        <div className={sideBar ? "md:col-span-6 " : "md:col-span-8  "}>
          {/* <TableData /> */}
          {/* <TableBooking /> */}
          <FavoritesTour />
        </div>
      </div>
      <Subscribe />
      {/* <DownLoadApp /> */}
      <NotMember />
      <Footer />
    </div>
  );
}

export default Wishlist;
