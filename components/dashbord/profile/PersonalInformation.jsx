import React from "react";
import Test from "./Test";
import USerForm from "./USerForm";
import YourAvatar from "./YourAvatar";

function PersonalInformation() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-5">
        <YourAvatar />
        {/* <Test /> */}
        {/* from */}
        <USerForm />
      </div>
    </div>
  );
}

export default PersonalInformation;
