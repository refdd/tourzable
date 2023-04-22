import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
function PasswordChange() {
  const [showPassword, setShowPassword] = useState(false);

  const resolver = yupResolver(schema);
  const { handleSubmit, control } = useForm({ resolver });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (data) => {
    console.log({
      ...data,
    });
    // router.push("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* password */}
      <div className="">
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="outlined"
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
      {/* confirm password */}
      <div className="">
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Confirm Password"
              variant="outlined"
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
            change Password
          </span>
        </button>
      </div>
    </form>
  );
}

export default PasswordChange;
