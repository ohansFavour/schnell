import React from "react";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/header/header";
import Map from "../../accessories/maps.png";
import GoogleMaps from "../../components/google-maps/google-maps";
import "./contactPage.css";

const ContactUsPage = ({ user }) => {
  return (
    <div className="contact-us-view">
      <Header user={user} />
      <div className="contact-us-main">
        <div className="contact-us-map">
          <img src={Map} />
        </div>
        <Animated
          className="contact-us-description"
          animationIn="shake"
          animationOut="fadeOut"
          isVisible={true}

        >
          <div className="row1">
            <h2>Contact Us</h2>
            <div className="marker"></div>
          </div>
          <div className="row2">
            <div className="each-contact-item">
              <div className="contact-item-icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <div className="contact-item-details">
                contact@schnell.network
              </div>
            </div>
            <div className="each-contact-item">
              <div className="contact-item-icon">
                <FontAwesomeIcon icon="phone" />
              </div>
              <div className="contact-item-details">
                +2348068239121,+2348137309112
              </div>
            </div>
            <div className="each-contact-item">
              <div className="contact-item-icon">
                <FontAwesomeIcon icon="address-book" />
              </div>
              <div className="contact-item-details">
                3, Taiwo Street, Ajala Bustop, Ijaiye, Lagos State.
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default ContactUsPage;
