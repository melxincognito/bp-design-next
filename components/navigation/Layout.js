import layoutStyles from "../../styles/Layout.module.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
