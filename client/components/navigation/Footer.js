import React from "react";
import { Box, Typography, Container, Link, MenuItem } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// TODO figure out how to get social links to have their font size set to medium dynamically
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/" target="_blank">
        BP Design Studio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  const navigationSelections = [
    { label: "Home", link: "/", id: 0 },
    { label: "Browse All Plans", link: "/allBlueprints", id: 1 },
    { label: "Browse by Style", link: "/browsebpbystyle", id: 2 },
    { label: "Custom Plan Request", link: "/customplanrequest", id: 3 },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      link: "www.instagram.com",
      socialIcon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      link: "www.instagram.com",
      socialIcon: <FacebookIcon />,
    },
    {
      label: "Twitter",
      link: "www.instagram.com",
      socialIcon: <TwitterIcon />,
    },
    {
      label: "LinkedIn",
      link: "www.instagram.com",
      socialIcon: <LinkedInIcon />,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "10vh",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      aria-label="footer-navigation"
    >
      <Box className="mainContentContainer" sx={{ display: "flex" }}>
        <Container
          className="navigationContainer"
          maxWidth="sm"
          sx={{ display: "grid", gap: "1rem" }}
          role="navigation"
          aria-label="Main"
        >
          <nav>
            {navigationSelections.map((tab) => (
              <MenuItem key={tab.id}>
                <Link href={tab.link}>
                  <Typography textAlign="center">{tab.label}</Typography>
                </Link>
              </MenuItem>
            ))}
          </nav>
        </Container>{" "}
        <Container
          className="socialLinksContainerIcon"
          role="navigation"
          aria-label="Social Links Navigation"
        >
          {socialLinks.map((socialLink, index) => (
            <div
              key={index}
              onClick={() => {
                window.open(`${socialLink.link}`, "_blank");
              }}
              aria-label={socialLink.label}
            >
              {socialLink.socialIcon}
            </div>
          ))}
        </Container>
      </Box>
      <Box
        className="copyrightContainer"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Copyright />
      </Box>
    </Box>
  );
}
