import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import Subscribed from "./Subscribed.jsx";
import Me from "./Me.jsx";
import ProductSingle from "./ProductSingle.jsx";
// import Personal from "./Personal.jsx";

const RootContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const RouteContainer = styled.div`
  position: relative;
  top: 5vh;
  background: lavender;
  width: 100%;
`;
const Root = () => {
  return (
    <Router>
      <RootContent>
        <Nav />
        <RouteContainer>
          <Route exact path="/" component={App} />
          <Route exact path="/subscribed" component={Subscribed} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/product/:id" component={ProductSingle} />
        </RouteContainer>
      </RootContent>
    </Router>
  );
};

export default Root;
