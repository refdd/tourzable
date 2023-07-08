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
import { baseUrl, fetchApi } from "@/utils/ferchApi";
function ListTour({ tours, regions }) {
  console.log(tours);
  return (
    <>
      <Head>
        <title>Saudi Arabia Tours | Saudi Arabia Tour Packages </title>
        <meta
          name="description"
          content="Looking for Saudi Arabia Tours Choose Among a huge array of Saudi Arabia Tour Packages visiting the best cities and attractions Book your Saudi Tour Now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"SAUDI ARABIA TOURS"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5  md:grid-cols-5">
        <div className="hidden md:block col-span-1">
          <FilterDesktop regions={regions} />
        </div>
        <div className="col-span-4">
          <HeaderList numberOfPackage={tours?.length} regions={regions} />
          <ListTourcontainer pageType={"packages"} tours={tours} />
        </div>
      </div>
      {/* <FaQSection /> */}
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </>
  );
}

export default ListTour;

export async function getServerSideProps({ query, locale }) {
  const nameOfTour = query.search || "";
  const days = query.days_count || "";
  const min = query.price_range_from || 0;
  const max = query.price_range_to || 6666790;
  const location = JSON.stringify(query.location) || [];
  const currency = query.currency || "USD";
  // console.log(min, max);
  const tours = await fetchApi(
    `${baseUrl}/packages?cities=${location}&days_count=${days}&locale=${locale}&type_id=1&currency=${currency}&search=${nameOfTour}&price_range_from=${min}&price_range_to=${max}`
  );
  const regions = await fetchApi(`${baseUrl}/regions?locale=${locale}`);

  return {
    props: {
      tours: tours.data,
      regions: regions.data,
    },
  };
}
