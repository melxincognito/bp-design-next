import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

function StyleSelectionCard(props) {
  return (
    <motion.div
      transition={{ delay: props.Delay }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card
        sx={{ maxWidth: 345, boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.36)" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={`${props.Image}`}
            alt="kiwi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.StyleName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={`/browsebpbystyle/${props.StyleName}`} passHref>
              <a> See {props.StyleName} blueprints</a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default function browsebpbystyle() {
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
        <Typography variant="h3"> Browse Blueprints by Style</Typography>
        <hr width="100%" />
      </div>
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
            />
          </>
        ))}
      </Box>
    </motion.div>
  );
}

const stylesOptions = [
  {
    style: "luxury",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    delay: 1.15,
    index: 0,
  },
  {
    style: "modern",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    delay: 1.45,
    index: 1,
  },
  {
    style: "ranch",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    delay: 1.75,
    index: 2,
  },
  {
    style: "spanish",
    image:
      "https://images.unsplash.com/photo-1603811410430-c7fd2df742a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    delay: 2.05,
    index: 3,
  },
];
