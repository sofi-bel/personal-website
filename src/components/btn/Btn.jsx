import PropTypes from "prop-types";
import "./style.scss";

const Btn = ({ link = "#", text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="hero-header__button btn btn_theme_primary">
        {text}
      </button>
    </a>
  );
};

Btn.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Btn;
