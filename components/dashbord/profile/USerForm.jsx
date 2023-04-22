import CustomTextField from "@/components/hleper/CustomTextField";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number-2";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

function USerForm() {
  const [fristName, setFristName] = useState("Mohamed");
  const [lastName, setLastName] = useState("Refat");
  const [email, setEmail] = useState("admin@admin.com");
  const [number, setnumber] = useState("+1");
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const methods = useForm();
  const onSubmit = (data) => {
    console.log({
      ...data,
      number,
      fristName,
      lastName,
      email,
    });
    // router.push("/Thank_you");
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 md:grid-cols-2 gap-7 py-3"
        >
          {/* frist name  */}
          <div className="">
            <TextField
              value={fristName}
              placeholder="Mohamed "
              required
              fullWidth
              variant="standard"
              name="firstName "
              label="Frist Name "
              type="text"
              onChange={(e) => {
                setFristName(e.target.value);
              }}
            />
          </div>
          {/* last name   */}
          <div className="">
            <TextField
              value={lastName}
              required
              fullWidth
              variant="standard"
              name="firstName "
              label="last Name "
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          {/* email address  */}
          <div className="">
            <TextField
              value={email}
              required
              fullWidth
              variant="standard"
              name="EmailAddress "
              label="Email Address "
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Address */}
          <div className="">
            <CustomTextField name="address " label="Address" type={"text"} />
          </div>
          {/*code andnumber */}
          <div className=" mt-2 ">
            <MuiPhoneNumber
              sx={{ "& svg": { height: "20px" } }}
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
          {/* buttonsent */}
          <div className=" md:col-span-2 ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                Edit Information
              </span>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default USerForm;
