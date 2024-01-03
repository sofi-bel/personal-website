import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Nav = ({ path, text}) => {
  const activeLink = "nav__link link link_theme_light link_theme_light-active";
  const normalLink = "nav__link link link_theme_light";

  return (
    <li className="navbar__nav-item nav__item">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? activeLink : normalLink
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Nav;
