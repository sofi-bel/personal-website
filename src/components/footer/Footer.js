import React from "react";
import { socialMedia } from "../../helpers/socialList";
import Social from "../social/Social";
import "./style.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialMedia.map((social) => {
              return (
                <Social
                  key={social.id}
                  link={social.link}
                  img={social.img}
                  imgAlt={social.imgAlt}
                />
              );
            })}
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