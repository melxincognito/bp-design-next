import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

export default function FeaturedBlueprintCard({ image, planNumber }) {
  const keyFeaturesContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    justifyContent: "center",
    marginTop: "0.5rem",
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, boxShadow: "0px 3px 15px 5px rgba(0,0,0,0.3)" }}
      >
        <CardMedia
          component="img"
          height="200"
          image={`${image}`}
          alt={`${planNumber}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plan # {planNumber}
          </Typography>
          <div style={keyFeaturesContainerStyles}>
            <KingBedOutlinedIcon /> 1 bed
            <BathroomOutlinedIcon /> 2 bath
            <SquareFootIcon /> 1000 SqFt
            <StairsOutlinedIcon /> 2 Story
            <GarageOutlinedIcon /> 3 Garage
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Share Floor Plan</Button>
          <Button size="small">View Floor Plan</Button>
        </CardActions>
      </Card>
    </>
  );
}
