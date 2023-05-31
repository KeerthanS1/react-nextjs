import { Box, Fab, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import UserMainDetails from "./inc/user-main-details";
import UserTabs from "./inc/user-tabs";
import RefreshIcon from "@mui/icons-material/Refresh";
import useFetchUserDataHook from "./hooks/useFetchUserDataHook";
import Head from "next/head";
const UserDetails = () => {
  const theme = useTheme();
  const matchesMdDown = useMediaQuery(theme.breakpoints.up("md"));
  const { handleFetchUserData, userData } = useFetchUserDataHook(); // user data hook

  return (
    <>
      <Head>
        <title>{userData?.name?.first} | Details</title>
      </Head>
      <UserMainDetails userData={userData} />
      <UserTabs userData={userData} />
      <Fab
        color="secondary"
        variant={matchesMdDown ? "extended" : "circular"}
        sx={{
          position: "fixed",
          bottom: matchesMdDown ? "24px" : "56px",
          right: "5px",
        }}
        onClick={handleFetchUserData}
      >
        <RefreshIcon sx={{ mr: matchesMdDown ? 1 : 0 }} />
        {matchesMdDown ? "Refresh" : ""}
      </Fab>
    </>
  );
};

export default UserDetails;
