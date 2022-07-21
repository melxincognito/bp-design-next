import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

function StyleSelectionCard({ Delay, Route, Image, StyleName }) {
  return (
    <motion.div
      transition={{ delay: Delay }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link href={`/browsebpbystyle/${Route}`}>
        <Card
          sx={{ maxWidth: 345, boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.36)" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={`${Image}`}
              alt={`${StyleName}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {StyleName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Check out our beautiful collection of <b>{StyleName} </b> style
                homes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function browsebpbystyle() {
  const mainContainerStyles = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    padding: "1rem",
    gap: 10,
  };

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

  return (
    <motion.div
      className="mainContainer"
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: "grid", width: "100%", gap: "1rem" }}
    >
      <div style={mainContainerStyles}>
        <Typography variant="h3"> Browse Blueprints by Style</Typography>
        <hr width="100%" />
        <Box
          className="stylesSelectionContainer"
          sx={styleSelectionContainerStyles}
        >
          {stylesOptions.map((option) => (
            <>
              <StyleSelectionCard
                key={option.index}
                StyleName={option.style}
                Image={option.image}
                Delay={option.delay}
                Route={option.route}
              />
            </>
          ))}
        </Box>
      </div>
    </motion.div>
  );
}

const stylesOptions = [
  {
    style: "Luxury",
    route: "luxury",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    delay: 1.15,
    index: 0,
  },
  {
    style: "Modern",
    route: "modern",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    delay: 1.45,
    index: 1,
  },
  {
    style: "Ranch",
    route: "ranch",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    delay: 1.75,
    index: 2,
  },
  {
    style: "Spanish",
    route: "spanish",
    image:
      "https://images.unsplash.com/photo-1603811410430-c7fd2df742a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    delay: 2.05,
    index: 3,
  },
  {
    style: "Tiny Home",
    route: "tinyhome",
    image:
      "https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    delay: 2.35,
    index: 4,
  },
  {
    style: "Cabin",
    route: "cabin",
    image:
      "https://images.unsplash.com/photo-1589129140837-67287c22521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhYmluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    delay: 2.65,
    index: 5,
  },
];
