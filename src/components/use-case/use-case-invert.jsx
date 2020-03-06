import React from "react";

import "./use-case.css";

const UseCaseInvert = (props)=>{
    const {title,  image} = props;
    return(
        
        <div className="use-case-component-container">
             <div className="use-case-component-main">
               <h2>{title}</h2>
               <p>{props.children}</p>
           </div>
           <div className="use-case-component-image">
              <img src={image}/>
           </div>
          
        </div>
      
    )
}

export default UseCaseInvert;