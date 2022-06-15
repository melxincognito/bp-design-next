import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import BlueprintCard from "../components/cards/BlueprintCard";

// TODO fix slug to be dynamic based on each blueprints style

function FavoriteBlueprintsContainer(props) {
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
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h3"> My Favorites</Typography>
        <hr width="100%" />
      </div>

      <Box
        className="stylesSelectionContainer"
        sx={styleSelectionContainerStyles}
      >
        {props.children}
      </Box>
    </>
  );
}

export default function myfavorites() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FavoriteBlueprintsContainer>
        {favoritesData.map((option, index) => (
          <>
            <BlueprintCard
              key={index}
              image={option.image}
              planNumber={option.planNumber}
              beds={option.beds}
              baths={option.baths}
              sqFt={option.sqFt}
              stories={option.stories}
              slug="browsebpbystyle"
              style="ranch"
            />
          </>
        ))}
      </FavoriteBlueprintsContainer>
    </motion.div>
  );
}

const favoritesData = [
  {
    planNumber: 1005,
    beds: 2,
    baths: 1,
    sqFt: 1000,
    stories: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    planNumber: 1007,
    beds: 5,
    baths: 2.5,
    sqFt: 5000,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    planNumber: 1012,
    beds: 4,
    baths: 2,
    sqFt: 2000,
    stories: 3,
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1044,
    beds: 8,
    baths: 2.4,
    sqFt: 1700,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
];