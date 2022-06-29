import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageGallery from "./ImageGallery";
import ImageGalleryMobile from "./ImageGalleryMobile";

export default function BlueprintItemPageLayout({
  planNumber,
  description,
  beds,
  baths,
  stories,
  sq_ft,
  garages,
}) {
  const [planSetOptions, setPlanSetOptions] = useState("");
  const [foundationOptions, setFoundationOptions] = useState("");
  const [framingOptions, setFramingOptions] = useState("");

  const purchaseOptions = [
    {
      label: "Set",
      value: planSetOptions,
      onChangeFunc: setPlanSetOptions,
      values: ["PDF", "5 Copy & PDF", "PDF Unlimited", "CAD Unlimited"],
    },
    {
      label: "Foundation",
      value: foundationOptions,
      onChangeFunc: setFoundationOptions,
      values: ["Crawlspace", "Slab", "Basement"],
    },
    {
      label: "Framing",
      value: framingOptions,
      onChangeFunc: setFramingOptions,
      values: ["Wood 2x4", "Wood 2x6"],
    },
  ];

  const router = useRouter();
  // styles variables

  const contentContainerStyles = {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    gap: 3,
  };

  const imagesContainerStyles = {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    justifyItems: "center",
  };

  const mobileImagesContainerStyles = {
    display: { xs: "flex", md: "none" },
    width: "70%",
  };
  const planNumberContainerStyles = {
    display: "flex-box",
    justifyContent: "flex-start",
    width: "70%",
  };

  const descriptionsAddToCartContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    gap: "1rem",
    width: "76.5%",
    justifyContent: "center",
  };

  const descriptionContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "primary.light",
    padding: 2,
    width: { xs: "100%", md: "45%" },
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };

  const addToCartContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "secondary.light",
    padding: 2,
    width: { xs: "100%", md: "45%" },
    color: "black",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
    gap: "1rem",
  };

  const keyFeaturesContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "primary.main",
    padding: 2,
    width: { xs: "76%", md: "70%" },
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };

  const keyFeaturesIconsContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "space-evenly",
  };

  const customizePlanContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "highlight.dark",
    padding: 3,
    width: { xs: "76%", md: "70%" },
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
    textAlign: "center",
  };

  const floorPlanPreviewContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "primary.main",
    padding: 2,
    width: { xs: "76%", md: "70%" },
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };

  const floorPlanPreviewImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    padding: 2,
  };

  // motion div containers are for divs wrapped around
  // the mui components using the mui theme styling. It can't
  // use a regular div without losing the mui color pallette styling
  const motionDivContainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  // DONT FORGET TO ADD props.planNumber SOMEWHERE YOU JUST DELETED IT FROM THE IMAGE PREVIEW THING
  return (
    <Box className="contentContainer" sx={contentContainerStyles}>
      <Box className="navigateBackContainer" sx={{ width: "100%" }}>
        <Button onClick={() => router.back()}>
          <ArrowBackIcon />
        </Button>
      </Box>
      <motion.div
        className="container1-images"
        transition={{ delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Box className="desktopGallery" sx={imagesContainerStyles}>
          <ImageGallery />
        </Box>

        <Box className="mobileGallery" sx={mobileImagesContainerStyles}>
          <ImageGalleryMobile />
        </Box>
      </motion.div>{" "}
      <motion.div
        className="planNumberContainerMotionDiv"
        transition={{ delay: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={planNumberContainerStyles}
      >
        <hr width="100%" />
        <Typography variant="h4"> Plan # {planNumber} </Typography>
        <hr width="100%" />
      </motion.div>
      <motion.div
        className="container2-descriptionAndAddToCart"
        style={descriptionsAddToCartContainerStyles}
        transition={{ delay: 1.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Box className="descriptionContainer" sx={descriptionContainerStyles}>
          <Box>
            <Typography variant="h5"> Description: </Typography>
            <hr style={{ height: "2px", color: "white", width: "100%" }} />
          </Box>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {" "}
            {description}
          </Typography>
        </Box>

        <Box className="addToCartContainer" sx={addToCartContainerStyles}>
          <Box>
            <Typography variant="h5"> Select Plan Options:</Typography>
            <hr style={{ height: "2px", color: "black", width: "100%" }} />
          </Box>

          {purchaseOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControl fullWidth>
                <InputLabel>{option.label}</InputLabel>
                <Select
                  id={option.label}
                  value={option.value}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "-5px 5px 15px 5px rgba(0,0,0,0.24)",
                  }}
                  onChange={(e) => {
                    option.onChangeFunc(e.target.value);
                  }}
                >
                  {option.values.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ))}
          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.25)",
              "&:hover": { backgroundColor: "highlight.dark" },
              display: "flex",
              gap: 1,
            }}
          >
            {" "}
            <AddShoppingCartIcon />
            Add To Cart
          </Button>
        </Box>
      </motion.div>
      <motion.div
        className="container3-keyfeatures-motion"
        transition={{ delay: 1.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={motionDivContainerStyles}
      >
        <Box className="container3-keyfeatures" sx={keyFeaturesContainerStyles}>
          <Box>
            <Typography variant="h4"> Key Features</Typography>
          </Box>
          <hr width="100%" color="white" />
          <Box
            className="keyFeaturesIconsContainer"
            sx={keyFeaturesIconsContainerStyles}
          >
            <div className="beds">
              <KingBedOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {beds} beds</Typography>
            </div>
            <div className="baths">
              <BathroomOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {baths} Baths</Typography>
            </div>
            <div className="garages">
              <GarageOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {garages} Garages</Typography>
            </div>
            <div className="stories">
              <StairsOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {stories} Stories</Typography>
            </div>{" "}
            <div className="squareFeet">
              <SquareFootIcon fontSize="large" />
              <Typography variant="body1"> {sq_ft} SqFt</Typography>
            </div>
          </Box>
        </Box>
      </motion.div>
      <motion.div
        className="container4-customizePlan"
        transition={{ delay: 2.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={motionDivContainerStyles}
      >
        <Box
          className="container4-customizePlan"
          sx={customizePlanContainerStyles}
        >
          <Typography variant="h6">
            {" "}
            Like this plan but want to modify a few details? You can submit a{" "}
            <Link href="/customplanrequest" passHref>
              <a style={{ color: "black", textDecoration: "underline" }}>
                {" "}
                custom plan request
              </a>
            </Link>{" "}
            and we'll send you a quote to design your home with your requested
            modifications.
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        className="container4-floorPlanPreview"
        transition={{ delay: 2.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={motionDivContainerStyles}
      >
        <Box
          className="container4-floorPlanPreview"
          sx={floorPlanPreviewContainerStyles}
        >
          <Box>
            <Typography variant="h4"> Floor Plan</Typography>
          </Box>
          <hr width="100%" color="white" />
          <Box sx={floorPlanPreviewImageContainerStyles}>
            <img
              src="https://foyr.com/learn/wp-content/uploads/2022/03/how-to-read-floor-plans.jpg"
              alt="floor plan"
              width="90%"
              style={{
                boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.5)",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

BlueprintItemPageLayout.defaultProps = {
  description:
    "This is the default prop. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
