import { Card } from "@mui/material";
import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode,
}

const AuthCard = (props: AuthCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: '8px',
        maxWidth: { xs: 400, lg: 475 },
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
        m: '30px', p: { xs: '16px', sm: '24px' },
      }}
    >
      {props.children}
    </Card>
  );
}

export default AuthCard;