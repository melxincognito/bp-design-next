import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

export default function SignUpForm() {
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmSignUpPassword, setConfirmSignUpPassword] = useState("");

  const logit = (e) => {
    e.preventDefault();
    console.log("email: " + signUpEmail);
    console.log("password: " + signUpPassword);
    console.log("confirm password: " + confirmSignUpPassword);
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
            <Typography variant="h5"> Sign Up </Typography>
          </div>

          <hr size="1" width="100%" color="gray" />
          <form style={contentStyle} onSubmit={logit}>
            <TextField
              variant="outlined"
              label="Email"
              onChange={(e) => {
                setsignUpEmail(e.target.value);
              }}
            />
            <TextField
              id="signupPasswordInput"
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => {
                setSignUpPassword(e.target.value);
              }}
            />{" "}
            <TextField
              id="confirmSignupPasswordInput"
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => {
                setConfirmSignUpPassword(e.target.value);
              }}
            />
            <Button variant="contained" type="submit">
              {" "}
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
