import CustomTextField from "@/components/hleper/CustomTextField";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function HaveQuestion() {
  const methods = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/people/2",
        {
          ...data,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({ ...data, number, aduits, childs, data: dateFormated });
    // router.push("/Thank_you");
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] rounded-lg bg-white shadow-xl p-5 ">
      <p className="text-lg text-mainColor font-bold font-sans capitalize">
        Have a question
      </p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="">
          <div className="">
            <CustomTextField
              required
              name="Subject"
              label="Subject"
              type={"text"}
            />
          </div>
          <div className="mt-4">
            <label className=" text-sm font-sans text-gray-700 capitalize">
              Write Your Question
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write Your Question"
              {...methods.register("comment", { required: true })}
            ></textarea>
          </div>
          {/* buttonsent */}
          <div className=" mt-4  ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                confirm
              </span>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default HaveQuestion;
