import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function SignUpForm() {
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpCompanyName, setSignUpCompanyName] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmSignUpPassword, setConfirmSignUpPassword] = useState("");

  const userSignUpInformation = [
    {
      label: "First Name",
      onChangeFunc: setSignUpFirstName,
      index: 0,
    },
    {
      label: "Last Name",
      onChangeFunc: setSignUpLastName,
      index: 1,
    },
    {
      label: "Company Name",
      onChangeFunc: setSignUpCompanyName,
      index: 2,
    },
  ];
  // the email will be what's used for the login, and the sign up information is just for
  // tracking personal information of users

  const userSignupLoginInformation = [
    {
      label: "Email",
      type: "email",
      onChangeFunc: setsignUpEmail,
      index: 0,
      id: "emailInput",
    },
    {
      label: "Password",
      type: "password",
      onChangeFunc: setSignUpPassword,
      index: 1,
      id: "signupPasswordInput",
    },
    {
      label: "Confirm Password",
      type: "password",
      onChangeFunc: setConfirmSignUpPassword,
      index: 2,
      id: "confirmSignupPasswordInput",
    },
  ];

  const logit = (e) => {
    e.preventDefault();
    console.log("Name: " + signUpFirstName + " " + signUpLastName);
    console.log("Company Name: " + signUpCompanyName);
    console.log("email: " + signUpEmail);
    console.log("password: " + signUpPassword);
    console.log("confirm password: " + confirmSignUpPassword);
  };
  const cardStyles = {
    padding: 5,
    borderRadius: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  };
  const contentContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 10,
  };

  const boxStyles = {
    display: "grid",
    gap: 10,
  };

  return (
    <>
      {" "}
      <Card className="loginCard" sx={cardStyles}>
        <CardContent sx={headerStyle}>
          <Typography variant="h5"> Sign Up </Typography>
        </CardContent>
        <hr size="1" width="100%" color="gray" />
        <CardContent>
          <form style={contentContainerStyle} onSubmit={logit}>
            <div style={boxStyles}>
              {userSignUpInformation.map((item) => (
                <TextField
                  key={item.index}
                  variant="outlined"
                  label={item.label}
                  onChange={(e) => {
                    item.onChangeFunc(e.target.value);
                  }}
                  fullWidth
                />
              ))}
            </div>
            <div style={boxStyles}>
              {userSignupLoginInformation.map((item) => (
                <TextField
                  key={item.index}
                  variant="outlined"
                  label={item.label}
                  type={item.type}
                  id={item.id}
                  onChange={(e) => {
                    item.onChangeFunc(e.target.value);
                  }}
                  fullWidth
                />
              ))}
            </div>
          </form>
        </CardContent>

        <Button fullWidth variant="contained" type="submit" onClick={logit}>
          {" "}
          Sign Up
        </Button>
      </Card>
    </>
  );
}
