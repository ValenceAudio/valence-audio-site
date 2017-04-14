import React from "react";
import "./Contact.styl";

// Components
import TextInput from "../TextInput/TextInput";

const Contact = () =>
  <section className="section-padding contact" id="contact">
    <div className="container">
      
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Contact Us</h2>
          <hr className="primary" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">

          <form
            action="https://formspree.io/mark@valence.audio/"
            id="contactForm"
            method="POST"
            name="sentMessage" 
            noValidate
          >
            <div className="row">
              <div className="col-md-6">
                <TextInput name="Name" required />
                <TextInput name="Email" nameOverride="_replyto" required />
                <TextInput name="Phone" required />
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    data-validation-required-message="Please enter a message."
                    id="message"
                    placeholder="Your Message *"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <input className="btn btn-xl submit-button" type="submit" value="Send Message" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>;

export default Contact;
