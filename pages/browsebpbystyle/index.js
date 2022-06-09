import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typography, Box } from "@mui/material";

export default function browsebpbystyle() {
  return (
    <motion.div
      className="mainContainer"
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: "grid" }}
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
        <Typography variant="h3"> Browse Blueprints by Style</Typography>
        <hr width="100%" />
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          backgroundColor: "pink",
          height: "20rem",
          width: "100%",
          border: "solid black 20px",
          borderRadius: 2,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {stylesOptions.map((option) => (
          <>
            <button key={option.index}>
              <Link href={`/browsebpbystyle/${option.style}`} passHref>
                <a> {option.style}</a>
              </Link>
            </button>
          </>
        ))}
      </Box>
    </motion.div>
  );
}

const stylesOptions = [
  {
    style: "luxury",
    index: 0,
  },
  {
    style: "modern",
    index: 1,
  },
  {
    style: "ranch",
    index: 2,
  },
  {
    style: "spanish",
    index: 3,
  },
];
