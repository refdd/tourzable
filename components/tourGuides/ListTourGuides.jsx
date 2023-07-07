import React, { useState } from "react";
import CardTourGuide from "../cards/CardTourGuide";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import { useStateContext } from "@/contexts/ContextProvider";

function ListTourGuides({ allTourGuides }) {
  const { selectTourGuide, setSelectTourGuide } = useStateContext();
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session);
  const handleSelect = (index, isSelected) => {
    if (isSelected) {
      setSelectTourGuide([...selectTourGuide, index]);
    } else {
      setSelectTourGuide(selectTourGuide.filter((i) => i !== index));
    }
  };

  const handelGuideREquest = async () => {
    if (!session) {
      router.push("/Login");
    } else {
      await axios
        .get("https://new.tourzable.com/api/operator_profile", {
          headers: {
            // Authorization: "Bearer " + session.user.accessToken,
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OGViOTc5Ny0xZTFiLTRmZDctYWM5Mi03Yjg1ZWNiOGVmZmIiLCJqdGkiOiI0ZWNjYTc1NmMzY2YzYWM1ZWY5NWJiZjQxYjVjMTcxYmExNTVlNGI0OGUzZjUyMDBiYjQ3MDM1NDQ2OTBiMzFhZmM2YmM5NjRjNDQ3ZDRkMiIsImlhdCI6MTY4NDg0MjQzOS4xMDA2NzI5NjAyODEzNzIwNzAzMTI1LCJuYmYiOjE2ODQ4NDI0MzkuMTAwNjc1MTA2MDQ4NTgzOTg0Mzc1LCJleHAiOjE3MDA3NDAwMzkuMDk3NDY5MDkxNDE1NDA1MjczNDM3NSwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.S90q1NdZTtp7jvtWsFjMrNa1hawJh9eLIHSPdMT4V6oK2_98DA-UknQoXQEe8v-tIFiNPrD7i4Ez6NNRzMhXN67OIMG8X2d9XcztWQNlANSUDe1MNx9Uu7Y3JkRH1zzG7iKEMQBOWi3MLy-EGNXg4I_zfCehyceSzZcX4j4tAqHZAXbJADeIJEl-u6Pe8gKg3Nn5udjSA-ZIpBqn5pjbSmlvmjXc9UcXjSyi2ZaIbcEA9yndgKy_F7zpOeV7j3CLZLGBmin0bLzVCoSz3LXJzTzbhvzgaKA1ACqW1SBdBxXQg8R3qjZyJAE3GJfpaBdkQrVfvxwischjpCFJlrQ3Bnhj0Nl_itLlvEmN0ZRHYnJkkEiil7gAl4u53xyIRWFQtync0meDkMkom7hOJpZu7oPfmyUkAalAQG_MNrJbp8eX3_75gz5lh0-uub98W4eOdyPuiaFTUBziMB7ZnsBv2ah6IurEyDuRaGsCQTOo2Jk_MS4XQz3cOweN78dRvL2tAGrsoX1zb2Rjl6WDVEwNhDhHKCfEM5bkaVgbGbQHwcXI8PsiExnOOBgmi58xXV-0i9Pymu5a78EoXYRXIU-1FB9EjvSf_DTrGj1tIEqGkbHYmMm4C75KEN17M068yT2O-korlZc0-hj38lAXB0Pu_nj5O_xBCHwOl_28jx2-s78",
          },
        })
        .then((response) => {
          console.log(response);
          router.push("/tour_order");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="container mx-auto px-4  ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
        {allTourGuides?.map((guide) => (
          <CardTourGuide
            guideImage={guide?.logo}
            key={guide.id}
            qualification={guide.qualification}
            guideName={guide.name}
            slugGuide={guide.slug}
            index={guide.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className=" mt-8 ">
        <button
          onClick={handelGuideREquest}
          className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full"
        >
          <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
            tour guide request
          </span>
        </button>
      </div>
    </div>
  );
}

export default ListTourGuides;
