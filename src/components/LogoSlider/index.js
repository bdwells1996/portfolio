import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';

import './index.scss';
import 'swiper/css';
import 'swiper/css/autoplay';

const LogoSlider = () => {


    return (
    <div className="c-logo-slider">
        <Swiper 
        modules={[ Autoplay ]}
        spaceBetween={40}
        autoPlay={{
            delay: 2000
        }}
        slidesPerView={4}
        className="c-logo-slider__inner">
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 1</SwiperSlide>
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 2</SwiperSlide>
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 3</SwiperSlide>
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 4</SwiperSlide>
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 5</SwiperSlide>
            <SwiperSlide className="c-logo-slider__inner__slide">Slide 6</SwiperSlide>
        </Swiper>
        </div>
      
    )

    
}

  export default LogoSlider
