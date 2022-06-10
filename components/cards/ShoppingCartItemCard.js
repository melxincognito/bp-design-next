import React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

export default function ShoppingCartItemCard(props) {
  const detailsIconDivStyles = {
    display: "flex",
    gap: 5,
  };
  return (
    <>
      <ListItem button>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
          <Box
            className="container1-imagePreview"
            sx={{
              display: "grid",
              textAlign: "center",
            }}
          >
            <img src={props.image} width="200px" height="200px" alt="img" />
            <Typography> Plan #{props.planNumber}</Typography>
          </Box>
          <Box className="container2-planDetails" sx={{ display: "grid" }}>
            <div classsName="beds" style={detailsIconDivStyles}>
              <KingBedOutlinedIcon />{" "}
              <Typography> {props.beds} Beds </Typography>
            </div>
            <div className="baths" style={detailsIconDivStyles}>
              <BathroomOutlinedIcon />{" "}
              <Typography> {props.baths} Baths </Typography>
            </div>
            <div className="squareFeet" style={detailsIconDivStyles}>
              <SquareFootIcon />{" "}
              <Typography> {props.squareFeet} SqFt </Typography>
            </div>
            <div className="stories" style={detailsIconDivStyles}>
              <StairsOutlinedIcon />{" "}
              <Typography> {props.stories} Stories </Typography>
            </div>
            <div className="garages" style={detailsIconDivStyles}>
              <GarageOutlinedIcon />{" "}
              <Typography> {props.garages} Garages </Typography>
            </div>
          </Box>
          <Box className="container3-favoriteRemoveOrView">
            <FavoriteBorderIcon />
            <DeleteOutlineOutlinedIcon />
          </Box>
        </Box>
      </ListItem>
    </>
  );
}
