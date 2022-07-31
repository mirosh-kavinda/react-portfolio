import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Projects from "./pages/Projects/index";
import ReactLoading from "react-loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div class="d-flex justify-content-center align-self-center">
           <ReactLoading  height={400} width={200}class="d-flex align-self-center" type={"cylon"} color="#fff" />
        </div>
        
      ) : (
        <div>
          <Navbar />
          <div className="App ">
            <Routes>
              <Route path="/" id="home" exact element={<Home />}></Route>
              <Route path="/about" id="about" element={<About />}></Route>
              <Route path="/contact" id="contact" element={<Contact />}></Route>
              <Route
                path="/projects"
                id="projects"
                element={<Projects />}
              ></Route>
            </Routes>
          </div>
          <Footer className="footer" />
        </div>
      )}
    </div>
  );
}
