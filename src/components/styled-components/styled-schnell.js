import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-rows:
    100px
    1fr;
  grid-template-areas:
    "header"
    "content";

  @media screen and (max-width:500px){
    grid-template-rows:
    45px
    1fr;
  }
  @media screen and (min-width:500px){
    &:hover {
      transform: scale(1.03);
    }
    transition: all .9s;
  }
`;

export const StyledHeader = styled.div`
  grid-area: header;
  font-size: 70px;
  margin-bottom: 20px;
  @media screen and (max-width:500px){
    font-size: 40px;
  margin-bottom: 0px;
  }
  @media screen and (max-width:400px){
    font-size: 20px;
  margin-bottom: 0px;
  }
`;

export const StyledContent = styled.div`
  grid-area: content;
  font-size: 25px;
  @media screen and (max-width:500px){
    font-size: 15px;
  
  }
`;
