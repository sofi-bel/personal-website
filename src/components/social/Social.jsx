import PropTypes from "prop-types";
import GitHubIcon from "../../assets/images/icons/gitHubIcon.svg?react";
import LinkedInIcon from "../../assets/images/icons/linkedInIcon.svg?react";
import "./style.scss";

const Social = ({ link, type }) => {
  if (type === "gitHub") {
    return (
      <li className="social__item">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="icon" />
        </a>
      </li>
    );
  } else if (type === "linkedIn") {
    return (
      <li className="social__item">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="icon" />
        </a>
      </li>
    );
  }
};

Social.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Social;
