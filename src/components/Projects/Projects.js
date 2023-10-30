import { TabPages } from '../TabPages/TabPages';
import './Projects.scss';

const Projects = () => {

  return (
    <div className="c-projects o-wrapper">
      <h2 className="c-projects__title">Example Projects</h2>
      <div className="c-projects__content">
        <TabPages />
      </div>
    </div>
  )
}

export default Projects