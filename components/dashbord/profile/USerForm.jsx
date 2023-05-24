import CustomTextField from "@/components/hleper/CustomTextField";
import { TextField } from "@mui/material";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

function USerForm({ selectedImag }) {
  const [fristName, setFristName] = useState("Mohamed");
  const [lastName, setLastName] = useState("Refat");
  const [email, setEmail] = useState("admin@admin.com");
  const [number, setnumber] = useState("+966");
  const { data: session } = useSession();
  const router = useRouter();
  const { query } = router;
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const methods = useForm();
  useEffect(() => {
    if (session) {
      setFristName(session.user.name);
      setLastName("");
      setEmail(session.user.email);
      setnumber(session.user.phone);
    }
  }, [session]);
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/update_profile",
        {
          first_name: fristName,
          last_name: lastName,
          email: email,
          phone: number,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        signOut();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({ ...data, number, aduits, childs, data: dateFormated });
    // router.push("/Thank_you");

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
