import * as React from "react";
// === Logo Img ===
import logo from "../../assets/image/logo.svg";
import logoText from "../../assets/image/logoName.svg";
import { Link } from "react-router-dom";

import { Container, Typography, useTheme, useMediaQuery } from "@mui/material";
import { AppBarStyle, ToolbarWr, Nav, Ul, LinkItem, BoxLeft } from "./index";
// === Components ===
import Btn from "../Btn/Btn";
import BtnSec from "../BtnSec/BtnSec";
import DrawerMenu from "../Drawer/DrawerMenu";

// === Nav Item ===
const pages = [
  { title: "خانه", to: "/" },
  { title: "درباره ما", to: "/about" },
  { title: "API", to: "/api" },
];

const Header = () => {
  const theme = useTheme();
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBarStyle position="static">
      <Container sx={{ height: "100%" }}>
        <ToolbarWr disableGutters>
          {isMatchMd && (
            <DrawerMenu>
              {pages.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.to}>{item.title}</Link>
                  </li>
                );
              })}
              
            </DrawerMenu>
          )}
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginLeft: "2rem",
              "@media screen and (max-width:900px)": {
                marginLeft: "0",
              },
            }}
          >
            <img src={logo} />
            {!isMatchMd && <img src={logoText} />}
          </Typography>
          {/* === Nav === */}
          {!isMatchMd && (
            <>
              <Nav sx={{ flexGrow: 1 }}>
                <Ul>
                  {pages.map((item, index) => {
                    return (
                      <li key={index}>
                        <LinkItem to={item.to}>{item.title}</LinkItem>
                      </li>
                    );
                  })}
                </Ul>
              </Nav>
              <BoxLeft>
                <BtnSec size="large">
                  <button>ثبت نام</button>
                </BtnSec>
                <Btn>ورود</Btn>
              </BoxLeft>
            </>
          )}
        </ToolbarWr>
      </Container>
    </AppBarStyle>
  );
};

export default Header;
