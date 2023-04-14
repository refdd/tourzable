import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLogo from "../../public/assets/images/The-Logo.png";
import DarkLogo from "../../public/assets/images/logo-dark.svg";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
function NormailNavBar() {
  const [menuBar, setMenuBar] = useState(false);
  //   const [isTop, setIsTop] = useState(true);
  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  //   useEffect(() => {
  //     document.addEventListener("scroll", () => {
  //       const scrolled = document.scrollingElement.scrollTop;
  //       if (scrolled >= 100) {
  //         setIsTop(false);
  //       } else {
  //         setIsTop(true);
  //       }
  //     });
  //   }, []);
  return (
    <div className="fixed top-0 left-0  w-full z-[10000]">
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between transition-all px-3 py-4 md:py-2 bg-[#051036]  ${
            menuBar ? "bg-white" : ""
          }  `}
        >
          <div className=" flex items-center space-x-5">
            {/* logo */}
            <div className=" relative w-[134px] h-[34px] md:h-[50px] md:w-[224px] flex items-center ">
              {menuBar ? (
                <Image
                  src={NavLogo}
                  loading={"lazy"}
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
              ) : (
                <Image
                  src={NavLogo}
                  fill
                  loading={"lazy"}
                  alt="logo"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
              )}
            </div>
            {/* links desktop */}
            <ul className={` hidden  md:flex  `}>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link legacyBehavior href={"/"}>
                  Home
                </Link>
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/list-Popular-Saudi-Tours"}>Packages</Link>
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/Popular-Activities"}> Activities</Link>
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                Umrah Plus
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                Landmarks
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                Saudi Travel Blog
              </li>
              <li className=" text-lg text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                E-Visa
              </li>
            </ul>
          </div>
          {/* button distop */}
          <div className=" hidden md:flex items-center space-x-3">
            <div className=" group h-[50px] border transition-all hover:bg-white border-white px-7 rounded-md flex items-center justify-cente ">
              <p className="text-[#fff] transition-all group-hover:text-[#051036]   text-sm cursor-pointer">
                Sign In / Register
              </p>
            </div>
          </div>
          {/* user and menu bar */}
          <div className="flex md:hidden items-center space-x-2">
            {/* icon user */}
            <BiUserCircle
              size={30}
              className={` transition-all hover:text-[#0a58ca] cursor-pointer ${
                menuBar ? "text-gray-700 " : "text-white"
              }`}
            />
            <CgMenuLeftAlt
              onClick={handelMenubar}
              size={30}
              className={` cursor-pointer transition-all ${
                menuBar ? "text-gray-700" : "text-white"
              }`}
            />
          </div>
        </div>
        {/* menu links  */}
        <ul
          className={` ${
            menuBar ? "flex" : "hidden"
          }  flex-col p-6 bg-white border-y`}
        >
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link legacyBehavior href={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/list-Popular-Saudi-Tours"}>Packages</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/Popular-Activities"}> Activities</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            Umrah Plus
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            Landmarks
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            Saudi Travel Blog
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            E-Visa
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NormailNavBar;
