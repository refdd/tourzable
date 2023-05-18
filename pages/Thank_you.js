import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import Link from "next/link";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";

function Thank_you() {
  return (
    <div>
      <NormailNavBar />
      <div className="pt-20 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"thank you"}
        />
      </div>
      <div className=" container mx-auto px-4 my-20 md:w-[50%] ">
        <div className="p-4 border rounded-md flex flex-col space-y-5 ">
          {/*  */}
          <p className=" text-[2.5rem] text-mainColor font-medium font-sans capitalize">
            Thank You
          </p>
          {/*  */}
          <div className=" p-[9px] flex justify-between items-start bg-MainYeloow rounded-md  ">
            <p className="text-lg text-mainColor font-sans capitalize font-medium">
              Your Booking Created Success , Booking ID : 424
            </p>
            <MdClose className="text-3xl text-mainColor cursor-pointer" />
          </div>
          {/*  */}
          <div className=" p-[9px] flex justify-between items-start bg-MainYeloow rounded-md  ">
            <p className="text-lg text-mainColor font-sans capitalize font-medium">
              Your Booking Created Success , Booking ID : 424
            </p>
          </div>
          {/*  */}
          {/* buttonsent */}
          <div className=" md:col-span-2 ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <Link href={"/dashboard"}>
                <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                  My Bookings
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Thank_you;
