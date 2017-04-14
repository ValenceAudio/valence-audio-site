import React from "react";
import "./Header.styl";

// Components
import Navbar from "../Navbar/Navbar";

const Header = () => 
  <header className="Main__background-filter">
    <div className="background-box">
      <div className="intro-header">
        <Navbar />
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <div className="intro-heading">Record your podcast. We'll handle the rest.</div>
              <a href="#services">
                <button className="btn btn-primary" type="button">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>;

export default Header;
