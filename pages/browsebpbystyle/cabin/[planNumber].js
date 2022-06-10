import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
            width="70%"
            height="70%"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "4rem",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              {" "}
              Plan # <a style={{ color: "purple" }}>{planNumber} </a>{" "}
            </Typography>
            -
            <Typography variant="h6">
              {" "}
              Style: <a style={{ color: "purple" }}>Cabin </a>
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
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt="house"
            width="135px"
            height="135px"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt="house"
            width="135px"
            height="135px"
            style={{
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)",
              borderRadius: 2,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
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
          backgroundColor: "pink",
          width: "70%",
        }}
      >
        <Box>
          <Typography variant="h4"> Key Specs</Typography>
        </Box>
        <hr width="100%" />
        <Box></Box>
      </Box>

      <h2> For Cabin</h2>
    </Box>
  );
}
