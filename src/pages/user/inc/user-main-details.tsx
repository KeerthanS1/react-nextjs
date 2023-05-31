import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface props {
  userData: {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
    };
  };
}

const UserMainDetails: React.FunctionComponent<props> = ({ userData }) => {
  const { name, email, picture } = userData;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "62px 12px 42px 12px",
        background: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      }}
    >
      <Box textAlign="center">
        <Avatar
          src={picture?.large}
          alt={name?.first}
          sx={{
            width: "140px",
            height: "140px",
            margin: "0 auto",
          }}
        />
        <Typography mt={2} fontSize="24px" fontWeight={600}>
          {name?.title}. {name?.first} {name?.last}
        </Typography>
        <Typography fontSize="14px" fontWeight={600} mt={0.5}>
          {email}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserMainDetails;
