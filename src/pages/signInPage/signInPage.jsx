import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "../../components/signIn/signIn";
import "./signInPage.css";

function SignInPage() {
    return (
        <div className="sign-in-container">
        <Login/>
        </div>
    );
  }
  
  export default SignInPage;