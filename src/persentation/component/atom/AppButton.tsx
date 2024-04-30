"use client"
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface AppBtnProps {
  children?: ReactNode
  onClick?: () => void,
}

const AppButton = (props: AppBtnProps) => {
  return (
    <Button
      variant="contained"
      sx={{ mb: 2 }}
      onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default AppButton;