import { Route, Routes, useHistory, useLocation } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Projects from "./components/Projects/Projects";
import logo from "./logo.svg";

import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
