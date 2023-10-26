import React from 'react';
import { motion } from "framer-motion";

import './About.scss'

function About() {
  return (
    <motion.div className="c-about" initial={{ transform: "translateY(100%)" }} enter={{transform: "translateY(0)"}} exit={{opacity: 0}}>
        <div className="c-about__content">
            <h2 className="c-about__content__title"></h2>
            <p className="c-about__content__text"></p>
        </div>
        
    </motion.div>
  )
}

export default About