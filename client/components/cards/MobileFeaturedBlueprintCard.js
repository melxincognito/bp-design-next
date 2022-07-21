import React, { useState } from "react";
import Image from "next/image";
import { Button, Dialog, Typography, Box, DialogContent } from "@mui/material";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

// TODO add the aria labels and all the accessibility things so it can be read by screen readers & navigated with the keyboard
export default function MobileFeaturedBlueprintCard({
  image,
  planNumber,
  beds,
  baths,
  sqFt,
  stories,
  garages,
}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const blueprintKeyFeatureData = [
    { icon: <KingBedOutlinedIcon />, text: `${beds}` + " Bed" },
    { icon: <BathroomOutlinedIcon />, text: `${baths}` + " Bath" },
    { icon: <SquareFootIcon />, text: `${sqFt}` + " SqFt" },
    { icon: <StairsOutlinedIcon />, text: `${stories}` + " Story" },
    { icon: <GarageOutlinedIcon />, text: `${garages}` + " Garage" },
  ];

  // styles variables

  const blueprintButtonStyles = {
    width: "150px",
    height: "150px",
    background: `url('${image}') no-repeat center center`,
    backgroundSize: "150px 150px",
    borderRadius: "50%",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
  };

  const dialogContentStyles = {
    padding: "0.3rem",
    textAlign: "center",
  };

  const imageKeyFeaturesContainerStyles = {
    display: "flex",
    padding: "1rem",
    gap: "3rem",
    justifyContent: "left",
  };

  const imageContainerStyles = {
    borderRadius: "50%",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
    width: "150px",
    height: "150px",
  };

  const keyFeaturesContainerStyles = {
    display: "grid",
    alignItems: "center",
  };

  const actionsContainerStyles = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <div>
      <Button sx={blueprintButtonStyles} onClick={handleClickOpenDialog} />
      <Dialog onClose={handleCloseDialog} open={openDialog}>
        <DialogContent sx={dialogContentStyles}>
          <div
            className="image-key-features-container"
            style={imageKeyFeaturesContainerStyles}
          >
            <div className="image-container" style={imageContainerStyles}>
              <Image
                src={`${image}`}
                width="150px"
                height="150px"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>

            <div
              className="key-features-container"
              style={keyFeaturesContainerStyles}
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
            </div>
          </div>
          <hr width="90%" />
          <Typography variant="h4"> Plan #{planNumber}</Typography>
          <hr width="90%" />
          <div className="actions-container" style={actionsContainerStyles}>
            <Button variant="contained"> Share Floor Plan</Button>
            <Button variant="contained"> View Floor plan</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

MobileFeaturedBlueprintCard.defaultProps = {
  beds: 0,
  baths: 0,
  sqFt: 0,
  stories: 0,
  garages: 0,
  planNumber: 1111,
  image:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
};
