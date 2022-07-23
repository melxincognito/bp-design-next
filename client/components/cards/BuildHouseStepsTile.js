import { Card, Typography, CardContent } from "@mui/material";

export default function BuildHouseStepsTile({
  backgroundColor,
  stepNumber,
  title,
  description,
}) {
  const cardStyles = {
    display: "flex",
    height: "13rem",
    width: "300px",
    padding: 1,
    boxShadow: "0px 1px 15px 5px rgba(0,0,0,0.12)",
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h4" color="#0b03b0">
            {" "}
            {stepNumber}{" "}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "grid" }}>
          <Typography variant="h6"> {title} </Typography>
          <Typography variant="body1" color="primary.light">
            {" "}
            {description}{" "}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
