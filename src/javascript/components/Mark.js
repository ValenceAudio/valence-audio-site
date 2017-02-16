import React from 'react'
import Navbar from './Navbar'
import cssify from 'cssify'
import '../../scss/components/Mark.scss'

cssify.byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')

const Mark = (props) => {
  return (
    <div className="container-fluid">
      <div className="intro-header">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-text">
                <div className="intro-lead-in">Welcome to Valence Audio!</div>
                <div className="intro-heading">CHECKOUT OUR PLATFORM</div>
                  <button type="button" className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="Mark__services">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Services</h2>
                      <hr className="primary"/>
                  </div>
              </div>
              <div className="row text-center">
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x service-icon"></i>
                          <i className="fa fa-podcast fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Editing</h4>
                      <p className="text-muted">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x service-icon"></i>
                          <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Transcription</h4>
                      <p className="text-muted">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x service-icon"></i>
                          <i className="fa fa-cloud-upload fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Upload</h4>
                      <p className="text-muted">Lorem ipsum dolor sit amet</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Contact Us</h2>
                      <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <form name="sentMessage" id="contactForm" novalidate>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name."/>
                                      <p className="help-block text-danger"></p>
                                  </div>
                                  <div className="form-group">
                                      <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address."/>
                                      <p className="help-block text-danger"></p>
                                  </div>
                                  <div className="form-group">
                                      <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="clearfix"></div>
                              <div className="col-lg-12 text-center">
                                  <div id="success"></div>
                                  <button type="submit" className="btn btn-xl">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>

    </div>

  )
}

export default Mark;