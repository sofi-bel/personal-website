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
              srcSet={`${item.srcImageSmallWebp} 580w, ${item.srcImageBigWebp} 1024w`}
              type="image/webp"
            />
            <source
              srcSet={`${item.srcImageSmall} 580w, ${item.srcImageBig} 1024w`}
              type="image/png"
            />
            <img
              className="about-me__img"
              srcSet={`${item.srcImageSmall} 580w, ${item.srcImageBig} 1024w`}
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
