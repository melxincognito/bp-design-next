import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import Link from "next/link";

const tabsItems = [
  { label: "Home", link: "/", id: 0 },
  { label: "Browse All Plans", link: "/allBlueprints", id: 1 },
  { label: "Login", link: "/login", id: 2 },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // styles variables
  const tabsContainerStyles = {
    flexGrow: 1,
    justifyContent: "flex-start",
    display: { xs: "none", md: "flex" },
  };
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          p: 1,
          bgcolor: "black",
          display: "flex",
        }}
      >
        {" "}
        <Box sx={{ flexGrow: 2 }}>
          <Typography variant="h6" noWrap component="div">
            BP DESIGN STUDIO
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <TextField
            variant="standard"
            placeholder="Search by plan #"
            sx={{
              backgroundColor: "white",
              borderRadius: 1.5,
            }}
          />
          <Search />
        </Box>
      </Container>
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
              {tabsItems.map((tab) => (
                <MenuItem key={tab.id} onClick={handleCloseNavMenu}>
                  <Link href={tab.link}>
                    <Typography textAlign="center">{tab.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
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
                <div key={tab.id}>
                  <Link href={tab.link}>
                    <Tab
                      value={tab.id}
                      label={tab.label}
                      sx={{ my: 2, color: "white", display: "block" }}
                    />
                  </Link>
                </div>
              ))}
            </Tabs>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar2;
