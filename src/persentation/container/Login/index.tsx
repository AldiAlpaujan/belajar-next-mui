// Next
import Link from "next/link";

// MUI
import { Grid, Stack, Typography } from "@mui/material";

// Components
import AuthWrapper from "@/persentation/component/template/AuthWrapper";
import FormLogin from "@/persentation/component/organism/Auth/FormLogin";

const LoginView = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h4">
              Login
            </Typography>
            <Link href={'/register'} style={{ textDecoration: "none" }}>
              <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                Don&apos;t have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default LoginView;