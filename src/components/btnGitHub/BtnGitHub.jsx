import PropTypes from "prop-types";
import GitHubIcon from "../../assets/images/icons/gitHubIconBlack.svg?react";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="btn btn_theme_outline">
        <GitHubIcon />
        <p>GitHub repo</p>
      </button>
    </a>
  );
};

BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired,
};
export default BtnGitHub;
