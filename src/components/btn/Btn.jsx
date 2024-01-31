import PropTypes from "prop-types";
import "./style.scss";

const Btn = ({ link = "#", text, type }) => {
  if (type === "external") {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <button className="hero-header__button btn btn_theme_primary">
          {text}
        </button>
      </a>
    );
  } else if (type === "file") {
    return (
      <a href={link} download="Sofi_Bel_CV.pdf" rel="noreferrer">
        <button className="hero-header__button btn btn_theme_primary">
          {text}
        </button>
      </a>
    );
  } else {
    return (
      <a href={link}>
        <button className="hero-header__button btn btn_theme_primary">
          {text}
        </button>
      </a>
    );
  }
};

Btn.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Btn;
