import React, { Component } from "react";
import "./signIn.css";
import firebase from "../../utils/firebase";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { provider, provider2 } from "../../utils/firebase";

import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    var tag = "no error";
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(async function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        tag = "error";
        console.log(errorCode, errorMessage);

        await store.addNotification({
          title: "",
          width: 250,
          message: errorMessage,
          type: "warning", // 'default', 'success', 'info', 'warning'
          container: "top-left", // where to position the notifications
          animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
          dismiss: {
            duration: 3000
          }
        });
        // ...
      });
    if (tag === "no error") {
      this.setState({
        email: "",
        password: ""
      });
      await store.addNotification({
        title: "",
        width: 250,
        message: "Sign in successful",
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-left", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      this.props.history.push("/login");
    }
  };

  handleGoogle = async event => {
    event.preventDefault();
    var tag = "no error";
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
      //  var token = result.credential.accessToken;
        // The signed-in user info.
       // var user = result.user;
        // ...
      })
      .catch(async function(error) {
        // Handle Errors here.
        tag = "error";
       // var errorCode = error.code;
        var errorMessage = error.message;
        await store.addNotification({
          title: "",
          width: 250,
          message: errorMessage,
          type: "warning", // 'default', 'success', 'info', 'warning'
          container: "top-left", // where to position the notifications
          animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
          dismiss: {
            duration: 3000
          }
        });
        // The email of the user's account used.
       // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
       // var credential = error.credential;
        // ...
      });
    if (tag === "no error") {
      this.setState({
        email: "",
        password: ""
      });
      await store.addNotification({
        title: "",
        width: 250,
        message: "Sign in successful",
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-left", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      this.props.history.push("/");
    }
  };

  handleFacebook = async event => {
    event.preventDefault();
    var tag = "no error";
    await firebase
      .auth()
      .signInWithPopup(provider2)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
       // var token = result.credential.accessToken;
        // The signed-in user info.
       // var user = result.user;
        // ...
      })
      .catch(async function(error) {
        // Handle Errors here.
        tag = "error";
      //  var errorCode = error.code;
        var errorMessage = error.message;
        await store.addNotification({
          title: "",
          width: 250,
          message: errorMessage,
          type: "warning", // 'default', 'success', 'info', 'warning'
          container: "top-left", // where to position the notifications
          animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
          dismiss: {
            duration: 3000
          }
        });
        // The email of the user's account used.
       // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
       // var credential = error.credential;
        // ...
      });
    if (tag === "no error") {
      this.setState({
        email: "",
        password: ""
      });
      await store.addNotification({
        title: "",
        width: 250,
        message: "Sign in successful",
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-left", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <form className="form-container">
        <h3 className="header-signIn">Login</h3>

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

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/password"><a href="#" id="forgot-password-link">password?</a></Link>
        </p>
        <div className="google-et-facebook">
          <button
            className="loginBtn loginBtn--facebook"
            onClick={this.handleFacebook}
          >
            Login with Facebook
          </button>

          <button
            className="loginBtn loginBtn--google"
            onClick={this.handleGoogle}
          >
            Login with Google
          </button>
        </div>
        <p className="sign-in-option">
          don't have an account? <Link to="./signup" id="sign-up-link">Sign up</Link>
        </p>
        <p className="home-button-container">
          <Link to="/">
            <button className="btn btn-success home-button btn-block">
              Home
            </button>
          </Link>
        </p>
      </form>
    );
  }
}
export default withRouter(Login);
