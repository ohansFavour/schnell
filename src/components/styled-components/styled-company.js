import styled from "styled-components";



export const StyledCompanyContainer = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width:500px){
    width: 90vw;
  }
  @media screen and (max-height:639px){
    
    position: relative;
    top: -15px;
  }
`;

export const StyledHeader= styled.h1`
margin-bottom: 20px;
font-size: 50px;
@media screen and (max-width:500px){
    font-size: 20px;
  }
  @media screen and (max-height:639px){
    
    margin-bottom: 10px;
  }
`;

export const StyledDescription = styled.div`
font-size: 23px;
margin-bottom: 70px;
@media screen and (max-width:500px){
    font-size: 15px;
  }
  @media screen and (max-height:639px){
    margin-bottom: 10px;
  }
`;
export const StyledFoundersContainer = styled.div`
display:flex;
@media screen and (max-width:500px){
    flex-direction: column;
  }
`;
export const StyledFounders = styled.div`
display: flex;
margin-bottom:10px;
margin-right: 40px;
@media screen and (max-height:639px){
    margin-bottom:5px;
    margin-right: 10px;
  }
`;
export const StyledHeader2 = styled.h1`
font-size: 20px;
`;
export const StyledImage = styled.img`
border-radius: 50%;
width: 100px;
margin-right: 40px;
@media screen and (max-height:639px){
    
    margin-right: 10px;
  }
`;
export const StyledFounderDescription = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledName= styled.h4`

`;
export const StyledTitle = styled.h6`

`;