import MainHeaderList from "@/components/list/MainHeaderList";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import FandQcontainer from "@/components/mainSections/FandQcontainer";
import FandQList from "@/components/mainSections/FandQList";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import OverViewTerms from "@/components/mainSections/OverViewTerms";
import Subscribe from "@/components/mainSections/Subscribe";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import Head from "next/head";
import React from "react";

function CancellationPolicy() {
  return (
    <>
      <Head>
        <title>list Popular Saudi Tours </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"Cancellation Policy "} />
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"Cancellation Policy"}
        />
      </div>
      <OverViewTerms />
      <Subscribe />
      <DownLoadApp />
      <NotMember />
      <Footer />
    </>
  );
}

export default CancellationPolicy;
