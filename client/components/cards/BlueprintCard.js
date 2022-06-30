import React, { Component } from "react";
import Link from "next/link";
import Axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
  Divider,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";

const CustomizedCard = styled(Card)`
  max-width: 345px;
  box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.3);
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;

  :hover {
    color: rgba(0, 0, 0, 0.55);
  }
`;

export default class BlueprintCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      favorite: props.favorite,
      planNumber: props.planNumber,
      cartAdded: false,
    };
  }
  // state for description is set because it doesn't need to be displayed on the card but it
  // does need to be passed to the database for add cart and add to favorites.

  /* state for planNumber is set so it can get passed into the removeFromFavorites
      function as a parameter. Passing in props.planNumber as a parameter breaks 
      the page onClick*/

  addToCart = () => {
    this.setState({ cartAdded: true });
    Axios.post("http://localhost:3002/api/insert_cart_items", {
      image: this.props.image,
      planNumber: this.props.planNumber,
      beds: this.props.beds,
      baths: this.props.baths,
      sqft: this.props.sqFt,
      style: this.props.style,
      garages: this.props.garages,
      stories: this.props.stories,
      description: this.state.description,
    }).then(() => {
      alert("inserted into database");
    });
  };

  addToFavorites = () => {
    this.setState({ favorite: true });
    Axios.post("http://localhost:3002/api/insert_favorites", {
      image: this.props.image,
      planNumber: this.props.planNumber,
      beds: this.props.beds,
      baths: this.props.baths,
      sqft: this.props.sqFt,
      style: this.props.style,
      garages: this.props.garages,
      stories: this.props.stories,
      description: this.state.description,
    }).then(() => {
      alert("inserted into database");
    });
  };

  removeFromFavorites = (plan) => {
    this.setState({ favorite: false });
    Axios.delete(`http://localhost:3002/api/delete_favorites/${plan}`).then(
      () => {
        alert("deleted from favorites");
      }
    );
  };

  render() {
    const blueprintKeyFeatureData = [
      { icon: <KingBedOutlinedIcon />, text: this.props.beds + " Bed" },
      { icon: <BathroomOutlinedIcon />, text: this.props.baths + " Bath" },
      { icon: <SquareFootIcon />, text: this.props.sqFt + " SqFt" },
      { icon: <StairsOutlinedIcon />, text: this.props.stories + " Story" },
      { icon: <GarageOutlinedIcon />, text: this.props.garages + " Garage" },
    ];

    // styles variables

    const keyFeaturesContainerStyles = {
      display: "flex",
      flexWrap: "wrap",
      gap: 1,
      justifyContent: "center",
      marginTop: "0.5rem",
    };

    return (
      <CustomizedCard>
        <CardMedia
          component="img"
          height="200"
          image={`${this.props.image}`}
          alt={`${this.props.planNumber}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plan # {this.props.planNumber}
          </Typography>
          <Divider />
          <Box sx={keyFeaturesContainerStyles}>
            {blueprintKeyFeatureData.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
              >
                {item.icon}{" "}
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </Box>
            ))}{" "}
          </Box>
        </CardContent>
        <CardActions>
          {this.state.favorite ? (
            <Button
              size="small"
              onClick={() => this.removeFromFavorites(this.state.planNumber)}
            >
              <FavoriteIcon sx={{ color: "error.main" }} />
            </Button>
          ) : (
            <Button size="small" onClick={this.addToFavorites}>
              <FavoriteBorderOutlinedIcon />
            </Button>
          )}
          {this.state.cartAdded ? (
            <Button
              size="small"
              onClick={() => this.setState({ cartAdded: false })}
            >
              <AddShoppingCartOutlinedIcon sx={{ color: "success.main" }} />
            </Button>
          ) : (
            <Button size="small" onClick={this.addToCart}>
              <AddShoppingCartOutlinedIcon />
            </Button>
          )}

          <Button size="small">
            {/* example for link href would be browsebpbystyle/luxury/1007 */}
            <Link
              href={`/${this.props.slug}/${this.props.style}/${this.props.planNumber}`}
              passHref
            >
              View Floor Plan
            </Link>
          </Button>
        </CardActions>
      </CustomizedCard>
    );
  }
}

BlueprintCard.defaultProps = {
  favorite: false,
};
