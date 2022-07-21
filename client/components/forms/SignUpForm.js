import React, { useState, forwardRef } from "react";
import { useRouter } from "next/router";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { auth } from "../../firebase-config";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUpForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmSignUpPassword, setConfirmSignUpPassword] = useState("");
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const [showConfirmPasswordSignUp, setShowConfirmPasswordSignUp] =
    useState(false);
  const router = useRouter();
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    router.push("/login");
  };

  const signUpUser = (e) => {
    e.preventDefault();
    if (signUpPassword === confirmSignUpPassword) {
      try {
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        sendEmailVerification(auth.currentUser);
        handleOpenDialog();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  const showPassword = () => {
    setShowPasswordSignUp(!showPasswordSignUp);
    var x = document.getElementById("password-input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const showConfirmPassword = () => {
    setShowConfirmPasswordSignUp(!showConfirmPasswordSignUp);
    var x = document.getElementById("confirm-password-input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  // styles variables
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

  return (
    <>
      {" "}
      <Card className="loginCard" sx={cardStyles}>
        <CardContent sx={headerStyle}>
          <Typography variant="h5"> Sign Up </Typography>
        </CardContent>
        <hr size="1" width="100%" color="gray" />
        <CardContent>
          <form style={contentContainerStyle}>
            <TextField
              className="email-input"
              aria-label="sign up email"
              label="E-mail"
              placeholder="email@gmail.com"
              onChange={(e) => {
                setSignUpEmail(e.target.value);
              }}
              fullWidth
            />

            <TextField
              className="sign-up-password"
              id="password-input"
              aria-label="sign up password"
              label="Password"
              placeholder="P@ssword123"
              onChange={(e) => {
                setSignUpPassword(e.target.value);
              }}
              type="password"
              InputProps={{
                endAdornment: (
                  <Button onClick={showPassword} title="Show Password">
                    {showPasswordSignUp ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </Button>
                ),
              }}
              fullWidth
            />
            <TextField
              className="confirm-sign-up-password"
              id="confirm-password-input"
              aria-label="confirm sign up password"
              label="Confirm Password"
              placeholder="P@ssword123"
              onChange={(e) => {
                setConfirmSignUpPassword(e.target.value);
              }}
              type="password"
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={showConfirmPassword}
                    title="Show Confirm Password"
                  >
                    {showConfirmPasswordSignUp ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </Button>
                ),
              }}
              fullWidth
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            onClick={signUpUser}
            aria-label="sign up button"
          >
            {" "}
            Sign Up
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle>{"Account Successfully Created"}</DialogTitle>
        <hr width="90%" />
        <DialogContent>
          <DialogContentText sx={{ display: "flex", flexWrap: "wrap" }}>
            Check your email at {signUpEmail} to verify your account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
