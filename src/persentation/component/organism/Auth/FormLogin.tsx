"use client"

import Link from "next/link";
import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";

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
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Keep me sign in" />
        <Link href={'#'} style={{ color: '#262626', textDecoration: 'none' }}>
          <Typography sx={{
            '&:hover': {
              textDecoration: 'underline'
            }
          }}>
            Forgot password?
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default FormLogin;