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
import React, { useEffect, useState } from "react";

function SingleTour() {
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
  return (
    <div className="">
      {isTop ? <NormailNavBar /> : <TapsTour />}

      {/*  */}
      <div className="pt-28 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs
          links={[
            { name: "Home", slug: "/" },
            {
              name: "List Popular Saudi Tours",
              slug: "/list-Popular-Saudi-Tours",
            },
          ]}
          currentLink={"Taif City Tour Cable Car Ride3"}
        />
      </div>
      <HeaderSingle />
      <SingleGalleryContainer />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-1">
        <div className="col-span-2 container mx-auto px-4">
          <OverView />
          <Itinerary />
          <AdditionalInfo />
          <CancellationPolicy />
          <TermsAndConditions />
          <LeaveReview />
        </div>
        <From />
      </div>
      <RelatedTours />
      <Subscribe />
      <DownLoadApp />
      <NotMember />
      <Footer />
    </div>
  );
}

export default SingleTour;
