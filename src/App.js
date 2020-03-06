import React from "react";
import firebase from "./utils/firebase";
import ReactNotifications from "react-notifications-component";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faAt,
  faPhone,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";


import { setCurrentUser } from "./redux/actions";
import HomePage from "./pages/homePage/homePage";
import UseCasePage from "./pages/use-cases-page/use-cases-pages";
import Login from "./pages/signInPage/signInPage";
import SignUp from "./pages/signUpPage/signUpPage";
import Password from "./pages/passwordPage/passwordPage";
import CompanyPage from "./pages/companyPage/companyPage";
import ContactUsPage from "./pages/contactPage/contactPage";

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

import "./App.css";
import { selectCurrentUser } from "./redux/selectors";

class App extends React.Component {

  unSubscribe= null;
  
  componentDidMount = () => {
    this.unSubscribe = firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          // User is signed in.
          this.props.setCurrentUser(user);
          // console.log(this.state);
        } else {
          // User is signed out.
          this.props.setCurrentUser(null);
        }
      }.bind(this)
    );
  };
  componentWillUnmount =()=>{
    this.unSubscribe();
  }
  render() {
    library.add(faEnvelope, faKey, faAt, faPhone, faAddressBook);
    const currentUser  = this.props.currentUser;
    return (
      <React.Fragment>
        <ReactNotifications />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage {...props} user={currentUser} />}
          />
          <Route
            exact
            path="/useCases"
            render={props => <UseCasePage {...props} user={currentUser} />}
          />
          <Route
            exact
            path="/company"
            render={props => <CompanyPage {...props} user={currentUser} />}
          />
          <Route
            exact
            path="/contact"
            render={props => <ContactUsPage {...props} user={currentUser} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/password" component={Password} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
 


const mapStateToProps = state=>({
  currentUser: selectCurrentUser(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
