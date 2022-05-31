import { Box } from "@mui/material";
import FilterBlueprintsForm from "../components/forms/FilterBlueprintsForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832"
          width="80%"
          height="60%"
        />
        <Box
          id="container"
          sx={{
            position: "absolute",
            right: "15%",
            top: "26%",
          }}
        >
          <FilterBlueprintsForm />
        </Box>{" "}
      </Box>
    </>
  );
}
