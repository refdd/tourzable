import { InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import CustomTextField from "../hleper/CustomTextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const methods = useForm();
  const onSubmit = (data) => {
    console.log({
      ...data,
    });
    router.push("/dashboard");
  };
  return (
    <div className="bg-[#e5f0fd] py-11 ">
      <div className="container mx-auto px-4 md:w-[40%]">
        <div className="py-4 px-3 bg-white shadow-lg rounded-md md:py-9">
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
                <CustomTextField
                  required
                  name="firstName "
                  label="Frist Name "
                  type={"text"}
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
                      error={!!error}
                      helperText={error ? error.message : ""}
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
      </div>
    </div>
  );
}

export default FormSignIn;
