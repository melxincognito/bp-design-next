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

const houseStyleOptions = [
  {
    value: "Luxury",
    label: "Luxury",
  },

  {
    value: "Modern",
    label: "Modern",
  },
  {
    value: "Spanish",
    label: "Spanish",
  },

  {
    value: "Ranch",
    label: "Ranch",
  },
  {
    value: "Cottage",
    label: "Cottage",
  },
  { value: "Other", label: "Other" },
];

const projectTypeOptions = [
  {
    value: "New Construction",
    label: "New Construction",
  },
  {
    value: "Full Renovation",
    label: "Full Renovation",
  },
  {
    value: "Remodel",
    label: "Remodel",
  },
  {
    value: "Home Addition",
    label: "Home Addition",
  },
];

export default function CustomPlanRequestForm() {
  const [requestorName, setRequestorName] = useState("");
  const [requestorPhone, setRequestorPhone] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [style, setStyle] = useState("Luxury");
  const [projectType, setProjectType] = useState("New Construction");

  const planRequestInputs = [
    {
      label: "Name",
      onChangeValue: setRequestorName,
    },
    {
      label: "Phone",
      onChangeValue: setRequestorPhone,
    },
    {
      label: "Project Sq. Footage",
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

  return (
    <>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Typography>Custom plan request form</Typography>
        </CardContent>
        <CardContent>
          <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                overflowX: "auto",

                justifyContent: "center",
                gap: 1,
              }}
            >
              {planRequestInputs.map((input, index) => (
                <>
                  <TextField
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

            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
