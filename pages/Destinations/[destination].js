import Head from "next/head";
import React from "react";
import HeaderList from "@/components/list/HeaderList";
import ListTourcontainer from "@/components/list/ListTourcontainer";
import FilterDesktop from "@/components/list/FilterDesktop";
import Subscribe from "@/components/mainSections/Subscribe";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import NotMember from "@/components/mainSections/NotMember";
import Footer from "@/components/mainSections/Footer";
import FaQSection from "@/components/mainSections/FaQSection";
import MainHeaderList from "@/components/list/MainHeaderList";

function Destinations() {
  return (
    <>
      <Head>
        <title>Saudi Destinations </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"SAUDI ARABIA Destinations"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5  md:grid-cols-5">
        <div className="hidden md:block col-span-1">
          <FilterDesktop />
        </div>
        <div className="col-span-4">
          <HeaderList />
          <ListTourcontainer />
        </div>
      </div>
      {/* <FaQSection /> */}
      <Subscribe />
      <DownLoadApp />
      <NotMember />
      <Footer />
    </>
  );
}

export default Destinations;
