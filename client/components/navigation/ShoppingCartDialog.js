import React, { Component } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Dialog,
  List,
  Slide,
} from "@mui/material";

import Link from "next/link";

import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ShoppingCartDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      shoppingCartItems: [],
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                My Shopping Cart
              </Typography>
              <Button
                autoFocus
                sx={{ backgroundColor: "primary.light", color: "white" }}
                onClick={this.handleClose}
              >
                <Link href="/checkout">Checkout</Link>
              </Button>
            </Toolbar>
          </AppBar>

          <List>
            <h1> hello</h1>
          </List>
        </Dialog>
      </div>
    );
  }
}

ShoppingCartDialog.defaultProps = {
  open: false,
};
