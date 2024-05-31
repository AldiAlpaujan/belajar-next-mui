"use client"

// Next
import Link from "next/link";

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

// component
import AppTextField from "../../atom/AppTextField";
import AuthFirebaseSocial from "../../molecule/AuthFirebaseSocial";


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
        sx={{ pb: '14px' }}
        required
      />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ pb: '14px' }}>
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
      <Button
        fullWidth
        variant="contained"
        sx={{ fontSize: '16px', fontWeight: '600', py: '9px', mb: '24px' }}
      >
        Login
      </Button>
      <Divider sx={{ mb: "24px" }}>
        <Typography variant="caption">Login with</Typography>
      </Divider>
      <AuthFirebaseSocial />
    </Box>
  );
}


export default FormLogin;