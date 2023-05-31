import { Button } from "@mui/material";
import React, { ComponentType } from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface CustomButtonProps {
  variant: VariantProps;
  text: string;
  sx?: any;
  endIcon: any | ComponentType;
  onClick: Function;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  variant,
  sx,
  text,
  endIcon,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      sx={{
        ...sx,
      }}
      endIcon={endIcon}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
