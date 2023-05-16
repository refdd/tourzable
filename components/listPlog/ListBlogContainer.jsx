import React from "react";
import BlogCard from "../cards/BlogCard";
import SeeMore from "../hleper/SeeMore";
import { useStateContext } from "@/contexts/ContextProvider";

function ListBlogContainer({ posts }) {
  const { loadMore, setLoadMore } = useStateContext();

  return (
    <div className="container mx-auto px-4  col-span-1 md:col-span-2">
      <div className="grid grid-cols-1 gap-4 md:gap-10">
        {posts?.slice(0, loadMore)?.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            duration={post.created_at}
            title={post.title}
            desc={
              " For decades, travelers have been escaping to the Catskills — amountainous region in upstate New York — whenever they’ve neededa reset"
            }
            author={""}
            name={"Mahamed refat"}
            job={"Web designer"}
            slug={post.slug}
          />
        ))}
      </div>
      <SeeMore />
    </div>
  );
}

export default ListBlogContainer;
