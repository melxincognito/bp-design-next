import navbarStyles from "../../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          <Link href="/allBlueprints">Browse All Blueprints</Link>{" "}
        </li>
        <li>
          <Link href="/myfavorites">♡</Link>{" "}
        </li>
        <li>
          <Link href="/login">Login</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
