import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.scss";
import CertificateImgNextGen from "../certificateImgNextGen/CertificateImgNextGen.jsx";

const Certificate = ({
  alt,
  srcImage,
  srcWebp,
  srcImageBigWebp,
  srcImageBig,
  url,
}) => {
  return (
    <li className="certificate-item">
      <NavLink to={url}>
        <CertificateImgNextGen
          className={"certificate-item__img"}
          srcWebp={srcWebp}
          srcImage={srcImage}
          srcBigWebp={srcImageBigWebp}
          srcBigImage={srcImageBig}
          alt={alt}
        />
      </NavLink>
    </li>
  );
};

Certificate.propTypes = {
  alt: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  srcImageBig: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
  srcImageBigWebp: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Certificate;
