import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
const schema = yup.object().shape({
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("new password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
function PasswordChange() {
  const [showPassword, setShowPassword] = useState(false);
  const resolver = yupResolver(schema);
  const methods = useForm({ resolver });
  const { handleSubmit, control } = methods;
  const { data: session } = useSession();
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/change_password",
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.user.accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // setError(false);
        // router.push("/Login", { query: { email: data.email } });
        // router.push({
        //   pathname: "/Login",
        //   query: {
        //     email: data.email,
        //   },
        // });
        signOut();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
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
              label="old Password"
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
      {/* password */}
      <div className="">
        <Controller
          name="new_password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label=" new Password"
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
          name="confirm_password"
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
