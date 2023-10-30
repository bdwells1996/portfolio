import React from 'react';
import { motion } from "framer-motion";

import './About.scss'
import HighlightList from '../HighlightList/HighlightList';

function About() {
  return (
    <motion.div className="c-about o-wrapper" exit={{opacity: 0}}>
        <div className="c-about__content">
            <h1 className="c-about__content__title">A little bit <span>about me</span></h1>
            <div className="c-about__content__text">
                <p className="c-about__content__text__inner">Highly motivated Front-end developer working in the eLearning industry. My career thus far has  developed my skills working with HTML, CSS, Javascript, React/Vue.JS and Figma/the Adobe suite.</p>
                <p className="c-about__content__text__inner">In addition to this  I have also developed excellent communication/consultancy skills that have allowed me to go above and beyond, fostering long term partnerships with clients whilst delivering an end-to-end development pipeline from consultation to delivery.</p>
            </div>
        </div>
        <div className="c-about__highlights">
            <h2 className="c-about__highlights__title">Why work with me?</h2>
            <HighlightList />
        </div>
    </motion.div>
  )
}

export default About