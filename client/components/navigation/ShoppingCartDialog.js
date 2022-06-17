import React, { Component } from "react";
import Link from "next/link";
import Axios from "axios";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Dialog,
  List,
  Slide,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartItemCard from "../cards/ShoppingCartItemCard";

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

  componentDidMount() {
    Axios.get("http://localhost:3002/api/get_cart_items").then((response) => {
      this.setState({
        shoppingCartItems: response.data,
      });
    });
  }

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
            {this.state.shoppingCartItems.map((item, index) => (
              <>
                <ShoppingCartItemCard
                  key={index}
                  image={item.image}
                  planNumber={item.plan_number}
                  beds={item.beds}
                  squareFeet={item.sq_ft}
                  baths={item.baths}
                  garages={item.garages}
                  stories={item.stories}
                />
                <Divider />
              </>
            ))}
          </List>
        </Dialog>
      </div>
    );
  }
}

ShoppingCartDialog.defaultProps = {
  open: false,
};
