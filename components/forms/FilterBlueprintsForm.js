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

  return (
    <>
      <Card
        sx={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="bedroomSelection">
            <Typography variant="h6"> # of Bedrooms</Typography>
            {bedroomBtns.map((bedroomBtn) => (
              <>
                <Button variant="contained"> {bedroomBtn.label}</Button>
              </>
            ))}
          </div>

          <div className="bathroomSelection">
            <Typography variant="h6"> # of Bathrooms</Typography>
            {bathroomBtns.map((bedroomBtn) => (
              <>
                <Button variant="contained"> {bedroomBtn.label}</Button>
              </>
            ))}
          </div>

          <div className="storiesSelection">
            <Typography variant="h6"> # of Stories</Typography>
            {storiesAndGaragesBtns.map((bedroomBtn) => (
              <>
                <Button variant="contained"> {bedroomBtn.label}</Button>
              </>
            ))}
          </div>

          <div className="garageSelection">
            <Typography variant="h6"> # of Garages</Typography>
            {storiesAndGaragesBtns.map((bedroomBtn) => (
              <>
                <Button variant="contained"> {bedroomBtn.label}</Button>
              </>
            ))}
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
