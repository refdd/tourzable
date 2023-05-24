import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";
import TabsType from "../../hleper/TabsType";
import HeaderSections from "../../parts/HeaderSections";

function RcommandedTour({ packages, activitys, umrah, landmarks }) {
  const { sideBar } = useStateContext();

  return (
    <div
      className={`container mx-auto px-4 ${sideBar ? "md:px-1 " : "md:px-10"}`}
    >
      <HeaderSections titel={"Recommanded With Tourzable"} />
      <TabsType
        packages={packages}
        activitys={activitys}
        umrah={umrah}
        landmarks={landmarks}
      />
    </div>
  );
}

export default RcommandedTour;
