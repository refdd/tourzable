import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

function BottonInquire({ title, goToCustomize }) {
  const [showBottom, setshowBottom] = useState(true);

  const divfixrd = useRef();
  const router = useRouter();
  const handleShowBottom = () => {
    if (goToCustomize) {
      console.log("sdddfsdfsd");
      router.push("/customize-your-trip");
    } else {
      const FormInquire = document.getElementById("InquireFrom");
      FormInquire.scrollIntoView({ behavior: "smooth" }, true);
    }

    setTimeout(() => {
      setshowBottom(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Logic to handle scrolling
      setshowBottom(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={divfixrd}
      onClick={handleShowBottom}
      className={
        showBottom
          ? "md:hidden fixed bottom-0 container mx-auto z-50  "
          : " hidden"
      }
    >
      <div className=" flex justify-center items-center py-6 bg-MainYeloow rounded-lg   ">
        <button className=" twark text-2xl text-white font-sans capitalize bg-mainColor py-2 px-4 rounded-lg font-medium ">
          {title}
        </button>
      </div>
    </div>
  );
}

export default BottonInquire;
