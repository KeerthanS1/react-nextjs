import { Card, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
const EmptyState = () => {
  return (
    <Card
      sx={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        padding: "24px 12px",
        textAlign: "center",
      }}
    >
      <SentimentVeryDissatisfiedIcon
        sx={{
          fontSize: "48px",
          color: "rgba(0,0,0,0.2)",
        }}
      />
      <Typography mt={2} fontWeight={600}>
        No data found
      </Typography>
    </Card>
  );
};

export default EmptyState;
