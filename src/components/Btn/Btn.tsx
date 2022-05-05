import React from "react";
import { Button, styled } from "@mui/material";

export interface LayoutProps {
  children: React.ReactNode;
}

const BtnContainer = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: "18px",
  borderRadius: "45px",
  padding: "4px 25px",
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    boxShadow: `0 0 4px 1px ${theme.palette.primary.main}`,
  },
  "@media screen and (max-width:900px)": {
    fontSize: "16px",
  },
}));
const Btn = ({ children }: LayoutProps) => {
  return <BtnContainer variant="contained">{children}</BtnContainer>;
};

export default Btn;
