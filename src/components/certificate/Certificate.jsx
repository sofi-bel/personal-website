import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.scss"
const Certificate = ({ title, img, url }) => {
  return (
    <NavLink to={url}>
      <li className="certificate-item">
          <img
            src={img}
            alt={title}
            className="certificate-item__img"
          />
      </li>
    </NavLink>
  );
};

export default Certificate;