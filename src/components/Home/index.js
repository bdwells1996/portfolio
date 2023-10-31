import { motion } from "framer-motion";
import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/me.jpg";
import LogoSlider from "../LogoSlider";
import "./index.scss";

const Home = () => {
  return (
    <motion.div
      enter={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="o-wrapper c-hero"
    >
      <div className="c-hero__content">
        <h1 className="c-hero__content__header">
          <span class="u-weight--semibold u-color--primary">Hi,</span> I'm Ben
        </h1>
        <h2 className="c-hero__content__subheader">
          A Front End Developer based in{" "}
          <span className="u-weight--semibold u-color--primary">Brighton,</span>{" "}
          working with:
        </h2>
        <LogoSlider />
      </div>
      <div className="c-hero__img">
        <img src={HeroImg} className="u-object-fit" alt="me" />
        <div className="c-hero__img__underlay"></div>
      </div>
      <Link className="c-hero__arrow" to="/about">
        <BiChevronUp />
      </Link>
    </motion.div>
  );
};

export default Home;
