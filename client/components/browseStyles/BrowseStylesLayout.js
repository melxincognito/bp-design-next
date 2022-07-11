import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterBlueprintsAppBar from "./FilterBlueprintsAppBar";

export default function BrowseStylesLayout({
  StyleName,
  childToParentFilterValues,
  resetFiltersOnClick,
  children,
}) {
  const styleSelectionContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    height: "100%",
    width: "100%",
    border: "solid black 15px",
    borderRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: "3rem",
    boxShadow: "inset 0px 0px 15px 5px rgba(0,0,0,0.28)",
  };

  const childToParent = (beds, baths, stories, squareFeet) => {
    childToParentFilterValues(beds, baths, stories, squareFeet);
  };

  // childToParent is grabbing data from it's child component,
  // FilterBlueprintsAppBar and is passing the data up to the index.js file
  // for /pages/browsebpbystyle/[style]/index.js

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
          <Typography variant="h3"> {StyleName} Style Homes</Typography>
          <hr width="100%" />
        </div>
        <FilterBlueprintsAppBar
          handleClick={() => parentToChild()}
          childToParent={childToParent}
          resetFiltersOnClick={resetFiltersOnClick}
        />

        <Box
          className="stylesSelectionContainer"
          sx={styleSelectionContainerStyles}
        >
          {children}
        </Box>
      </motion.div>
    </div>
  );
}
