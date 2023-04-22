import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function Test() {
  const [selectedImage, setSelectedImage] = useState(null);
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
      setSelectedImage(null);
    }
  };

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

  const handleDeleteButtonClick = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    // Clear the file input value on mount
    inputFileRef.current.value = "";
  }, []);
  return (
    <div className="pt-16">
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </label>
      {selectedImage && (
        <div className="mt-2">
          <Image
            src={selectedImage}
            width={150}
            height={150}
            loading={"lazy"}
            alt="user"
            className=""
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleDeleteButtonClick}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Test;
