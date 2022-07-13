import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Projects from "./pages/Projects/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route exact path="/" id="home" element={<Home />} />
          <Route path="/about" id="about" element={<About />} />
          <Route path="/contact" id="contact" element={<Contact />} />
          <Route path="/projects" id="projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
