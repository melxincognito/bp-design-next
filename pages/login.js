import { Card, Typography } from "@mui/material";

function login() {
  return (
    <div>
      <Card sx={{ padding: "2rem", backgroundColor: "secondary.main" }}>
        {" "}
        Login
      </Card>
      <Card sx={{ padding: "2rem", backgroundColor: "secondary.main" }}>
        <Typography>Login</Typography>
      </Card>
    </div>
  );
}

export default login;
