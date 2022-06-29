import React, { Component } from "react";
import Link from "next/link";
import Axios from "axios";
import { Box, Typography, ListItem, Button } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

/* TODO fix positioning for mobile view on container 3 so its positioned below the plan 
preview photo and the details */

export default class FavoriteItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: true,
      planNumber: this.props.planNumber,
      image: this.props.image,
      beds: this.props.beds,
      baths: this.props.baths,
      squareFeet: this.props.squareFeet,
      garages: this.props.garages,
      stories: this.props.stories,
      style: this.props.style,
      description: this.props.description,
    };
  }
  // style and description states aren't shown but need to get passed into the carts database

  removeFromFavorites = (plan) => {
    this.setState({ favorite: false });
    Axios.delete(`http://localhost:3002/api/delete_favorites/${plan}`).then(
      () => {
        alert("deleted from favorites");
      }
    );
  };

  addToFavorites = () => {
    this.setState({ favorite: true });
    Axios.post("http://localhost:3002/api/insert_favorites", {
      image: this.state.image,
      planNumber: this.state.planNumber,
      beds: this.state.beds,
      baths: this.state.baths,
      sqft: this.state.squareFeet,
      style: this.state.style,
      garages: this.state.garages,
      stories: this.state.stories,
      description: this.state.description,
    }).then(() => {
      alert("inserted into database");
    });
  };

  addToCart = () => {
    Axios.post("http://localhost:3002/api/insert_cart_items", {
      image: this.state.image,
      planNumber: this.state.planNumber,
      beds: this.state.beds,
      baths: this.state.baths,
      sqft: this.state.sqFt,
      style: this.state.style,
      garages: this.state.garages,
      stories: this.state.stories,
      description: this.state.description,
    }).then(() => {
      alert("inserted into database");
    });
  };
  render() {
    const cartItemContainerStyles = {
      display: "flex",
      width: "100%",
      gap: "2rem",
      padding: 1,
    };

    const containerOneStyles = {
      display: "grid",
      textAlign: "center",
      gap: "1rem",
    };

    const containerTwoStyles = {
      display: "grid",
      width: "100%",
    };

    const containerThreeStyles = {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    };

    const detailsIconContainerStyles = {
      display: "flex",
      justifyContent: "flex-end",
    };

    const detailsIconDivStyles = {
      display: "flex",
      gap: 5,
    };

    const viewBlueprintButtonContainerStyles = {
      display: "flex",
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    };

    return (
      <>
        <ListItem button>
          <Box sx={cartItemContainerStyles}>
            <Box className="container1-imagePreview" sx={containerOneStyles}>
              <img
                src={this.state.image}
                width="200px"
                height="200px"
                alt="img"
                style={{
                  boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
                  borderRadius: 2,
                }}
              />
              <Typography> Plan #{this.state.planNumber}</Typography>
            </Box>
            <Box className="container2-planDetails" sx={containerTwoStyles}>
              <div classsName="beds" style={detailsIconDivStyles}>
                <KingBedOutlinedIcon />{" "}
                <Typography> {this.state.beds} Beds </Typography>
              </div>

              <div className="baths" style={detailsIconDivStyles}>
                <BathroomOutlinedIcon />{" "}
                <Typography> {this.state.baths} Baths </Typography>
              </div>
              <div className="squareFeet" style={detailsIconDivStyles}>
                <SquareFootIcon />{" "}
                <Typography> {this.state.squareFeet} SqFt </Typography>
              </div>
              <div className="stories" style={detailsIconDivStyles}>
                <StairsOutlinedIcon />{" "}
                <Typography> {this.state.stories} Stories </Typography>
              </div>
              <div className="garages" style={detailsIconDivStyles}>
                <GarageOutlinedIcon />{" "}
                <Typography> {this.state.garages} Garages </Typography>
              </div>
            </Box>
            <Box
              className="container3-favoriteRemoveOrView"
              sx={containerThreeStyles}
            >
              <div style={detailsIconContainerStyles}>
                <Button>
                  {this.state.favorite ? (
                    <FavoriteIcon
                      fontSize="large"
                      onClick={() =>
                        this.removeFromFavorites(this.state.planNumber)
                      }
                    />
                  ) : (
                    <FavoriteBorderIcon
                      fontSize="large"
                      onClick={this.addToFavorites}
                    />
                  )}
                </Button>

                <Button
                  onClick={() => {
                    this.addToCart(this.state.planNumber);
                  }}
                >
                  <AddShoppingCartOutlinedIcon fontSize="large" />
                </Button>
              </div>
              <div style={viewBlueprintButtonContainerStyles}>
                <Button variant="contained">
                  <Link
                    passHref
                    href={`/browsebpbystyle/${this.state.style}/${this.state.planNumber}`}
                  >
                    View Blueprint
                  </Link>
                </Button>{" "}
              </div>
            </Box>
          </Box>
        </ListItem>
      </>
    );
  }
}
