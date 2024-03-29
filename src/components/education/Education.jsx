import PropTypes from "prop-types";
import "./style.scss";
import GraduationCap from "../../assets/images/icons/graduationCapIcon.svg?react";

const Education = ({ school, degree, startDate, endDate, fieldOfStudy }) => {
  return (
    <li className="education-list__item">
      <GraduationCap className="education__icon icon" />
      <div className="education__body">
        <h3 className="education__position title title_size_md">
          {`${degree} of ${fieldOfStudy}`}
        </h3>
        <div className="education__bottom">
          <span className="education__date">{`${startDate} - ${endDate}`}</span>
          <p className="education__school">{school}</p>
        </div>
      </div>
    </li>
  );
};

Education.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.any.isRequired,
  fieldOfStudy: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Education;
