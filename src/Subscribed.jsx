import React, { Component } from "react";
import doom from "./images/sample.jpg";
import axios from "axios";
import styled from "styled-components";

class Subscribed extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        Subscribed page.
        <img src={doom} alt="doom" />
      </div>
    );
  }
}

export default Subscribed;
