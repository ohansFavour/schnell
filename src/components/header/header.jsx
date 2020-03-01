import React from "react";
import Logo from "../../accessories/logo.jpg";
import firebase from "../../utils/firebase";
import { withRouter } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

import {
  StyledHeaderContainer,
  StyledOptionsContainer,
  StyledSpanOption,
  StyledLinkOption,
  StyledAnchorLink,
  StyledHeaderImage,
  StyledLogoAndName,
  StyledBrandName,
  StyledMoreOptions,
  StyledHamburger,
  StyledNavLink
} from "./styled-header";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hideOrShowHambugerDropDown: "nav"
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };

  displayMobileMenu = user => {
    return (
      <ul className="hamburgerDropDown">
        <li className="nav-link">
          <StyledNavLink to="/company">Company</StyledNavLink>
        </li>
        <li className="nav-link">
          <StyledNavLink to="/useCases">Use Cases</StyledNavLink>
        </li>
        <li className="nav-link">
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </li>
        <li className="nav-link">
          {user ? (
            <StyledNavLink to="/">Sign Out</StyledNavLink>
          ) : (
            <StyledNavLink to="/login">Login</StyledNavLink>
          )}
        </li>
      </ul>
    );
  };
  handleSignOut = async event => {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(
        async function() {
          // Sign-out successful.

          await store.addNotification({
            title: "",
            width: 250,
            message: "Sign out successful",
            type: "info", // 'default', 'success', 'info', 'warning'
            container: "top-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
          this.props.history.push("/");
        }.bind(this)
      )
      .catch(
        async function(error) {
          // An error happened.
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
          this.handleError();
        }.bind(this)
      );
  };
  handleError = () => {
    this.props.history.push("/");
  };
  handleHome = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <StyledHeaderContainer>
        <StyledLogoAndName onClick={this.handleHome}>
          <StyledHeaderImage alt="Schnell Logo" src={Logo} />
          <StyledBrandName>Schnell</StyledBrandName>
        </StyledLogoAndName>

        <StyledOptionsContainer>
          {this.state.open ? this.displayMobileMenu(this.props.user) : null}
          <StyledHamburger>{this.displayHamburgerMenu()}</StyledHamburger>
          <StyledMoreOptions>
            <StyledSpanOption>
              <StyledAnchorLink to="/company">Company</StyledAnchorLink>
            </StyledSpanOption>
            <StyledSpanOption>
              <StyledAnchorLink to="/useCases">Use Cases</StyledAnchorLink>
            </StyledSpanOption>

            <StyledSpanOption>
              <StyledAnchorLink to="/contact">Contact</StyledAnchorLink>
            </StyledSpanOption>
          </StyledMoreOptions>
          <span>
            {this.props.user ? (
              <StyledLinkOption onClick={this.handleSignOut} to="/">
                Sign Out
              </StyledLinkOption>
            ) : (
              <StyledLinkOption to="/login">Login</StyledLinkOption>
            )}
          </span>
        </StyledOptionsContainer>
      </StyledHeaderContainer>
    );
  }
}

export default withRouter(Header);
