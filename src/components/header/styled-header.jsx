import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const option = css`
  padding: 0px 15px;
  cursor: pointer;
  text-decoration: none;
  color:${(props)=> props.color? props.color : "white"};
  font-size: 20px;
  &:hover {
    color:${(props)=> props.color? props.color : "white"};
  }
  @media screen and (max-width:726px){
    display: none;
  }
  
`;

export const StyledOptionsContainer = styled.div`
  
width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:726px){
    justify-content: flex-end;
  }
  
`;
export const StyledAnchorLink = styled(Link)`
  text-decoration: none;
  color:${(props)=> props.color? props.color : "white"};
  &:hover {
    color:${(props)=> props.color? props.color : "white"};
  }
`;

export const StyledHeaderContainer = styled.div`
position: absolute;
top: 5px; 
height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  color:${(props)=> props.color? props.color : "white"};
  padding: 15px 10px;
`;

export const StyledSpanOption = styled.span`
  ${option}
`;
export const StyledLinkOption = styled(Link)`
  ${option}
`;
export const StyledHeaderImage = styled.img`
  height: 60px;
  width: 60px;
  cursor: pointer;
  position: relative;
  top: -7px;
  border-radius: 50%;
  margin-right: 7px;
`;

export const StyledLogoAndName = styled.div`
  display: flex;
  cursor: pointer;
`;

export const StyledBrandName = styled.div`
  font-size: 30px;
 
`;

export const StyledMoreOptions = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width:726px){
    display:none;
  }
`;

export const StyledHamburger = styled.div`
display:none;
@media screen and (max-width:726px){
  display:inline;
  margin-right:30px;
}
`;
export const StyledNavLink = styled(NavLink)`

color:${(props)=> props.color? props.color : "white"}

`;