import { TextField, styled } from "@mui/material";
import { Controller } from "react-hook-form";
interface LayoutProps {
  label: string;
  type: string;
  control: any;
  error: any;
  name: string;
}

const Input = styled(TextField)({
  marginBottom: "0",
  "& label": {
    left: "unset",
    fontSize: "18px",
    right: "0",
    fontFamily: `"Vazir","Roboto","Helvetica","Arial",sans-serif`,
  },
  "& .MuiInput-underline:before": {
    borderBottom: "1px solid #6c6c76 !important",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "1px solid #6c6c76 !important",
  },
});
const InputItem = ({ label, name, type, control, error }: LayoutProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          id="standard-basic"
          variant="standard"
          margin="normal"
          fullWidth
          helperText={error ? error.message : " "}
          error={error && !!error.message}
          onChange={(e) => field.onChange(e)}
          label={label}
          type={type}
          name={name}
        />
      )}
    />
  );
};

export default InputItem;
