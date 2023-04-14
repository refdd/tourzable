import React from "react";
import BlogCard from "../cards/BlogCard";

function ListBlogContainer() {
  return (
    <div className="container mx-auto px-4  col-span-1 md:col-span-2">
      <div className="grid grid-cols-1 gap-4 md:gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default ListBlogContainer;
