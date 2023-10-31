import { useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SampleImg from "../../assets/images/Rectangle 31.jpg";
import CanvasImg from "../../assets/images/canvas.png";
import codeIcon from "../../assets/images/code.svg";
import DtwImg from "../../assets/images/dtw.png";
import githubIcon from "../../assets/images/github.svg";
import JlaImg from "../../assets/images/jla.png";
import FormImg from "../../assets/images/melearning.png";
import MusicImg from "../../assets/images/musicethly.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./TabPages.scss";

export const TabPages = () => {
  register();

  const tabsRef = useRef([
    {
      title: "Web Development",
      slides: [
        {
          image: MusicImg,
          title: "Musicethly",
          text: "A more ethical alternative to Spotify, Musicethly aims to provide users with a top notch music streaming experience, with the added ability to tip artists that boosts their earnings.",
          codeLink: "https://www.journeylatinamerica.com/",
          githubLink: "https://github.com/musicethly",
          label: "Personal",
        },
        {
          image: JlaImg,
          title: "Journey Latin America",
          text: "A more ethical alternative to Spotify, Musicethly aims to provide users with a top notch music streaming experience, with the added ability to tip artists that boosts their earnings. ",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: FormImg,
          title: "Form LMS",
          text: "Lorem Ipsum",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: CanvasImg,
          title: "Canvas itinerary generator",
          text: "Canvas Travel gives Tour Operators and other travel companies a travel itinerary generator platform to create and distribute personalised itineraries from the moment of enquiry to help convert bookings, retain customers involved in the planning process, through to delivering a fabulous user experience for the traveller when on your trip.",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: DtwImg,
          title: "Discover the world education",
          text: "Canvas Travel gives Tour Operators and other travel companies a travel itinerary generator platform to create and distribute personalised itineraries from the moment of enquiry to help convert bookings, retain customers involved in the planning process, through to delivering a fabulous user experience for the traveller when on your trip.",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          title: "Example",
          text: "Lorem Ipsum",
        },
      ],
    },
    {
      title: "UX UI",
      slides: [],
    },
    {
      title: "Design",
      slides: [],
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    renderSlides(index);
  };

  const renderTabs = () => {
    return tabsRef.current.map((tab, index) => (
      <div
        key={index}
        onClick={() => handleTabClick(index)}
        className={
          activeTab === index
            ? "c-tabs__bar__item c-tabs__bar__item--active"
            : "c-tabs__bar__item"
        }
      >
        {tab.title}
      </div>
    ));
  };

  const renderSlides = () => {
    if (tabsRef.current[activeTab].slides.length === 0) {
      return (
        <div className="c-tabs__content__inner__empty">
          <h2 className="c-tabs__content__inner__empty__title">
            No projects currently available
          </h2>
          <p className="c-tabs__content__inner__empty__text">
            But I'm working on adding more!
          </p>
          <div className="c-tabs__content__inner__empty__links">
            <a
              href="/"
              className="c-tabs__content__inner__empty__links__button"
            >
              Find more on my Github
            </a>
            <a
              href="/"
              className="c-tabs__content__inner__empty__links__button"
            >
              Get in touch!
            </a>
          </div>
        </div>
      );
    }

    return tabsRef.current[activeTab].slides.map((slide, index) => (
      <SwiperSlide key={index} className="c-tabs__content__inner__slide">
        <div className="c-tabs__content__inner__slide__image">
          <img src={slide.image} />
          {slide.label && (
            <p className="c-tabs__content__inner__slide__image__label">
              {slide.label}
            </p>
          )}
          <div className="c-tabs__content__inner__slide__image__links">
            {slide.codeLink && (
              <a href={slide.codeLink}>
                <img src={codeIcon} />
              </a>
            )}
            {slide.githubLink && (
              <a href={slide.githubLink}>
                <img src={githubIcon} />
              </a>
            )}
          </div>
        </div>
        <div className="c-tabs__content__inner__slide__content">
          <h3 className="c-tabs__content__inner__slide__content__title">
            {slide.title}
          </h3>
          <p className="c-tabs__content__inner__slide__content__text">
            {slide.text}
          </p>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="c-tabs">
      <div className="c-tabs__bar">{renderTabs()}</div>
      <div className="c-tabs__content">
        <Swiper
          slidesPerView={1}
          spaceBetween={14}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="c-tabs__content__inner"
        >
          {renderSlides()}
        </Swiper>
        <div className="c-tabs__highlight">
          <div className="c-tabs__highlight__image">
            <img src={SampleImg} />
          </div>
          <div className="c-tabs__highlight__content">
            <h2 className="c-tabs__highlight__content__title">
              Spotlight on: Musicethly
            </h2>
            <p className="c-tabs__highlight__content__tagline">
              The ethical music streaming platform
            </p>
            <p className="c-tabs__highlight__content__text">
              Lorem ipsum dolor sit amet consectetur. Ultricies nisl massa purus
              mattis. Neque ipsum vitae id morbi lacinia accumsan fames. Sed ac
              facilisis lorem praesent etiam nec adipiscing id massa. Diam at id
              cras eu non elit nisl. Ut mi quisque scelerisque morbi sagittis
              risus purus eu nunc.
            </p>
            <p className="c-tabs__highlight__content__text">
              Lorem ipsum dolor sit amet consectetur. Ultricies nisl massa purus
              mattis. Neque ipsum vitae id morbi lacinia accumsan fames. Sed ac
              facilisis lorem praesent etiam nec adipiscing id massa. Diam at id
              cras eu non elit nisl. Ut mi quisque scelerisque morbi sagittis
              risus purus eu nunc.
            </p>
            <div className="c-tabs__highlight__content__buttons">
              <a href="/" className="c-tabs__highlight__content__buttons__item">
                View project
              </a>
              <a href="/" className="c-tabs__highlight__content__buttons__item">
                View on github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
