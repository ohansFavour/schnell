import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/header/header";
import {
  StyledContactContainer,
  StyledIcon,
  StyledItem,
  StyledValue,
  StyledHeading
} from "../../components/styled-components/styled-contact-us";
import "./contactPage.css";

const ContactUsPage = ({ user }) => {
  return (
    <div className="contact-page-view">
        
      <Header user={user} />
      <div className="contact-section">
      <StyledContactContainer>
        <StyledHeading>Contact Us</StyledHeading>
      <StyledItem>
          <StyledIcon>
            <FontAwesomeIcon icon="envelope" />
          </StyledIcon>
          <StyledValue>contact@schnell.network</StyledValue>
        </StyledItem>
        <StyledItem>
         
          <StyledIcon> <FontAwesomeIcon icon="phone" className="phone-icon" /></StyledIcon>
          <StyledValue>
              08068239121, 08137309112
              </StyledValue>
        </StyledItem>
        <StyledItem>
          <StyledIcon>
            <FontAwesomeIcon icon="address-book" />
          </StyledIcon>
          <StyledValue>3, Taiwo Street, Ajala bus stop, ijaye,Lagos State, Nigeria.
          </StyledValue>
        </StyledItem>
        
      </StyledContactContainer>
    </div>
    </div>
  );
};

export default ContactUsPage;
