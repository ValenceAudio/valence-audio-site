import React from "react";
import "./Header.styl";

// Components
import Navbar from "../Navbar/Navbar";

const Header = () => 
  <header className="header">
    <div className="background-box">
        
      <Navbar />

      <div className="row">
        <div className="col-lg-12 intro-text">

          {/* Subtitle */}
          <div className="intro-heading">
            Record your podcast. We'll handle the rest.
          </div>

          {/* Learn More Button */}
          <a href="#services">
            <button className="btn-yellow" type="button">
              Learn More
            </button>
          </a>

        </div>
      </div>

    </div>
  </header>;

export default Header;
