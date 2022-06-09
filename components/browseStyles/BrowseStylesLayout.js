import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BrowseStylesLayout(props) {
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
          <Typography variant="h3"> {props.StyleName} Style Homes</Typography>
          <hr width="100%" />
        </div>
        <Box
          className="stylesSelectionContainer"
          sx={styleSelectionContainerStyles}
        >
          {props.children}
        </Box>
      </motion.div>
    </div>
  );
}
