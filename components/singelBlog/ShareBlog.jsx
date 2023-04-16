import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ShareBlog() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-[16px] text-[#051036] font-sans capitalize">
            Share
          </span>
          <ul className="flex items-center space-x-5">
            <li className="text-2xl text-mainColor">
              {" "}
              <FaFacebook />{" "}
            </li>
            <li className="text-2xl text-mainColor">
              {" "}
              <FaTwitter />{" "}
            </li>
            <li className="text-2xl text-mainColor">
              {" "}
              <FaInstagram />{" "}
            </li>
            <li className="text-2xl text-mainColor">
              {" "}
              <FaLinkedin />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShareBlog;
