// Next
import Link from "next/link";

// MUI
import { Grid, Stack, Typography } from "@mui/material";

// Components
import AuthWrapper from "@/persentation/component/template/AuthWrapper";
import FormRegister from "@/persentation/component/organism/Auth/FormRegister";

const RegisterView = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h3">
              Sign up
            </Typography>
            <Link href={'/login'} style={{ textDecoration: "none" }}>
              <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                Already have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default RegisterView;