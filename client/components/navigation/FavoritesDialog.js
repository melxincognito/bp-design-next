import React, { useState, useEffect } from "react";
import { database } from "../../firebase-config";
import { ref, onValue } from "firebase/database";
import Axios from "axios";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Dialog,
  List,
  Slide,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteItemCard from "../cards/FavoriteItemCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NoFavoritesMessage() {
  const noFavoritesContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
  };
  return (
    <Typography
      component="div"
      variant="h4"
      color="highlight.dark"
      sx={noFavoritesContainerStyles}
    >
      Nothing in your favorites
    </Typography>
  );
}

export default function FavoritesDialog({ open }) {
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
  };

  /*  useEffect(() => {
    onValue(ref(database, "favorite/"), (snapshot) => {
      setFavoritesItems([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((favorite) => {
          setFavoritesItems((oldArray) => [...oldArray, favorite]);
          return favorite;
        });
      }
    });
  }, []);*/

  useEffect(() => {
    onValue(ref(database, "favorites/"), (snapshot) => {
      setFavoritesItems([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((favorite) => {
          setFavoritesItems((oldArray) => [...oldArray, favorite]);
          return favorite;
        });
      }
    });
  });

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              variant="h6"
              component="div"
            >
              <FavoriteBorderIcon /> My Favorites
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          {favoritesItems.length === 0 ? (
            <NoFavoritesMessage />
          ) : (
            favoritesItems.map((item) => (
              <>
                <h1> {item.planNumber}</h1>
              </>
            ))
          )}
        </List>
      </Dialog>
    </div>
  );
}

FavoritesDialog.defaultProps = {
  open: false,
};
