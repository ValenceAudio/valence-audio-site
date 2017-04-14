import React from "react";
import "./Portfolio.styl";

// Images
import mindTheGap from "../../image/mind-the-gap.png";
import protractorPodcast from "../../image/protractor-podcast.jpg";

// Component
import Client from "../Client/Client";

const Portfolio = () =>
  <section className="portfolio" id="portfolio">
      <div className="container-fluid portfolio-background-box">
        <div className="section-padding">

          {/* Header */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
              <hr className="primary" />
            </div>
          </div>

          {/* Client List */}
          <div className="row text-center">
            <Client image={mindTheGap} name="Mind the Gap">
              Lorem ipsum dolor sit.
            </Client>
            <Client image={protractorPodcast} name="Protractor Podcast">
              Lorem ipsum dolor sit.
            </Client>
            <Client image={mindTheGap} name="Another Podcast">
              Lorem ipsum dolor sit.
            </Client>
          </div>

        </div>
      </div>
  </section>;

export default Portfolio;
