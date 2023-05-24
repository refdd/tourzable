import React, { useState } from "react";
import CustomTextField from "../hleper/CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { ImMan } from "react-icons/im";
import { BsPersonAdd } from "react-icons/bs";
import { TextField } from "@mui/material";
import { MdChildFriendly, MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { useRouter } from "next/router";

function OrderForm({
  aduits,
  childs,
  infant,
  handleAddCounter,
  handleremoveCounter,
}) {
  const [number, setnumber] = useState("+1");

  const methods = useForm();
  const router = useRouter();

  const handleOnChange = (value) => {
    setnumber(value);
  };

  const onSubmit = (data) => {
    console.log({ ...data, number, aduits, childs });
    router.push("/Thank_you");
  };
  return (
    <div className="container mx-auto px-4 py-3">
      <div className="border p-3 rounded shadow-lg shadow-shadowColorMain">
        <div className="p-4 rounded-md bg-mainColor ">
          <p className="text-lg text-white font-sans capitalize ">
            Reservation Is Available From 2022-05-01 To 2023-04-30 Days : Friday
            , Saturday , Sunday , Monday , Tuesday , Wednesday , Thursday
          </p>
        </div>
        <p className="py-3 text-sm text-mainColor font-sans font-medium capitalize">
          Fill In The Following Data
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 "
          >
            {/* frist name  */}
            <div className="">
              <CustomTextField
                required
                name="firstName "
                label="Frist Name "
                type={"text"}
              />
            </div>
            {/* last name */}
            <div className="">
              <CustomTextField
                required
                name="lastName "
                label="Last Name "
                type={"text"}
              />
            </div>
            {/*email address */}
            <div className=" ">
              <CustomTextField
                required
                name="email"
                label="Email Address"
                type="email"
              />
            </div>
            {/* unmber and code  */}
            <div className="">
              <MuiPhoneNumber
                sx={{ "& svg": { height: "0.7em" } }}
                // slot={{}}
                label=" Country Code & Phone Num "
                value={number}
                autoFormat={true}
                fullWidth
                required
                variant="standard"
                defaultCountry="us"
                onChange={handleOnChange}
              />
            </div>
            {/* last name */}
            <div className="">
              <CustomTextField
                required
                name="address"
                label="address"
                type={"text"}
              />
            </div>
            {/* last name */}
            <div className="">
              <CustomTextField
                required
                name="postal code"
                label="Postal Code"
                type={"number"}
              />
            </div>
            {/* counter */}
            <div className=" md:col-span-2 ">
              <div className=" grid grid-cols-2 gap-3 mt-5">
                {/*  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <ImMan className="text-2xl text-MainYeloow" />
                    <span className="text-sm text-[#555] font-sans capitalize font-medium">
                      {" "}
                      ADULT
                    </span>
                  </div>
                  <div className="flex items-center px-5">
                    <div
                      onClick={() => {
                        handleAddCounter("adults");
                      }}
                      className="text-mainColor text-xl cursor-pointer"
                    >
                      <BsPersonAdd />{" "}
                    </div>
                    <TextField
                      fullWidth
                      type="tel"
                      variant="standard"
                      value={aduits}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                    <div
                      onClick={() => {
                        handleremoveCounter("adults");
                      }}
                      className="text-mainColor text-xl cursor-pointer"
                    >
                      <MdOutlinePersonRemoveAlt1 />{" "}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FaChild className="text-2xl text-MainYeloow" />
                    <span className="text-sm text-[#555] font-sans capitalize font-medium">
                      {" "}
                      KID
                    </span>
                  </div>
                  <div className="flex items-center px-5">
                    <div
                      onClick={() => {
                        handleAddCounter("childs");
                      }}
                      className="text-mainColor text-xl cursor-pointer"
                    >
                      <BsPersonAdd />{" "}
                    </div>
                    <TextField
                      fullWidth
                      type="tel"
                      variant="standard"
                      value={childs}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                    <div
                      onClick={() => {
                        handleremoveCounter("childs");
                      }}
                      className="text-mainColor text-xl cursor-pointer"
                    >
                      <MdOutlinePersonRemoveAlt1 />{" "}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" col-span-2">
                  <div className="flex flex-col space-y-2  ">
                    <div className="flex items-center">
                      <MdChildFriendly className="text-2xl text-MainYeloow" />
                      <span className="text-sm text-[#555] font-sans capitalize font-medium">
                        {" "}
                        INFANT
                      </span>
                    </div>
                    <div className="flex items-center px-5">
                      <div
                        onClick={() => {
                          handleAddCounter("infant");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <BsPersonAdd />{" "}
                      </div>
                      <TextField
                        fullWidth
                        type="tel"
                        variant="standard"
                        value={infant}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                      <div
                        onClick={() => {
                          handleremoveCounter("infant");
                        }}
                        className="text-mainColor text-xl cursor-pointer"
                      >
                        <MdOutlinePersonRemoveAlt1 />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*text message */}
            <div className=" md:col-span-2 ">
              <textarea
                id="message"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Add your suggestions to modify the itinerary or add other features or any additional special request"
                {...methods.register("message", { required: true })}
              ></textarea>
            </div>
            {/* buttonsent */}
            <div className=" md:col-span-2 ">
              <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
                <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                  send
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default OrderForm;
