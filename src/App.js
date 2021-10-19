import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import FirstSection from "./components.js/FirstSection.js";
import SecondSection from "./components.js/SecondSection.js";
import ThirdSection from "./components.js/ThirdSection.js";
import FourthSection from "./components.js/FourthSection.js";

import Testimonial from "./components.js/Testimonial.js";
import Skills from "./components.js/Skills.js";

import NavbarParent from "./components.js/NavbarParent";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <NavbarParent />
        <section className="first-sections">
          <FirstSection />
        </section>
        <section className="second-section">
          <SecondSection />
        </section>
        <section className="skill-section">
          <Skills />
        </section>
        <section className="third-section">
          <ThirdSection />
        </section>
        <section className="testimony-section">
          <Testimonial />
        </section>
        <section className="fourth-section">
          <FourthSection />
        </section>
      </div>
    );
  }
}

export default App;
