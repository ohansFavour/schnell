import React from "react";
import Password from "../../components/password/password";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./passwordPage.css";

const PasswordPage=()=>{
    return(
        <div className="password-page-container">
         <Password/>
        </div>
    );
}

export default PasswordPage;