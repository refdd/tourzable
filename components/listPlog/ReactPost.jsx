import Image from "next/image";
import React from "react";
import postImg2 from "../../public/assets/images/gallery2.png";
import postImg1 from "../../public/assets/images/gallery1.png";
import postImg3 from "../../public/assets/images/gallery3.png";
import { format } from "date-fns";
function ReactPost({ recentPosts }) {
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };
  return (
    <div className=" px-3">
      <p className="font-medium text-lg text-mainColor capitalize font-sans">
        Recent Posts
      </p>
      {recentPosts?.map((post) => (
        <div key={post.id} className="flex items-center gap-3 py-6">
          <div className="">
            <Image
              loader={() => {
                return `${post.image}`;
              }}
              unoptimized={true}
              src={post.image}
              loading={"lazy"}
              width={100}
              height={80}
              alt="reated post"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[15px] font-medium text-textPurple capitalize font-sans">
              {post.title}
            </p>
            <span className="text-[13px] text-[#051036] font-sans capitalize">
              {formatDate(post.updated_at)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReactPost;
