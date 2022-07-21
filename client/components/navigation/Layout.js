import layoutStyles from "../../styles/Layout.module.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <div>
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
