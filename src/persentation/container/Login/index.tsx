import AuthBackground from "@/assets/images/auth/AuthBackground";
import AppLogo from "@/persentation/component/atom/AppLogo";
import Box from "@mui/material/Box";

const LoginView = () => {
  return (
    <Box
      component="main"
    >
      <AuthBackground />
      <AppLogo />
    </Box>
  );
}

export default LoginView;