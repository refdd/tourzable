import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  BsApple,
  BsFacebook,
  BsGooglePlay,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import footerLoge from "../../public/assets/images/The-Logo.png";
function Footer() {
  return (
    <div className="container mx-auto px-4 bg-mainColor">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-6 pb-4 md:pt-11">
        <div className=" flex flex-col space-y-16 py-7">
          {/*  */}
          <div className=" flex flex-col space-y-7">
            {/* logo footer */}
            <div className="relative  w-[256px] h-[53px] md:w-[373px]  md:h-[90px]   bg-white p-73 rounded ">
              <Image
                src={footerLoge}
                fill
                loading="lazy"
                alt="footer loge "
                className=""
              />
            </div>
            <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10">
              {/* coll and support */}
              <div className="flex flex-col space-y-1 ">
                <span className="text-white text-[14px] capitalize font-sans">
                  Toll Free Customer Care
                </span>
                <span className="text-lg text-white font-medium  ">
                  +(1) 123 456 7890
                </span>
              </div>
              {/* coll and support */}
              <div className="flex flex-col space-y-1">
                <span className="text-white text-[14px] capitalize font-sans">
                  Need live support?
                </span>
                <span className="text-lg text-white font-medium  ">
                  hi@tourzable.com
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col space-y-2 md:space-y-6 ">
            <p className="text-white text-[16px] font-sans font-medium capitalize">
              Your all-in-one travel app
            </p>

            {/* buttons */}
            <div className="flex   flex-row  space-x-3 ">
              <div className="flex items-center space-x-1 bg-MainYeloow rounded-lg  w-fit px-4 py-3">
                <BsApple className="text-mainColor text-2xl" />
                <div className="flex flex-col ">
                  <span className="text-mainColor text-[14px] font-sans capitalize">
                    Download on the
                  </span>
                  <span className="text-mainColor font-medium text-[15px] font-sans ">
                    Apple Store
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-MainYeloow rounded-lg  w-fit px-4 py-3">
                <BsGooglePlay className="text-mainColor text-2xl" />
                <div className="flex flex-col ">
                  <span className="text-mainColor text-[14px] font-sans capitalize">
                    Get in on
                  </span>
                  <span className="text-mainColor font-medium text-[15px] font-sans ">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col space-y-3">
            <p className="text-white text-[16px] font-sans font-medium capitalize">
              Your all-in-one travel app
            </p>
            <div className="flex items-center space-x-5 text-white text-lg">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
          {/*  */}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
          {/* subsctibe */}
          <div className=" md:col-span-3 flex flex-col space-y-2">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Get Updates & More
            </p>
            <div className="flex items-center border rounded border-white py-2 bg-white">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-950 bg-white mr-3 py-2 rounded px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="your Email"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0   text-lg  text-gray-950 py-1 px-4 rounded underline"
                type="button"
              >
                subscride
              </button>
            </div>
          </div>
          {/* company */}
          <div className="pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Company
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all">
                <span>About Us</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Careers</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Blog</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Press</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Gift Cards</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Magazine</span>
              </li>
            </ul>
          </div>
          {/* support */}
          <div className=" pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Support
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Contact</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Legal Notice</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Privacy Policy</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Terms and Conditions</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Sitemap</span>
              </li>
            </ul>
          </div>
          {/* support */}
          <div className=" pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Other Services
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Car hire</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Activity Finder</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Tour List</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Cruise Ticket</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Holiday Rental</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Travel Agents</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
