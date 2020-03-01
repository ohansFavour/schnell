import React, { Component } from "react";
import "./password.css";
import firebase from "../../utils/firebase";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

import {store }from "react-notifications-component";
import "animate.css";
import 'react-notifications-component/dist/theme.css';

class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email} = this.state;
    var tag = "no error";
    var auth= firebase.auth();

   await  auth.sendPasswordResetEmail(email).then(async function() {
        // Email sent.
        await store.addNotification({
            title: "",
            width: 250,
            message: "Password reset email sent",
            type: "info", // 'default', 'success', 'info', 'warning'
            container: "top-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
      }).catch(async function(error) {
        // An error happened.
        tag="error";
        await store.addNotification({
            title: "",
            width: 250,
            message: error.message,
            type: "warning", // 'default', 'success', 'info', 'warning'
            container: "top-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
      });

      if(tag==="no error"){
          this.setState({
              email: ""
          });
          this.props.history.push("/login");
      }
   
  };

  
  render() {
    return (
      <form className="form-container-password">
        <h3 className="header-password">Forgot password?</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-primary btn-block"
        >
          Reset Password
        </button>
        
        <p className="home-button-container">
          <Link to="/">
          <button
          className="btn btn-success home-button btn-block"
          >
         Home
        </button></Link></p>
      </form>
    );
  }
}
export default withRouter(Password);
