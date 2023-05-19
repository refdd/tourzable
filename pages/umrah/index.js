import Head from "next/head";
import React from "react";
import MainHeader from "@/components/mainSections/MainHeader";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import HeaderList from "@/components/list/HeaderList";
import ListTourcontainer from "@/components/list/ListTourcontainer";
import FilterDesktop from "@/components/list/FilterDesktop";
import Subscribe from "@/components/mainSections/Subscribe";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import NotMember from "@/components/mainSections/NotMember";
import Footer from "@/components/mainSections/Footer";
import FaQSection from "@/components/mainSections/FaQSection";
import MainHeaderList from "@/components/list/MainHeaderList";
import { baseUrl, fetchApi } from "@/utils/ferchApi";

function umrah({ umrahs, regions }) {
  return (
    <>
      <Head>
        <title>Umrah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"SAUDI ARABIA Umrah"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="hidden md:block col-span-1">
          <FilterDesktop regions={regions} />
        </div>
        <div className="col-span-3">
          <HeaderList numberOfPackage={umrahs.length} regions={regions} />
          <ListTourcontainer pageType={"umrah"} tours={umrahs} />
        </div>
      </div>
      {/* <FaQSection /> */}
      <Subscribe />
      {/* <DownLoadApp /> */}
      <NotMember />
      <Footer />
    </>
  );
}

export default umrah;
export async function getServerSideProps({ query }) {
  const nameOfTour = query.search || null;
  const days = query.days_count || null;
  const min = query.price_range_from || null;
  const max = query.price_range_to || null;
  const umrahs = await fetchApi(
    `${baseUrl}/packages?type_id=3&days_count=${days}&search=${nameOfTour}&price_range_from=${min}&price_range_to=${max}`
  );
  const regions = await fetchApi(`${baseUrl}/regions`);

  return {
    props: {
      umrahs: umrahs.data,
      regions: regions.data,
    },
  };
}
