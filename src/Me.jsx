import React, { Component } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import styled from "styled-components";
import { Consumer } from "./Context.jsx";
import getEnv from "./getenv.js";

class Me extends Component {
  state = {
    data: "data is here",
    user: {
      username: "RandomUser978",
      profileImg: ""
    }
  };

  componentDidMount() {
    const url = `${getEnv()}/me`;
    axios.get(url, { withCredentials: true }).then(res => {
      console.log(res.data);
      this.setState({ data: res.data.message });
    });
  }

  render() {
    return (
      <MeSection>
        <Card />
        <Feed>
          <Card>Other Stuff</Card>
        </Feed>
      </MeSection>
    );
  }
}
const Feed = styled.div`
  margin-top: 1vw;
  display: grid;
`;

const MeSection = styled.section`
  margin-top: 1vw;
  display: grid;
  grid-template-column: repeat(12, 1fr);
`;

const UserData = () => {
  return (
    <div>
      <div>another: {document.cookie.split(";")}</div>
      <div>ME: {document.cookie.split(";")}</div>
      <div>Cookies: {document.cookie}</div>
    </div>
  );
};

export default Me;
