import MainHeaderList from "@/components/list/MainHeaderList";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import FandQcontainer from "@/components/mainSections/FandQcontainer";
import FandQList from "@/components/mainSections/FandQList";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import OverViewTerms from "@/components/mainSections/OverViewTerms";
import Subscribe from "@/components/mainSections/Subscribe";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import Head from "next/head";
import React from "react";

function Privacy({ privacy }) {
  console.log(privacy);
  return (
    <>
      <Head>
        <title>{privacy?.meta_title}</title>
        <meta name="description" content={privacy?.meta_desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"Privacy "} />
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"FAQ"}
        />
      </div>
      <OverViewTerms data={privacy} />
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </>
  );
}

export default Privacy;
export async function getServerSideProps({ locale, query }) {
  const privacy = await fetchApi(`${baseUrl}/pages/privacy?locale=${locale}`);

  return {
    props: {
      privacy: privacy.data,
    },
  };
}
