import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CancelForm({ handleClose, bookingId }) {
  const methods = useForm();
  const { data: session } = useSession();
  // console.log(session?.user?.accessToken);
  const onSubmit = (data) => {
    axios
      .post(
        `https://new.tourzable.com/api/cancel_booking}`,
        {
          ...data,
          booking_id: bookingId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session?.user?.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
    // router.push("/Thank_you");
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] rounded-lg bg-white shadow-xl p-5 ">
      <p className="text-lg text-mainColor font-bold font-sans capitalize">
        Cancel
      </p>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        <label className=" text-sm font-sans text-gray-700 capitalize">
          Reason For cansellation
        </label>
        <textarea
          id="message"
          rows="4"
          required
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Reason For cansellation"
          {...methods.register("cancel_reason", { required: true })}
        ></textarea>
        {/* buttonsent */}
        <div className=" mt-4  ">
          <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
            <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
              confirm
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CancelForm;
