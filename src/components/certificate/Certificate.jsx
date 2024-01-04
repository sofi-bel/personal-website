import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
import ImgNextGen from "../imgNextGen/ImgNextGen.jsx";

const Certificate = ({ alt, fallback, srcWebp, url }) => {
  return (
    <li className="certificate-item">
      <NavLink to={url}>
        <ImgNextGen
          className={"certificate-item__img"}
          srcWebp={srcWebp}
          fallback={fallback}
          alt={alt}
        />
      </NavLink>
    </li>
  );
};

Certificate.propTypes = {
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Certificate;
