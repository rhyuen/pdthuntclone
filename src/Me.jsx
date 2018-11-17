import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Me extends Component {
  state = {
    data: "data is here"
  };

  componentDidMount() {
    const url = "http://localhost:9873/me";
    axios.get(url, { withCredentials: true }).then(res => {
      console.log(res.data);
      this.setState({ data: res.data.message });
    });
  }

  render() {
    return (
      <section>
        hi
        <div>another: {document.cookie.split(";")}</div>
        <div>ME: {document.cookie.split(";")}</div>
        <div>Cookies: {document.cookie}</div>
        <div>{this.state.data}</div>
      </section>
    );
  }
}

export default Me;
