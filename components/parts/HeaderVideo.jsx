import React from "react";

function HeaderVideo() {
  return (
    <div className="w-full h-full relative">
      <video
        className=" w-full h-full object-cover"
        src={require("../../public/assets/video.mp4")}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-0 left-0 w-full h-full  "
        style={{
          background: " linear-gradient(270deg, #05103680 0%, #051036 72.43%)",
          opacity: 0.85,
        }}
      ></div>
    </div>
  );
}

export default HeaderVideo;
