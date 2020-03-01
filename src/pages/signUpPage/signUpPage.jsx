import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from "../../components/signUp/signUp";
import "./signUpPage.css";

function SignUpPage() {
    return (
        <div className="sign-up-container">
        <SignUp/>
        </div>
    );
  }
  
  export default SignUpPage;