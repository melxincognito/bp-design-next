import React, { Fragment } from "react";
import { Box, Typography, Container, Link, MenuItem } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    { label: "Custom Home Tips", link: "/customhometips", id: 4 },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      link: "https://www.instagram.com",
      socialIcon: <InstagramIcon fontSize="large" />,
    },
    {
      label: "Facebook",
      link: "https://www.facebook.com",
      socialIcon: <FacebookIcon fontSize="large" />,
    },
    {
      label: "Twitter",
      link: "https://www.twitter.com",
      socialIcon: <TwitterIcon fontSize="large" />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com",
      socialIcon: <LinkedInIcon fontSize="large" />,
    },
  ];

  // styles variables

  const navigationUlStyles = {
    listStyle: "none",
    paddingLeft: "0pt",
  };

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
            <ul style={navigationUlStyles}>
              {navigationSelections.map((tab) => (
                <li key={tab.id}>
                  <Link href={tab.link}>
                    <Typography textAlign="center">{tab.label}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>{" "}
        <Container
          className="socialLinksContainerIcon"
          role="navigation"
          aria-label="Social Links Navigation"
          sx={{ display: "flex" }}
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
