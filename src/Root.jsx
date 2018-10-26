import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";
import Subscribed from "./Subscribed.jsx";
import Me from "./Me.jsx";
import ProductSingle from "./ProductSingle.jsx";
import Category from "./Category.jsx";

const currentTheme = {
  primaryColour: "#4842b7",
  backgroundColour: "#f9f9f9",
  borderColour: "rgba(0, 0, 0, 0.1)"
};

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
  background: ${currentTheme.backgroundColour};
  width: 100%;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <RootContent>
          <Nav />
          <RouteContainer>
            <Route exact path="/" component={Home} />
            <Route exact path="/subscribed" component={Subscribed} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/product/:id" component={ProductSingle} />
            <Route exact path="/category/:name" component={Category} />
          </RouteContainer>
        </RootContent>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
