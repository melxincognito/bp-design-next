import layoutStyles from "../../styles/Layout.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
