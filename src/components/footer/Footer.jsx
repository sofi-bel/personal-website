import { socialMedia } from "../../helpers/socialList";
import Social from "../social/Social.jsx";
import "./style.scss";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialMedia.map((social) => {
              return (
                <Social key={social.id} link={social.link} type={social.type} />
              );
            })}
          </ul>
          <div className="footer__copyright">
            <p>© 2023 - {currentYear} Sofi Bel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
