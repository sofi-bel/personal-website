import React from "react";
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.scss";

const Navbar = () => {
  const activeLink = 'nav__link link link_theme_light nav__link--active';
  const normalLink = 'nav__link link link_theme_light';

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <strong>Sofi Bel</strong> portfolio
      </NavLink>
      <BtnDarkMode />
      <div className="navbar__toggler">
        <div className="navbar__toggler-icon">
          <div className="navbar__toggler-icon--line--top"></div>
          <div className="navbar__toggler-icon--line--bottom"></div>
        </div>
      </div>
      <ul className="navbar__nav nav">
        <li className="nav__item">
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            About me
          </NavLink>
        </li>
        <li className="nav__item">
          <li className="nav__item">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              Skills
            </NavLink>
          </li>
        </li>
        <li className="nav__item">
          <li className="nav__item">
            <li className="nav__item">
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Experience
              </NavLink>
            </li>
          </li>
        </li>
        <li className="nav__item">
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            Education
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            Certifications
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/references"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            References
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
