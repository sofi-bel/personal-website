import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Certificate = ({ title, img, url }) => {
  return (
    <NavLink to={url}>
      <li className="certificate-item">
        <img src={img} alt={title} className="certificate-item__img" />
      </li>
    </NavLink>
  );
};

Certificate.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Certificate;
