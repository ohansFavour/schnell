import styled from "styled-components";



export const StyledUseCase = styled.div`

width: 80vw;

    display: flex;
justify-content: space-around;
align-items: center;
 
`;
export const StyledHeader= styled.h3`
@media screen and (max-width:500px){
    font-size: 15px;
      }
`;

export const StyledImage = styled.img`
width: 300px;
height: 300px;
transition: 0.7s;
&:hover{
    transform: scale(1.2);
}
@media screen and (max-width:500px){
width: 200px;
height: 200px;
margin-right:20px;
  }
  @media screen and (max-width:360px){
    width: 150px;
height: 150px;
margin-right:25px;
   }
`;