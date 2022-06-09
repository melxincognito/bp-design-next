import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function BlueprintCard(props) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "0px 3px 15px 5px rgba(0,0,0,0.3)" }}>
      <CardMedia
        component="img"
        height="200"
        image={`${props.image}`}
        alt={`${props.planNumber}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plan # {props.planNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.beds} Bed || {props.baths} Bath || {props.sqFt} SqFt ||{" "}
          {props.stories} Story
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FavoriteBorderOutlinedIcon />
        </Button>
        <Button size="small">
          <Link href={`/browsebpbystyle/spanish/${props.planNumber}`} passHref>
            View Floor Plan
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default function spanishcolonial() {
  const styleSelectionContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    height: "100%",
    width: "100%",
    border: "solid black 15px",
    borderStyle: "inset",
    borderRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: "3rem",
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Link href="/browsebpbystyle" passHref>
          <Button>
            <ArrowBackIcon />
          </Button>
        </Link>
      </div>
      <motion.div
        className="mainContainer"
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ display: "grid", width: "100%", gap: "1rem" }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h3"> Spanish Style Homes</Typography>
          <hr width="100%" />
        </div>
        <Box
          className="stylesSelectionContainer"
          sx={styleSelectionContainerStyles}
        >
          {spanishStyles.map((option, index) => (
            <>
              <BlueprintCard
                key={index}
                image={option.image}
                planNumber={option.planNumber}
                beds={option.beds}
                baths={option.baths}
                sqFt={option.sqFt}
                stories={option.stories}
              />
            </>
          ))}
        </Box>
      </motion.div>
    </div>
  );
}

const spanishStyles = [
  {
    planNumber: 1001,
    beds: 2,
    baths: 1,
    sqFt: 1000,
    stories: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    planNumber: 1002,
    beds: 5,
    baths: 2.5,
    sqFt: 5000,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    planNumber: 1003,
    beds: 4,
    baths: 2,
    sqFt: 2000,
    stories: 3,
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1004,
    beds: 8,
    baths: 2.4,
    sqFt: 1700,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
];
