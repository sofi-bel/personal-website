import React from "react";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import Nav from "../nav/Nav";
import {NavLink} from "react-router-dom";
import { navs } from "../../helpers/navList";

const Navbar = () => {
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
        {navs.map((nav) => {
          return (
            <Nav
              key={nav.id}
              path={nav.path}
              text={nav.text}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
