import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FirstSection from "./components.js/FirstSection.js";
import SecondSection from "./components.js/SecondSection.js";
import ThirdSection from "./components.js/ThirdSection.js";
import FourthSection from "./components.js/FourthSection.js";

import Testimonial from "./components.js/Testimonial.js";
import Skills from "./components.js/Skills.js";

import NavbarParent from "./components.js/NavbarParent";

import Blogs from "./components.js/blog/blog";
import SinglePost from "./components.js/blog/singlePost";
import CreatePost from "./components.js/blog/createPost";

const App = () => {
  return (
    <Router>
     
        <div style={{ height: "100%" }}>
          <NavbarParent />
          <Switch>
          <Route exact path="/">
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
          </Route>
        

        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/blog/create">
          <CreatePost />
        </Route>
        <Route exact path="/post/:postId">
          <SinglePost />
        </Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
