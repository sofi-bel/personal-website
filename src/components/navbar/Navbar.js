import { useEffect, useRef, useState } from "react";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import Nav from "../nav/Nav";
import { NavLink } from "react-router-dom";
import { navs } from "../../helpers/navList";
import { useClickOutside } from "../../utils/useClickOutside";
import { MenuButton } from "../menuButton/MenuButton";
import "./style.scss"

const Navbar = () => {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if(isOpen) setTimeout(() => setOpen(false), 50);
  });

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener("touchstart", (event) => {
      startTouchX = event.changedTouches[0].pageX;
      startTouchY = event.changedTouches[0].pageY;
    });

    document.addEventListener("touchend", (event) => {
      endTouchX = event.changedTouches[0].pageX;
      endTouchY = event.changedTouches[0].pageY;
      if(
        startTouchX < 100 &&
        Math.abs(endTouchY - startTouchY < 40) &&
        endTouchX > startTouchX
      )
        setOpen(true);

      if(
        startTouchX < 260 &&
        Math.abs(endTouchY - startTouchY < 40) &&
        endTouchX < startTouchX
      )
        setOpen(false);
    });
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <strong>Sofi Bel</strong> portfolio
      </NavLink>
      <BtnDarkMode />
      <ul className={`navbar__nav nav ${isOpen ? "active" : ""}`} ref={menuRef}>
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
      <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
    </nav>
  );
};

export default Navbar;

