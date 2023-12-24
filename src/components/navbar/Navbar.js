import { useState } from "react";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import BtnToggleMenu from "../btnToggleMenu/BtnToggleMenu";
import Nav from "../nav/Nav";
import { NavLink } from "react-router-dom";
import { navs } from "../../helpers/navList";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("close");
  const handleClickOnToggleMenu = () => {
    setOpenMenu((currentValue) =>  {
      return (currentValue === "open") ? "close" : "open";
    });
  }

  const navbarNormal = 'navbar';
  const navbarNavNormal = 'navbar__nav nav';
  const navbarActive = 'navbar nav-is-visible';
  const navbarNavActive = 'navbar__nav nav nav-is-visible';

  return (
    <nav className={openMenu === 'close' ? navbarNormal : navbarActive}>
      <NavLink to="/" className="navbar__brand">
        <strong>Sofi Bel</strong> portfolio
      </NavLink>
      <BtnDarkMode />
      <BtnToggleMenu onChange={handleClickOnToggleMenu} />
      <ul className={openMenu === 'close' ? navbarNavNormal : navbarNavActive}>
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
