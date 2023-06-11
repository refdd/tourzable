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
import React, { useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "./CustomTextField";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSession } from "next-auth/react";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number-2";
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
function FromTourOders({ cities }) {
  const methods = useForm();
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [transportation, setTransportation] = useState(`car`);
  const [nationality, setNationality] = useState(`saudi`);
  const [tripType, setTripType] = useState(`normal`);
  const [startTime, setStartTime] = useState(null);
  const [operatorId, setOperatorId] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const { handleSubmit, control } = methods;
  const [guideCities, setGuideCities] = useState();
  const [packagesOpertaor, setPackagesOpertaor] = useState([]);
  const [packagesOpertaorId, setPackagesOpertaorId] = useState([]);
  const [uploadItinerary, setUploadItinerary] = useState();
  const { data: session } = useSession();
  const [number, setnumber] = useState("+1");
  const [isAgree, setIsAgree] = useState(false);
  const startDayFormate = StartDate
    ? StartDate.format("DD-MM-YYYY")
    : StartDate;
  const endDayFormate = EndDate ? EndDate.format("DD-MM-YYYY") : EndDate;
  const startTimeFormate = startTime ? startTime.format("HH:mm:ss") : startTime;
  const endTimeFormate = endTime ? endTime.format("HH:mm:ss") : endTime;
  useEffect(() => {
    const getpackegesOperator = async () => {
      if (session) {
        await axios
          .get("https://new.tourzable.com/api/operator_profile", {
            headers: {
              Authorization: "Bearer " + session.user.accessToken,
            },
          })
          .then((response) => {
            // console.log(response.data.data.id);
            setOperatorId(response.data.data.id);
            setPackagesOpertaor(response.data.data.packages);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    getpackegesOperator();
  }, []);
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/tour_orders",
        {
          ...data,
          operator_id: operatorId,
          tour_guide_id: 1,
          city_id: guideCities,
          start_date: startDayFormate,
          end_date: endDayFormate,
          start_time: startTimeFormate,
          end_time: endTimeFormate,
          transportation_type: transportation,
          group_nationality: nationality,
          trip_type: tripType,
          persons_no: 20,
          package_id: packagesOpertaorId,
          program_file: uploadItinerary,
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
    console.log({
      ...data,
    });
    // router.push("/Thank_you");
  };

  const handlesetStartDateChange = (date) => {
    setStartDate(date);
  };
  const handlesetEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleUploadItinerary = (event) => {
    // Handle file upload logic here
    setUploadItinerary(event.target.value);
  };
  const handlePhoneNumber = (value) => {
    setnumber(value);
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
              {/* Titel  */}
              <div className="md:col-span-2">
                <CustomTextField
                  required
                  name="title"
                  label="Title"
                  type={"text"}
                />
              </div>
              {/*start date*/}
              <div className=" ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={StartDate}
                    onChange={handlesetStartDateChange}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        label: "Start Date",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              {/*endDate date*/}
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={EndDate}
                    onChange={handlesetEndDateChange}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        label: "End Date",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              {/*start time*/}
              <div className=" ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                      },
                    }}
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => {
                      setStartTime(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                  />
                </LocalizationProvider>
              </div>
              {/*endDate time*/}
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                      },
                    }}
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => {
                      setEndTime(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                  />
                </LocalizationProvider>
              </div>
              {/* Cities  */}
              <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel>City</InputLabel>
                  <Select
                    variant="standard"
                    value={guideCities}
                    fullWidth
                    onChange={(e) => setGuideCities(e.target.value)}
                    renderValue={(selected) => {
                      const reasit = cities.filter(
                        (item) => item.id == selected
                      );
                      //   console.log(reasit[0]?.title);
                      return reasit[0]?.title;
                    }}
                    displayEmpty
                  >
                    {cities.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* Choose A Package  */}
              <div className="">
                <FormControl variant="standard" fullWidth sx={{}}>
                  <InputLabel>Choose A Package </InputLabel>
                  <Select
                    variant="standard"
                    value={packagesOpertaorId}
                    fullWidth
                    onChange={(e) => setPackagesOpertaorId(e.target.value)}
                    renderValue={(selected) => {
                      const reasit = packagesOpertaor.filter(
                        (item) => item.id == selected
                      );
                      // console.log(reasit[0].title);
                      return reasit[0]?.title;
                    }}
                    displayEmpty
                  >
                    {packagesOpertaor?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* Or Upload Itinerary File */}
              <div className="">
                <p className="text-sm font-sans capitalize text-gray-700">
                  Upload Tour Guide License
                </p>
                <TextField
                  value={uploadItinerary}
                  id="outlined-basic"
                  variant="standard"
                  fullWidth
                  type="file"
                  onChange={handleUploadItinerary}
                  inputProps={{
                    multiple: true,
                  }}
                />
              </div>
              {/* Persons Number*/}
              <div className=" md:mt-2 ">
                <MuiPhoneNumber
                  sx={{ "& svg": { height: "0.7em" } }}
                  // slot={{}}
                  label="Persons Number"
                  value={number}
                  autoFormat={true}
                  fullWidth
                  required
                  variant="standard"
                  defaultCountry="us"
                  onChange={handlePhoneNumber}
                />
              </div>
              {/* Transportation Type */}
              <div className="">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Transportation Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={transportation}
                    label="Transportation Type"
                    onChange={(event) => {
                      setTransportation(event.target.value);
                    }}
                  >
                    <MenuItem value={"car"}>Car</MenuItem>
                    <MenuItem value={"bus"}>Bus</MenuItem>
                    <MenuItem value={"privit_car"}>Privit Car</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* Group Nationality */}
              <div className="">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Group Nationality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nationality}
                    label="Group Nationality"
                    onChange={(event) => {
                      setNationality(event.target.value);
                    }}
                  >
                    <MenuItem value={"saudi"}>saudi</MenuItem>
                    <MenuItem value={"foreign"}>foreign</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* Trip Type*/}
              <div className="">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Trip Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tripType}
                    label="Trip Type"
                    onChange={(event) => {
                      setTripType(event.target.value);
                    }}
                  >
                    <MenuItem value={"normal"}>normal</MenuItem>
                    <MenuItem value={"vip"}>vip</MenuItem>
                  </Select>
                </FormControl>
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

export default FromTourOders;
