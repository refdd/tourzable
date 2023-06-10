import {
  Button,
  Checkbox,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import bg from "../../public/assets/images/contactUs.webp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "./CustomTextField";
const languages = [
  { id: 1, title: "Arabic" },
  { id: 2, title: "English" },
  { id: 3, title: "Chinese" },
  { id: 4, title: "French" },
  { id: 5, title: "German" },
  { id: 6, title: "Spanish" },
  { id: 7, title: "Portuguese" },
  { id: 8, title: "Hindi" },
  { id: 9, title: "Japanese" },
  { id: 10, title: "Russian" },
  { id: 10, title: "Japanese" },
];
const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("new password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function FromTourGuides({ cities }) {
  const resolver = yupResolver(schema);
  const methods = useForm({ resolver });
  const { handleSubmit, control } = methods;
  const [profilePicture, setProfilePicture] = useState();
  const [language, setLanguage] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [guideCities, setGuideCities] = useState([]);
  const [lisense, setLisense] = useState();
  const [qualification, setQualification] = React.useState("");
  const [isAgree, setIsAgree] = useState(false);
  const onSubmit = (data) => {
    console.log({
      ...data,
    });
    // router.push("/Thank_you");
  };
  const handlepPicture = (event) => {
    // Handle file upload logic here
    setProfilePicture(event.target.value);
  };
  const handleplisense = (event) => {
    // Handle file upload logic here
    setLisense(event.target.value);
  };
  const handleDestination = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(typeof value === "string" ? value.split(",") : value);
  };
  const handleGuideCities = (event) => {
    const {
      target: { value },
    } = event;
    setGuideCities(typeof value === "string" ? value.split(",") : value);
  };
  const handleQualification = (event) => {
    setQualification(event.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleIsAgree = (event) => {
    setIsAgree(event.target.isAgree);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={
        " relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-top  py-20 mt-10"
      }
    >
      <div className={"container mx-auto px-4 md:w-[70%] "}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="border rounded-md py-4 px-5 shadow-xl bg-white bg-opacity-[0.6]"
          >
            <p className="text-lg font-sans font-medium text-mainColor">
              Tour Guide Registration
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* name  */}
              <div className="">
                <CustomTextField
                  required
                  name="name"
                  label="full Name"
                  type={"text"}
                />
              </div>
              {/* Upload Profile Picture  */}
              <div className="">
                <p className="text-sm font-sans capitalize text-gray-700">
                  Upload Profile Picture
                </p>
                <TextField
                  value={profilePicture}
                  id="outlined-basic"
                  variant="standard"
                  fullWidth
                  type="file"
                  onChange={handlepPicture}
                  inputProps={{
                    multiple: true,
                  }}
                />
              </div>
              {/*Upload Tour Guide License */}
              <div className="">
                <p className="text-sm font-sans capitalize text-gray-700">
                  Upload Tour Guide License
                </p>
                <TextField
                  value={lisense}
                  id="outlined-basic"
                  variant="standard"
                  fullWidth
                  type="file"
                  onChange={handleplisense}
                  inputProps={{
                    multiple: true,
                  }}
                />
              </div>
              {/* languages  */}
              <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Languages
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={language}
                    onChange={handleDestination}
                    renderValue={(selected) => {
                      const result = [];

                      for (let i = 0; i < selected.length; i++) {
                        for (let j = 0; j < languages.length; j++) {
                          if (selected[i] === languages[j].id) {
                            result.push(languages[i].title);
                          }
                        }
                      }
                      // console.log(result?.join(", "));
                      return result?.join(", ");
                    }}
                    MenuProps={MenuProps}
                  >
                    {languages.map((des) => (
                      <MenuItem key={des.id} value={des.id}>
                        <Checkbox checked={language.indexOf(des.id) > -1} />
                        <ListItemText primary={des.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* add more langane */}
              <div className="">
                <CustomTextField
                  required
                  name="Other_Languages"
                  label="Other Languages"
                  type={"text"}
                />
              </div>
              {/* qualification */}
              <div className="">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    qualification
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qualification}
                    label="qualification"
                    onChange={handleQualification}
                  >
                    <MenuItem value={"Tour"}>Tour</MenuItem>
                    <MenuItem value={"Tour Traniner"}>Tour Traniner</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* Approved Path */}
              <div className="">
                <CustomTextField
                  required
                  name="approved_path"
                  label="Approved Path"
                  type={"text"}
                />
              </div>
              {/*Interests */}
              <div className="">
                <CustomTextField
                  required
                  name="Interests"
                  label="Interests"
                  type={"text"}
                />
              </div>
              {/* Cities  */}
              {/* <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Cities
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={guideCities}
                    onChange={handleGuideCities}
                    renderValue={(selected) => {
                      const result = [];

                      for (let i = 0; i < selected.length; i++) {
                        for (let j = 0; j < cities.length; j++) {
                          if (selected[i] === cities[j].id) {
                            result.push(cities[i].title);
                          }
                        }
                      }
                      // console.log(result?.join(", "));
                      return result?.join(", ");
                    }}
                    MenuProps={MenuProps}
                  >
                    {cities.map((des) => (
                      <MenuItem key={des.id} value={des.id}>
                        <Checkbox checked={guideCities.indexOf(des.id) > -1} />
                        <ListItemText primary={des.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div> */}
              <div className=""></div>
              {/*  */}
              <p className="text-lg text-mainColor font-sans capitalize font-bold md:col-span-2">
                Contact Person
              </p>
              {/* First Name  */}
              <div className="">
                <CustomTextField
                  required
                  name="first_name"
                  label="First Name"
                  type={"text"}
                />
              </div>
              {/* Last Name  */}
              <div className="">
                <CustomTextField
                  required
                  name="last_name"
                  label="Last Name"
                  type={"text"}
                />
              </div>
              {/* Email Address  */}
              <div className="">
                <CustomTextField
                  required
                  name="Email"
                  label="username@email.com"
                  type={"text"}
                />
              </div>
              {/* password */}
              <div className="">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label=" password"
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
              {/* confirm password */}
              <div className="">
                <Controller
                  name="confirm_password"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Confirm Password"
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
              {/* check box */}
              <div className=" flex items-center md:col-span-2 ">
                <Checkbox
                  required
                  checked={isAgree}
                  onChange={handleIsAgree}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className="text-sm font-sans font-medium text-gray-800 capitalize">
                  Agree Our{" "}
                  <span className="text-mainColor cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  And
                  <span className="text-mainColor cursor-pointer">
                    {" "}
                    Privacy{" "}
                  </span>
                </p>
              </div>
              {/* buttonsent */}
              <div className=" md:col-span-2 ">
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
  );
}

export default FromTourGuides;
