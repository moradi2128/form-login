// === image ===
import ImgVector from "../../assets/image/loginVector.svg";

import { Box, useTheme, useMediaQuery } from "@mui/material";
import { BoxRight, BoxLeft, LoginTitle } from "./index";
// === Components ===
import Form from "../../components/Form/Form";
import BtnSec from "../../components/BtnSec/BtnSec";

const Login = () => {
  // === Media Query max-width:600px ===
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          height: "auto",
        }}
      >
        <BoxRight>
          <Box sx={{ width: "70%", height: "100%", margin: "auto" }}>
            <LoginTitle>ورود</LoginTitle>
            <Form />
            <Box
              sx={{
                textAlign: "center",
                "& div": { marginBottom: "5px" },
                "& span": {
                  marginLeft: "0.5rem",
                  "@media screen and (max-width:424px)": {
                    fontSize: "14px",
                  },
                },
              }}
            >
              <BtnSec size="small">
                <a href="">گذرواژه خود را فراموش کرده اید؟</a>
              </BtnSec>
              <div>
                <span>هنوز حساب کاربری ندارید؟</span>
                <BtnSec size="small">
                  <a href="">ثبت نام کنید</a>
                </BtnSec>
              </div>
            </Box>
          </Box>
        </BoxRight>
        {!isMatchSm && (
          <BoxLeft>
            <img src={ImgVector} alt="login" />
          </BoxLeft>
        )}
      </Box>
    </main>
  );
};

export default Login;
