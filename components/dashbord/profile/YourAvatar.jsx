import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BsCloudUpload, BsFillTrashFill } from "react-icons/bs";

function YourAvatar() {
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

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

  const handleDeleteButtonClick = () => {
    setSelectedImage(
      "https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
    );
  };

  useEffect(() => {
    // Clear the file input value on mount
    // inputFileRef.current.value = "";
  }, []);
  return (
    <div className=" py-4 border-b">
      <div className="flex flex-col gap-4">
        <input
          accept="image/*"
          className="hidden"
          id="contained-button-file"
          onChange={handleFileSelect}
          ref={inputFileRef}
          type="file"
        />
        {/* image */}
        <div className="relative  w-[160px] h-[180px] rounded-md">
          <Image
            src={selectedImage}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            priority
            alt="user"
            className="  rounded-md"
          />
          <div
            onClick={handleDeleteButtonClick}
            className="absolute top-1 right-1 bg-mainColor w-8 h-8 flex justify-center items-center rounded-md cursor-pointer "
          >
            <BsFillTrashFill className=" text-white text-xl" />
          </div>
        </div>
        {/* roul */}
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-medium text-mainColor font-sans capitalize">
            {" "}
            Your avatar{" "}
          </p>
          <p className="text-sm text-gray-500 font-sans capitalize ">
            {" "}
            PNG or JPG no bigger than 800px wide and tall.{" "}
          </p>
        </div>
        {/* button */}
        <div
          onChange={handleFileSelect}
          className="flex items-center space-x-2 bg-mainColor w-fit px-5 py-2  rounded-md cursor-pointer"
        >
          <BsCloudUpload className="text-white text-xl" />
          <input
            accept="image/*"
            className="hidden"
            id="contained-button-file"
            onChange={handleFileSelect}
            ref={inputFileRef}
            type="file"
          />
          <label
            htmlFor="contained-button-file"
            className="text-white text-lg font-sans capitalize font-medium"
          >
            Upload
          </label>
        </div>
      </div>
    </div>
  );
}

export default YourAvatar;
