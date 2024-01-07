import PropTypes from "prop-types";

const ImgNextGen = ({
  className,
  srcImage,
  srcWebp,
  srcBigImage,
  srcBigWebp,
  alt,
}) => {
  return (
    <picture className={className}>
      {srcBigImage && (
        <>
          <source
            srcSet={`${srcWebp} 740w, ${srcBigWebp} 1736w`}
            type="image/webp"
            sizes="(min-width: 980px) 868px,
                  (min-width: 780px) calc(65.56vw + 239px),
                  (min-width: 440px) 370px, calc(83.33vw + 20px)"
          />
          <source
            srcSet={`${srcImage} 740w, ${srcBigImage} 1736w`}
            type="image/png"
            sizes="(min-width: 980px) 868px,
                  (min-width: 780px) calc(65.56vw + 239px),
                  (min-width: 440px) 370px, calc(83.33vw + 20px)"
          />
          <img src={srcImage} alt={alt} />
        </>
      )}
      {!srcBigImage && (
        <>
          <source srcSet={srcWebp} type="image/webp" />
          <source srcSet={srcImage} type="image/png" />
          <img src={srcImage} alt={alt} />
        </>
      )}
    </picture>
  );
};

ImgNextGen.propTypes = {
  className: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
  srcBigWebp: PropTypes.string,
  srcImage: PropTypes.string.isRequired,
  srcBigImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImgNextGen;
