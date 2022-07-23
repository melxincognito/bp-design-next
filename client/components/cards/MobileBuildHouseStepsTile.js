import { Box, Typography } from "@mui/material";

export default function MobileBuildHouseStepsTile({
  backgroundColor,
  stepNumber,
  title,
  description,
}) {
  const mobileStepsCardStyles = {
    backgroundColor: `${backgroundColor}`,
    width: "100%",
    boxShadow: " inset 0px 0px 15px 5px rgba(0,0,0,0.29)",
    borderRadius: "5px",
    padding: "1rem",
  };

  const mobileStepNumberContainer = {
    width: "10%",
    color: "#0b03b0",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    boxShadow: "inset 0px 0px 12px 4px rgba(0,0,0,0.20)",
  };

  const mobileStepContentContainer = {
    display: "grid",
    paddingLeft: "2rem",
    color: "primary.main",
  };

  return (
    <Box className="mobile-steps-card" sx={mobileStepsCardStyles}>
      <Box
        className="mobile-step-number-container"
        sx={mobileStepNumberContainer}
      >
        <Typography variant="h4">{stepNumber}</Typography>
      </Box>
      <Box
        className="mobile-step-content-container"
        sx={mobileStepContentContainer}
      >
        <Typography variant="h4" sx={{ textDecoration: "underline" }}>
          {title}
        </Typography>
        <Box className="step-description-container">
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
