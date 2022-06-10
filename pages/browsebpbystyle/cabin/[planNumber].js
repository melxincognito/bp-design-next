import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

export default function CabinPlanDetails() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

  const toggleImageGalleryContainerStyles = {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.14)",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "secondary.main",
      cursor: "pointer",
      boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.24)",
    },
  };
  return (
    <Box
      className="contentContainer"
      sx={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
        gap: 3,
      }}
    >
      <Box
        className="container1-images"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
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
            <Typography variant="h4">
              {" "}
              Plan # <a style={{ color: "purple" }}>{planNumber} </a>{" "}
            </Typography>
          </Box>
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
        className="container2-keyfeatures"
        sx={{
          display: "grid",
          border: "5px inset black",
          backgroundColor: "primary.main",
          padding: 2,
          width: "70%",
          color: "white",
          boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
        }}
      >
        <Box>
          <Typography variant="h4"> Key Specs</Typography>
        </Box>
        <hr width="100%" color="white" />
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <div>
            <KingBedOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 3 beds</Typography>
          </div>
          <div>
            <BathroomOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 3.5 Baths</Typography>
          </div>
          <div>
            <GarageOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 3 Garages</Typography>
          </div>
          <div>
            <StairsOutlinedIcon fontSize="large" />
            <Typography variant="body1"> 2 Stories</Typography>
          </div>{" "}
          <div sx={{ display: "flex" }}>
            <SquareFootIcon fontSize="large" />
            <Typography variant="body1"> 1000 SqFt</Typography>
          </div>
        </Box>
      </Box>

      <h2> For Cabin</h2>
    </Box>
  );
}
