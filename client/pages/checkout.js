import React, { useState, forwardRef, useEffect } from "react";
import Axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import {
  Container,
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

// TODO check why only the tax amount is getting sent to paypal

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function checkout() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(null);
  const [taxTotal, setTaxTotal] = useState(null);
  const [cartPlusTaxTotal, setCartPlusTaxTotal] = useState(null);

  const getTotal = () => {
    // variables have an extra I at the end because they get confused
    // with the state variables above. They need their own variables
    // in this function so you can set them to a fixed decimal on display.

    let total = 0;
    let taxTotalI = 0;
    let cartPlusTaxTotalI = 0;
    let salesTax = 0.17;
    let cityTax = 0.04;
    let stateTax = 0.09;

    cartItems.map((item) => {
      total += item.price;
    });

    setCartTotal(total);
    taxTotalI = total * cityTax + total * stateTax + total * salesTax;
    cartPlusTaxTotalI = cartTotal + Number(taxTotalI);
    setTaxTotal(taxTotalI.toFixed(2));
    setCartPlusTaxTotal(cartPlusTaxTotalI.toFixed(2));

    return total, taxTotalI, cartPlusTaxTotalI;
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
    try {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: cartPlusTaxTotal,
            },
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onApprove = (data, actions) => {
    try {
      return actions.order.capture().then(() => {
        handleClickOpenDialog();
      });
    } catch (error) {
      alert("Transaction failed");
    }
    {
      return actions.order.capture().then(() => {
        handleClickOpenDialog();
      });
    }
  };

  var pricingItems = [
    {
      label: "Items Total",
      price: cartTotal,
      color: "primary.main",
    },
    {
      label: "Tax",
      price: taxTotal,
      color: "highlight.dark",
    },
    {
      label: "Total",
      price: cartPlusTaxTotal,
      color: "success.main",
    },
  ];

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            display: "grid",
            gap: "1rem",
            alignItems: "center",
            boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.51)",
            backgroundColor: "primary.light",
          }}
        >
          <Typography variant="h4" align="center" color="white">
            Checkout
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              padding: 2,
              boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.27)",
            }}
          >
            {cartItems.length === 0 ? (
              <Typography component="div" sx={{ textAlign: "center" }}>
                Loading cart items . . .
              </Typography>
            ) : (
              <List disablePadding>
                {cartItems.map((item, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0 }}>
                    <ListItemText primary={"Plan #" + item.plan_number} />
                    <Typography variant="body2">${item.price}</Typography>
                  </ListItem>
                ))}

                <hr width="100%" height="50%" />
                {pricingItems.map((item, index) => {
                  return (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemText
                        primary={item.label}
                        sx={{ fontWeight: 700 }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, color: `${item.color}` }}
                      >
                        {item.price < 0 ? "$0.00" : "$" + `${item.price}`}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Paper>

          <div
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.41)",
              borderRadius: "40px",
              backgroundColor: "#470269",
            }}
          >
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
      {/* PAYMENT SUCCESSFUL CONFIRMATION DIALOG */}
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
