import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import FilterBlueprintsAppBar from "../components/browseStyles/FilterBlueprintsAppBar";
const allBlueprints = () => {
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
    <>
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
          <Typography variant="h3"> Browse All Blueprints</Typography>
          <hr width="100%" />
        </div>
        <FilterBlueprintsAppBar />
        <Box
          className="stylesSelectionContainer"
          sx={styleSelectionContainerStyles}
        >
          <h1> hello</h1>
        </Box>
      </motion.div>
    </>
  );
};

export default allBlueprints;
