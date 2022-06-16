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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlueprintItemPageLayout(props) {
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
    display: "flex",
    justifyContent: "center",
    width: "70%",
    alignItems: "center",
  };

  const imagePreviewContainerStyles = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
  };

  const toggleImageGalleryContainerStyles = {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.14)",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "highlight.main",
      cursor: "pointer",
      boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.24)",
    },
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

  return (
    <Box className="contentContainer" sx={contentContainerStyles}>
      <Box className="navigateBackContainer" sx={{ width: "100%" }}>
        <Button onClick={() => router.back()}>
          <ArrowBackIcon />
        </Button>
      </Box>
      <motion.div
        className="container1-images"
        style={imagesContainerStyles}
        transition={{ delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Box className="imagePreviewContainer" sx={imagePreviewContainerStyles}>
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt="house"
            width="90%"
            height="70%"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <Box>
            <Typography variant="h4"> Plan # {props.planNumber} </Typography>
          </Box>{" "}
        </Box>
        <Box sx={{ display: "grid", gap: "1rem" }}>
          <Box
            className="toggleImageGalleryContainer"
            sx={toggleImageGalleryContainerStyles}
          >
            <KeyboardArrowUpIcon />
          </Box>
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80"
            alt="house"
            width="135px"
            height="135px"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            alt="house"
            width="135px"
            height="135px"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80"
            alt="house"
            width="135px"
            height="135px"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />

          <Box
            className="toggleImageGalleryContainer"
            sx={toggleImageGalleryContainerStyles}
          >
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </motion.div>

      <motion.div
        className="container2-descriptionAndAddToCart"
        style={descriptionsAddToCartContainerStyles}
        transition={{ delay: 1.3 }}
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
            {props.description}
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
        transition={{ delay: 1.6 }}
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
              <Typography variant="body1"> {props.beds} beds</Typography>
            </div>
            <div className="baths">
              <BathroomOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {props.baths} Baths</Typography>
            </div>
            <div className="garages">
              <GarageOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {props.garages} Garages</Typography>
            </div>
            <div className="stories">
              <StairsOutlinedIcon fontSize="large" />
              <Typography variant="body1"> {props.stories} Stories</Typography>
            </div>{" "}
            <div className="squareFeet">
              <SquareFootIcon fontSize="large" />
              <Typography variant="body1"> {props.sq_ft} SqFt</Typography>
            </div>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        className="container4-customizePlan"
        transition={{ delay: 2.0 }}
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
        transition={{ delay: 2.4 }}
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
