import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "../hleper/CustomTextField";
import { useTranslation } from "react-i18next";

function LeaveReview() {
  const [openReview, setOpenReview] = useState(false);
  const [packageReview, setPackageReview] = useState("");
  const [opertion, setOpertion] = useState("");
  const methods = useForm();
  const { t, i18n } = useTranslation();
  const handleChangePackageReview = (event) => {
    setPackageReview(event.target.value);
  };
  const handleChangeOpertion = (event) => {
    setOpertion(event.target.value);
  };
  const onSubmit = (data) => {
    // console.log({
    //   ...data,
    //   operator_review: opertion,
    //   package_review: packageReview,
    // });
  };
  return (
    <div id="Reviews" className="container mx-auto px-4 mt-5">
      <div
        onClick={() => {
          setOpenReview(!openReview);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          {t("common:single.leave_review")}
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  ${
            openReview ? "rotate-180" : " rotate-0"
          }`}
        />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div
            className={` grid-cols-1 gap-5 md:grid-cols-2 border transition-all rounded-md p-3 shadow-lg mt-5  ${
              openReview ? "grid" : "hidden "
            }`}
          >
            {/* frist name  */}
            <div className="">
              <CustomTextField
                required
                name="firstName"
                label={t("common:single.name")}
                type={"text"}
              />
            </div>
            {/*email address */}
            <div className=" md:col-span-1">
              <CustomTextField
                required
                name="email"
                label={t("common:single.email_address")}
                type={"text"}
              />
            </div>
            {/* package Review */}
            <div className="md:col-span-1">
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  {t("common:single.package_review")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={packageReview}
                  onChange={handleChangePackageReview}
                  label={t("common:single.package_review")}
                >
                  <MenuItem value="">
                    <em>star</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Operator Review*/}
            <div className="md:col-span-1">
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  {t("common:single.operator_review")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={opertion}
                  onChange={handleChangeOpertion}
                  label={t("common:single.operator_review")}
                >
                  <MenuItem value="">
                    <em>star</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/*text message */}
            <div className=" mt-5  md:col-span-2">
              <p>{t("common:single.Comment")}</p>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder={t("common:single.reviewsPlaceholder")}
                {...methods.register("message", { required: true })}
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
    </div>
  );
}

export default LeaveReview;
