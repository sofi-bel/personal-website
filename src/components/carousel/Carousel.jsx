import { useState, useEffect, useCallback } from "react";
import { references } from "../../helpers/referencesList.js";
import AngleIcon from "../../assets/images/icons/angleIcon.svg?react";
import AngleLeftIcon from "../../assets/images/icons/angleLeftIcon.svg?react";
import "./style.scss";

const Carousel = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const next = () => {
    setCurrentSlideNumber(currentSlideNumber + 1);
  };

  const prev = () => {
    setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const update = useCallback(() => {
    const inner = document.querySelector(".carousel__inner");
    const arrowRight = document.querySelector(".carousel__arrow_right");
    const arrowLeft = document.querySelector(".carousel__arrow_left");

    let offset = -inner.offsetWidth * currentSlideNumber;
    inner.style.transform = `translateX(${offset}px)`;

    if (currentSlideNumber === references.length - 1) {
      arrowRight.style.display = "none";
    } else {
      arrowRight.style.display = "";
    }

    if (currentSlideNumber === 0) {
      arrowLeft.style.display = "none";
    } else {
      arrowLeft.style.display = "";
    }
  }, [currentSlideNumber]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div className="carousel">
      <div className="carousel__arrow carousel__arrow_right" onClick={next}>
        <AngleIcon className="carousel__arrow-icon" />
      </div>
      <div className="carousel__arrow carousel__arrow_left" onClick={prev}>
        <AngleLeftIcon className="carousel__arrow-icon" />
      </div>
      <div className="carousel__inner">
        {references.map((item) => {
          return (
            <div
              key={item.id}
              className="carousel__slide slide"
              data-id={item.id}
            >
              <picture className="slide__avatar-wrap">
                <source
                  srcSet={`${item.srcImageWebp} 240w`}
                  type="image/webp"
                  sizes="(min-width: 780px) 120px, 105px"
                />
                <source
                  srcSet={`${item.srcImage} 240w`}
                  type="image/jpg"
                  sizes="(min-width: 780px) 120px, 105px"
                />
                <img
                  className="slide__avatar"
                  srcSet={`${item.srcImage} 240w`}
                  sizes="(min-width: 780px) 120px, 105px"
                  src={item.srcImage}
                  alt={item.alt}
                />
              </picture>
              <p className="slide__description">{item.description}</p>
              <div className="slide__bottom">
                <p className="slide__author">{item.author}</p>
                <p className="slide__position">
                  {item.companyName
                    ? `${item.position} at ${item.companyName}`
                    : item.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
