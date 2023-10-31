import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCommentAlt,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import "./index.scss";

const Nav = () => (
  <div className="c-nav">
    <Link className="c-nav__logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>

    <MobileMenu />

    <nav className="c-nav__content">
      <ul className="c-nav__content__subnav">
        <li className="c-nav__content__subnav__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ben-wells-415013189/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="c-nav__content__subnav__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bdwells1996"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div className="c-nav__content__highlight"></div>
      <NavLink
        className="c-nav__content__item"
        exact="true"
        activeClassName="active"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} />
        Home
      </NavLink>
      <NavLink className="c-nav__content__item" exact="true" to="/about">
        <FontAwesomeIcon icon={faUser} />
        About me
      </NavLink>
      <NavLink className="c-nav__content__item" exact="true" to="/projects">
        <FontAwesomeIcon icon={faCode} />
        Projects
      </NavLink>
      <NavLink className="c-nav__content__item" exact="true" to="/contact">
        <FontAwesomeIcon icon={faCommentAlt} />
        Contact
      </NavLink>
    </nav>
  </div>
);

export default React.memo(Nav);
