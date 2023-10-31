import { TabPages } from '../TabPages/TabPages';
import './Projects.scss';
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <motion.div className="c-projects o-wrapper" enter={{ opacity: 1 }} exit={{opacity: 0}}>
      <h2 className="c-projects__title">Example Projects</h2>
      <div className="c-projects__content">
        <TabPages />
      </div>
    </motion.div>
  )
}

export default Projects
