import { useEffect } from "react";
import { register } from "swiper/element/bundle";

import LogoAdobe from "../../assets/images/adobe-logo.png";
import LogoCss from "../../assets/images/css-logo.png";
import LogoFigma from "../../assets/images/figma-logo.png";
import LogoGitHub from "../../assets/images/github-logo.png";
import LogoHtml from "../../assets/images/html-logo.png";
import LogoJs from "../../assets/images/js-logo.png";
import LogoReact from "../../assets/images/react-logo.png";
import LogoSass from "../../assets/images/sass-logo.png";

import "swiper/css";
import "swiper/css/autoplay";
import "./index.scss";

const LogoSlider = () => {
  useEffect(() => {
    // This code will run after the component mounts

    // Initialize Swiper
    register();

    const swiperEl = document.querySelector("swiper-container");

    const params = {
      // Add your Swiper parameters here
      spaceBetween: 20,
      slidesPerView: 4,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 3,
        },
        560: {
          slidesPerView: 4,
        },
      },
    };

    Object.assign(swiperEl, params);

    swiperEl.initialize();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="c-logo-slider">
      <swiper-container
        init="false"
        space-between="20"
        autoplay="true"
        autoplay-delay="5000"
        slides-per-view="4"
        className="c-logo-slider__inner"
      >
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoReact} alt="logo" />
          React
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoGitHub} alt="logo" />
          Github
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoJs} alt="logo" />
          Javascript
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoSass} alt="logo" />
          SASS/SCSS
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoFigma} alt="logo" />
          Figma
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoAdobe} alt="logo" />
          Adobe Suite
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoHtml} alt="logo" />
          HTML5
        </swiper-slide>
        <swiper-slide className="c-logo-slider__inner__slide">
          <img src={LogoCss} alt="logo" />
          CSS3
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default LogoSlider;
