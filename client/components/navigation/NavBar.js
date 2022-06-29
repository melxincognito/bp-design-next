import React, { Component, useState } from "react";
import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";
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
import FavoritesDialog from "./FavoritesDialog";

function HeaderBanner() {
  const [planNumber, setPlanNumber] = useState("");

  const router = useRouter();

  const searchByPlanNumber = () => {
    Axios.get(`http://localhost:3002/api/get_item_${planNumber}`).then(
      (response) => {
        try {
          let pathname = `/browsebpbystyle/${response.data[0].style}/${planNumber}`;
          setPlanNumber("");
          router.push(pathname);
        } catch (error) {
          let plan = planNumber;
          setPlanNumber(`Plan #${plan} Not Found`);
        }
      }
    );
  };

  const containerStyles = {
    p: 2,
    bgcolor: "black",
    display: "flex",
  };
  const iconStyles = {
    cursor: "pointer",
  };

  const textFieldContainerStyles = {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  };
  const textFieldStyles = {
    backgroundColor: "white",
    borderRadius: 1.5,
  };
  return (
    <>
      <Container maxWidth="xl" sx={containerStyles}>
        {" "}
        <Box sx={{ flexGrow: 2 }}>
          <Link href="/">
            <Typography sx={iconStyles} variant="h6" noWrap component="div">
              BP DESIGN STUDIO
            </Typography>
          </Link>
        </Box>
        <Box sx={textFieldContainerStyles}>
          <TextField
            variant="standard"
            placeholder="Search by plan #"
            sx={textFieldStyles}
            value={planNumber}
            inputProps={{ maxLength: 4 }}
            onChange={(e) => {
              setPlanNumber(e.target.value);
            }}
          />
          <Search sx={iconStyles} onClick={searchByPlanNumber} />
        </Box>
      </Container>
    </>
  );
}

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
      anchorElNav: false,
      openShoppingCart: false,
      openFavorites: false,
      value: 0,
    };
  }

  handleChange = (newValue) => {
    this.setState({ value: newValue });
  };

  handleOpenNavMenu = () => {
    this.setState({ anchorElNav: true });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: false });
  };

  handleClickOpenShoppingCart = () => {
    this.setState({ openShoppingCart: !this.state.openShoppingCart });
  };

  handleClickOpenFavorites = () => {
    this.setState({ openFavorites: !this.state.openFavorites });
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
          <HeaderBanner />

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
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={this.state.anchorElNav}
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
                  indicatorColor="secondary"
                >
                  {tabsItems.map((tab) => (
                    <div key={tab.id} onClick={() => this.handleChange(tab.id)}>
                      <Link href={tab.link} passHref>
                        <Tab label={tab.label} sx={tabsStyles} />
                      </Link>
                    </div>
                  ))}
                </Tabs>
              </Box>
              <Box
                display="flex"
                sx={{ flexGrow: 0, alignItems: "center", gap: 1 }}
              >
                <Box onClick={this.handleClickOpenFavorites}>
                  <FavoriteBorderIcon sx={iconStyles} />
                </Box>

                <Box onClick={this.handleClickOpenShoppingCart}>
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

        {this.state.openShoppingCart && (
          <ShoppingCartDialog open={this.state.openShoppingCart} />
        )}

        {/* Favorites Dialog */}

        {this.state.openFavorites && (
          <FavoritesDialog open={this.state.openFavorites} />
        )}
      </>
    );
  }
}
