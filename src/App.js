import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Myskills from "./Components/Myskills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contactme from "./Components/Contactme";
import Pagenotfound from "./Components/Pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/contactme" element={<Contactme />} />
          <Route caseSensitive path="/"  element={<><Home />
          <About />
          <Myskills />
          <Projects />
          <Contact />
          </>}/>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
