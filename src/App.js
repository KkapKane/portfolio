import BottomBar from "./components/BottomBar";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/Projects";

const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <NavBar />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<HomePage />} />

          <Route
            path='/contact'
            key={location.pathname}
            element={<Contact />}
          />
          <Route
            path='/projects'
            key={location.pathname}
            element={<Projects />}
          />
        </Routes>
      </AnimatePresence>
      <BottomBar />
    </div>
  );
};

export default App;
