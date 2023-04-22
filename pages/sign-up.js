import FormSignUp from "@/components/auth/FormSignUp";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import React from "react";

function signUp() {
  return (
    <div>
      <NormailNavBar />
      <div className="pt-14 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"Sign Up"}
        />
      </div>
      <FormSignUp />
    </div>
  );
}

export default signUp;
