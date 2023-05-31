import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomBottomNavigation from "./inc/custom-bottom-navigation";

const Layout = (props: any) => {
  const theme = useTheme();
  const matchesMdDown = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box height="100%" mb={4}>
      <>{props?.children}</>
      {matchesMdDown ? null : <CustomBottomNavigation />}
    </Box>
  );
};

export default Layout;
