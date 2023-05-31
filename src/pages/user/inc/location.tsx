import DetailsTwo from "@/src/common/components/details-two";
import { Box } from "@mui/material";
import React from "react";

interface props {
  locationData: {
    city?: string;
    country?: string;
    postcode?: number;
    state?: string;
    street?: {
      name?: string;
      number?: number;
    };
  };
}

const UserLocation: React.FunctionComponent<props> = ({ locationData }) => {
  return (
    <Box>
      <DetailsTwo
        title="Street"
        value={`${locationData?.street?.number} ${locationData?.street?.name}`}
      />
      <DetailsTwo title="City" value={locationData?.city} />
      <DetailsTwo title="State" value={locationData?.state} />
      <DetailsTwo
        title="Country & Postal"
        value={`${locationData?.country}, ${locationData?.postcode}`}
      />
    </Box>
  );
};

export default UserLocation;
