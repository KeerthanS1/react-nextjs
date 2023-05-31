import { Box, Typography } from "@mui/material";
import React from "react";

interface props {
  title: string;
  value?: string;
}

const DetailsTwo: React.FunctionComponent<props> = ({ title, value }) => {
  return (
    <Box mb={1}>
      <Typography
        fontSize="12px"
        color="#aaa"
        fontWeight={500}
        textTransform="uppercase"
      >
        {title}
      </Typography>
      <Typography fontSize="16px" fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
};

export default DetailsTwo;
