import React from "react";
import "./style.scss"

const Skill = ({text}) => {
  return (
    <li className="skill-list__item">{text}</li>
  );
};

export default Skill;
