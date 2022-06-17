import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

// TODO - add email js to send the message to the bp design email

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomPlanRequestForm() {
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardStyles = {
    padding: 2,
    display: "grid",
    justifyContent: "center",
    borderRadius: 2,
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
        <hr size="1" width="90%" color="gray" />

        <CardContent>
          <form style={{ display: "grid", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {planRequestInputs.map((input, index) => (
                <div key={index} style={{ width: { xs: "100%", md: "24.3%" } }}>
                  <TextField
                    fullWidth
                    label={input.label}
                    onChange={(e) => {
                      input.onChangeValue(e.target.value);
                    }}
                  />
                </div>
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

            <Button variant="contained" onClick={handleClickOpen}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle>{"Request Sent!"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ display: "flex", flexWrap: "wrap" }}>
            We'll contact you shortly to discuss your custom blueprint design
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
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
