import React from "react";
import { NavLink } from 'react-router-dom';

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project-item">
          <img
            src={img}
            alt={title}
            className="project-item__img"
          />
        <h3 className="project-item__title title title_size_lg">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;