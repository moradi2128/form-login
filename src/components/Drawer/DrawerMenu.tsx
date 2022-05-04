import React, { useState } from "react";

import { Drawer, IconButton, List } from "@mui/material";
import { Ul, DrawerHeader } from "./index";
import { BoxLeft } from "../Header/index";
// === Icons ===
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
// === Components ===
import BtnSec from "../BtnSec/BtnSec";
import Btn from "../Btn/Btn";

export interface LayoutProps {
  children: React.ReactNode;
}

const DrawerMenu = ({ children }: LayoutProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={() => setOpenDrawer(false)}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ minWidth: "320px" }}>
          <Ul>{children}</Ul>
          <BoxLeft sx={{ width: "100%", justifyContent: "space-around" }}>
            <BtnSec size="large">
              <button>ثبت نام</button>
            </BtnSec>
            <Btn>ورود</Btn>
          </BoxLeft>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
