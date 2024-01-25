import Contact from "../contact/Contact.jsx";
import { contacts } from "../../helpers/contactsList.js";
import { aboutMe } from "../../helpers/aboutMe.js";
import "./style.scss";

const AboutMe = () => {
  return (
    <div className="about-me__wrap">
      {aboutMe.map((item, index) => {
        return (
          <picture key={index} className="about-me__aside-content">
            <source
              srcSet={`${item.srcImageSmallWebp} 408w, ${item.srcImageBigWebp} 816w`}
              type="image/webp"
              sizes="(min-width: 1400px) 420px, (min-width: 580px) 30.25vw, calc(100vw - 42px)"
            />
            <source
              srcSet={`${item.srcImageSmall} 408w, ${item.srcImageBig} 816w`}
              type="image/png"
              sizes="(min-width: 1400px) 420px, (min-width: 580px) 30.25vw, calc(100vw - 42px)"
            />
            <img
              className="about-me__img"
              srcSet={`${item.srcImageSmall} 408w, ${item.srcImageBig} 816w`}
              sizes="(min-width: 1400px) 420px, (min-width: 580px) 30.25vw, calc(100vw - 42px)"
              src={`${item.srcImageBig}`}
              alt={`${item.imageAlt}`}
            />
          </picture>
        );
      })}
      <div className="about-me__main-content">
        {aboutMe.map((item, index) => {
          return (
            <p
              key={index}
              className="about-me__description"
            >{`${item.description}`}</p>
          );
        })}
        <ul className="about-me__contact-list">
          {contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                title={contact.title}
                text={contact.text}
                link={contact.link}
                linkText={contact.linkText}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
