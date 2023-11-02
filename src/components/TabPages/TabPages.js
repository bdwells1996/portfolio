import { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CanvasImg from "../../assets/images/canvas.png";
import CanvasHighlight from "../../assets/images/canvashighlight.jpg";
import codeIcon from "../../assets/images/code.svg";
import DtwImg from "../../assets/images/dtw.png";
import githubIcon from "../../assets/images/github.svg";
import GuykatImg from "../../assets/images/guykat.png";
import JlaImg from "../../assets/images/jla.png";
import FormImg from "../../assets/images/melearning.png";
import MusicImg from "../../assets/images/musicethly.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { SliderSlide } from "../SliderSlide/SliderSlide";
import "./TabPages.scss";

export const TabPages = () => {
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
          text: "Based on WordPress and using elements of React for aspects of the site's functionality, Journey Latin America saw me recreate XD designs quickly and to a pixel perfect standard. I also developed an SVG map which toggled it's state based on which area of the map was clicked.",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: FormImg,
          title: "Form LMS",
          text: "Based on Vue, Form LMS aims to provide a customisable and sleek learning experience for admins and learners. I participated in the entire development lifecycle of new features, from providing feedback to the UX team to collaborating with the other Front End Developer to decide on solutions and carry out code reviews.",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: CanvasImg,
          title: "Canvas itinerary generator",
          text: "Built with React, Canvas Travel gives Tour Operators and other travel companies a travel itinerary generator platform to create and distribute personalised itineraries from the moment of enquiry to help convert bookings, retain customers involved in the planning process, through to delivering a fabulous user experience for the traveller when on your trip.",
          codeLink: "https://www.journeylatinamerica.com/",
          label: "Professional",
        },
        {
          image: DtwImg,
          title: "Discover the world education",
          text: "Canvas Travel gives Tour Operators and other travel companies a travel itinerary generator platform to create and distribute personalised itineraries from the moment of enquiry to help convert bookings, retain customers involved in the planning process, through to delivering a fabulous user experience for the traveller when on your trip.",
          codeLink: "https://www.discover-the-world.com/",
          label: "Professional",
        },
        {
          image: GuykatImg,
          title: "GuyKat",
          text: "I built the company website using the WordPress CMS whilst also working on multiple client projects. The GuyKat website showcases some of the big names and brands that I worked with such as Loreal and Amnesty International.",
          codeLink: "https://www.guykat.com/",
          label: "Professional",
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
      <SwiperSlide key={index}>
        <SliderSlide
          image={slide.image}
          label={slide.label}
          codeLink={slide.codeLink}
          codeIcon={codeIcon}
          githubLink={slide.githubLink}
          githubIcon={githubIcon}
          title={slide.title}
          text={slide.text}
          expanded={expandedStates[index]}
          onClick={() => toggleExpand(index)}
        />
      </SwiperSlide>
    ));
  };

  const [expandedStates, setExpandedStates] = useState(
    tabsRef.current[activeTab].slides.map(() => false)
  );

  const toggleExpand = (index) => {
    setExpandedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="c-tabs">
      <div className="c-tabs__bar">{renderTabs()}</div>
      <div className="c-tabs__content">
        <Swiper
          slidesPerView={1}
          spaceBetween={14}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
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
            <img src={CanvasHighlight} />
          </div>
          <div className="c-tabs__highlight__content">
            <h2 className="c-tabs__highlight__content__title">
              Spotlight on: Canvas Travel
            </h2>
            <p className="c-tabs__highlight__content__tagline">
              A unique innovation for the travel and events industries
            </p>
            <p className="c-tabs__highlight__content__text">
              Canvas itineraries and event agendas are personalised microsites
              that are easily accessible, work across all devices, but behave
              like apps on mobile. Canvas gets your agendas and itineraries into
              customers’ hands quicker, giving them a better experience,
              improving conversion and removing the need for third-party apps or
              emailing documents.
            </p>
            <p className="c-tabs__highlight__content__text">
              Built with React and interacting with a Laravel backend, Canvas
              Travel aims to provide bespoke itinerary and agendas for holidays.
              The admin dashboard stored a variety of data from user
              information, workspaces and events, I assisted on building out
              features and improved existing functionality. Although there isn't
              a live demo I'm proud of the work I carried out here.
            </p>
            <div className="c-tabs__highlight__content__buttons">
              <a href="/" className="c-tabs__highlight__content__buttons__item">
                Find out more
              </a>
              <a
                href="/"
                className="c-tabs__highlight__content__buttons__item c-tabs__highlight__content__buttons__item--disabled"
              >
                View on github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
