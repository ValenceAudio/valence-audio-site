import React from "react";
import "./Services.styl";

const Services = () =>
  <section className="services" id="services">
    <div className="container-fluid">
      <div className="section-padding">
        
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">What We Do</h2>
                <hr className="primary" />
            </div>
        </div>

        <div className="row text-center icon-padding">
          <div className="col-md-2" />
          <div className="col-md-2">
            <h2> Record Your Podcast </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
          </div>
          <div className="col-md-4">
              <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x service-icon"></i>
                  <i className="fa fa-microphone fa-stack-1x fa-inverse"></i>
              </span>
          </div>
        </div>

        <div className="row text-center icon-padding">
          <div className="col-md-4" />
          <div className="col-md-4">
              <span className="fa-stack fa-4x">
                  <i className="fa fa-arrow-down fa-stack-1x fa-inverse service-icon"></i>
              </span>
          </div>
        </div>

        <div className="row text-center icon-padding">
          <div className="col-md-4" />
          <div className="col-md-4">
              <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x service-icon"></i>
                  <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
          </div>
          <div className="col-md-2">
            <h2> Record Your Podcast </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
          </div>
          <div className="col-md-2" />
        </div>
        <div className="row text-center icon-padding">
          <div className="col-md-4" />
          <div className="col-md-4">
              <span className="fa-stack fa-4x">
                  <i className="fa fa-arrow-down fa-stack-1x fa-inverse service-icon"></i>
              </span>
          </div>
        </div>
        <div className="row text-center icon-padding">
          <div className="col-md-2" />
          <div className="col-md-2">
            <h2> Record Your Podcast </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
          </div>
          <div className="col-md-4">
              <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x service-icon"></i>
                  <i className="fa fa-podcast fa-stack-1x fa-inverse"></i>
              </span>
          </div>
        </div>
      </div>
    </div>
  </section>;

export default Services;
