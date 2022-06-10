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
      dark: "#026aa2",
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Libre Bodoni",
  },
});

export default theme;
