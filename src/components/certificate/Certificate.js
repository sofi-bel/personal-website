import React from "react";
import { NavLink } from 'react-router-dom';

const Certificate = ({ title, img, url }) => {
  return (
    <NavLink to={url}>
      <li className="certificate-item">
          <img
            src={img}
            alt={title}
            className="certificate-item__img"
          />
        <h3 className="certificate-item__title title title_size_lg">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Certificate;