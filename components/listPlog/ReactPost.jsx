import Image from "next/image";
import React from "react";
import postImg2 from "../../public/assets/images/gallery2.png";
import postImg1 from "../../public/assets/images/gallery1.png";
import postImg3 from "../../public/assets/images/gallery3.png";
function ReactPost() {
  return (
    <div className=" px-3">
      <p className="font-medium text-lg text-mainColor capitalize font-sans">
        Recent Posts
      </p>
      {/*  */}
      <div className="flex items-center space-x-3 py-6">
        <div className="">
          <Image
            src={postImg1}
            loading={"lazy"}
            width={100}
            height={80}
            alt="reated post"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-[15px] font-medium text-textPurple capitalize font-sans">
            Find the Right Learning Path for your
          </p>
          <span className="text-[13px] text-[#051036] font-sans capitalize">
            April 13, 2022
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center space-x-3 py-6">
        <div className="">
          <Image
            src={postImg2}
            loading={"lazy"}
            width={100}
            height={80}
            alt="reated post"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-[15px] font-medium text-textPurple capitalize font-sans">
            Find the Right Learning Path for your
          </p>
          <span className="text-[13px] text-[#051036] font-sans capitalize">
            April 13, 2022
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center space-x-3 py-6">
        <div className="">
          <Image
            src={postImg3}
            loading={"lazy"}
            width={100}
            height={80}
            alt="reated post"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-[15px] font-medium text-textPurple capitalize font-sans">
            Find the Right Learning Path for your
          </p>
          <span className="text-[13px] text-[#051036] font-sans capitalize">
            April 13, 2022
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center space-x-3 py-6">
        <div className="">
          <Image
            src={postImg1}
            loading={"lazy"}
            width={100}
            height={80}
            alt="reated post"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-[15px] font-medium text-textPurple capitalize font-sans">
            Find the Right Learning Path for your
          </p>
          <span className="text-[13px] text-[#051036] font-sans capitalize">
            April 13, 2022
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReactPost;
