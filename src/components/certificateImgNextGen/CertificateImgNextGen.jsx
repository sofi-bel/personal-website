import PropTypes from "prop-types";

const CertificateImgNextGen = ({
  className,
  srcImage,
  srcWebp,
  srcBigImage,
  srcBigWebp,
  alt,
}) => {
  return (
    <picture className={className}>
      <source
        srcSet={`${srcWebp} 580w, ${srcBigWebp} 1024w`}
        type="image/webp"
        sizes="(min-width: 1460px) 408px,
        (min-width: 1200px) calc(16.67vw + 168px),
        (min-width: 1000px) calc(20.56vw + 258px),
        (min-width: 920px) calc(15vw + 148px),
        (min-width: 560px) calc(48.53vw - 23px), calc(100vw - 42px)"
      />
      <source
        srcSet={`${srcWebp} 580w, ${srcBigWebp} 1024w`}
        type="image/jpg"
        sizes="(min-width: 1460px) 408px,
        (min-width: 1200px) calc(16.67vw + 168px),
        (min-width: 1000px) calc(20.56vw + 258px),
        (min-width: 920px) calc(15vw + 148px),
        (min-width: 560px) calc(48.53vw - 23px), calc(100vw - 42px)"
      />
      <img
        className="certificate-img"
        srcSet={`${srcImage} 580w, ${srcBigImage} 1024w`}
        sizes="(min-width: 1460px) 408px,
        (min-width: 1200px) calc(16.67vw + 168px),
        (min-width: 1000px) calc(20.56vw + 258px),
        (min-width: 920px) calc(15vw + 148px),
        (min-width: 560px) calc(48.53vw - 23px), calc(100vw - 42px)"
        src={srcBigImage}
        alt={alt}
      />
    </picture>
  );
};

CertificateImgNextGen.propTypes = {
  className: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
  srcBigWebp: PropTypes.string,
  srcImage: PropTypes.string.isRequired,
  srcBigImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default CertificateImgNextGen;
