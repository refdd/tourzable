import { InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import CustomTextField from "../hleper/CustomTextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import SignInBY from "./SignInBY";
import { useSession, signIn, signOut } from "next-auth/react";

function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorSignIn, seterrorSignIn] = useState();
  const router = useRouter();
  const { email } = router.query;
  const { data: session } = useSession();
  console.log(session);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  console.log(errorSignIn);
  const methods = useForm();
  const onSubmit = (data) => {
    // console.log({
    //   ...data,
    // });
    signIn("credentials", {
      redirect: false,
      ...data,
    }).then((res) => {
      console.log(res);

      if (!res.ok) {
        seterrorSignIn(res.error);
      } else {
        router.push("/");
      }
    });
  };
  //  remove email query parma
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/Login");
    }
  });
  return (
    <div className="bg-[#e5f0fd] py-11 ">
      <div className="container mx-auto px-4 md:w-[35%]  bg-white shadow-lg rounded-md md:py-9">
        <div className="py-4 px-3">
          {/* header form  */}
          <div className="flex flex-col space-y-4 ">
            <p className="text-[22px] font-medium capitalize font-sans text-mainColor ">
              Welcome back
            </p>
            <p className="text-[16px] text-[#697488] font-sans capitalize">
              Don't have an account yet?{" "}
              <Link href={"/sign-up"}>
                <span className="text-mainColor font-medium cursor-pointer underline">
                  Sign up for free
                </span>
              </Link>
            </p>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 mt-7  "
            >
              {/* frist name  */}
              <div className=" md:col-span-2">
                {/* <CustomTextField
                  required
                  name="email"
                  label="email address"
                  type={"text"}
                /> */}
                <Controller
                  name={"email"}
                  control={methods.control}
                  defaultValue={email}
                  render={({ field }) => (
                    <TextField
                      type={"text"}
                      {...field}
                      label="email address"
                      fullWidth
                      variant="standard"
                      id="outlined-required"
                      required
                    />
                  )}
                />
              </div>

              {/* password */}
              <div className=" md:col-span-2">
                <Controller
                  name="password"
                  control={methods.control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Password"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      type={showPassword ? "text" : "password"}
                      value={value}
                      onChange={onChange}
                      error={errorSignIn ? true : false}
                      required
                      helperText={errorSignIn ? errorSignIn : ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div onClick={handleTogglePasswordVisibility}>
                              {showPassword ? (
                                <VisibilityIcon className="cursor-pointer" />
                              ) : (
                                <VisibilityOffIcon className="cursor-pointer" />
                              )}
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>

              {/* buttonsent */}
              <div className=" md:col-span-2 ">
                <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
                  <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                    Register
                  </span>
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <SignInBY />
      </div>
    </div>
  );
}

export default FormSignIn;
