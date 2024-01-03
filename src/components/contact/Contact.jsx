import React from "react";
import "./style.scss"

const Contact = ({ title, text, link, linkText }) => {
  return (
    <li className="contact-list__item">
      <h3 className="title title_size_lg">{title}</h3>
      <p className="text text_size_md">
        {link && (
          <a className="link" href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
        )}
        {text}
      </p>
    </li>
  );
};

export default Contact;
