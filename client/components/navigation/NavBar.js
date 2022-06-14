import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Tabs,
  Tab,
  TextField,
  Button,
  Dialog,
  List,
  Divider,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartItemCard from "../cards/ShoppingCartItemCard";

// shopping cart dialog items
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tabsItems = [
  { label: "Home", link: "/", id: 0 },
  { label: "Browse All Plans", link: "/allBlueprints", id: 1 },
  { label: "Browse by Style", link: "/browsebpbystyle", id: 2 },
  { label: "Custom Plan Request", link: "/customplanrequest", id: 3 },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // open dialog for shopping cart
  const [open, setOpen] = useState(false);
  // value for tab indicator color
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // styles variables

  const tabsContainerStyles = {
    flexGrow: 1,
    justifyContent: "flex-start",
    display: { xs: "none", md: "flex" },
  };

  const tabsStyles = {
    my: 2,
    color: "white",
    display: "block",
  };

  const mobileTabcontainerStyles = {
    width: "20rem",
    height: "100%",
    display: "block",
    float: "left",
    bgcolor: "primary.light",
    color: "white",
  };

  const mobileTabStyle = {
    display: "block",
    width: "100%",
    padding: "18px 20px",
  };
  const loginButtonStyles = {
    color: "primary.main",
    padding: 0.3,
    bgcolor: "secondary.main",
    "&:hover": {
      color: "white",
    },
  };

  const iconStyles = {
    cursor: "pointer",
  };

  return (
    <>
      <AppBar position="static" maxWidth="xl">
        {/* Top Banner Container*/}
        <Container
          maxWidth="xl"
          sx={{
            p: 2,
            bgcolor: "black",
            display: "flex",
          }}
        >
          {" "}
          <Box sx={{ flexGrow: 2 }}>
            <Link href="/">
              <Typography sx={iconStyles} variant="h6" noWrap component="div">
                BP DESIGN STUDIO
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search by plan #"
              sx={{
                backgroundColor: "white",
                borderRadius: 1.5,
              }}
            />
            <Search
              sx={iconStyles}
              onClick={() => {
                console.log("hello");
              }}
            />
          </Box>
        </Container>

        {/* Navigation Bar Container */}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Container sx={mobileTabcontainerStyles}>
                  {tabsItems.map((tab) => (
                    <MenuItem
                      key={tab.id}
                      onClick={handleCloseNavMenu}
                      sx={mobileTabStyle}
                    >
                      <Link href={tab.link}>
                        <Typography textAlign="center">{tab.label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Container>
              </Menu>
            </Box>

            <Box sx={tabsContainerStyles}>
              <Tabs
                variant="scrollable"
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                {tabsItems.map((tab) => (
                  <>
                    <Link href={tab.link} value={tab.id} passHref>
                      <Tab key={tab.id} label={tab.label} sx={tabsStyles} />
                    </Link>
                  </>
                ))}
              </Tabs>
            </Box>
            <Box
              display="flex"
              sx={{ flexGrow: 0, alignItems: "center", gap: 1 }}
            >
              <Link href="/myfavorites">
                <FavoriteBorderIcon sx={iconStyles} />
              </Link>
              <Box onClick={handleClickOpen}>
                <ShoppingCartOutlinedIcon sx={iconStyles} />
              </Box>

              <Button variant="contained" sx={loginButtonStyles}>
                <Link href="/login">Login</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Shopping Cart Dialog */}
      <Dialog
        fullScreen
        open={open}
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Shopping Cart
            </Typography>
            <Button
              autoFocus
              sx={{ backgroundColor: "primary.light", color: "white" }}
              onClick={handleClose}
            >
              <Link href="/checkout">Checkout</Link>
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          {shoppingCartItems.map((item, index) => (
            <>
              <ShoppingCartItemCard
                key={index}
                image={item.image}
                planNumber={item.planNumber}
                beds={item.beds}
                squareFeet={item.squareFeet}
                baths={item.baths}
                garages={item.garages}
                stories={item.stories}
              />
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </>
  );
}

// shopping cart item dummy data
const shoppingCartItems = [
  {
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    planNumber: 1003,
    beds: 2,
    baths: 1.5,
    stories: 2,
    garages: 2,
    squareFeet: 1000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1589129140837-67287c22521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhYmluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    planNumber: 1005,
    beds: 5,
    baths: 3,
    stories: 3,
    garages: 1,
    squareFeet: 2000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1542643299-be5d00d22db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhYmluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    planNumber: 1009,
    beds: 9,
    baths: 4,
    stories: 1,
    garages: 4,
    squareFeet: 3000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1611821261180-8e6867e77288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhYmluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    planNumber: 1001,
    beds: 2,
    baths: 2.5,
    stories: 2,
    garages: 3,
    squareFeet: 1000,
  },
];
