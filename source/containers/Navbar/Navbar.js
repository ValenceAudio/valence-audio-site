import React from "react";
import navbarLogo from "../../image/logo-lettering-256.png";
import "./Navbar.styl";

const Navbar = () =>
  <nav className="navbar-toggleable-md navbar-inverse navbar-custom navbar">
    <div className="container">
      
      <button
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler navbar-toggler-right"
        data-target="#navbarNav"
        data-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="#app">
        <img alt="Valence Audio Logo" className="logo" src={navbarLogo} />
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
      </div>
    </div>
  </nav>;

export default Navbar;
