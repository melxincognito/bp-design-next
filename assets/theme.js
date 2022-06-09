import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffb300",
    },
    highlight: {
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Libre Bodoni",
  },
});

export default theme;
