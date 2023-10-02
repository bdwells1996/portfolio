import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Nav = () => (
  <div className="c-nav">

    <Link className="c-nav__logo" to="/">
      <img src={ Logo } alt="logo" /> 
    </Link>

    <nav className="c-nav__content">

      <ul className="c-nav__content__subnav">
        <li className="c-nav__content__subnav__item">
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="c-nav__content__subnav__item">
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>

      <NavLink className="c-nav__content__item" exact="true" activeClassName="active" to="/">
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
)

export default Nav