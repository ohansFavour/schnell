import React from "react";

import {StyledUseCase, StyledImage, StyledHeader} from "../styled-components/styled-use-cases";


const UseCase = ({title, image})=>{
    return(
        
            <StyledUseCase>
                <StyledImage src={image}/>
                <StyledHeader>{title}</StyledHeader>
            </StyledUseCase>
      
    )
}

export default UseCase;