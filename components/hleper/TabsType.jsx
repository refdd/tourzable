import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RecommendTourContainers from "../dashbord/homeDashbord/RecommendTourContainers";

function TabsType() {
  const [value, setValue] = React.useState("packages");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Packages" value="packages" />
              <Tab label="Activities" value="activities" />
              <Tab label="Umrah plus" value="umrah" />
              <Tab label="Landmarks" value="landmarks" />
            </TabList>
          </Box>
          <TabPanel value="packages">
            <RecommendTourContainers />
          </TabPanel>
          <TabPanel value="activities">
            {" "}
            <RecommendTourContainers />
          </TabPanel>
          <TabPanel value="umrah">
            {" "}
            <RecommendTourContainers />
          </TabPanel>
          <TabPanel value="landmarks">
            {" "}
            <RecommendTourContainers />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default TabsType;
