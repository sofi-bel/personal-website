import PropTypes from "prop-types";
import "./style.scss";

export const MenuButton = ({ isActive = false, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`navbar__menu-button ${
        isActive === true ? "active" : "inactive"
      }`}
      aria-label="menu-button"
    >
      <span className="navbar__menu-button--line"></span>
    </button>
  );
};

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
