import styles from "./MenuLink.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router";

function MenuLink({ children, to }) {
  const location = useLocation();

  return (
    <Link
      className={`${styles["menu-link"]} ${
        location.pathname === to ? styles["menu-link--active"] : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}

export default MenuLink;
