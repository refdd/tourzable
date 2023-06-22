import DashboarNumbers from "@/components/dashbord/homeDashbord/DashboarNumbers";
import DashbordNavBar from "@/components/dashbord/homeDashbord/DashbordNavBar";
import RcommandedTour from "@/components/dashbord/homeDashbord/RcommandedTour";
import Loading from "@/components/hleper/Loading";
import SideBArDashbord from "@/components/hleper/SideBarDashbord";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Dashboard({ tours, activitys, umrah, landmarks, profileData }) {
  const { sideBar } = useStateContext();
  const { data: session } = useSession();
  const router = useRouter();
  const { query, pathname } = router;
  // console.log(query.token);
  useEffect(() => {
    if (session) {
      router.push({
        pathname: pathname,
        query: {
          token: session.user.accessToken,
        },
      });
    }
  }, [session]);
  if (!query.token) {
    return <Loading />;
  }
  // console.log(profileData);
  return (
    <div className="bg-[#f5f5f5]">
      <DashbordNavBar />
      <div className="pt-14 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"dashboard"}
        />
      </div>
      <HeaderPages
        title={"Dashboard"}
        desc={"Lorem ipsum dolor sit amet, consectetur."}
      />
      <div className=" grid grid-cols-1 gap-7 md:grid-cols-8 md:gap-1">
        <div
          className={
            !sideBar
              ? " sm:hidden  block col-span-2"
              : "sm:hidden md:block  hidden col-span-2"
          }
        >
          <SideBArDashbord />
        </div>
        <div className={sideBar ? "md:col-span-6 " : "md:col-span-8  "}>
          {/* <DashboarNumbers profileData={profileData} /> */}
          <RcommandedTour
            packages={tours}
            activitys={activitys}
            umrah={umrah}
            landmarks={landmarks}
          />
        </div>
      </div>
      <Subscribe />
      {/* <DownLoadApp /> */}
      <NotMember />
      <Footer />
    </div>
  );
}

export default Dashboard;
export async function getServerSideProps({ query, locale }) {
  const token = query.token || "";
  // const profileData = await fetchApi(`${baseUrl}/${locale}/profile`, token);
  const tours = await fetchApi(
    `${baseUrl}/${locale}/packages?type_id=1&limit=7`
  );
  const activitys = await fetchApi(
    `${baseUrl}/${locale}/packages?type_id=2&limit=7`
  );
  const umrah = await fetchApi(
    `${baseUrl}/${locale}/packages?type_id=3&limit=7`
  );
  const landmarks = await fetchApi(`${baseUrl}/${locale}/landmarks?limit=7`);

  return {
    props: {
      // profileData: profileData.data,
      tours: tours.data,
      activitys: activitys.data,
      umrah: umrah.data,
      landmarks: landmarks.data,
    },
  };
}
