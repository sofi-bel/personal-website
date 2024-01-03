import React from "react";
import "./style.scss"

const Social = ({ link, img, imgAlt }) => {
  return (
    <li className="social__item">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={imgAlt} />
      </a>
    </li>
  );
};

export default Social;
