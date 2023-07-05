import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLogo from "../../public/assets/images/The-Logo.png";
import DarkLogo from "../../public/assets/images/logo-dark.svg";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
import DestinationsBox from "../hleper/DestinationsBox";
import DestinationsTree from "../hleper/DestinationsTree";
import { useTranslation, useSSR } from "react-i18next";
import { useStateContext } from "@/contexts/ContextProvider";
import SlectedLanguage from "../hleper/SlectedLanguage";
import { useSession } from "next-auth/react";
import UserNav from "../hleper/UserNav";
import ChangeCurrency from "../hleper/ChangeCurrency";

function MainNavBar() {
  const [menuBar, setMenuBar] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { setDirection } = useStateContext();
  const { t, i18n } = useTranslation();
  const { data: session } = useSession();
  function toggleScroll() {
    const body = document.querySelector("body");

    if (disableScroll) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }

    setDisableScroll(!disableScroll);
  }
  const handelMenubar = () => {
    setMenuBar(!menuBar);
    toggleScroll();
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);

  // const MyComponent = () => {
  //   const { t, i18n } = useTranslation();
  //   const changeLanguage = (language) => {
  //     i18n.changeLanguage(language);
  //   };
  //   useSSR(); // Ensure translations are preloaded during server-side rendering

  //   useEffect(() => {
  //     document.body.dir = i18n.dir();
  //     setDirection(document.body.dir);
  //   });
  //   return (
  //     <div>
  //       <h1>{t("home:home.hello")}</h1>
  //       <p>{t("home:home.welcome")}</p>

  //       <button onClick={() => changeLanguage("en")}>English</button>
  //       <button onClick={() => changeLanguage("ar")}>Arabic</button>
  //       <button onClick={() => changeLanguage("zh")}>chanibbe</button>
  //     </div>
  //   );
  // };

  return (
    <div className="fixed top-0 left-0  w-full z-[10000]">
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between transition-all px-3 py-4 md:py-2  ${
            menuBar ? "bg-white" : ""
          } ${!isTop ? "bg-[#FFF]" : undefined} `}
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
            {/* <MyComponent /> */}
            {/* links desktop */}
            <ul className={` hidden  md:flex items-center  `}>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link legacyBehavior href={"/"}>
                  {t("common:home.home")}
                </Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/packages"}>{t("common:home.package")}</Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/activities"}> {t("common:home.actives")}</Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/umrah"}>{t("common:home.umrah")}</Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/LandMarks"}>
                  <span>{t("common:home.landMarks")}</span>
                </Link>
              </li>
              <li
                className={`  group/des  text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <span>{t("common:home.destinations")}</span>
                <DestinationsBox />
              </li>
              <li
                className={`  group/des  text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"tour_guides"}>tour guides</Link>

                <DestinationsBox />
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"Saudi-travel-blog"}>{t("common:home.blog")}</Link>
              </li>
              {/* <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/visa"}>
                  <span>E-Visa</span>
                </Link>
              </li> */}
              <li className=" text-sm   font-semibold font-sans   hover:bg-[#3554d10d] px-2">
                <Link href={"/customize-your-trip"}>
                  <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-MainYeloow">
                    {t("common:home.Customize_trip")}{" "}
                  </span>
                </Link>
              </li>
              <li className=" text-sm   font-semibold font-sans   hover:bg-[#3554d10d] px-2">
                <SlectedLanguage isTop={isTop} />
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <ChangeCurrency isTop={isTop} />
              </li>
            </ul>
          </div>
          {/* button distop */}
          <div className=" hidden md:flex items-center space-x-3">
            {session ? (
              <UserNav />
            ) : (
              <div
                className={`group h-[50px] border transition-all  px-7 rounded-md flex items-center justify-cente ${
                  !isTop
                    ? " border-[#051036] hover:bg-[#3554d1] "
                    : "hover:bg-white border-white"
                }  `}
              >
                <Link href={"/Login"}>
                  <p
                    className={` transition-all   text-sm cursor-pointer ${
                      !isTop
                        ? "text-[#051036] group-hover:text-[#FFFF]  "
                        : "text-white group-hover:text-[#051036] "
                    } `}
                  >
                    Sign In / Register
                  </p>
                </Link>
              </div>
            )}
          </div>
          {/* user and menu bar */}
          <div className="flex md:hidden items-center space-x-2">
            {/* icon user */}
            {session ? (
              <UserNav />
            ) : (
              <Link href={"/Login"}>
                <BiUserCircle
                  size={30}
                  className={` transition-all hover:text-[#0a58ca] cursor-pointer ${
                    menuBar ? "text-gray-700 " : "text-white"
                  }`}
                />{" "}
              </Link>
            )}
            <CgMenuLeftAlt
              onClick={handelMenubar}
              size={30}
              className={` cursor-pointer transition-all ${
                menuBar || !isTop ? "text-gray-700" : "text-white"
              }`}
            />
          </div>
        </div>
        {/* menu links  */}
        <ul
          className={` ${
            menuBar ? "flex" : "hidden"
          }  md:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
        >
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link legacyBehavior href={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/activities"}> Activities</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/umrah"}> Umrah Plus</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/LandMarks"}>
              <span>Landmarks</span>
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <DestinationsTree />
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/Saudi-travel-blog"}>Saudi Travel Blog</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/visa"}>
              <span>E-Visa</span>
            </Link>
          </li>

          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/customize-your-trip"}>
              <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-MainYeloow">
                {t("common:home.Customize_trip")}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavBar;
