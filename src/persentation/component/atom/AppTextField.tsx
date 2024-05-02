import { InputLabel, Stack, Typography } from "@mui/material";

interface AppTextFieldProps {
  label?: string,
}

const AppTextField = (props: AppTextFieldProps) => {
  const { label } = props;
  return (
    <Stack direction={"column"}>
      {label &&
        <InputLabel htmlFor="" >{label}</InputLabel>
      }
    </Stack>
  );
}

export default AppTextField;