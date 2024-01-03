import React from "react";
import "./style.scss";

export const MenuButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`navbar__menu-button ${isActive === true ? "active" : ""} ${isActive === false ? "inactive" : ""}`}
    >
      <span className="navbar__menu-button--line"></span>
    </button>
  );
};