import layoutStyles from "../../styles/Layout.module.css";
import NavBar2 from "./NavBar2";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar2 />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
