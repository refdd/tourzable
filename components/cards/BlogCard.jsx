import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../../public/assets/images/attractive-g1ed8274c6_640.jpg";
import blog from "../../public/assets/images/trip1.png";
import blog2 from "../../public/assets/images/trip2.png";
import blog3 from "../../public/assets/images/trip3.png";
function BlogCard() {
  return (
    <Link href={"list_blog/InsideSaudi"}>
      <div className="border rounded-md shadow-lg shadow-shadowColorMain ">
        <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-3">
          <div className="relative w-full h-[200px] col-span-1 ">
            <Image
              src={blog}
              fill
              loading="lazy"
              alt="blog"
              className=" rounded-md"
            />
          </div>
          <div className="col-span-1  md:col-span-2">
            <div className="flex flex-col gap-3">
              <p className="text-[15px] text-[#697488] font-sans capitalize">
                April 06, 2022
              </p>
              <p className="text-[22px] text-mainColor font-sans font-semibold capitalize">
                A weekend guide to the Great Northern Catskills
              </p>
              <p className="text-[#697488] text-[15px] font-sans capitalize">
                For decades, travelers have been escaping to the Catskills — a
                mountainous region in upstate New York — whenever they’ve needed
                a reset.{" "}
              </p>
              <div className="flex items-center space-x-8 border-t pt-4">
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
                    Courtney Henry
                  </span>
                  <span className="text-[#697488] text-sm font-sans capitalize">
                    Web Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
