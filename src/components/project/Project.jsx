import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project-item">
        <img src={img} alt={title} className="project-item__img" />
        <h3 className="project-item__title title title_size_lg">{title}</h3>
      </li>
    </NavLink>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;
