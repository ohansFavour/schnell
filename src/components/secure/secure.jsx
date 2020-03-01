import React from "react";

import {
  StyledContainer,
  StyledHeader,
  StyledContent
} from "../styled-components/styled-schnell";

const Secure = () => {
  return (<StyledContainer>
    <StyledHeader>{`Secure & Reliable  `}</StyledHeader>
    <StyledContent>
      Ensure your data is safe by using our end-to-end encryption. We also offer
      a <br/>24/7 availability for our networks.
    </StyledContent>
  </StyledContainer>);
};

export default Secure;
