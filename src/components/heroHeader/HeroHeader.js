import "./style.scss";

import React from "react";
import Btn from "../btn/Btn";

const HeroHeader = () => {
  return (
    <header className="hero-header">
      <div className="hero-header__wrapper">
        <h1 className="hero-header__title title title_size_xxl">
          Hi, my name is Sofi Bel.<br />
          <strong
            className="hero-header__title hero-header__title_typing title title_accent title_typing"
          >I'm a Front End Developer</strong
          >
        </h1>
        <Btn text="Download CV"/>
      </div>
    </header>
  );
};

export default HeroHeader;