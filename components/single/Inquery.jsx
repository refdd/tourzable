import { TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { ImMan } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "../hleper/CustomTextField";
import { format } from "date-fns";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Inquery({ idPackage }) {
  const [number, setnumber] = useState("+1");
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const methods = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const dateFormated = selectedDate
    ? selectedDate.format("DD-MM-YYYY")
    : selectedDate;
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
  };
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/send_inquiry",
        {
          ...data,
          name: `${data.firstName} ${data.lastName}`,
          phone: number,
          adult: aduits,
          kid: childs,
          start_date: dateFormated,
          package_id: idPackage,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        router.push("/Thank_you");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({ ...data, number, aduits, childs, data: dateFormated });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="py-2 px-3 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-4 md:gap-x-4 ">
          {/* frist name  */}
          <div className="">
            <CustomTextField
              required
              name="firstName"
              label={t("common:single.first_name")}
              type={"text"}
            />
          </div>
          {/* last name */}
          <div className="">
            <CustomTextField
              required
              name="lastName"
              label={t("common:single.last_name")}
              type={"text"}
            />
          </div>
          {/*email address */}
          <div className=" md:mt-2">
            <CustomTextField
              required
              name="email"
              label={t("common:single.email_address")}
              type="email"
            />
          </div>
          {/*code andnumber */}
          <div className=" md:mt-2 ">
            <MuiPhoneNumber
              sx={{ "& svg": { height: "0.7em" } }}
              // slot={{}}
              label={t("common:single.code_number")}
              value={number}
              autoFormat={true}
              fullWidth
              required
              variant="standard"
              defaultCountry="us"
              onChange={handleOnChange}
            />
          </div>
          {/* counter */}
          <div className="  md:col-span-2">
            <div className=" grid grid-cols-2 gap-3 mt-5 md:mt-0">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <ImMan className="text-2xl text-MainYeloow" />
                  <span className="text-sm text-[#555] font-sans capitalize font-medium">
                    {" "}
                    {t("common:single.num_adults")}
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
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <FaChild className="text-2xl text-MainYeloow" />
                  <span className="text-sm text-[#555] font-sans capitalize font-medium">
                    {" "}
                    {t("common:single.num_childs")}
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
            </div>
          </div>
          {/*date*/}
          <div className="  md:col-span-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    label: t("common:single.travel_dates"),
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          {/*text message */}
          <div className=" mt-5  md:col-span-2">
            <textarea
              id="message"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder={t("common:single.inqueryPlaceHolder")}
              {...methods.register("comment", { required: true })}
            ></textarea>
          </div>
          {/* buttonsent */}
          <div className=" md:col-span-2 ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                {t("common:single.send")}
              </span>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default Inquery;
