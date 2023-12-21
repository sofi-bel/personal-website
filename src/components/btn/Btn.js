import "./style.scss";

import React from "react";

const Btn = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="hero-header__button btn btn_theme_primary">{ text }</button>
    </a>
  );
};

export default Btn;