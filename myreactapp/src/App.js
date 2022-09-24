import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Testmonial from "./Testmonial";
import Navbar from "./Navbar";

let App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testmonial" element={<Testmonial />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
