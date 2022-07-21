import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      alert("logged in");
    } catch (error) {
      alert(error.message);
    }
  };

  const showPasswordLogin = () => {
    setShowPassword(!showPassword);
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
          <form style={contentStyle} onSubmit={loginUser}>
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
              InputProps={{
                endAdornment: (
                  <Button onClick={showPasswordLogin} title="Show Password">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </Button>
                ),
              }}
            />

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
