import React, { useState, forwardRef, useEffect } from "react";
import Axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function checkout() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(1.03);
  // cart total is set to 1.03 because if it's at 0 to start there is an error idk why.
  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price;
    });
    setCartTotal(total);
    return total;
  };

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_cart_items").then((response) => {
      try {
        setCartItems(response.data);
        getTotal();
      } catch (error) {
        console.log(error);
      }
    });
  });

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    router.push("/");
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cartTotal,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      handleClickOpenDialog();
    });
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BP Design Studio
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            display: "grid",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <hr width="100%" />
          <List disablePadding>
            {cartItems.map((item, index) => (
              <ListItem key={index} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={"Plan #" + item.plan_number} />
                <Typography variant="body2">${item.price}</Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" sx={{ fontWeight: 700 }} />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "highlight.dark" }}
              >
                ${cartTotal}
              </Typography>
            </ListItem>
          </List>
          <hr width="100%" />
          <div>
            <PayPalScriptProvider
              options={{
                "client-id": `${process.env.paypal_client_id}`,
              }}
            >
              <PayPalButtons
                fundingSource="paypal"
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                style={{
                  layout: "vertical",
                  label: "pay",
                  shape: "pill",
                }}
              />
            </PayPalScriptProvider>
          </div>
        </Paper>
      </Container>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle>{"Payment Successful!"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ display: "flex", flexWrap: "wrap" }}>
            Thank you for your purchase. Check your inbox for a copy of your
            receipt.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
