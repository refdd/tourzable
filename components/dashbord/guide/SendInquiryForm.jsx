import CustomTextField from "@/components/hleper/CustomTextField";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
// import { Input } from "postcss";
import Input from "@mui/material/Input";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
function SendInquiryForm({ idOrder, handleCloseInquery }) {
  const methods = useForm();
  const router = useRouter();
  const { token } = router.query;
  const onSubmit = (data) => {
    axios
      .post(
        `https://new.tourzable.com/api/send_inquiry_tour_order/${idOrder}`,
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        handleCloseInquery();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-8 bg-white w-[400px] md:w-[600px] rounded-md shadow-sm shadow-white">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="py-2 px-3 ">
          <p className="text-xl text-mainColor font-sans font-medium capitalize">
            Send inpuery to us
          </p>
          <div className="grid grid-cols-1 gap-4  ">
            {/*text message */}
            <div className=" mt-5  md:col-span-2">
              <textarea
                id="notes"
                rows="2"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="notes"
                {...methods.register("notes", { required: true })}
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
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default SendInquiryForm;
