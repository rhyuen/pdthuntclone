import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorPage from "./ErrorPage.jsx";
import axios from "axios";
import styled from "styled-components";
import LoadingPage from "./LoadingPage.jsx";
import Card from "./Card.jsx";
import ListItem from "./ProductListItem.jsx";

const StyledPdtSingle = styled.section`
  background: lavender;
`;

const SingleCard = styled.section`
  margin-top: 1vw;
  padding: 1vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.backgroundColour};
`;

const SingleHeader = styled.section`
  display: flex;
  margin-bottom: 2vw;
`;
const SingleContent = styled.section`
  display: flex;
`;
const SingleMain = styled.section`
  margin: 1vw;
  box-sizing: border-box;
  width: 70%;
`;
const SingleSide = styled.aside`
  box-sizing: border-box;
  margin: 1vw;
  width: 30%;
`;

const devApiRootUrl = "http://localhost:9873/product";

class ProductSingle extends Component {
  state = {
    data: {},
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    axios
      .get(`${devApiRootUrl}/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          return {
            ...prevState,
            data: res.data,
            isLoading: false
          };
        });
      })
      .catch(e => {
        console.log(e);
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
    const {
      category,
      count,
      summaryDescription,
      fullDescription,
      name
    } = this.state.data;
    return (
      <StyledPdtSingle>
        {this.state.isLoading ? <LoadingPage /> : null}
        {this.state.isError ? <ErrorPage /> : null}
        <SingleCard>
          <SingleHeader>
            Name: {name}
            <br />
            Cateogry: {category}
            <br />
            Summary: {summaryDescription}
          </SingleHeader>
          <SingleContent>
            <SingleMain>
              <Card header="Main header">
                <strong>Main part</strong>
              </Card>
              <Card header="header">
                <p>{fullDescription}</p>
              </Card>
            </SingleMain>
            <SingleSide>
              side
              <p>{count}</p>
              <p>
                Adding a list of suggestions as well as click outside to return
                to home.
              </p>
            </SingleSide>
          </SingleContent>
        </SingleCard>
      </StyledPdtSingle>
    );
  }
}

ProductSingle.propTypes = {};

export default ProductSingle;
