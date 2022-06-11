import React from "react";
import { Box, Typography, ListItem, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

/* TODO fix positioning for mobile view */

export default function ShoppingCartItemCard(props) {
  const detailsIconDivStyles = {
    display: "flex",
    gap: 5,
  };
  return (
    <>
      <ListItem button>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "2rem",
            padding: 1,
          }}
        >
          <Box
            className="container1-imagePreview"
            sx={{
              display: "grid",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <img
              src={props.image}
              width="200px"
              height="200px"
              alt="img"
              style={{
                boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
                borderRadius: 2,
              }}
            />
            <Typography> Plan #{props.planNumber}</Typography>
          </Box>
          <Box
            className="container2-planDetails"
            sx={{ display: "grid", width: "100%" }}
          >
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
          <Box
            className="container3-favoriteRemoveOrView"
            sx={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <FavoriteBorderIcon fontSize="large" />
              <DeleteOutlineOutlinedIcon fontSize="large" />
            </div>
            <div
              style={{
                display: "flex",

                height: "100%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained"> View Blueprint</Button>
            </div>
          </Box>
        </Box>
      </ListItem>
    </>
  );
}
