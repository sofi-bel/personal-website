import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Certificate = ({ title, img, url }) => {
  return (
    <li className="certificate-item">
      <NavLink to={url}>
        <img src={img} alt={title} className="certificate-item__img" />
      </NavLink>
    </li>
  );
};

Certificate.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Certificate;
