import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import UserLocation from "./location";
import UserAbout from "./about";
import EmptyState from "@/src/common/components/empty-state";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-tabs-${index}`}
      aria-labelledby={`user-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 2, py: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

interface props {
  userData: any;
}

const UserTabs: React.FunctionComponent<props> = ({ userData }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="User Tabs">
        <Tab label="Location" id="location" />
        <Tab label="About" id="about" />
        <Tab label="Projects" id="projects" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserLocation locationData={userData?.location} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserAbout />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmptyState />
      </TabPanel>
    </Box>
  );
};

export default UserTabs;
