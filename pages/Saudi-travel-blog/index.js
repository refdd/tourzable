import FormCustomizeTour from "@/components/customizeTour/FormCustomizeTour";
import MainHeaderList from "@/components/list/MainHeaderList";
import ListBlogContainer from "@/components/listPlog/ListBlogContainer";
import ReactPost from "@/components/listPlog/ReactPost";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import From from "@/components/single/From";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import Head from "next/head";
import React from "react";

function listBlog({ posts, recentPosts, cities }) {
  // console.log(recentPosts);
  return (
    <>
      <Head>
        <title>Saudi travel blog</title>
        <meta
          name="description"
          content="Looking for Saudi Arabia Tours Choose Among a huge array of Saudi Arabia Tour Packages visiting the best cities and attractions Book your Saudi Tour Now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"all blog"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5  md:grid-cols-3">
        <div className="col-span-2">
          <ListBlogContainer posts={posts} />
        </div>
        <div className=" col-span-1">
          <ReactPost recentPosts={recentPosts} />
          {/* <From /> */}
          <FormCustomizeTour blog cities={cities} />
        </div>
      </div>
      {/* <FaQSection /> */}
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </>
  );
}

export default listBlog;
export async function getStaticProps({ locale }) {
  const posts = await fetchApi(`${baseUrl}/posts?locale=${locale}`);
  const recentPosts = await fetchApi(
    `${baseUrl}/posts?locale=${locale}&limit=5`
  );
  const cities = await fetchApi(`${baseUrl}/cities?locale=${locale}`);

  return {
    props: {
      posts: posts.data,
      recentPosts: recentPosts.data,
      cities: cities.data,
    },
    revalidate: 10,
  };
}
