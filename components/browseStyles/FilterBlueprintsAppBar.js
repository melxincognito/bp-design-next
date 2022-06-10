import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function FilterBlueprintsAppBar() {
  // opening and closing the mobile menu
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // states for the filter form

  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [stories, setStories] = useState("");
  const [squareFeet, setSquareFeet] = useState("");

  // filter options to create their dropdown menus

  const filterOptions = [
    {
      label: "Beds",
      value: beds,
      onChangeFunc: setBeds,
      values: [1, 2, 3, 4, 5],
    },
    {
      label: "Baths",
      value: baths,
      onChangeFunc: setBaths,
      values: [1, 2, 3, 4, 1.5, 2.5, 3.5],
    },
    {
      label: "Stories",
      value: stories,
      onChangeFunc: setStories,
      values: [1, 2, 3],
    },
    {
      label: "Sq Feet",
      value: squareFeet,
      onChangeFunc: setSquareFeet,
      values: ["1500<", "3000<", "5000<", "6000+"],
    },
  ];

  // styles variables

  const appBarStyles = {
    padding: 2,
    border: "solid black 7px",
    borderStyle: "outset",
  };

  const filterBlueprintsButtonStyles = {
    backgroundColor: "secondary.main",
    color: "black",
    "&:hover": { backgroundColor: "highlight.main" },
  };

  const submitFilterBlueprints = (e) => {
    e.preventDefault();
    console.log("Beds " + beds);
    console.log("Baths " + baths);
    console.log("Stories " + stories);
    console.log("Sq Feet " + squareFeet);
  };
  return (
    <AppBar position="static" maxWidth="xl" sx={appBarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              {/* TODO insert mobile filter options
                          in this location */}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}
          >
            {filterOptions.map((option, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: 120,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "white" }}>
                    {option.label}
                  </InputLabel>
                  <Select
                    id={option.label}
                    value={option.value}
                    sx={{
                      backgroundColor: "gray",
                    }}
                    onChange={(e) => {
                      option.onChangeFunc(e.target.value);
                    }}
                  >
                    {option.values.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            ))}

            <Button
              onClick={submitFilterBlueprints}
              variant="contained"
              sx={filterBlueprintsButtonStyles}
            >
              <Typography> Filter Blueprints</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
