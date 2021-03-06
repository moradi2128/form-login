import React from "react";
import { styled } from "@mui/material";

export interface LayoutProps {
  children: React.ReactNode;
  size: string;
}

const BtnContainer = styled("div")<LayoutProps>(({ size, theme }) => ({
  color: `${theme.palette.primary.main} !important`,
  position: "relative",
  display: "inline-block",
  fontSize: size === "small" ? "medium" : "large",
  padding: "0",
  transition: "all 0.3s ease",
  "a,button": {
    color: theme.palette.secondary.main,
  },
  button: {
    cursor: "pointer",
    background: "unset",
    fontFamily: "vazir",
    border: "none",
    width: "100%",
    height: "100%",
    fontSize: "inherit",
  },
  "&:before": {
    content: `""`,
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "-3px",
    height: "2px",

    transition: "all 0.3s ease-in-out",
    backgroundColor: theme.palette.primary.main,
    transform: "scale(0)",
  },
  "&:hover a , &:hover button": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    boxShadow: "unset",
  },
  "&:hover:before": {
    transform: "scale(1)",
  },
  "@media screen and (max-width:900px)": {
    fontSize: "16px",
  },
  "@media screen and (max-width:424px)": {
    fontSize: "14px",
  },
}));

const BtnSec = ({ children, size }: LayoutProps) => {
  return <BtnContainer size={size && size}>{children}</BtnContainer>;
};

export default BtnSec;
