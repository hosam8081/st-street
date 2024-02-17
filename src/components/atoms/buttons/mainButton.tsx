import React from "react";
import { Button, ButtonProps as MuiButtonProps } from "@mui/material";
import { SxProps } from "@mui/material/styles";

interface MainButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
  sx?: SxProps;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MainButton = ({ children, sx, onClick, ...rest }: MainButtonProps) => {
  return (
    <Button
      autoFocus
      sx={{
        borderRadius: "6px",
        fontSize: "20px",
        padding:"7px 50px",
        fontWeight: "600",
        fontFamily: '"Poppins", sans-serif',
        textTransform: "none",
        boxShadow:"none",
        ...sx,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MainButton;
