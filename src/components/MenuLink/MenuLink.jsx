import styles from "./MenuLink.module.css";
import { NavLink } from "react-router";

function MenuLink({ children, to }) {

  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;
