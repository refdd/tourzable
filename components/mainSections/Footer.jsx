import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import {
  BsApple,
  BsFacebook,
  BsFillEnvelopeFill,
  BsGooglePlay,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { useForm, FormProvider } from "react-hook-form";
import { MdLocationPin } from "react-icons/md";
import footerLoge from "../../public/assets/images/The-Logo.png";
import mada from "../../public/assets/images/mada.webp";
import visa from "../../public/assets/images/master.png";
import master from "../../public/assets/images/visa.png";
import ma3rof from "../../public/assets/images/ma3rof.png";
import min from "../../public/assets/images/min.png";
import Link from "next/link";
import axios from "axios";
import AlertSuccess from "../hleper/AlertSuccess";
function Footer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
    .post(
      "https://new.tourzable.com/api/mails",
      {
        ...data,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      console.log(res);
      setOpen(true );
    })
    .catch((error) => {
      console.log(error);
    });
    // router.push("/Thank_you");

  };
  return (
    <div className="container mx-auto px-4 md:px-10 bg-mainColor">
        <AlertSuccess
        handleClose={handleClose}
        handleClick={handleClick}
        open={open}
      />
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
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10">
              {/* coll and support */}
              <div className="flex flex-col space-y-1 ">
                <span className="text-white text-[14px] capitalize font-sans">
                  Toll Free Customer Care
                </span>
                <span className="text-lg text-white font-medium  ">
                  2050129551
                </span>
                <span className="text-lg text-white font-medium  ">
                  310584566400003
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
          {/* <div className=" md:col-span-3 flex flex-col space-y-2">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Get Updates & More
            </p>
            <form 
             onSubmit={handleSubmit(onSubmit)}
             className="flex items-center border rounded border-white py-2 bg-white">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-950 bg-white mr-3 py-2 rounded px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="your Email"
                aria-label="email"
                {...register("email", { required: true })}
              />
              <button
              type="submit"
                className="flex-shrink-0   text-lg  text-gray-950 py-1 px-4 rounded underline"
                
              >
                subscride
              </button>
            </form>
          </div> */}
          {/* Tourzable */}
          <div className="pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Tourzable
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/AboutUs"}>
                  <span>About Us</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/visa"}>
                  <span>E-Visa</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/Privacy"}>
                  <span>Privacy</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/Terms-conditions"}>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/cancellation-policy"}>
                  <span>Cancellation Policy</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/contact-us"}>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <Link href={"/FAQ"}>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* support */}
          <div className=" pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Dashboard
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Customer</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>Agency</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all">
                <span>DMC</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all ">
                <p className="text-[16px] text-white font-medium capitalize font-sans">
                  Ways You Can Pay
                </p>
              </li>
              <li className=" hover:text-[#3554d1] transition-all ">
                <div className="flex flex-col ">
                  <Image
                    src={mada}
                    width={90}
                    height={90}
                    alt="mada"
                    className=""
                  />
                  <Image
                    src={visa}
                    width={50}
                    height={50}
                    alt="mada"
                    className=""
                  />
                  <Image
                    src={master}
                    width={50}
                    height={50}
                    alt="mada"
                    className=""
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* support */}
          <div className=" pt-5">
            <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
              Contact Us
            </p>
            <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
              <li className=" hover:text-[#3554d1] transition-all flex items-center gap-3">
                <AiFillPhone className="text-lg text-white" />
                <span>0564445507</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all flex items-center gap-3">
                <MdLocationPin className="text-lg text-white" />
                <span>Eastern Province</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all flex items-center gap-3">
                <BsFillEnvelopeFill className="text-lg text-textPurple" />
                <span> Sales@Tourzable.Com</span>
              </li>
              <li className=" hover:text-[#3554d1] transition-all flex items-center gap-3">
                <div className="flex flex-col ">
                  <Link href={"https://maroof.sa/businesses/details/126288"}>
                    <Image
                      src={ma3rof}
                      width={90}
                      height={90}
                      alt="mada"
                      className=""
                    />
                  </Link>

                  <Image
                    src={min}
                    width={100}
                    height={90}
                    alt="mada"
                    className=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
