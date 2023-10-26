import { register } from 'swiper/element/bundle';

import LogoGitHub from '../../assets/images/github-logo.png';
import LogoAdobe from '../../assets/images/adobe-logo.png';
import LogoCss from '../../assets/images/css-logo.png';
import LogoFigma from '../../assets/images/figma-logo.png';
import LogoHtml from '../../assets/images/html-logo.png';
import LogoJs from '../../assets/images/js-logo.png';
import LogoReact from '../../assets/images/react-logo.png';
import LogoSass from '../../assets/images/sass-logo.png';

import './index.scss';
import 'swiper/css';
import 'swiper/css/autoplay';

const LogoSlider = () => {

    register();

    return (
    <div className="c-logo-slider">
        <swiper-container 
        space-between="20"
        autoplay="true"
        autoplay-delay="5000"
        slides-per-view="4"
        className="c-logo-slider__inner">
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoReact } alt="logo" /> 
                React
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoGitHub } alt="logo" /> 
                Github
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoJs } alt="logo" /> 
                Javascript
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoSass } alt="logo" /> 
                SASS/SCSS
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoFigma } alt="logo" /> 
                Figma
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoAdobe } alt="logo" /> 
                Adobe Suite
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoHtml } alt="logo" /> 
                HTML5
            </swiper-slide>
            <swiper-slide className="c-logo-slider__inner__slide">
                <img src={ LogoCss } alt="logo" /> 
                CSS3
            </swiper-slide>
        </swiper-container >
        </div>
      
    )

    
}

  export default LogoSlider
