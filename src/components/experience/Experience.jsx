import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Experience = ({
  title,
  employmentType,
  companyName,
  url,
  locationType,
  startDate,
  endDate,
  description,
}) => {
  const domain = new URL(url).hostname;

  return (
    <li className="experience-list__item">
      <div className="experience__aside-content">
        <div className="experience__dates">
          {`${startDate.getMonth().toString()}.${startDate
            .getFullYear()
            .toString()} - ${endDate.getMonth().toString()}.${endDate
            .getFullYear()
            .toString()}`}
        </div>
        <span className="experience__location-type">{locationType}</span>
      </div>
      <div className="experience__main-content">
        <div className="experience__employment">
          <h3 className="experience__company-name title title_mb_none title_size_md">
            {companyName}
          </h3>
          <span className="experience__employment-type">{employmentType}</span>
          <NavLink
            className="experience__link link"
            to={url}
            target="_blank"
            rel="noreferrer"
          >
            {domain}
          </NavLink>
        </div>
        <h3 className="experience__title title title_mb_none title_size_md">
          {title}
        </h3>
        <ul className="experience__description">
          {description.map((item, index) => {
            return (
              <li key={index} className="experience__description-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  locationType: PropTypes.string.isRequired,
  startDate: PropTypes.any.isRequired,
  endDate: PropTypes.any.isRequired,
  description: PropTypes.array.isRequired,
};

export default Experience;
