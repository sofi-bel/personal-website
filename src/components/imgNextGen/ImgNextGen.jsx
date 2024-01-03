import PropTypes from "prop-types";

const ImgNextGen = ({ className, srcWebp, fallback, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={srcWebp} type="image/webp" />
      <source srcSet={fallback} type="image/png" />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

ImgNextGen.propTypes = {
  className: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImgNextGen;
