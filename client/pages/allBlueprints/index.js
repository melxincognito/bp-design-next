import React, { useState, useEffect } from "react";
import FilterBlueprintsAppBar from "../../components/browseStyles/FilterBlueprintsAppBar";
import BlueprintCard from "../../components/cards/BlueprintCard";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

import Axios from "axios";

{
  /* TODO fix slug for dynamic routing to content */
}

function BrowseBlueprintsContainer(props) {
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
        <Typography variant="h3"> Browse All Blueprints</Typography>
        <hr width="100%" />
      </div>
      <FilterBlueprintsAppBar />
      <Box
        className="stylesSelectionContainer"
        sx={styleSelectionContainerStyles}
      >
        {props.children}
      </Box>
    </>
  );
}

export default function allBlueprints() {
  const [blueprints, setBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      setBlueprints(response.data);
    });
  }, []);

  return (
    <motion.div
      className="mainContainer"
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ display: "grid", width: "100%", gap: "1rem" }}
    >
      <BrowseBlueprintsContainer>
        {blueprints.map((blueprint, index) => (
          <>
            <BlueprintCard
              key={index}
              image={blueprint.image}
              planNumber={blueprint.plan_number}
              beds={blueprint.beds}
              baths={blueprint.baths}
              sqFt={blueprint.sq_ft}
              stories={blueprint.stories}
              slug="browsebpbystyle"
              style={blueprint.style}
              garages={blueprint.garages}
              description={blueprint.description}
            />
          </>
        ))}
      </BrowseBlueprintsContainer>
    </motion.div>
  );
}
