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

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NoShoppingCartItemsMessage() {
  const noShoppingCartItemsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
  };
  return (
    <Typography
      component="div"
      variant="h4"
      color="highlight.dark"
      sx={noShoppingCartItemsContainerStyles}
    >
      Nothing in your shopping cart
    </Typography>
  );
}

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
      try {
        this.setState({
          shoppingCartItems: response.data,
        });
      } catch (error) {
        console.log(error);
      }
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
              <Typography
                sx={{
                  ml: 2,
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                variant="h6"
                component="div"
              >
                <ShoppingCartOutlinedIcon /> My Shopping Cart
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
            {this.state.shoppingCartItems.length === 0 ? (
              <NoShoppingCartItemsMessage />
            ) : (
              this.state.shoppingCartItems.map((item, index) => (
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
                    description={item.description}
                    style={item.style}
                  />
                  <Divider />
                </>
              ))
            )}
          </List>
        </Dialog>
      </div>
    );
  }
}

ShoppingCartDialog.defaultProps = {
  open: false,
};
