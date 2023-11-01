import "./SliderSlide.scss";

export const SliderSlide = ({
  image,
  title,
  text,
  label,
  codeLink,
  githubLink,
  codeIcon,
  githubIcon,
  onClick,
  expanded,
}) => {
  return (
    <>
      <div className="c-tabs__content__inner__slide__image">
        <img src={image} />
        {label && (
          <p className="c-tabs__content__inner__slide__image__label">{label}</p>
        )}
        <div className="c-tabs__content__inner__slide__image__links">
          {codeLink && (
            <a href={codeLink}>
              <img src={codeIcon} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink}>
              <img src={githubIcon} />
            </a>
          )}
        </div>
      </div>
      <div
        className={`c-tabs__content__inner__slide__content ${
          expanded ? "c-tabs__content__inner__slide__content--expanded" : ""
        }`}
      >
        <h3 className="c-tabs__content__inner__slide__content__title">
          {title}
        </h3>
        <div className="c-tabs__content__inner__slide__content__text">
          <p className="c-tabs__content__inner__slide__content__text__inner">
            {text}
          </p>
        </div>
        <p
          className="c-tabs__content__inner__slide__content__text__toggle"
          onClick={onClick}
        >
          {expanded ? "Read less" : "Read More"}
        </p>
      </div>
    </>
  );
};
