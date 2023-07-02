import DownLoadApp from "@/components/mainSections/DownLoadApp";
import FaQSection from "@/components/mainSections/FaQSection";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import OverViewSingleBlog from "@/components/singelBlog/OverViewSingleBlog";
import ReadAlso from "@/components/singelBlog/ReadAlso";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import From from "@/components/single/From";
import RelatedTours from "@/components/single/RelatedTours";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import { format } from "date-fns";
import Head from "next/head";
import React from "react";

function SingleLandmark({ singlelandmark, landmarks }) {
  // console.log(singlelandmark);
  const { image, desc, slug, title, created_at, meta_desc, meta_title } =
    singlelandmark;
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };
  return (
    <>
      <Head>
        <meta name="description" content={meta_desc} />
        <title>{meta_title} </title>
      </Head>
      <div>
        <NormailNavBar InSinglePage />
        <div className="pt-16 bg-[#f5f5f5]"></div>

        <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
          <IconBreadcrumbs
            links={[
              { name: "Home", slug: "/" },
              { name: "LandMarks", slug: "/LandMarks" },
            ]}
            currentLink={title}
          />
        </div>
        <HeaderPages title={title} desc={formatDate(created_at)} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 container mx-auto px-4">
          <OverViewSingleBlog image={image} description={desc} Slug={slug} />
          <div>
            {/* <RelatedTours blog /> */}
            <From />
          </div>
        </div>
        <ReadAlso titel={"Show more"} packages={landmarks} />
        {/* <FaQSection /> */}
        <Subscribe />
        {/* <DownLoadApp /> */}
        <NotMember />
        <Footer />
      </div>
    </>
  );
}

export default SingleLandmark;
export async function getServerSideProps({ params, locale }) {
  const singlelandmark = await fetchApi(`${baseUrl}/landmarks/${params.slug}`);
  const landmarks = await fetchApi(`${baseUrl}/landmarks?limit=8`);

  return {
    props: {
      singlelandmark: singlelandmark.data,
      landmarks: landmarks.data,
    }, // will be passed to the page component as props
  };
}
