import PropTypes from "prop-types";
import "./style.scss";

const Skill = ({ text }) => {
  return <li className="skill-list__item">{text}</li>;
};

Skill.propTypes = {
  text: PropTypes.string.isRequired,
};

Skill.propTypes = {
  text: PropTypes.string.isRequired
};

export default Skill;
