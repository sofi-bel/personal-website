import React from "react";
import sunIcon from "../../assets/images/icons/sunIcon.svg";
import moonIcon from "../../assets/images/icons/moonIcon.svg";
import "./style.scss";

const BtnDarkMode = () => {
  return (
    <button className="dark-mode-btn">
      <img
        src={sunIcon}
        alt="Light mode"
        className="dark-mode-btn__icon"
      />
      <img
        src={moonIcon}
        alt="Dark mode"
        className="dark-mode-btn__icon"
      />
    </button>
  );
};

export default BtnDarkMode;