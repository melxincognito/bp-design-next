import LoginForm from "../components/forms/LoginForm";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

function login() {
  const cardStyles = {
    padding: 2,
    borderRadius: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      <LoginForm />
      <div style={{ marginTop: "1rem" }}>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography>
              {" "}
              Dont have an account?{" "}
              <Link href="/signup" color="purple">
                Click here to sign up!
              </Link>{" "}
            </Typography>{" "}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default login;
