import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  // const swiperEl = document.querySelector("swiper-container");

  // const params = {
  //   // Add your Swiper parameters here
  //   spaceBetween: 20,
  //   slidesPerView: 4,
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //     },
  //     375: {
  //       slidesPerView: 3,
  //     },
  //     560: {
  //       slidesPerView: 4,
  //     },
  //   },
  // };

  // Object.assign(swiperEl, params);

  return (
    <div className="c-logo-slider">
      <Swiper
        slidesPerView={2}
        spaceBetween={14}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          410: {
            slidesPerView: 3,
          },
          570: {
            slidesPerView: 4,
          },
        }}
        className="c-logo-slider__inner"
      >
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoReact} alt="logo" />
          React
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoGitHub} alt="logo" />
          Github
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoJs} alt="logo" />
          Javascript
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoSass} alt="logo" />
          SASS/SCSS
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoFigma} alt="logo" />
          Figma
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoAdobe} alt="logo" />
          Adobe Suite
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoHtml} alt="logo" />
          HTML5
        </SwiperSlide>
        <SwiperSlide className="c-logo-slider__inner__slide">
          <img src={LogoCss} alt="logo" />
          CSS3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LogoSlider;
