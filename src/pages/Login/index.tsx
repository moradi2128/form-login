import { styled } from "@mui/material";

export const BoxRight = styled("section")({
  width: "50%",
  "@media screen and (max-width:599px)": {
    width: "100%",
  },
});

export const BoxLeft = styled("section")({
  width: "50%",
  display: "flex",
  "& img": {
    width: "100%",
  },
});
export const LoginTitle = styled("h2")({
  marginTop: "2.5rem",
  textAlign: "center",
});
