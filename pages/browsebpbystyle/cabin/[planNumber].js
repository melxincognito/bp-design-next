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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import Link from "next/link";

export default function CabinPlanDetails() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

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

  const contentContainerStyles = {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    gap: 3,
  };

  const descriptionsContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    width: "75%",
    justifyContent: "center",
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
  const keyFeaturesContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "primary.main",
    padding: 2,
    width: "70%",
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
    width: "70%",
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
    textAlign: "center",
  };

  const floorPlanPreviewContainerStyles = {
    display: "grid",
    border: "5px inset black",
    backgroundColor: "primary.main",
    padding: 2,
    width: "70%",
    color: "white",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };

  const floorPlanPreviewImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    padding: 2,
  };

  return (
    <Box className="contentContainer" sx={contentContainerStyles}>
      <Box className="container1-images" sx={imagesContainerStyles}>
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
            <Typography variant="h4"> Plan # {planNumber} </Typography>
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
      </Box>
      <Box
        className="container2-descriptionAndAddToCart"
        sx={descriptionsContainerStyles}
      >
        <Box
          className="descriptionContainer"
          sx={{
            display: "grid",
            border: "5px inset black",
            backgroundColor: "primary.light",
            padding: 2,
            width: "45%",
            color: "white",
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
          }}
        >
          <Box>
            <Typography variant="h5"> Description: </Typography>
            <hr style={{ height: "2px", color: "white", width: "100%" }} />
          </Box>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {" "}
            This Ranch style 4 bedroom 3.5 bath home has everything a family
            could ask for, including an office and a guest room that could
            double as a mother-in-law suite. If you're looking for a spectacular
            primary suite, this could be the plan for you. It boasts a spa like
            bathroom with double vanities, a separate stand alone tub and custom
            shower with dressing area and a make-up nook that leads you into an
            oversized closet
          </Typography>
        </Box>
        <Box
          className="addToCartContainer"
          sx={{
            display: "grid",
            border: "5px inset black",
            backgroundColor: "secondary.light",
            padding: 2,
            width: "45%",
            color: "black",
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",

            gap: "1rem",
          }}
        >
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
            }}
          >
            {" "}
            Add To Cart
          </Button>
        </Box>
      </Box>

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
            <Typography variant="body1"> 3 beds</Typography>
          </div>
          <div className="baths">
            <BathroomOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 3.5 Baths</Typography>
          </div>
          <div className="garages">
            <GarageOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 3 Garages</Typography>
          </div>
          <div className="stories">
            <StairsOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 2 Stories</Typography>
          </div>{" "}
          <div className="squareFeet">
            <SquareFootIcon fontSize="large" />
            <Typography variant="body1"> 1000 SqFt</Typography>
          </div>
        </Box>
      </Box>
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
    </Box>
  );
}
