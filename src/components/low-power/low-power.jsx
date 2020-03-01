import React from "react";

import { StyledContainer, StyledHeader, StyledContent } from "../styled-components/styled-schnell";
import "./lowpower.css";

const LowPower = () => {
  return(<StyledContainer className = "lowpowercontainer">
    <StyledHeader>Low Power</StyledHeader>
    <StyledContent>
      Forget how to replace batteries with a guaranteed battery life of 2 years.
    </StyledContent>
  </StyledContainer>);
};

export default LowPower;