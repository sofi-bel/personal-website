import React from "react";
import gitHubIcon from "../../assets/images/icons/gitHubIcon.svg";
import linkedInIcon from "../../assets/images/icons/linkedInIcon.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/sofi-bel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHubIcon} alt="GitHub icon" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/sofi-bel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn icon" />
              </a>
            </li>
          </ul>
          <div className="footer__copyright">
            <p>© 2023 Sofi Bel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;