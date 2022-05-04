import { styled, AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

// === Styled Components ===
export const AppBarStyle = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  height: "64px",
  color: "#000",
});
export const ToolbarWr = styled(Toolbar)({
  height: "100%",
  "@media screen and (max-width:900px)": {
    justifyContent: "space-between",
  },
});
// === Right Box ===
export const Nav = styled("nav")({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
});
export const Ul = styled("ul")({
  display: "flex",
  gap: "1rem",
});
export const LinkItem = styled(Link)({
  padding: "1rem",
  color: " #9b9b9b",
  fontSize: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#000",
  },
});
// === Left Box ===
export const BoxLeft = styled(Box)({
  flexGrow: 0,
  display: "flex",
  gap: "2rem",
  position: "relative",
  "&:before": {
    content: `""`,
    width: "2px",
    height: "100%",
    background: "#000000",
    opacity: "0.2",
    position: "absolute",
    right: "42%",
  },
});
