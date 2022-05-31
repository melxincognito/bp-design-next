import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function CustomPlanRequestForm() {
  const [requestorName, setRequestorName] = useState("");
  const [requestorPhone, setRequestorPhone] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [style, setStyle] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(requestorName);
    console.log(requestorPhone);
    console.log(sqFootage + " sqft");
    console.log(lotSize);
    console.log(style);
    console.log(message);
    console.log("puta");
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography>Custom plan request form</Typography>
        </CardContent>
        <CardContent>
          <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>
            <TextField
              label="name"
              onChange={(e) => {
                setRequestorName(e.target.value);
              }}
            />
            <TextField
              label="Phone"
              onChange={(e) => {
                setRequestorPhone(e.target.value);
              }}
            />
            <TextField
              label="Lot Size (SqFt or Acres)"
              onChange={(e) => {
                setLotSize(e.target.value);
              }}
            />
            <TextField
              label="Sq Footage Estimate"
              onChange={(e) => {
                setSqFootage(e.target.value);
              }}
            />
            <TextField
              label="Style"
              onChange={(e) => {
                setStyle(e.target.value);
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
