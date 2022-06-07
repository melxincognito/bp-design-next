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
    <motion.div>
      {/*Desktop page view */}
      <Box className="desktop-container" sx={desktopContainerStyles}>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
            <motion.div
              initial={{ x: "-130vh" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              id="blueprints-form-container"
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
