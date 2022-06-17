import React, { Component } from "react";
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

import Link from "next/link";

export default class BlueprintCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      planNumber: this.props.planNumber,
      beds: this.props.beds,
      baths: this.props.baths,
      sqft: this.props.sqFt,
      stories: this.props.stories,
      style: this.props.style,
      garages: this.props.garages,
    };
  }
  render() {
    const blueprintKeyFeatureData = [
      { icon: <KingBedOutlinedIcon />, text: this.state.beds + " Bed" },
      { icon: <BathroomOutlinedIcon />, text: this.state.baths + " Bath" },
      { icon: <SquareFootIcon />, text: this.state.sqft + " SqFt" },
      { icon: <StairsOutlinedIcon />, text: this.state.stories + " Story" },
      { icon: <GarageOutlinedIcon />, text: this.state.garages + " Garage" },
    ];
    return (
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0px 3px 15px 5px rgba(0,0,0,0.3)",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,

              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
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
          <Button size="small">
            <FavoriteBorderOutlinedIcon />
          </Button>
          <Button size="small">
            <AddShoppingCartOutlinedIcon />
          </Button>
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
      </Card>
    );
  }
}
