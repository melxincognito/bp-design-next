import React, { useState } from "react";
import { useRouter } from "next/router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-config";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForgotPasswordForm() {
  const [open, setOpen] = useState(false);
  // email input state
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const router = useRouter();

  const openPopupModal = () => {
    setOpen(true);
  };

  const closePopupModal = () => {
    setOpen(false);
    router.push("/login");
  };

  const sendResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      await openPopupModal();
    } catch (error) {
      alert(error.message);
    }
  };
  // styles variables

  const cardStyles = {
    padding: 1,
    borderRadius: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  };

  const formStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h4"> Forgot password</Typography>
        </CardContent>
        <hr size="1" width="90%" color="gray" />

        <CardContent>
          <form style={formStyles} onSubmit={sendResetEmail}>
            <label>
              {" "}
              Enter your account email and we will send you a link to reset your
              password
            </label>
            <TextField
              label="Email"
              placeholder="user@gmail.com"
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
              fullWidth
            />
            <Button variant="contained" type="submit" fullWidth>
              {" "}
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closePopupModal}
      >
        <DialogTitle>{"Password reset link sent"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check your inbox at {forgotPasswordEmail} for a link to reset your
            password
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopupModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
