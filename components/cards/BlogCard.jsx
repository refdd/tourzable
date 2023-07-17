import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../../public/assets/images/attractive-g1ed8274c6_640.jpg";
import blog from "../../public/assets/images/trip1.png";
import { format } from "date-fns";
function BlogCard({ image, duration, title, desc, author, name, job, slug }) {
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };
  return (
    <Link href={`Saudi-travel-blog/${slug}`}>
      <div className="border rounded-md shadow-lg shadow-shadowColorMain md:py-7 ">
        <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-3">
          <div className="relative w-full h-[200px]  md:h-[220px] col-span-1 ">
            <Image
              loader={() => {
                return `${image}`;
              }}
              unoptimized={true}
              src={image}
              fill
              loading="lazy"
              alt="blog"
              className=" rounded-md"
            />
          </div>
          <div className="col-span-1  md:col-span-2">
            <div className="flex flex-col gap-3">
              <p className="text-[15px] text-[#697488] font-sans capitalize">
                {formatDate(duration)}
              </p>
              <p className="text-[22px] text-mainColor font-sans font-semibold capitalize">
                {title}
              </p>
              <p className="text-[#697488] text-[15px] font-sans capitalize">
                {desc}
              </p>
              {/* <div className="flex items-center gap-8 border-t pt-4">
                <div className="relative h-16 w-16 ">
                  <Image
                    loading="lazy"
                    className=" rounded-full object-fill shadow-md"
                    fill
                    sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                    src={avatar}
                    alt="review"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-[15px] font-medium text-[#051036] font-sans capitalize">
                   {name}
                  </span>
                  <span className="text-[#697488] text-sm font-sans capitalize">
                    {job}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
