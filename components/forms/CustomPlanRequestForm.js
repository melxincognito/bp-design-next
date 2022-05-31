import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const houseStyleOptions = [
  {
    value: "Spanish",
    label: "Spanish",
  },
  {
    value: "Luxury",
    label: "Luxury",
  },
  {
    value: "Modern",
    label: "Modern",
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

export default function CustomPlanRequestForm() {
  const [requestorName, setRequestorName] = useState("");
  const [requestorPhone, setRequestorPhone] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [style, setStyle] = useState("");

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
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography>Custom plan request form</Typography>
        </CardContent>
        <CardContent>
          <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>
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

            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
