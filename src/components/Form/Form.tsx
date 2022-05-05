import React from "react";

import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled, FormControlLabel, Checkbox, Button } from "@mui/material";
// === Components ===
import InputItem from "../InputItem/InputItem";

const BtnSubmit = styled(Button)(({ theme }) => ({
  display: "block",
  width: "100%",
  margin: "3rem 0",
  padding: "5px 0",
  fontSize: "large",
  borderRadius: "10px",
  background: `linear-gradient(90deg, #8f48ff, ${theme.palette.primary.main})`,
  boxShadow: " 0 3px 6px 0 rgb(0 0 0 / 16%)",
  transition: "unset",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

interface IFormInput {
  email: string;
  password: string;
}
// === Validation ===
const schema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل معتبر وارد کنید")
      .required("ایمیل خود را وارد کنید"),
    password: yup
      .string()
      .required("پسورد را وارد کنید")
      .min(4, "رمز عبور باید بیشتر از 4 کارکتر باشد")
      .max(12, "رمز عبور باید کمتر 12 کارکتر باشد"),
  })
  .required();

const Form = () => {
  // === React hook Form ===
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const { errors } = useFormState({ control });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name="email"
        label="ایمیل"
        type="text"
        control={control}
        error={errors.email}
      />
      <InputItem
        name="password"
        label="گذرواژه"
        type="password"
        control={control}
        error={errors.password}
      />
      {/* === Checkbox === */}
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        sx={{
          marginRight: "0",
          marginTop: "0",
          "& span": {
            paddingRight: "0",
          },
        }}
        label="مرا به خاطر بسپار"
      />
      <BtnSubmit variant="contained" type="submit">
        وارد شوید
      </BtnSubmit>
    </form>
  );
};

export default Form;
