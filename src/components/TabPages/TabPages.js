import { useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';

import SampleImg from '../../assets/images/Rectangle 31.jpg';
import codeIcon from '../../assets/images/code.svg';
import githubIcon from '../../assets/images/github.svg';

import './TabPages.scss';
import 'swiper/css';
import 'swiper/css/autoplay';

export const TabPages = () => {

  register();

  const tabsRef = useRef([
    { 
      title: 'Web Development',
      slides: [
        {
          title: 'Musicethly',
          text: 'A more ethical alternative to Spotify, Musicethly aims to provide users with a top notch music streaming experience, with the added ability to tip artists that boosts their earnings. '
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        }
      ],
    },
    { 
      title: 'UX UI',
      slides: [
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        }
      ],
    },
    { 
      title: 'Design',
      slides: [
        {
          title: 'Example',
          text: 'Lorem Ipsum wow' 
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        },
        {
          title: 'Example',
          text: 'Lorem Ipsum'
        }
      ],
    }
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    renderSlides(index);
  }

  const renderTabs = () => {
    return tabsRef.current.map((tab, index) => (
      <div
        key={index}
        onClick={()=> handleTabClick(index)}
        className={activeTab === index ? 'c-tabs__bar__item c-tabs__bar__item--active' : 'c-tabs__bar__item'}
      >
        {tab.title}
      </div>
    ));
  }

  const renderSlides = () => {
    return tabsRef.current[activeTab].slides.map((slide, index) => (
      <swiper-slide key={index} className="c-tabs__content__inner__slide">
                <div className="c-tabs__content__inner__slide__image">
                  <img src={SampleImg} />
                  <div className="c-tabs__content__inner__slide__image__links">
                    <a href="/">
                      <img src={codeIcon} />
                    </a>
                    <a href="/">
                      <img src={githubIcon} />
                    </a>
                  </div>
                </div>
                <div className="c-tabs__content__inner__slide__content">
                  <h3 className="c-tabs__content__inner__slide__content__title">{ slide.title }</h3>
                  <p className="c-tabs__content__inner__slide__content__text">{ slide.text }</p>
                </div>
            </swiper-slide>
    ));
  }

  return (
    <div className="c-tabs">
      <div className="c-tabs__bar">
        {renderTabs()}
      </div>
      <div className="c-tabs__content">
        {/* {tabsRef.current[activeTab].content} */}
        <swiper-container 
        space-between="14"
        autoplay="true"
        autoplay-delay="5000"
        slides-per-view="4"
        className="c-tabs__content__inner">
          {renderSlides()}
        </swiper-container >
        <div className="c-tabs__highlight">
          <div className="c-tabs__highlight__image">
            <img src={SampleImg} />
          </div>
          <div className="c-tabs__highlight__content">
            <h2 className="c-tabs__highlight__content__title">Spotlight on: Musicethly</h2>
            <p className="c-tabs__highlight__content__tagline">The ethical music streaming platform</p>
            <p className="c-tabs__highlight__content__text">Lorem ipsum dolor sit amet consectetur. Ultricies nisl massa purus mattis. Neque ipsum vitae id morbi lacinia accumsan fames. Sed ac facilisis lorem praesent etiam nec adipiscing id massa. Diam at id cras eu non elit nisl. Ut mi quisque scelerisque morbi sagittis risus purus eu nunc.</p>
            <p className="c-tabs__highlight__content__text">Lorem ipsum dolor sit amet consectetur. Ultricies nisl massa purus mattis. Neque ipsum vitae id morbi lacinia accumsan fames. Sed ac facilisis lorem praesent etiam nec adipiscing id massa. Diam at id cras eu non elit nisl. Ut mi quisque scelerisque morbi sagittis risus purus eu nunc.</p>
            <div className="c-tabs__highlight__content__buttons">
              <a href="/" className="c-tabs__highlight__content__buttons__item">View project</a>
              <a href="/" className="c-tabs__highlight__content__buttons__item">View on github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
