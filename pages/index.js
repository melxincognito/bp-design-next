import { Box, Typography } from "@mui/material";
import FilterBlueprintsForm from "../components/forms/FilterBlueprintsForm";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const desktopContainerStyles = {
    display: { xs: "none", md: "grid" },
    gridTemplateRows: "auto 4rem 8rem",
    justifyItems: "center",
  };

  const mobileContainerStyles = {
    display: { xs: "flex", md: "none" },
  };
  return (
    <motion.div
      initial={{ x: -650 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      {/*Desktop page view */}
      <Box className="desktop-container" sx={desktopContainerStyles}>
        <Box
          className="header-image-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832"
            width="90%"
            height="100%"
          />
          <Box
            id="blueprints-form-container"
            sx={{
              position: "absolute",
              right: "15%",
              top: "26%",
            }}
          >
            <FilterBlueprintsForm />
          </Box>{" "}
        </Box>

        <Box sx={{ backgroundColor: "blue" }}>
          <Typography> box 2</Typography>
        </Box>

        <Box sx={{ backgroundColor: "orange" }}>
          {" "}
          <Typography> Box 3</Typography>
        </Box>
      </Box>
      {/*Mobile page view */}
      <Box className="mobile-container" sx={{ mobileContainerStyles }}>
        <Typography> Hello world</Typography>
      </Box>
    </motion.div>
  );
}
