import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import AdditionalInfo from "@/components/single/AdditionalInfo";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import CancellationPolicy from "@/components/single/CancellationPolicy";
import From from "@/components/single/From";
import HeaderSingle from "@/components/single/HeaderSingle";
import Itinerary from "@/components/single/Itinerary";
import LeaveReview from "@/components/single/LeaveReview";
import OverView from "@/components/single/OverView";
import RelatedTours from "@/components/single/RelatedTours";
import SingleGalleryContainer from "@/components/single/SingleGalleryContainer";
import TapsTour from "@/components/single/TapsTour";
import TermsAndConditions from "@/components/single/TermsAndConditions";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function SingleActivties({ singletour }) {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);
  const {
    best_price,
    title,
    package_rating,
    city,
    min,
    max,
    duration,
    desc,
    days,
    note,
    includes,
    unincludes,
    board,
    policy,
    id,
    hotel_rate,
    slug,
    image,
    meta_desc,
    meta_title,
    immediate_booking,
    code,
    reviews_count,
  } = singletour;
  // console.log(singletour);
  return (
    <>
      <Head>
        <meta name="description" content={meta_desc} />
        <title>{meta_title} </title>
      </Head>
      <div className="">
        {isTop ? <NormailNavBar InSinglePage /> : <TapsTour />}

        {/*  */}
        <div className="pt-28 bg-[#f5f5f5]"></div>
        <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
          <IconBreadcrumbs
            links={[
              { name: "Home", slug: "/" },
              {
                name: "Popular Activities",
                slug: "/activities",
              },
            ]}
            currentLink={slug}
          />
        </div>
        <HeaderSingle
          title={title}
          reviews_count={reviews_count}
          location={city?.title}
          price={best_price}
          starNumber={package_rating}
        />
        <SingleGalleryContainer image={image} days={days} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-1">
          <div className="col-span-2 container mx-auto px-4">
            <OverView
              min={min}
              max={max}
              duration={duration}
              desc={desc}
              includes={includes}
              unincludes={unincludes}
              board={board}
              tourCode={code}
              hotel_rate={hotel_rate?.title}
            />
            <Itinerary daysItinerary={days} />
            <AdditionalInfo noteContent={note} />
            <CancellationPolicy Cancellation_Policy={policy} />
            <TermsAndConditions />
            <LeaveReview />
          </div>
          <From
            idPackage={id}
            image={image}
            title={title}
            tourCode={code}
            best_price={best_price}
            min={min}
            max={max}
            payMode={immediate_booking}
          />
        </div>
        {/* <RelatedTours /> */}
        <Subscribe />
        {/* <DownLoadApp /> */}
        {/* <NotMember /> */}
        <Footer />
      </div>
    </>
  );
}

export default SingleActivties;
export async function getServerSideProps({ params, locale, query }) {
  const currency = query.currency || "USD";
  const singletour = await fetchApi(
    `${baseUrl}/packages/${params.slug}?locale=${locale}&currency=${currency}`
  );
  // const singletour = await fetchApi(
  //   `${baseUrl}/${locale}/packages/${params.slug}`
  // );

  return {
    props: {
      singletour: singletour.data,
    }, // will be passed to the page component as props
  };
}
