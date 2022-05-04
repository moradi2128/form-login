import React from "react";
import { Button, styled } from "@mui/material";

export interface LayoutProps {
  children: React.ReactNode;
}

const BtnContainer = styled(Button)({
  backgroundColor: "#1d5aff",
  color: "#fff",
  fontSize: "18px",
  borderRadius: "45px",
  padding: "4px 25px",
  border: "1px solid #1d5aff",
  fontFamily: `"Vazir","Roboto","Helvetica","Arial",sans-serif`,

  "&:hover": {
    backgroundColor: "#fff",
    color: "#1f184a",
    boxShadow: "0 0 4px 1px #1d5aff",
  },
  "@media screen and (max-width:900px)":{
    fontSize: "16px",
  }
});
const Btn = ({ children }: LayoutProps) => {
  return <BtnContainer variant="contained">{children}</BtnContainer>;
};

export default Btn;
