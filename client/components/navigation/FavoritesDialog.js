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
import FavoriteItemCard from "../cards/FavoriteItemCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class FavoritesDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      favoritesItems: [],
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/get_favorites_test").then(
      (response) => {
        this.setState({
          favoritesItems: response.data,
        });
      }
    );
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
                My Favorites
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
            {this.state.favoritesItems.map((item, index) => (
              <>
                <FavoriteItemCard
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
            ))}
          </List>
        </Dialog>
      </div>
    );
  }
}

FavoritesDialog.defaultProps = {
  open: false,
};
