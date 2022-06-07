import { Box, Typography } from "@mui/material";
import FilterBlueprintsForm from "../components/forms/FilterBlueprintsForm";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const desktopContainerStyles = {
    display: { xs: "none", md: "grid" },
    gridTemplateRows: "auto 10rem 10rem",
    justifyItems: "center",
    gap: "1rem",
  };

  const mobileContainerStyles = {
    display: { xs: "flex", md: "none" },
  };

  const headerImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  };

  const textContentContainerStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "4rem",
    borderRadius: 3,
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.50)",
  };

  return (
    <>
      {/*Desktop page view */}
      <Box className="desktop-container" sx={desktopContainerStyles}>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            className="header-image-container"
            sx={headerImageContainerStyles}
          >
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832"
              width="90%"
              height="100%"
              style={{ boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.50)" }}
            />
            <motion.div
              id="blueprints-form-container"
              initial={{ x: "-130vh" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              style={{
                position: "absolute",
                right: "15%",
                top: "26%",
              }}
            >
              <FilterBlueprintsForm />
            </motion.div>{" "}
          </Box>
        </motion.div>

        <motion.div
          className="container2"
          transition={{ delay: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={textContentContainerStyles}
        >
          <Typography variant="h6">
            {" "}
            Browse through our blueprint designs to find the perfect home for
            you and your family. From Spanish Colonial to Modern, we have a wide
            variety of options to choose from.
          </Typography>
        </motion.div>

        <motion.div
          className="container3"
          transition={{ delay: 1.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={textContentContainerStyles}
        >
          {" "}
          <Typography variant="h6">
            {" "}
            Found a plan you like but want to fix a few details? We can help
            with that! We offer our customers the ability to submit{" "}
            <Link href="/customplanrequest" passHref>
              <a style={{ color: "purple" }}>custom plan requests </a>
            </Link>{" "}
            to our team. We'll review your request and get back to you to go
            over the details so we can help create the perfect home.
          </Typography>
        </motion.div>
      </Box>

      {/*Mobile page view */}
      <Box className="mobile-container" sx={mobileContainerStyles}>
        <Typography> Hello world II</Typography>
      </Box>
    </>
  );
}
