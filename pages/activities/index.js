import Head from "next/head";
import React from "react";
import HeaderList from "@/components/list/HeaderList";
import ListTourcontainer from "@/components/list/ListTourcontainer";
import FilterDesktop from "@/components/list/FilterDesktop";
import Subscribe from "@/components/mainSections/Subscribe";
import NotMember from "@/components/mainSections/NotMember";
import Footer from "@/components/mainSections/Footer";
import MainHeaderList from "@/components/list/MainHeaderList";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
function PopularActivities({ Activities, regions }) {
  // console.log(Activities[0]);
  // const { locale } = useRouter();
  // console.log(locale);
  return (
    <>
      <Head>
        <title>
          Activities in Saudi Arabia | Activities in Riyadh |
          Activities in Jeddah{" "}
        </title>
        <meta
          name="description"
          content="We’ve rounded up the best Saudi Activities in Riyadh, Jeddah, Khobar and more! Explore Saudi Arabia s top attractions like never before"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"SAUDI ARABIA Activities"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="hidden md:block col-span-1">
          <FilterDesktop regions={regions} />
        </div>
        <div className="col-span-3">
          <HeaderList numberOfPackage={Activities?.length} regions={regions} />
          <ListTourcontainer pageType={"activities"} tours={Activities} />
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

export default PopularActivities;
export async function getServerSideProps({ query, locale }) {
  const nameOfTour = query.search || "";
  const days = query.days_count || "";
  const min = query.price_range_from || 0;
  const max = query.price_range_to || 6666790;
  const Activities = await fetchApi(
    `${baseUrl}/packages?locale=${locale}&type_id=2&days_count=${days}&search=${nameOfTour}&price_range_from=${min}&price_range_to=${max}`
  );
  const regions = await fetchApi(`${baseUrl}/regions?locale=${locale}`);

  return {
    props: {
      Activities: Activities.data,
      regions: regions.data,
    },
  };
}
