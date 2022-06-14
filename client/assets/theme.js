import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121", // black
    },
    secondary: {
      main: "#ffb300", // yellow
    },
    highlight: {
      dark: "#026aa2", // dark blue
      main: "#0288d1", // blue
    },
  },
  typography: {
    fontFamily: "Libre Bodoni",
  },
});

export default theme;
