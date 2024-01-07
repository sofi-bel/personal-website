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
        sizes="(min-width: 1720px) 512px,
        (min-width: 1280px) calc(25.24vw + 83px),
        (min-width: 1000px) calc(13.46vw + 342px),
        (min-width: 920px) calc(33.33vw - 21px),
        (min-width: 620px) calc(50vw - 23px), 96.67vw"
      />
      <source
        srcSet={`${srcWebp} 580w, ${srcBigWebp} 1024w`}
        type="image/png"
        sizes="(min-width: 1720px) 512px,
        (min-width: 1280px) calc(25.24vw + 83px),
        (min-width: 1000px) calc(13.46vw + 342px),
        (min-width: 920px) calc(33.33vw - 21px),
        (min-width: 620px) calc(50vw - 23px), 96.67vw"
      />
      <img
        srcSet={`${srcImage} 580w, ${srcBigImage} 1024w`}
        sizes="(min-width: 1720px) 512px,
        (min-width: 1280px) calc(25.24vw + 83px),
        (min-width: 1000px) calc(13.46vw + 342px),
        (min-width: 920px) calc(33.33vw - 21px),
        (min-width: 620px) calc(50vw - 23px), 96.67vw"
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
