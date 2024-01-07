import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
import ImgNextGen from "../imgNextGen/ImgNextGen.jsx";

const Project = ({ title, alt, srcImage, srcWebp, index }) => {
  return (
    <li className="project-item">
      <NavLink to={`/project/${index}`}>
        <ImgNextGen
          className={"project-item__img"}
          srcWebp={srcWebp}
          srcImage={srcImage}
          alt={alt}
        />
        <h3 className="project-item__title title title_size_lg">{title}</h3>
      </NavLink>
    </li>
  );
};

Project.propTypes = {
  srcWebp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;
