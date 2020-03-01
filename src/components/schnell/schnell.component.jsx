import React from "react";

import { StyledContainer, StyledHeader, StyledContent } from "../styled-components/styled-schnell";

const Schnell = () => {
  return (<StyledContainer>
    <StyledHeader>SCHNELL</StyledHeader>
    <StyledContent>
      Connect your things to the internet over schnell’s public LoRaWAN network.<br/>
      We provide the infrastructure to support your solution, allowing you to
      focus more on your use case.
    </StyledContent>
  </StyledContainer>);
};

export default Schnell;
