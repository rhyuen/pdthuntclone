import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorPage from "./ErrorPage.jsx";
import axios from "axios";
import styled from "styled-components";
import LoadingPage from "./LoadingPage.jsx";

const StyledPage = styled.div`
  background: lavender;
`;

const devApiRootUrl = "http://localhost:9873";

class Category extends Component {
  state = {
    data: {},
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    axios
      .get(`${devApiRootUrl}/category/${this.props.match.params.name}`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            data: res.data.result,
            isLoading: false
          };
        });
      })
      .catch(e => {
        this.setState(prevState => {
          return {
            ...prevState,
            isLoading: false,
            isError: true
          };
        });
      });
  }
  render() {
    console.log(this.state.data[0]);
    const item = this.state.data[0];

    return (
      <StyledPage>
        {this.state.isLoading ? (
          <LoadingPage />
        ) : (
          <p>
            {item.name}
            {item.summaryDescription}
          </p>
        )}
        {this.state.isError ? <ErrorPage /> : null}
        <section />
        ung
      </StyledPage>
    );
  }
}

Category.PropTypes = {};

export default Category;
