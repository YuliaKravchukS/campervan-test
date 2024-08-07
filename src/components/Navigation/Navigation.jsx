import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to={"/"}>
          Home
        </NavLink>
        <NavLink className={getNavLinkClassName} to={"/catalog"}>
          Catalog
        </NavLink>
        <NavLink className={getNavLinkClassName} to={"/favorites"}>
          Favorites
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
