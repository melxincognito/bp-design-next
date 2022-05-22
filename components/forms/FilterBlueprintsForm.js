import { Card, Button, Typography, TextField } from "@mui/material";

const FilterBlueprintsForm = () => {
  return (
    <div>
      <Card
        sx={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          borderRadius: 2,
        }}
      >
        <form>
          <div className="bedroomSelection">
            <Typography variant="h6"> # of Bedrooms</Typography>
            <Button>1 </Button>
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
            <input />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FilterBlueprintsForm;
