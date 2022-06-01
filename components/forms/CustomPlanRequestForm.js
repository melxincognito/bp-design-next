import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";

export default function CustomPlanRequestForm() {
  const [requestorName, setRequestorName] = useState("");
  const [requestorPhone, setRequestorPhone] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [style, setStyle] = useState("Luxury Style");
  const [projectType, setProjectType] = useState("New Construction Project");

  const planRequestInputs = [
    {
      label: "Contact Name",
      onChangeValue: setRequestorName,
    },
    {
      label: "Contact Phone",
      onChangeValue: setRequestorPhone,
    },
    {
      label: "Est. Project Sq. Footage",
      onChangeValue: setSqFootage,
    },
    {
      label: "Lot Size (Acres or Sq.Ft)",
      onChangeValue: setLotSize,
    },
  ];

  const submit = (e) => {
    e.preventDefault();
    console.log(requestorName);
    console.log(requestorPhone);
    console.log(sqFootage + " sqft");
    console.log(lotSize);
    console.log(style);
    console.log(projectType);
  };

  const cardStyles = {
    padding: 3,
    display: "grid",
    justifyContent: "center",
    borderRadius: 3,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };
  const cardHeaderStyles = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={cardHeaderStyles}>
          <Typography variant="h4">Custom Blueprint Request Form</Typography>
        </CardContent>
        <CardContent>
          <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {planRequestInputs.map((input, index) => (
                <>
                  <TextField
                    sx={{ width: { xs: "100%", md: "24.3%" } }}
                    key={index}
                    label={input.label}
                    onChange={(e) => {
                      input.onChangeValue(e.target.value);
                    }}
                  />
                </>
              ))}
            </Box>

            <div className="houseStyleInput">
              <TextField
                fullWidth
                select
                label="House Style"
                value={style}
                onChange={(e) => {
                  setStyle(e.target.value);
                }}
                required
              >
                {houseStyleOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="projectTypeInput">
              <TextField
                fullWidth
                select
                label="Project Type"
                value={projectType}
                onChange={(e) => {
                  setProjectType(e.target.value);
                }}
                required
              >
                {projectTypeOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

const houseStyleOptions = [
  {
    value: "Luxury Style",
    label: "Luxury",
  },

  {
    value: "Modern Style",
    label: "Modern",
  },
  {
    value: "Spanish Style",
    label: "Spanish",
  },

  {
    value: "Ranch Style",
    label: "Ranch",
  },
  {
    value: "Cottage Style",
    label: "Cottage",
  },
  { value: "Other", label: "Other" },
];

const projectTypeOptions = [
  {
    value: "New Construction Project",
    label: "New Construction",
  },
  {
    value: "Full Renovation Project",
    label: "Full Renovation",
  },
  {
    value: "Remodel Project",
    label: "Remodel",
  },
  {
    value: "Home Addition Project",
    label: "Home Addition",
  },
];
