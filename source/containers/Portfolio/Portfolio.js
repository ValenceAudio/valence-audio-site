import React from "react";
import "./Portfolio.styl";

// Images
import mindTheGap from "../../image/mind-the-gap.png";
import protractorPodcast from "../../image/protractor-podcast.jpg";

const Portfolio = () =>
  <section className="portfolio" id="portfolio">
      <div className="container-fluid portfolio-background-box">
        <div className="section-padding">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Portfolio</h2>
                  <hr className="primary" />
              </div>
          </div>
          <div className="row text-center">
              <div className="col-md-4">
                <img alt="Mind the Gap Logo" className="img-rounded portfolio-img" src={mindTheGap} />
                <h4 className="service-heading">Mind The Gap</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="col-md-4">
                <img alt="Protractor Podcast Logo" className="portfolio-img" src={protractorPodcast} />
                <h4 className="service-heading">Protractor Podcast</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="col-md-4">
                <img alt="Protractor Podcast Logo" className="img-circle portfolio-img" src={mindTheGap} />
                <h4 className="service-heading">Protractor Podcast</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
          </div>
        </div>
      </div>
  </section>;

export default Portfolio;
