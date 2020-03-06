import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Ohanekwu from "../../accessories/ohanekwu.jpg";
import Ajala from "../../accessories/ajala.jpg";
import Header from "../../components/header/header";
import "./companyPage.css";

const CompanyPage = ({ user }) => {
  return (
    <div className="company-container">
      <div className="section1"></div>
      <div className="about-us-container">
        <div className="about-us-content-container">
          <div className="about-us-header">About Us</div>
          <div className="about-us-content">
            Schnell is a public LoRaWAN operator in Africa with a vision to
            facilitate the large scale deployment of IoT solutions to foster
            development within the continent.
            <br /> We build the infrastructure to connect your solutions to the
            internet and let you focus better on your IoT use case. Our joy is
            to see you get to the market as quick as possible at the minimum
            cost possible.
          </div>
        </div>
      </div>
      <div className="team-container">
        <div className="team">
          <h1 className="team-header">Team</h1>
          <div className="team-party">
            <img className="team-picture" src={Ohanekwu} />
            <div className="team-description">
              <h3>Ohanekwu Favour</h3>
              <h6>Co-founder & Software Engineer</h6>
              <p>
                Since graduating from Obafemi Awolowo University with a degree
                in Electronic and Electrical Engineering, Favour has been
                working as a Software Engineer at Schnell Innovations.{" "}
              </p>
              <div className="team-social">
                <a href="https://twitter.com/ohans_favor" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} color="rgb(76,139,245)" />
                </a>
                <a
                  href="linkedin.com/in/favour-ohanekwu-1a470014b/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="rgb(76,139,245)" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-party">
            <img className="team-picture" src={Ajala} />
            <div className="team-description">
              <h3>Ajala Oladapo</h3>
              <h6>Co-founder & Hardware Engineer</h6>
              <p>
                After working as an hardware Engineer for several IoT companies,
                Oladapo has decided to take it to a new level at Schnell Innovations.
              </p>
              <div className="team-social">
                <a href="https://twitter.com/Drapze" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} color="rgb(76,139,245)" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oladapo-ajala-elect-engineer/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="rgb(76,139,245)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header user={user} />
    </div>
  );
};

export default CompanyPage;
