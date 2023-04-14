import ListBlogContainer from "@/components/listPlog/ListBlogContainer";
import ReactPost from "@/components/listPlog/ReactPost";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import From from "@/components/single/From";
import React from "react";

function listBlog() {
  return (
    <div>
      <NormailNavBar />
      <div className="pt-16 bg-[#f5f5f5]"></div>

      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"List Blog"}
        />
      </div>
      <HeaderPages
        title={"Travel articles"}
        desc={"Lorem ipsum is placeholder text commonly used in site."}
      />
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-1">
        <ListBlogContainer />
        <div>
          <ReactPost />
          <From />
        </div>
      </div>
    </div>
  );
}

export default listBlog;
