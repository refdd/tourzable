import AlertSuccess from "@/components/hleper/AlertSuccess";
import CustomTextField from "@/components/hleper/CustomTextField";
import axios from "axios";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function FormAddPearsonInfo({
  idBooking,
  allBookingPersons,
  traveler,
  bookingPeople,
}) {
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);
  const methods = useForm();
  const { reset } = methods;
  const handleClickAlert = () => {
    setOpen(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    if (traveler == bookingPeople.length) {
      handleClickAlert();
      return;
    }
    axios
      .post(
        "https://new.tourzable.com/api/people",
        {
          ...data,
          booking_id: idBooking,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        setShowForm(false);
        reset();
        allBookingPersons();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({ ...data });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <p className="text-mainColor text-lg font-bold capitalize font-sans">
        Abb your travelers Infromation to complite Booking{" "}
      </p>
      <div className=" flex items-center justify-between">
        <div className="flex justify-center items-center my-5 py-2 px-5 bg-mainColor cursor-pointer rounded-lg  md:w-fit md:hover:scale-105">
          <button
            onClick={() => {
              setShowForm(!showForm);
            }}
            className="text-[16px] font-sans font-semibold capitalize text-white"
          >
            {bookingPeople.length == 0
              ? " Add traveler Info"
              : " add more Traveler"}
          </button>
        </div>
        <p className="text-lg text-mainColor">
          you have{" "}
          <span className="font-bold">{traveler - bookingPeople.length}</span>{" "}
          travel
        </p>
      </div>
      {/* from add P */}
      {showForm && (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className=" grid grid-cols-1 gap-5"
          >
            <div className="">
              <CustomTextField
                required
                name="name"
                label="Name"
                type={"text"}
              />
            </div>
            <div className="">
              <CustomTextField name="email" label="email" type={"email"} />
            </div>
            <div className="">
              <CustomTextField
                required
                name="id Number"
                label="id_number"
                type={"number"}
              />
            </div>
            <div className="">
              <CustomTextField
                name="passport"
                label="passport Number"
                type={"number"}
              />
            </div>
            {/* buttonsent */}
            <div className=" mt-4  ">
              <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
                <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                  send
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      )}
      <AlertSuccess
        open={open}
        handleClick={handleClickAlert}
        handleClose={handleCloseAlert}
        message={"no traveler to add "}
      />
    </div>
  );
}

export default FormAddPearsonInfo;
