import PropTypes from "prop-types";
import "./style.scss";


const Social = ({ link, img, imgAlt }) => {
  return (
    <li className="social__item">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={imgAlt} />
      </a>
    </li>
  );
};

Social.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired
};
export default Social;
