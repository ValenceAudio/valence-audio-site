import React from "react";
import "./App.styl";

// Components
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";

const App = () =>
  <div className="container-fluid app" id="app">
    <Header />
    <Services />
    <Portfolio />
    <Contact />
  </div>;

export default App;
