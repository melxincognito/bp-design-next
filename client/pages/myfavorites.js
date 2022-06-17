import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import BlueprintCard from "../components/cards/BlueprintCard";
import Axios from "axios";

// TODO fix slug to be dynamic based on each blueprints style

function FavoriteBlueprintsContainer(props) {
  const containerStyles = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  };

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
      <div style={containerStyles}>
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
  const [favoriteBlueprints, setFavoriteBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_favorites_test").then(
      (response) => {
        setFavoriteBlueprints(response.data);
      }
    );
  }, []);
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FavoriteBlueprintsContainer>
        {favoriteBlueprints.map((option, index) => (
          <>
            <BlueprintCard
              key={index}
              image={option.image}
              planNumber={option.plan_number}
              beds={option.beds}
              baths={option.baths}
              sqFt={option.sq_ft}
              stories={option.stories}
              description={option.description}
              garages={option.garages}
              slug="browsebpbystyle"
              style="ranch"
            />
          </>
        ))}
      </FavoriteBlueprintsContainer>
    </motion.div>
  );
}
