import React, { Component } from "react";
import styled from "styled-components";
import AdPanel from "./AdPanel.jsx";
import HomeMain from "./HomeMain.jsx";

const devApiUrlRoot = "http://localhost:9873";

const Root = styled.div`
  display: flex;
`;

class Home extends Component {
  state = {};

  render() {
    return (
      <Root>
        <HomeMain />
        <AdPanel />
      </Root>
    );
  }
}

export default Home;
