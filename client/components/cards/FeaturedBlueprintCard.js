import React, { Component } from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

// TODO: ACCESSIBILITY: research what you need to do to make sure the content is accessible
// TODO: ACCESSIBILITY: Change alt text to be descriptive instead of the plan number.

export default class FeaturedBlueprintCard extends Component {
  render() {
    const blueprintKeyFeatureData = [
      { icon: <KingBedOutlinedIcon />, text: this.props.beds + " Bed" },
      { icon: <BathroomOutlinedIcon />, text: this.props.baths + " Bath" },
      { icon: <SquareFootIcon />, text: this.props.sqFt + " SqFt" },
      { icon: <StairsOutlinedIcon />, text: this.props.stories + " Story" },
      { icon: <GarageOutlinedIcon />, text: this.props.garages + " Garage" },
    ];

    // styles variables
    const cardStyles = {
      maxWidth: 345,
      boxShadow: "0px 3px 15px 5px rgba(0,0,0,0.3)",
    };

    const cardContentStyles = {
      display: "grid",
      justifyItems: "center",
    };

    const keyFeaturesContainerStyles = {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      justifyContent: "center",
      marginTop: "0.5rem",
      width: "90%",
    };

    const cardActionStyles = {
      display: "flex",
      justifyContent: "center",
    };

    return (
      <>
        <Card sx={cardStyles}>
          <CardMedia
            component="img"
            height="200"
            image={`${this.props.image}`}
            alt={`${this.props.planNumber}`}
          />
          <CardContent sx={cardContentStyles}>
            <Typography gutterBottom variant="h5" component="div">
              Plan # {this.props.planNumber}
            </Typography>
            <div style={keyFeaturesContainerStyles}>
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
            </div>
          </CardContent>
          <CardActions sx={cardActionStyles}>
            <Button size="small">Share Floor Plan</Button>
            <Button size="small">View Floor Plan</Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

FeaturedBlueprintCard.defaultProps = {
  beds: 0,
  baths: 0,
  sqFt: 0,
  stories: 0,
  garages: 0,
  planNumber: 0,
  image:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
};
