import React, { useEffect, useRef, useState } from "react";
import Test from "./Test";
import USerForm from "./USerForm";
import YourAvatar from "./YourAvatar";
import { useSession } from "next-auth/react";

function PersonalInformation() {
  const [selectedImage, setSelectedImage] = useState(
    "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
  );
  const inputFileRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(
        "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
      );
    }
  };

  // const handleButtonClick = () => {
  //   inputFileRef.current.click();
  // };

  const handleDeleteButtonClick = () => {
    if (session) {
      if (!session.user.image) {
        setSelectedImage(
          "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
        );
      }
      setSelectedImage(session.user.image);
      inputFileRef;
    }
  };
  const { data: session } = useSession();
  useEffect(() => {
    // Clear the file input value on mount
    // inputFileRef.current.value = "";
    if (session) {
      if (!session.user.image) {
        setSelectedImage(
          "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
        );
      }
      setSelectedImage(
        "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
      );
    }
  }, [session]);
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-5">
        <YourAvatar
          selectedImage={selectedImage}
          handleFileSelect={handleFileSelect}
          handleDeleteButtonClick={handleDeleteButtonClick}
          inputFileRef={inputFileRef}
        />
        {/* <Test /> */}
        {/* from */}
        <USerForm selectedImage={selectedImage} />
      </div>
    </div>
  );
}

export default PersonalInformation;
