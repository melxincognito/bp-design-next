import React, { useState, useRef, forwardRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomPlanRequestForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [style, setStyle] = useState("Luxury Style");
  const [projectType, setProjectType] = useState("New Construction Project");
  const [phoneInputValue, setPhoneInputValue] = React.useState("");

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneInputValue(formattedPhoneNumber);
  };

  // Contact Phone has onChange and value because it needs them to be formatted
  const planRequestInputs = [
    {
      label: "Contact Name",
      name: "contact_name",
    },
    {
      label: "Contact Phone",
      name: "contact_phone",
      onChange: handlePhoneInput,
      value: phoneInputValue,
    },
    {
      label: "Est. Project Sq. Footage",
      name: "sq_footage",
    },
    {
      label: "Lot Size (Acres or Sq.Ft)",
      name: "lot_size",
    },
  ];
  const form = useRef();
  const router = useRouter();
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    router.push("/");
  };

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.email_js_service_id}`,
        `${process.env.email_js_template_id}`,
        form.current,
        `${process.env.email_js_public_key}`
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClickOpenDialog();
        },
        (error) => {
          console.log(error.text);
        }
      );
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

  const formMarginBottomStyles = {
    marginBottom: "1rem",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={cardHeaderStyles}>
          <Typography variant="h4">Custom Blueprint Request Form</Typography>
        </CardContent>
        <hr size="1" width="90%" color="gray" />

        <CardContent>
          <form ref={form} onSubmit={submit}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                justifyItems: "center",
                gap: 1,
                marginBottom: "1rem",
              }}
            >
              {planRequestInputs.map((input, index) => (
                <>
                  <TextField
                    key={index}
                    sx={{ width: { xs: "120%", md: "100%" } }}
                    label={input.label}
                    name={input.name}
                    onChange={input.onChange}
                    value={input.value}
                  />
                </>
              ))}
            </Box>

            <div className="houseStyleInput" style={formMarginBottomStyles}>
              <TextField
                fullWidth
                select
                label="House Style"
                value={style}
                onChange={(e) => {
                  setStyle(e.target.value);
                }}
                name="style"
                required
              >
                {houseStyleOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="projectTypeInput" style={formMarginBottomStyles}>
              <TextField
                fullWidth
                select
                label="Project Type"
                value={projectType}
                onChange={(e) => {
                  setProjectType(e.target.value);
                }}
                name="project_type"
                required
              >
                {projectTypeOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle>{"Request Sent!"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ display: "flex", flexWrap: "wrap" }}>
            We'll contact you shortly to discuss your custom blueprint design
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
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
