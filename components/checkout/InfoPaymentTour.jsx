import Image from "next/image";
import React, { useEffect } from "react";
import imageTour from "../../public/assets/images/gallery2.png";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useRouter } from "next/router";
import { useStateContext } from "@/contexts/ContextProvider";
function InfoPaymentTour({
  prices,
  infant,
  childs,
  aduits,
  cobone,
  handleChangeCobone,
  addCobone,
  discount,
}) {
  const discountAmount = (prices?.total * discount) / 100;
  const router = useRouter();

  const { currency } = router.query;
  const { startDay, endDay, image, title, tourCode, best_price, min, max } =
    router.query;
  return (
    <div className="container mx-auto px-4 py-3">
      <div className=" flex flex-col space-y-6 divide-y-2 border p-3 rounded shadow-lg shadow-shadowColorMain">
        {/* imaga and data */}
        <div className="flex flex-col space-y-5">
          {/* imaga and titel and code  */}
          <div className="flex items-center space-x-3">
            <div className="relative w-[150px] h-[90px] md:w-[240px] md:h-[120px] ">
              <Image
                loader={() => {
                  return `${image}`;
                }}
                unoptimized={true}
                src={image}
                fill
                alt="tour Image"
                className="rounded-xl object-fill"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-900 font-sans capitalize font-medium ">
                {title}
              </span>
              <span className="text-sm text-textPurple font-sans capitalize font-normal ">
                Code : {tourCode}
              </span>
            </div>
          </div>
          {/* start date and end date */}
          <div className="flex   items-center  space-x-11  ">
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] font-medium text-textPurple capitalize font-sans">
                Tour Date
              </span>
              <span className="text-sm text-gray-600 font-sans font-normal">
                {startDay}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] font-medium text-textPurple capitalize font-sans">
                end Date
              </span>
              <span className="text-sm text-gray-600 font-sans font-normal">
                {endDay}
              </span>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="flex   items-center  space-x-11 pt-5  ">
          <div className="flex flex-col space-y-1">
            <span className="text-[16px] font-medium text-mainColor capitalize font-sans">
              Start From
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-[16px] text-textPurple font-medium uppercase">
                usd
              </span>
              <span className="text-[20px] text-textPurple font-bold uppercase">
                {" "}
                {Math.floor(best_price)}
              </span>
              <span className="text-xs font-sans text-mainLightColor capitalize font-thin">
                /Person
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-[16px] font-medium text-mainColor capitalize font-sans">
              Price For Group
            </span>
            <span className="text-sm text-MainYeloow font-sans font-normal">
              [{min} - {max}]
            </span>
          </div>
        </div>
        {true ? (
          <div className="border-t flex flex-col space-y-4 pt-5">
            <div className="grid grid-cols-3">
              <p className="text-center text-lg font-medium text-mainColor">
                type
              </p>
              <p className="text-center text-lg font-medium text-mainColor">
                prison Price
              </p>
              <p className="text-center text-lg font-medium text-mainColor">
                total
              </p>
            </div>
            {/* adultes */}
            <div className="grid grid-cols-3">
              <p className="text-center text-[16px] font-medium text-gray-700 capitalize">
                adults
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.adult_price} USD
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.adult_price * aduits} USD
              </p>
            </div>
            {/* kids */}
            <div className="grid grid-cols-3">
              <p className="text-center text-[16px] font-medium text-gray-700 capitalize">
                kids
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.kid_price} USD
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.kid_price * childs} USD
              </p>
            </div>
            {/* taxes and vat  */}
            <div className="border-t pt-2 grid grid-cols-2">
              <p className="text-center text-[16px]  text-gray-700 capitalize">
                {" "}
                Price Without Taxes
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.total_without_taxes} USD
              </p>
              <p className="text-center text-[16px]  text-gray-700 capitalize">
                {" "}
                VAT
              </p>
              <p className="text-center text-[16px]  text-[#28a745]">
                {prices?.vat} USD
              </p>
            </div>
            {/* total */}
            <div className="border-t pt-2 grid grid-cols-2">
              <p className="text-center text-xl font-medium text-mainColor">
                Total Final Price
              </p>
              <p className="text-center text-xl font-medium text-[#28a745]">
                {prices?.totalPrice} USD
              </p>
            </div>
            {/* cobone */}
            <div className="pt-3 md:w-[70%] md:mx-auto">
              <TextField
                label="add cobone price"
                variant="standard"
                fullWidth
                value={cobone}
                onChange={handleChangeCobone}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          addCobone(cobone);
                        }}
                        color="primary"
                        aria-label="add"
                      >
                        <AddBoxIcon className="text-mainColor text-xl" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-md border border-[#bee5eb]  bg-MainYeloow ">
            <p className="text-[16px] font-medium text-mainColor capitalize font-sans">
              You Number Is Not Eligible With The Number Of People Limit, Don't
              Worry You Can Complete Your Order By Send{" "}
              <span> Quotation Request </span> And The Operator Will Send You An
              Offer ASAP
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoPaymentTour;
