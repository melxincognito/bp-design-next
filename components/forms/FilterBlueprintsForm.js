import React, { useState } from "react";
import { Card, Button, Typography } from "@mui/material";

const bedroomBtns = [
  { label: "1", index: 0 },
  { label: "2", index: 1 },
  { label: "3", index: 2 },
  { label: "4", index: 3 },
  { label: "5", index: 4 },
];
const bathroomBtns = [
  { label: "1", index: 0 },
  { label: "2", index: 1 },
  { label: "3", index: 2 },
  { label: "4", index: 3 },
  { label: "1.5", index: 4 },
  { label: "2.5", index: 5 },
  { label: "3.5", index: 6 },
];

const storiesAndGaragesBtns = [
  { label: "1", index: 0 },
  { label: "2", index: 1 },
  { label: "3", index: 2 },
];

export default function FilterBlueprintsForm() {
  const [sqfInput, setSqfInput] = useState("");

  const handleSqfInputChange = (e) => {
    setSqfInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sqfInput);
  };

  const cardStyles = {
    display: "grid",
    textAlign: "center",
    padding: "2rem 0 2rem 0",
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.59)",
  };
  const generalButtonsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: 1,
  };
  const bathroomButtonsContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    justifyContent: "center",
    gap: 1,
  };

  return (
    <>
      <Card sx={cardStyles}>
        <form onSubmit={handleSubmit}>
          <div className="bedroomSelection">
            <Typography variant="h6"> # of Bedrooms</Typography>
            <div
              className="bedroomBtnsContentContainer"
              style={generalButtonsContainerStyles}
            >
              {bedroomBtns.map((bedroomBtn) => (
                <>
                  <Button variant="contained" color="secondary">
                    {" "}
                    {bedroomBtn.label}
                  </Button>
                </>
              ))}
            </div>
          </div>

          <div className="bathroomSelection">
            <Typography variant="h6"> # of Bathrooms</Typography>
            {/* this container is centering the overall content */}
            <div
              className="bathroomBtnsContentContainer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* this container is working on containing and centering the buttons */}
              <div style={bathroomButtonsContainerStyles}>
                {bathroomBtns.map((bedroomBtn) => (
                  <>
                    <Button variant="contained"> {bedroomBtn.label}</Button>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="storiesSelection">
            <Typography variant="h6"> # of Stories</Typography>
            <div
              className="storiesBtnsContentContainer"
              style={generalButtonsContainerStyles}
            >
              {storiesAndGaragesBtns.map((bedroomBtn) => (
                <>
                  <Button variant="contained" color="secondary">
                    {" "}
                    {bedroomBtn.label}
                  </Button>
                </>
              ))}
            </div>
          </div>

          <div className="garageSelection">
            <Typography variant="h6"> # of Garages</Typography>
            <div
              className="garageBtnsContentContainer"
              style={generalButtonsContainerStyles}
            >
              {storiesAndGaragesBtns.map((bedroomBtn) => (
                <>
                  <Button variant="contained"> {bedroomBtn.label}</Button>
                </>
              ))}
            </div>
          </div>

          <div className="sqFtSelection">
            <Typography variant="h6"> Sq Ft:</Typography>
            <input onChange={handleSqfInputChange} />
          </div>

          <Button variant="contained" sx={{ marginTop: 1 }} type="submit">
            {" "}
            Browse Blueprints
          </Button>
        </form>
      </Card>
    </>
  );
}
