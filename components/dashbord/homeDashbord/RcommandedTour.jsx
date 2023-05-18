import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";
import TabsType from "../../hleper/TabsType";
import HeaderSections from "../../parts/HeaderSections";

function RcommandedTour({ packages }) {
  const { sideBar } = useStateContext();

  return (
    <div
      className={`container mx-auto px-4 ${sideBar ? "md:px-1 " : "md:px-10"}`}
    >
      <HeaderSections titel={"Recommanded With Tourzable"} />
      <TabsType packages={packages} />
    </div>
  );
}

export default RcommandedTour;
