import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import Link from "next/link";

export default function BlueprintCard(props) {
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
          <AddShoppingCartOutlinedIcon />
        </Button>
        <Button size="small">
          <Link
            href={`/${props.slug}/${props.style}/${props.planNumber}`}
            passHref
          >
            View Floor Plan
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
