import React, { useState } from "react";
import bg from "../../public/assets/images/contactUs.webp";
import CustomTextField from "../hleper/CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number-2";
import axios from "axios";
import { useRouter } from "next/router";

function ContactUsForm() {
  const [number, setnumber] = useState("+1");
  const router = useRouter();
  const methods = useForm();
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/contact_us",
        {
          ...data,
          phone: number,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({ ...data, number, aduits, childs, data: dateFormated });
    router.push("/Thank_you");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-top  py-20 mt-10"
    >
      <div className="container mx-auto px-4 md:px-8 ">
        <div className="flex items-start  md:justify-end ">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="px-5 py-7 bg-white rounded-md shadow-lg w-full md:w-[400px] "
            >
              <p className="text-lg md:text-2xl text-mainColor font-sans font-semibold capitalize">
                Send a message
              </p>
              <div className="grid grid-cols-1 gap-6 mt-4">
                {/* frist name  */}
                <div className="">
                  <CustomTextField
                    required
                    name="name"
                    label="full Name "
                    type={"text"}
                  />
                </div>
                {/*code andnumber */}
                <div className=" md:mt-2 ">
                  <MuiPhoneNumber
                    sx={{ "& svg": { height: "0.6em" } }}
                    // slot={{}}
                    label="Country Code & Phone Num"
                    value={number}
                    autoFormat={true}
                    fullWidth
                    required
                    variant="standard"
                    defaultCountry="us"
                    onChange={handleOnChange}
                  />
                </div>
                {/*email address */}
                <div className=" md:mt-2">
                  <CustomTextField
                    required
                    name="email"
                    label="Email Address"
                    type="email"
                  />
                </div>
                {/*text message */}
                <div className=" mt-5  ">
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Add your suggestions to modify the itinerary or add other features or any additional special request"
                    {...methods.register("message", { required: true })}
                  ></textarea>
                </div>
                {/* buttonsent */}
                <div className="  ">
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
      </div>
    </div>
  );
}

export default ContactUsForm;
