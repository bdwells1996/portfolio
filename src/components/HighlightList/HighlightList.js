import React from 'react';
import agencyImg from '../../assets/images/agency.svg';
import endImg from '../../assets/images/end-to-end.svg';
import teamImg from '../../assets/images/team-player.svg';
import mentorImg from '../../assets/images/mentoring.svg';

import './HighlightList.scss'

function HighlightList() {

  const highlights = [
    {
      text: 'Agency experience, this has led to a strong growth mindset and an adaptability that allows me to go beyond the expectations of a Front End Developer.',
      title: '5+ Years',
      illustration: agencyImg,
      id: 0,
    },
    {
      text: 'Agency experience, this has led to a strong growth mindset and an adaptability that allows me to go beyond the expectations of a Front End Developer.',
      title: 'End to end',
      illustration: endImg,
      id: 1,
    },
    {
      text: 'Agency experience, this has led to a strong growth mindset and an adaptability that allows me to go beyond the expectations of a Front End Developer.',
      title: 'Team player',
      illustration: teamImg,
      id: 2,
    },
    {
      text: 'Agency experience, this has led to a strong growth mindset and an adaptability that allows me to go beyond the expectations of a Front End Developer.',
      title: 'Mentoring',
      illustration: mentorImg,
      id: 3,
    }
  ]
  return (
    <ul className="c-about__highlights__list">
      {highlights.map((highlight) => {
        return (
          <li className="c-about__highlights__list__item" key={highlight.id}>
            <img className="c-about__highlights__list__item__image" src={ highlight.illustration } />
            <h3 className="c-about__highlights__list__item__title">{ highlight.title }</h3>
            <p className="c-about__highlights__list__item__text">{highlight.text}</p>
          </li>
        );
      })}
    </ul>
  )
}

export default HighlightList