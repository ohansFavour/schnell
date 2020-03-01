import React from "react";

import Header from "../../components/header/header";
import Firstpage from "../../components/firstpage/firstpage";



import "./homePage.css";

const HomePage = ({user})=>(
    <React.Fragment>
    <div className="first-view">
      <Header user={user}/>
     <div className="show"><Firstpage/></div> 
    </div>
    
   
</React.Fragment>
)

export default HomePage



