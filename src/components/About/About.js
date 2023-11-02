import { motion } from "framer-motion";
import React from "react";

import HighlightList from "../HighlightList/HighlightList";
import "./About.scss";

function About() {
  return (
    <motion.div
      className="c-about o-wrapper"
      initial={{
        y: "100%",
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 140,
        damping: 20,
      }}
      exit={{ y: "100%", opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="c-about__content">
        <h1 className="c-about__content__title">
          A little bit <span>about me</span>
        </h1>
        <div className="c-about__content__text">
          <p className="c-about__content__text__inner">
            As a highly motivated Front-end developer in the eLearning industry,
            my career journey has honed my proficiency in HTML, CSS, Javascript,
            as well as React/Vue.JS, and design tools like Figma and the Adobe
            suite.
          </p>
          <p className="c-about__content__text__inner">
            Moreover, I've cultivated strong communication and consultancy
            skills, enabling me to not only meet but exceed client expectations.
            This has led to the establishment of enduring partnerships, and I
            take pride in overseeing projects from initial consultation through
            to seamless delivery.
          </p>
        </div>
      </div>
      <div className="c-about__highlights">
        <h2 className="c-about__highlights__title">Why work with me?</h2>
        <HighlightList />
      </div>
    </motion.div>
  );
}

export default About;
