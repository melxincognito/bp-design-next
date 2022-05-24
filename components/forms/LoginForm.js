import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const showPasswordLogin = () => {
    var x = document.getElementById("loginPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const cardStyles = {
    padding: 5,
    borderRadius: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    display: "grid",
    justifyContent: "center",
    gap: "1rem",
  };
  return (
    <>
      {" "}
      <Card className="loginCard" sx={cardStyles}>
        <CardContent sx={contentStyle}>
          <div
            className="header"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Typography variant="h5"> Login </Typography>
          </div>

          <hr size="1" width="100%" color="gray" />
          <form
            style={contentStyle}
            onSubmit={() => {
              console.log(
                "email: " + loginEmail + " Password: " + loginPassword
              );
            }}
          >
            <TextField
              variant="outlined"
              label="Email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />

            <TextField
              id="loginPasswordInput"
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />

            <div style={{ display: "inline-block" }}>
              <input type="checkbox" onClick={showPasswordLogin} />{" "}
              <label>Show password</label>
            </div>

            <Button variant="contained" type="submit">
              {" "}
              Log in
            </Button>
            <label>
              {" "}
              Forgot password?{" "}
              <a href="/forgotpassword" target="_blank">
                Click here{" "}
              </a>
            </label>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
