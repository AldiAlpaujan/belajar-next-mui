"use client"

import { Box } from "@mui/material";

import AppTextField from "../../atom/AppTextField";

const FormLogin = () => {
  return (
    <Box
      component="form"
      noValidate
      onSubmit={() => { }}
    >
      <AppTextField
        id="email"
        name="Email"
        type="email"
        label="Email Address"
        placeholder="Enter email address"
        sx={{ pb: '24px' }}
        required
      />
      <AppTextField
        id="pw"
        name="Password"
        type="password"
        label="Password"
        placeholder="Enter password"
        required
      />
    </Box>
  );
}

export default FormLogin;