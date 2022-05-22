import * as React from "react";
import { Card, Button, Typography } from "@mui/material";

export default function FilterBlueprintsForm() {
  const [sqfInput, setSqfInput] = React.useState("");

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
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
          </div>

          <div className="bathroomSelection">
            <Typography variant="h6"> # of Bathrooms</Typography>
            <Button>1 </Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <div>
              {" "}
              <Button>1.5</Button>
              <Button>2.5</Button>
              <Button>3.5</Button>
            </div>
          </div>

          <div className="storiesSelection">
            <Typography variant="h6"> # of Stories</Typography>
            <Button>1 </Button>
            <Button>2</Button>
            <Button>3</Button>
          </div>

          <div className="garageSelection">
            <Typography variant="h6"> # of Garages</Typography>
            <Button>1 </Button>
            <Button>2</Button>
            <Button>3</Button>
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
