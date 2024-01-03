import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
import ImgNextGen from "../imgNextGen/ImgNextGen.jsx";

const Project = ({ srcWebp, fallback, title, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project-item">
        <ImgNextGen
          className={"project-item__img"}
          srcWebp={srcWebp}
          fallback={fallback}
          alt={title}
        />
        <h3 className="project-item__title title title_size_lg">{title}</h3>
      </li>
    </NavLink>
  );
};

Project.propTypes = {
  srcWebp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;
