import React from "react";

import Header from "../../components/header/header";
import Firstpage from "../../components/firstpage/firstpage";

import "./homePage.css";

const HomePage = ({ user }) => (
  <React.Fragment>
    <Firstpage />
    <Header user={user} />
  </React.Fragment>
);

export default HomePage;
