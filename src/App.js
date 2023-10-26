import logo from './logo.svg';
import './App.scss';
import { Routes, Route, useLocation, useHistory } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About/About';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
