import React, { Component } from "react";
import Link from "next/link";
import Axios from "axios";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import ShoppingCartDialog from "./ShoppingCartDialog";

const tabsItems = [
  { label: "Home", link: "/", id: 0 },
  { label: "Browse All Plans", link: "/allBlueprints", id: 1 },
  { label: "Browse by Style", link: "/browsebpbystyle", id: 2 },
  { label: "Custom Plan Request", link: "/customplanrequest", id: 3 },
];

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
      open: true,
      value: 0,
    };
  }

  handleChange = (e, newValue) => {
    this.setState({ value: newValue });
  };

  handleOpenNavMenu = (e) => {
    this.setState({ anchorElNav: e.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open);
  };
  render() {
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
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(this.anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Container sx={mobileTabcontainerStyles}>
                    {tabsItems.map((tab) => (
                      <MenuItem
                        key={tab.id}
                        onClick={this.handleCloseNavMenu}
                        sx={mobileTabStyle}
                      >
                        <Link href={tab.link}>
                          <Typography textAlign="center">
                            {tab.label}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Container>
                </Menu>
              </Box>

              <Box sx={tabsContainerStyles}>
                <Tabs
                  variant="scrollable"
                  value={this.state.value}
                  onChange={this.handleChange}
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
                <Box onClick={this.handleClickOpen}>
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
        <ShoppingCartDialog open={this.state.open} />
      </>
    );
  }
}

// shopping cart item dummy data
const shoppingCartItem = [
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
