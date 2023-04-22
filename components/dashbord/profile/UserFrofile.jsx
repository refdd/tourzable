import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PersonalInformation from "./PersonalInformation";
import PasswordChange from "./PasswordChange";
// import FavoritesContainer from "./FavoritesContainer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function UserFrofile() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="container mx-auto px-4 md:px-10">
      <Box
        sx={{
          bgcolor: "background.paper",
          flexGrow: 1,
        }}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
            borderRadius: "30px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="secondary"
            textColor="secondary"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            <Tab label="Personal Information" {...a11yProps(0)} />
            <Tab label="Change Password" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <FavoritesContainer /> */}
          <PersonalInformation />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <FavoritesContainer /> */}
          <PasswordChange />
        </TabPanel>
      </Box>
    </div>
  );
}

export default UserFrofile;
