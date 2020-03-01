import React from "react";

import {
  StyledCompanyContainer,
  StyledDescription,
  StyledFounderDescription,
  StyledFounders,
  StyledHeader,
  StyledImage,
  StyledName,
  StyledFoundersContainer,
  StyledTitle,
  StyledHeader2
} from "../../components/styled-components/styled-company";
import Ohanekwu from "../../accessories/ohanekwu.jpg";
import Ajala from "../../accessories/ajala.jpg";
import Header from "../../components/header/header";
import "./companyPage.css";

const CompanyPage = ({ user }) => {
  return (
    <div className="company-container">
      <Header user={user} />
      <div className="company-section">
        <div className="company-view">
          <StyledCompanyContainer>
            <StyledHeader>Company</StyledHeader>
            <StyledDescription>
              Schnell is a public LoRaWAN operator in Africa with a vision to
              facilitate the large scale deployment of IoT solutions to foster
              development within the continent. We build the infrastructure to
              connect your solutions to the internet and let you focus better on
              your IoT use case. Our joy is to see you get to the market as
              quick as possible at the minimum cost possible.
            </StyledDescription>
            <StyledHeader>Team</StyledHeader>
            <StyledFoundersContainer>
              <StyledFounders>
                <StyledImage src={Ohanekwu} alt="ohanekwu" />
                <StyledFounderDescription>
                  <StyledName>Ohanekwu Favour E.</StyledName>
                  <StyledTitle>Software Engineer</StyledTitle>
                </StyledFounderDescription>
              </StyledFounders>
              <StyledFounders>
                <StyledImage src={Ajala} alt="oladapo" />
                <StyledFounderDescription>
                  <StyledName>Ajala Oladapo</StyledName>
                  <StyledTitle>Hardware Engineer</StyledTitle>
                </StyledFounderDescription>
              </StyledFounders>
            </StyledFoundersContainer>
          </StyledCompanyContainer>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
