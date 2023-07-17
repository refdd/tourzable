import React, { useEffect, useRef, useState } from "react";
import Test from "./Test";
import USerForm from "./USerForm";
import YourAvatar from "./YourAvatar";
import { useSession } from "next-auth/react";
import axios from "axios";

function PersonalInformation() {
  const [selectedImage, setSelectedImage] = useState(
    "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
  );
  const [imageFile, setImageFile] = useState();

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
    setImageFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

  const handleDeleteButtonClick = () => {
    setSelectedImage(
      "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
    );
  };
  const { data: session } = useSession();
  // console.log(session?.user?.image);
  useEffect(() => {
    // Clear the file input value on mount
    // inputFileRef.current.value = "";
    if (session) {
      if (!session.user.image) {
        setSelectedImage(
          "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
        );
      }
      setSelectedImage(session?.user?.image);
    }
  }, [session]);
  // console.log(imageFile);
  const handleUpdateImage = async () => {
    const formData = new FormData();
    formData.append("logo", imageFile);
    try {
      const response = await axios.post(
        "https://new.tourzable.com/api/update_logo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      {/* <button
        onClick={() => {
          handleUpdateImage();
        }}
      >
        test
      </button> */}
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
