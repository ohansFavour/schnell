import React from "react";

import {StyledUseContainer, StyledUseCase, StyledImage} from "../styled-components/styled-use-case";


const Product = ()=>{
    return(
        <StyledUseContainer>
            
            <StyledUseCase>
                <StyledImage/>
                <h3>LoRaWAN</h3>
            </StyledUseCase>
        </StyledUseContainer>
    )
}

export const Product;